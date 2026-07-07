import { createContext, useState, useEffect, useRef } from "react";

export const TimerContext = createContext();

export function TimerProvider({ children }) {
  const [seconds, setSeconds] = useState(0);
  const [duration, setDuration] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const meditationAudio = useRef(null);
  const bellAudio = useRef(null);

  // STARTING AUDIO
  useEffect(() => {
    meditationAudio.current = new Audio("/sounds/meditation_sound.ogg");
    meditationAudio.current.loop = true;
    meditationAudio.current.volume = 0.4;

    bellAudio.current = new Audio("/sounds/bell.wav");
    bellAudio.current.volume = 0.8;
  }, []);

  // TIMER
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  // END CHECK
  useEffect(() => {
    if (duration !== null && seconds >= duration) {
      setIsRunning(false);
      setSeconds(0);
      setDuration(null);

      meditationAudio.current.pause();
      meditationAudio.current.currentTime = 0;

      bellAudio.current.play().catch(() => {});
    }
  }, [seconds, duration]);

  const startSession = (minutes) => {
    setDuration(minutes * 60);
    setSeconds(0);
    setIsRunning(true);

    bellAudio.current.play().catch(() => {});

    meditationAudio.current.currentTime = 0;
    meditationAudio.current.play().catch(() => {});
  };

  const pauseSession = () => {
    setIsRunning(false);
    meditationAudio.current.pause();
  };

  const resumeSession = () => {
    if (duration !== null) {
      setIsRunning(true);
      meditationAudio.current.play().catch(() => {});
    }
  };

  const endSession = () => {
    setIsRunning(false);
    setSeconds(0);
    setDuration(null);

    meditationAudio.current.pause();
    meditationAudio.current.currentTime = 0;

    bellAudio.current.play().catch(() => {});
  };

  return (
    <TimerContext.Provider
      value={{
        seconds,
        duration,
        isRunning,
        startSession,
        pauseSession,
        resumeSession,
        endSession,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
}
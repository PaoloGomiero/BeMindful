import { createContext, useState, useEffect, useRef } from "react";

export const TimerContext = createContext();

export function TimerProvider({ children }) {
  const [seconds, setSeconds] = useState(0);
  const [duration, setDuration] = useState(null);

  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const [enableBackground, setEnableBackground] = useState(true);
  const [enableBell, setEnableBell] = useState(true);
  const [volume, setVolumeState] = useState(0.4);

  const meditationAudio = useRef(null);
  const bellAudio = useRef(null);

  useEffect(() => {
    meditationAudio.current = new Audio("/sounds/meditation_sound.ogg");
    meditationAudio.current.loop = true;

    bellAudio.current = new Audio("/sounds/bell.wav");

    meditationAudio.current.volume = volume;
    bellAudio.current.volume = volume;
  }, []);

  useEffect(() => {
    if (meditationAudio.current) {
      meditationAudio.current.volume = volume;
    }

    if (bellAudio.current) {
      bellAudio.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    if (duration !== null && seconds >= duration) {
      setIsRunning(false);
      setIsPaused(false);
      setSeconds(0);
      setDuration(null);

      meditationAudio.current.pause();
      meditationAudio.current.currentTime = 0;

      if (enableBell) {
        bellAudio.current.currentTime = 0;
        bellAudio.current.play().catch(() => {});
      }
    }
  }, [seconds, duration, enableBell]);

  const startSession = (totalSeconds) => {
    setDuration(totalSeconds);
    setSeconds(0);

    setIsRunning(true);
    setIsPaused(false);

    if (enableBell) {
      bellAudio.current.currentTime = 0;
      bellAudio.current.play().catch(() => {});
    }

    if (enableBackground) {
      meditationAudio.current.currentTime = 0;
      meditationAudio.current.play().catch(() => {});
    }
  };

  const pauseSession = () => {
    setIsRunning(false);
    setIsPaused(true);

    meditationAudio.current.pause();
  };

  const resumeSession = () => {
    if (duration !== null && isPaused) {
      setIsRunning(true);
      setIsPaused(false);

      if (enableBackground) {
        meditationAudio.current.play().catch(() => {});
      }
    }
  };

  const endSession = () => {
    setIsRunning(false);
    setIsPaused(false);

    setSeconds(0);
    setDuration(null);

    meditationAudio.current.pause();
    meditationAudio.current.currentTime = 0;

    if (enableBell) {
      bellAudio.current.currentTime = 0;
      bellAudio.current.play().catch(() => {});
    }
  };

  const setVolume = (value) => {
    setVolumeState(value);
  };

  return (
    <TimerContext.Provider
      value={{
        seconds,
        duration,
        isRunning,
        isPaused,

        enableBackground,
        enableBell,

        setEnableBackground,
        setEnableBell,

        volume,
        setVolume,

        startSession,
        pauseSession,
        resumeSession,
        endSession
      }}
    >
      {children}
    </TimerContext.Provider>
  );
}
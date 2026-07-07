import { useContext, useEffect } from "react";
import { TimerContext } from "../context/TimerContext.jsx";

export default function Timer() {
  const { seconds, setSeconds, isRunning } = useContext(TimerContext);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  return <h2>{seconds}s</h2>;
}

import { useContext } from "react";
import { TimerContext } from "../context/TimerContext";

export default function Controls() {
  const { startSession, endSession, isRunning } = useContext(TimerContext);

  return (
    <div style={{ marginTop: "2rem" }}>
      {!isRunning && (
        <>
          <button onClick={() => startSession(5)}>5 min</button>
          <button onClick={() => startSession(10)}>10 min</button>
          <button onClick={() => startSession(15)}>15 min</button>
        </>
      )}

      {isRunning && (
        <button onClick={endSession}>End</button>
      )}
    </div>
  );
}

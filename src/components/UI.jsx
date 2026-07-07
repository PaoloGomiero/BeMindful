import { useContext, useState } from "react";
import { TimerContext } from "../context/TimerContext";
import "./ui.css";

function formatTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function UI() {
  const {
    seconds,
    duration,
    isRunning,
    startSession,
    pauseSession,
    resumeSession,
    endSession,
  } = useContext(TimerContext);

  const [showRemaining, setShowRemaining] = useState(false);

  
  const [showModal, setShowModal] = useState(false);
  const [customMinutes, setCustomMinutes] = useState(0);
  const [customSeconds, setCustomSeconds] = useState(0);

  const remaining = duration ? duration - seconds : 0;

  const startCustom = () => {
    const total = Number(customMinutes) * 60 + Number(customSeconds);

    if (!total || total <= 0) {
      alert("Insert a valid time");
      return;
    }

    startSession(total / 60);
    setShowModal(false);
  };

  return (
    <div className="ui-container">

      <h1 className="app-title">BeMindful</h1>
      <h2 className="app-subtitle">A simple meditation experience</h2>

      <div className="buddha-double-wrapper">
        <img src="/images/Buddha.svg" className="buddha-img" />

        <div
          className={`breathing-circle ${isRunning ? "animate-breath" : ""}`}
          onClick={() => setShowRemaining((p) => !p)}
        >
          <div className="inner-circle"></div>
        </div>

        <img src="/images/Buddha.svg" className="buddha-img" />
      </div>

      <div className="timer">
        {!duration ? (
          <span>Select meditation time</span>
        ) : (
          <span>
            {showRemaining
              ? `Remaining: ${formatTime(Math.max(0, remaining))}`
              : `Elapsed: ${formatTime(seconds)}`}
          </span>
        )}
      </div>

      {/* CONTROLS */}
      <div className="controls">

        {duration === null && (
          <>
            <button className="btn btn-amaranto" onClick={() => startSession(5)}>
              5 min
            </button>

            <button className="btn btn-amaranto" onClick={() => startSession(10)}>
              10 min
            </button>

            <button className="btn btn-amaranto" onClick={() => startSession(15)}>
              15 min
            </button>

            <button className="btn btn-amaranto" onClick={() => setShowModal(true)}>
              Custom time
            </button>
          </>
        )}

        {duration !== null && (
          <>
            {isRunning ? (
              <button className="btn btn-giallo" onClick={pauseSession}>
                Pause
              </button>
            ) : (
              <button className="btn btn-amaranto" onClick={resumeSession}>
                Resume
              </button>
            )}

            <button className="btn btn-giallo" onClick={endSession}>
              End
            </button>
          </>
        )}

      </div>

      {/* MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">

            <h2>Custom time</h2>

            <div className="modal-inputs">

              <div>
                <label>Min</label>
                <input
                  type="number"
                  min="0"
                  value={customMinutes}
                  onChange={(e) => setCustomMinutes(e.target.value)}
                />
              </div>

              <div>
                <label>Sec</label>
                <input
                  type="number"
                  min="0"
                  max="59"
                  value={customSeconds}
                  onChange={(e) => setCustomSeconds(e.target.value)}
                />
              </div>

            </div>

            <div className="modal-buttons">
              <button onClick={startCustom}>Start</button>
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
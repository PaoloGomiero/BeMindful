import { useContext, useState } from "react";
import { TimerContext } from "../context/TimerContext";
import "../components/UI.css";
import { Link } from "react-router-dom";

export default function UI() {
  const {
    seconds,
    isRunning,
    isPaused,
    startSession,
    pauseSession,
    resumeSession,
    endSession
  } = useContext(TimerContext);

  const [showCustom, setShowCustom] = useState(false);
  const [customMin, setCustomMin] = useState("");
  const [customSec, setCustomSec] = useState("");
  const [error, setError] = useState("");

  const handleStart = (minutes) => {
    startSession(minutes * 60);
  };

  const handleCustomStart = () => {
    const total =
      Number(customMin || 0) * 60 +
      Number(customSec || 0);

    if (total <= 0) {
      setError("Please enter a valid time.");
      return;
    }

    setError("");
    startSession(total);
    setShowCustom(false);
    setCustomMin("");
    setCustomSec("");
  };

  const formatTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="page-container">

      <h1 className="app-title">
        BeMindful
      </h1>

      <p className="app-subtitle">
        Find stillness. Return to your breath.
      </p>


      <div className="buddha-double-wrapper">

        <img
          src="/images/Buddha.svg"
          alt="Buddha"
          className="buddha-img"
        />

        <div
          className={`breathing-circle ${
            isRunning ? "animate-breath" : ""
          }`}
        >
          <div className="inner-circle"></div>
        </div>

        <img
          src="/images/Buddha.svg"
          alt="Buddha"
          className="buddha-img"
        />

      </div>


      <div className="timer">
        {(isRunning || isPaused)
          ? formatTime(seconds)
          : "Ready"}
      </div>


      {!isRunning && !isPaused && (
        <div className="controls">

          <button
            className="btn btn-amaranto"
            onClick={() => handleStart(5)}
          >
            5 min
          </button>

          <button
            className="btn btn-amaranto"
            onClick={() => handleStart(10)}
          >
            10 min
          </button>

          <button
            className="btn btn-amaranto"
            onClick={() => handleStart(15)}
          >
            15 min
          </button>

          <button
            className="btn btn-amaranto"
            onClick={() => {
              setError("");
              setShowCustom(true);
            }}
          >
            Custom
          </button>

        </div>
      )}


      {(isRunning || isPaused) && (
        <div className="controls">

          <button
            className="btn btn-giallo"
            onClick={
              isRunning
                ? pauseSession
                : resumeSession
            }
          >
            {isRunning ? "Pause" : "Resume"}
          </button>


          <button
            className="btn btn-amaranto"
            onClick={endSession}
          >
            End
          </button>

        </div>
      )}



      {!isRunning && !isPaused && showCustom && (

        <div className="modal-overlay">

          <div className="modal">

            <h3>
              Custom Timer
            </h3>


            <div className="modal-inputs">

              <div>
                <label>
                  Minutes
                </label>

                <input
                  type="number"
                  min="0"
                  value={customMin}
                  onChange={(e) =>
                    setCustomMin(e.target.value)
                  }
                />

              </div>


              <div>

                <label>
                  Seconds
                </label>

                <input
                  type="number"
                  min="0"
                  max="59"
                  value={customSec}
                  onChange={(e) =>
                    setCustomSec(e.target.value)
                  }
                />

              </div>

            </div>


            {error && (
              <p
                style={{
                  color: "var(--giallo)",
                  background: "rgba(0,0,0,0.25)",
                  padding: "8px",
                  borderRadius: "8px",
                  marginTop: "10px"
                }}
              >
                {error}
              </p>
            )}


            <div className="modal-buttons">

              <button
                onClick={handleCustomStart}
              >
                Start
              </button>


              <button
                onClick={() =>
                  setShowCustom(false)
                }
              >
                Cancel
              </button>

            </div>

          </div>

        </div>

      )}


      <div style={{ marginTop: "2rem" }}>

        <Link to="/">
          <button className="btn btn-giallo">
            Back
          </button>
        </Link>

      </div>


    </div>
  );
}
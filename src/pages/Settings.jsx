import { useContext } from "react";
import { TimerContext } from "../context/TimerContext";
import { Link } from "react-router-dom";
import "../components/UI.css";

export default function Settings() {
  const {
    volume,
    setVolume,
    enableBackground,
    enableBell,
    setEnableBackground,
    setEnableBell
  } = useContext(TimerContext);

  return (
    <div className="settings-container">
      <h1 className="settings-title">Settings</h1>

      <div className="settings-section">
        <label className="settings-label">Volume</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          className="settings-slider"
        />
      </div>

      <div className="settings-section">
        <label className="settings-label">Background Sound</label>
        <button
          className="btn btn-amaranto"
          onClick={() => setEnableBackground(!enableBackground)}
        >
          {enableBackground ? "On" : "Off"}
        </button>
      </div>

      <div className="settings-section">
        <label className="settings-label">Bell Sound</label>
        <button
          className="btn btn-amaranto"
          onClick={() => setEnableBell(!enableBell)}
        >
          {enableBell ? "On" : "Off"}
        </button>
      </div>

      <Link to="/">
        <button className="btn btn-giallo settings-back">Back to Home</button>
      </Link>
    </div>
  );
}

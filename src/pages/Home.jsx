import { Link } from "react-router-dom";
import "../components/ui.css";

export default function Home() {
  return (
    <div className="home-container">

      <h1 className="home-title">BeMindful</h1>

      <p className="home-subtitle">
        Take a moment for yourself
      </p>

      <p className="home-quote">
        “Meditation is not about escaping reality, but understanding it.”
      </p>

      <div className="home-buttons">

        <Link to="/meditation">
          <button className="btn btn-amaranto">
            Start Meditation
          </button>
        </Link>

        <Link to="/about">
          <button className="btn btn-amaranto">
            About
          </button>
        </Link>

      </div>

    </div>
  );
}
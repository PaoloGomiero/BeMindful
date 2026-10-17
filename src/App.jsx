import { Routes, Route } from "react-router-dom";
import * as Sentry from "@sentry/react";

import Home from "./pages/Home";
import About from "./pages/About";
import UI from "./components/UI.jsx";
import Settings from "./pages/Settings";

function SentryTest() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Sentry production test</h1>
      <p>Questo pulsante invia un evento di prova a Sentry.</p>
      <button
        onClick={() =>
          Sentry.captureException(
            new Error("BeMindful - Production Sentry verification")
          )
        }
      >
        Invia evento a Sentry
      </button>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meditation" element={<UI />} />
      <Route path="/about" element={<About />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/sentry-test" element={<SentryTest />} />
    </Routes>
  );
}
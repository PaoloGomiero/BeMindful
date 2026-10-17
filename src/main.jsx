
import React from "react";
import ReactDOM from "react-dom/client";
import * as Sentry from "@sentry/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { TimerProvider } from "./context/TimerContext.jsx";

Sentry.init({
  dsn: "https://e8b1a61400aa6f198e2bb78b60489de4@o4512266026418176.ingest.de.sentry.io/4512266045751376",
  environment: import.meta.env.MODE,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <TimerProvider>
        <App />
      </TimerProvider>
    </BrowserRouter>
  </React.StrictMode>
);

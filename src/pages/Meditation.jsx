import Timer from "../components/Timer.jsx";
import Controls from "../components/Controls.jsx";

export default function Meditation() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f5f5",
        padding: "2rem",
      }}
    >
      <h1 style={{ marginBottom: "2rem", fontSize: "2rem", color: "#333" }}>
        Sessione di meditazione
      </h1>

      <div
        style={{
          background: "white",
          padding: "2rem 3rem",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <Timer />
        <Controls />
      </div>
    </div>
  );
}

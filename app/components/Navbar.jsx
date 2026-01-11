"use client";

export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        background: "rgba(0,0,0,0.8)",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <strong style={{ color: "#f5c542", fontSize: "20px" }}>
        JSH Dispatch
      </strong>

      <div style={{ display: "flex", gap: "20px" }}>
        <a href="#about" style={{ color: "white" }}>About</a>
        <a href="#services" style={{ color: "white" }}>Services</a>
        <a href="#contact" style={{ color: "white" }}>Contact</a>
      </div>
    </nav>
  );
}

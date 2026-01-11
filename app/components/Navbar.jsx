"use client";

export default function Navbar() {
  return (
<nav
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    background: "rgba(0,0,0,0.85)",
    height: "70px",
    display: "flex",
    alignItems: "center",
    zIndex: 1000,
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      width: "100%",
      padding: "0 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
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

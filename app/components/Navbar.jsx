export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        background: "linear-gradient(90deg, #1a1a1a, #000)",
        borderBottom: "1px solid #2a2a2a",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "18px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            color: "#d4af37",
            letterSpacing: "1px",
          }}
        >
          JSH DISPATCH
        </div>

        <div style={{ display: "flex", gap: "28px", fontSize: "15px" }}>
          <a style={linkStyle} href="#">HOME</a>
          <a style={linkStyle} href="#about">ABOUT</a>
          <a style={linkStyle} href="#services">SERVICES</a>
          <a style={linkStyle} href="#contact">CONTACT</a>
        </div>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "#e6e6e6",
  textDecoration: "none",
  fontWeight: "500",
};

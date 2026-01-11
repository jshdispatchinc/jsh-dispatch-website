export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "70px",
        backgroundColor: "#222",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          height: "100%",
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LOGO */}
        <div
          style={{
            color: "#f5b301",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          JSH Dispatch
        </div>

        {/* LINKS */}
        <div
          style={{
            display: "flex",
            gap: "25px",
            fontSize: "15px",
          }}
        >
          <a href="#about" style={linkStyle}>About</a>
          <a href="#services" style={linkStyle}>Services</a>
          <a href="#contact" style={linkStyle}>Contact</a>
        </div>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};


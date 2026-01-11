import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          backgroundImage: "url('/hero-trucks.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          padding: "80px",
        }}
      >
        <div style={{ maxWidth: "600px", color: "#fff" }}>
          <h1 style={{ fontSize: "48px", color: "#f5c400" }}>
            Trucking Dispatch Services
          </h1>
          <p style={{ fontSize: "18px", margin: "20px 0" }}>
            Reliable dispatch solutions built around owner-operators and small fleets.
          </p>

          <a href="#about">
            <button
              style={{
                background: "#f5c400",
                border: "none",
                padding: "14px 28px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Get Started
            </button>
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "80px", background: "#0f0f0f", color: "#fff" }}>
        <h2 style={{ color: "#f5c400", fontSize: "32px" }}>About JSH Dispatch</h2>
        <p style={{ maxWidth: "700px", marginTop: "20px" }}>
          JSH Dispatch provides professional truck dispatch services for owner-operators
          and small fleets. We work one-on-one with drivers to match lanes, rates,
          and schedules that fit your goals.
        </p>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "80px", background: "#111", color: "#fff" }}>
        <h2 style={{ color: "#f5c400", fontSize: "32px" }}>Our Services</h2>
        <ul style={{ marginTop: "20px", lineHeight: "2" }}>
          <li>Load searching & booking</li>
          <li>Rate negotiation</li>
          <li>Route planning</li>
          <li>Invoice submission</li>
          <li>24/7 dispatcher support</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "80px", background: "#000", color: "#fff" }}>
        <h2 style={{ color: "#f5c400", fontSize: "32px" }}>Contact Us</h2>
        <p style={{ marginTop: "20px" }}>📞 956-615-6572</p>
        <p>📧 JSHdispatchinc@gmail.com</p>
      </section>
    </>
  );
}

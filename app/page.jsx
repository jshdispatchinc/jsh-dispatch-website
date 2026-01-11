export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section
        style={{
          backgroundImage: "url('/hero-trucks.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          color: "white",
          padding: "120px 40px",
        }}
      >
        <h1 style={{ fontSize: "48px", color: "#f5c542" }}>
          Trucking Dispatch Services
        </h1>

        <p style={{ maxWidth: "600px", fontSize: "18px" }}>
          Reliable dispatch solutions built around owner-operators and small
          fleets. We work directly with drivers to maximize rates, miles, and
          efficiency.
        </p>

        <a
          href="#contact"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "12px 24px",
            backgroundColor: "#f5c542",
            color: "black",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Get Started
        </a>
      </section>

      {/* ABOUT SECTION */}
      <section style={{ padding: "80px 40px", backgroundColor: "#111" }}>
        <h2 style={{ color: "#f5c542" }}>About JSH Dispatch</h2>
        <p style={{ maxWidth: "700px" }}>
          JSH Dispatch provides professional truck dispatch services for
          owner-operators and small fleets. We work one-on-one with drivers to
          match lanes, rates, and schedules that fit your goals.
        </p>
      </section>

      {/* SERVICES SECTION */}
      <section style={{ padding: "80px 40px", backgroundColor: "#000" }}>
        <h2 style={{ color: "#f5c542" }}>Our Services</h2>
        <ul>
          <li>Load searching & booking</li>
          <li>Rate negotiation</li>
          <li>Route planning</li>
          <li>Invoice submission</li>
          <li>24/7 dispatcher support</li>
        </ul>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        style={{ padding: "80px 40px", backgroundColor: "#111" }}
      >
        <h2 style={{ color: "#f5c542" }}>Contact Us</h2>
        <p>📞 956-615-6572</p>
        <p>📧 JSHdispatchinc@gmail.com</p>
      </section>
    </main>
  );
}

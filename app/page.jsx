export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section
        style={{
          minHeight: "100vh",
          backgroundImage: "url('/hero-trucks.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          display: "flex",
          alignItems: "center",
          padding: "80px"
        }}
      >
        <div>
          <h1 style={{ fontSize: "48px", color: "#f5c542" }}>
            Trucking Dispatch Services
          </h1>
          <p style={{ maxWidth: "600px", fontSize: "18px" }}>
            Reliable dispatch solutions built around owner-operators and small fleets.
            We maximize rates, miles, and efficiency.
          </p>

          <a href="#contact">
            <button
              style={{
                marginTop: "20px",
                padding: "14px 28px",
                backgroundColor: "#f5c542",
                border: "none",
                fontSize: "16px",
                cursor: "pointer"
              }}
            >
              Get Started
            </button>
          </a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section style={{ padding: "80px", background: "#111", color: "white" }}>
        <h2>About JSH Dispatch</h2>
        <p style={{ maxWidth: "800px" }}>
          JSH Dispatch provides professional truck dispatch services for
          owner-operators and small fleets. We work one-on-one with drivers
          to match lanes, rates, and schedules that fit your goals.
        </p>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "80px", background: "#000", color: "white" }}>
        <h2>Our Services</h2>
        <ul>
          <li>Load searching & booking</li>
          <li>Rate negotiation</li>
          <li>Route planning</li>
          <li>Invoice submission</li>
          <li>24/7 dispatcher support</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{ padding: "80px", background: "#111", color: "white" }}
      >
        <h2>Contact Us</h2>
        <p>📞 956-615-6572</p>
        <p>📧 JSHdispatchinc@gmail.com</p>
      </section>
    </main>
  );
}

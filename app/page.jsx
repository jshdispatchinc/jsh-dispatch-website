import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main style={{ marginTop: "90px" }}>
        {/* HERO */}
        <section
          style={{
            height: "90vh",
            backgroundImage: "url('/hero-trucks.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            padding: "40px",
            color: "white",
          }}
        >
          <div style={{ maxWidth: "600px" }}>
            <h1 style={{ fontSize: "48px", color: "#f5c542" }}>
              Trucking Dispatch Services
            </h1>
            <p>
              Reliable dispatch solutions for owner-operators and small fleets.
            </p>
            <a
              href="#contact"
              style={{
                display: "inline-block",
                marginTop: "20px",
                padding: "12px 20px",
                background: "#f5c542",
                color: "#000",
                textDecoration: "none",
              }}
            >
              Get Started
            </a>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" style={{ padding: "60px 40px" }}>
          <h2>About JSH Dispatch</h2>
          <p>
            JSH Dispatch provides professional truck dispatch services for
            owner-operators and small fleets.
          </p>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          style={{ padding: "60px 40px", background: "#f4f4f4" }}
        >
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
        <section id="contact" style={{ padding: "60px 40px" }}>
          <h2>Contact Us</h2>
          <p>📞 956-615-6572</p>
          <p>📧 JSHdispatchinc@gmail.com</p>

          <form
            style={{
              maxWidth: "400px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            <input placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" rows="4" required />
            <button
              type="submit"
              style={{
                padding: "10px",
                background: "#f5c542",
                border: "none",
                cursor: "pointer",
              }}
            >
              Send Message
            </button>
          </form>
        </section>
      </main>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/19566156572"
        target="_blank"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#25D366",
          color: "white",
          padding: "14px 18px",
          borderRadius: "50%",
          fontSize: "20px",
          textDecoration: "none",
        }}
      >
        💬
      </a>
    </>
  );
}

import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main style={{ marginTop: "90px" }}>
        {/* HERO */}
 <section
  id="about"
  style={{
    padding: "80px 20px",
    borderTop: "1px solid rgba(201,162,77,0.3)",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "40px",
      alignItems: "center",
    }}
  >
    <div>
      <h2 style={{ color: "#c9a24d" }}>ABOUT US</h2>
      <p>
        JSH Dispatch Inc has over 10 years of experience in the trucking industry.
        We work closely with owner-operators and small fleets to deliver
        personalized dispatch services.
      </p>

      <a
        href="#contact"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "12px 26px",
          border: "1px solid #c9a24d",
          color: "#c9a24d",
          textDecoration: "none",
        }}
      >
        GET STARTED / Carrier Intake
      </a>
    </div>

    <img
      src="/hero-trucks.png"
      alt="Truck"
      style={{ width: "100%", borderRadius: "6px" }}
    />
  </div>
</section>
<footer
  style={{
    padding: "50px 20px",
    backgroundColor: "#0b0b0b",
    borderTop: "1px solid rgba(201,162,77,0.3)",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "30px",
    }}
  >
    <div>
      <h4 style={{ color: "#c9a24d" }}>RESOURCES</h4>
      <p>Dispatch Agreement</p>
      <p>Fee Addendum</p>
      <p>Terms of Service</p>
    </div>

    <div>
      <h4 style={{ color: "#c9a24d" }}>CONTACT</h4>
      <p>📞 956-615-6572</p>
      <p>📧 jshdispatchinc@gmail.com</p>
    </div>
  </div>
</footer>
        <section style={{ padding: "80px 20px" }}>
  <h2
    style={{
      textAlign: "center",
      color: "#c9a24d",
      letterSpacing: "2px",
      marginBottom: "50px",
    }}
  >
    WHAT WE OFFER
  </h2>

  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "25px",
    }}
  >
    {[
      "Find & Book Loads",
      "Negotiate Best Rates",
      "Route Planning",
      "Roadside Assistance",
      "Invoice & Factoring",
      "24/7 Dispatch Support",
    ].map((item) => (
      <div
        key={item}
        style={{
          padding: "30px",
          border: "1px solid rgba(201,162,77,0.4)",
          background: "linear-gradient(145deg, #1a1208, #0f0f0f)",
          textAlign: "center",
          boxShadow: "0 0 20px rgba(0,0,0,0.6)",
        }}
      >
        <h3 style={{ color: "#c9a24d" }}>{item}</h3>
      </div>
    ))}
  </div>
</section>
        <section
  style={{
    backgroundImage: "url('/hero-trucks.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "120px 20px",
    borderBottom: "1px solid rgba(201,162,77,0.3)",
  }}
>
  <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
    <h1
      style={{
        fontSize: "52px",
        color: "#c9a24d",
        textTransform: "uppercase",
        letterSpacing: "2px",
        marginBottom: "20px",
      }}
    >
      Trucking Dispatch Services
    </h1>

    <p style={{ maxWidth: "600px", fontSize: "18px", marginBottom: "30px" }}>
      Reliable dispatch solutions built around owner-operators and small fleets.
      We maximize rates, miles, and efficiency.
    </p>

    <a
      href="#contact"
      style={{
        padding: "14px 28px",
        backgroundColor: "#c9a24d",
        color: "#000",
        fontWeight: "bold",
        textDecoration: "none",
        borderRadius: "4px",
        boxShadow: "0 0 15px rgba(201,162,77,0.6)",
      }}
    >
      GET STARTED
    </a>
  </div>
</section>
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

export default function Home() {
  return (
    <main style={{ backgroundColor: "#0b0b0b", color: "#f5f5f5" }}>

      {/* HERO SECTION */}
      <section
        style={{
          backgroundImage: "url('/hero-trucks.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "140px 60px",
          textAlign: "left"
        }}
      >
        <h1 style={{ fontSize: "64px", color: "#d4af37", marginBottom: "20px" }}>
          Trucking Dispatch Services
        </h1>
        <p style={{ maxWidth: "700px", fontSize: "18px", lineHeight: "1.6" }}>
          Reliable dispatch solutions built around owner-operators and small fleets.
          We work directly with drivers to maximize rates, remember lanes, and efficiency.
        </p>

        <button
          style={{
            marginTop: "30px",
            padding: "14px 30px",
            fontSize: "16px",
            backgroundColor: "#d4af37",
            border: "none",
            cursor: "pointer"
          }}
        >
          Get Started
        </button>
      </section>

      {/* WHAT WE OFFER */}
      <section style={{ padding: "80px 60px" }}>
        <h2 style={{ color: "#d4af37", fontSize: "36px", marginBottom: "40px" }}>
          What We Offer
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px"
          }}
        >
          {[
            "Find & Book Loads",
            "Negotiate Best Rates",
            "Route Planning",
            "Roadside Assistance Help",
            "Invoice & Factoring Submission",
            "24/7 Dispatch Support"
          ].map((item) => (
            <div
              key={item}
              style={{
                border: "1px solid #d4af37",
                padding: "30px",
                textAlign: "center"
              }}
            >
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT US */}
      <section style={{ padding: "80px 60px", backgroundColor: "#111" }}>
        <h2 style={{ color: "#d4af37", fontSize: "36px", marginBottom: "20px" }}>
          About Us
        </h2>
        <p style={{ maxWidth: "800px", lineHeight: "1.7" }}>
          JSH Dispatch Inc has over 10 years of experience in the trucking industry.
          We work closely with owner-operators and small fleets to provide personalized
          dispatch services based on how and where you want to run.
        </p>

        <button
          style={{
            marginTop: "30px",
            padding: "14px 30px",
            backgroundColor: "#d4af37",
            border: "none",
            cursor: "pointer"
          }}
        >
          Carrier Intake
        </button>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "60px",
          borderTop: "1px solid #333",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "40px"
        }}
      >
        <div>
          <h3 style={{ color: "#d4af37" }}>Resources</h3>
          <ul>
            <li>Dispatch Service Agreement</li>
            <li>Fee Addendum</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        <div>
          <h3 style={{ color: "#d4af37" }}>Contact</h3>
          <p>📞 956-615-6572</p>
          <p>📧 jshdispatchinc@gmail.com</p>
        </div>
      </footer>
    </main>
  );
}
 Force redeploy

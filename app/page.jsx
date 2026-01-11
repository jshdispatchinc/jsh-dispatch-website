export default function Home() {
  return (
    <main style={{ backgroundColor: "#0b0b0b", color: "#f5f5f5" }}>

      {/* HERO SECTION */}
      <section
        style={{
          backgroundImage: "url('/hero-trucks.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "140px 40px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "64px", color: "#d4af37", marginBottom: "20px" }}>
          Trucking Dispatch Services
        </h1>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            fontSize: "18px",
            lineHeight: "1.6",
          }}
        >
          Professional dispatch solutions built for owner-operators and small
          fleets. We help you secure better lanes, higher rates, and consistent
          work.
        </p>

        <button
          style={{
            marginTop: "30px",
            padding: "14px 34px",
            backgroundColor: "#d4af37",
            color: "#000",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          GET STARTED
        </button>
      </section>

      {/* ABOUT SECTION */}
      <section style={{ padding: "80px 40px", backgroundColor: "#111" }}>
        <h2 style={{ color: "#d4af37", fontSize: "36px" }}>
          About JSH Dispatch
        </h2>

        <p
          style={{
            maxWidth: "800px",
            marginTop: "20px",
            lineHeight: "1.7",
            fontSize: "17px",
          }}
        >
          JSH Dispatch provides professional truck dispatch services for
          owner-operators and small fleets. We work one-on-one with drivers to
          match lanes, rates, and schedules that fit your goals.
        </p>
      </section>

      {/* SERVICES SECTION */}
      <section style={{ padding: "80px 40px", backgroundColor: "#0b0b0b" }}>
        <h2 style={{ color: "#d4af37", fontSize: "36px" }}>
          What We Offer
        </h2>

        <ul
          style={{
            marginTop: "30px",
            lineHeight: "2",
            fontSize: "17px",
          }}
        >
          <li>Load searching & booking</li>
          <li>Rate negotiation</li>
          <li>Route planning</li>
          <li>Invoice submission</li>
          <li>24/7 dispatcher support</li>
        </ul>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "60px 40px",
          backgroundColor: "#000",
          borderTop: "1px solid #222",
        }}
      >
        <p>📞 956-615-6572</p>
        <p>📧 jshdispatchinc@gmail.com</p>
        <p style={{ marginTop: "10px", fontSize: "14px", color: "#777" }}>
          © {new Date().getFullYear()} JSH Dispatch Inc
        </p>
      </footer>

    </main>
  );
}

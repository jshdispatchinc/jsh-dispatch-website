export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section
        className="hero"
        style={{
          backgroundImage: "url('/hero-trucks.png')",
        }}
      >
        <div className="container">
          <h1
            style={{
              fontSize: "64px",
              color: "#d4af37",
              marginBottom: "20px",
            }}
          >
            Trucking Dispatch Services
          </h1>

          <p
            style={{
              maxWidth: "600px",
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
              padding: "14px 32px",
              backgroundColor: "#d4af37",
              color: "#000",
              fontSize: "16px",
              fontWeight: "bold",
              borderRadius: "4px",
            }}
          >
            GET STARTED
          </button>
        </div>
      </section>
    </main>
  );
}

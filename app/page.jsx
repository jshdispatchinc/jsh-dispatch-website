"use client";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/hero-trucks.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.65)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          color: "#f5d27a",
          padding: "80px 40px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>
          Trucking Dispatch Services
        </h1>

        <p style={{ marginTop: "20px", fontSize: "18px", color: "#e5e5e5" }}>
          Reliable dispatch solutions built around owner-operators and small
          fleets. We work directly with drivers to maximize rates, miles, and
          efficiency.
        </p>

        <button
          style={{
            marginTop: "30px",
            padding: "14px 28px",
            fontSize: "16px",
            backgroundColor: "#d4af37",
            color: "#000",
            border: "none",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
      </div>
    </main>
  );
}

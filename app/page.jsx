"use client";

import Image from "next/image";

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
          padding: "80px 40px",
        }}
      >
        <h1 style={{ color: "#f5c542", fontSize: "48px" }}>
          Trucking Dispatch Services
        </h1>

        <p style={{ maxWidth: "600px", fontSize: "18px" }}>
          Reliable dispatch solutions built around owner-operators and small
          fleets. We work directly with drivers to maximize rates, miles, and
          efficiency.
        </p>

        <button
          onClick={() =>
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" })
          }
          style={{
            marginTop: "20px",
            padding: "12px 24px",
            backgroundColor: "#f5c542",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Get Started
        </button>
      </section>

      {/* ABOUT */}
      <section style={{ padding: "60px 40px" }}>
        <h2>About JSH Dispatch</h2>
        <p>
          JSH Dispatch provides professional truck dispatch services for
          owner-operators and small fleets. We work one-on-one with drivers to
          match lanes, rates, and schedules that fit your goals.
        </p>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "60px 40px", background: "#f5f5f5" }}>
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
      </section>
    </main>
  );
}

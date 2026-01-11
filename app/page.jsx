export default function Home() {
  return (
    <>
      <nav className="navbar">
        <h2>JSH Dispatch</h2>
        <div>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <h1>Trucking Dispatch Services</h1>
        <p>
          Reliable dispatch solutions for owner-operators and small fleets.
          We negotiate better rates, plan routes, and keep you moving.
        </p>
        <a href="#" className="button">Get Started</a>
      </section>
    </>
  );
}

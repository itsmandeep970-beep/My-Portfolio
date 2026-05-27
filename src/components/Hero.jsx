import "../styles/Hero.css";

function Hero() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="hero">
      <div className="hero-tag">Available for work</div>

      <h1>
        Full-Stack <br />
        <em>Web</em> & <br />
        <span className="outline">Developer</span>
      </h1>

      <p className="hero-sub">
        I build fast, accessible, and beautifully crafted digital products.
      </p>

      <div className="hero-cta">
        <button type="button" className="btn btn-primary" onClick={() => scrollToSection("services")}>
          View My Work
        </button>
        <button type="button" className="btn btn-ghost" onClick={() => scrollToSection("Contact")}>
          Get In Touch
        </button>
      </div>
    </section>
  );
}

export default Hero;
import '../styles/Services.css';

function Services() {
  return (
    <section id="services">
      <div className="section-wrap">
        <div className="section-label">What I Do</div>
        <h2 className="section-heading">My <span>Services</span></h2>
        <div className="services-grid">
          <div className="service-card fade-up">
            <div className="service-icon">⚡</div>
            <h3>Full Stack Development</h3>
            <p>I build complete web applications using React.js, Node.js, and MongoDB.</p>
          </div>
          <div className="service-card fade-up" style={{ transitionDelay: "0.1s" }}>
            <div className="service-icon">🎨</div>
            <h3>Frontend Development</h3>
            <p>I create responsive and modern UI using HTML, CSS, JavaScript, and React.</p>
          </div>
          <div className="service-card fade-up" style={{ transitionDelay: "0.2s" }}>
            <div className="service-icon">🔧</div>
            <h3>Backend Development</h3>
            <p>I develop APIs and server-side logic using Node.js and MongoDB.</p>
          </div>
          <div className="service-card fade-up" style={{ transitionDelay: "0.3s" }}>
            <div className="service-icon">🛡️</div>
            <h3>Website Maintenance</h3>
            <p>I provide support, bug fixing, and improvements for existing websites.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

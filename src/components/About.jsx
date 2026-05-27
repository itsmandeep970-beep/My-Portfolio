
import myImage from '../assets/Photo.png';
import "../styles/About.css";



function About() {
  return (
    <section id="about-preview">

       


      <div className="section-wrap">
        <div className="about-grid fade-up">

          <div className="about-img-wrap">
            <div className="about-img-placeholder">
              <img src={myImage} alt="Mandeep" />
            </div>
            <div className="about-accent-box"></div>
          </div>

          <div className="about-text">
            <div className="section-label">About Me</div>
            <h2 className="section-heading">Hello <span>!</span></h2>

            <p>
              I am a passionate BCA student and aspiring Full Stack JavaScript Developer
              from Haryana. I am currently developing my skills in modern web technologies
                     including React.js, Node.js, and MongoDB.
            </p>
            <p>
              I enjoy creating responsive, user-friendly websites and continuously learning
              new technologies to improve my development skills.
            </p>

            <div className="info-grid">
              <div className="info-item"><span className="info-key">Name:</span><span className="info-val">Mandeep</span></div>
              <div className="info-item"><span className="info-key">Age:</span><span className="info-val">23 Years</span></div>
              <div className="info-item"><span className="info-key">Experience:</span><span className="info-val">One Year</span></div>
              <div className="info-item"><span className="info-key">Country:</span><span className="info-val">India</span></div>
              <div className="info-item"><span className="info-key">Location:</span><span className="info-val">Faridabad, Haryana</span></div>
              <div className="info-item"><span className="info-key">Email:</span><span className="info-val">itsmandeep970@gmail.com</span></div>
              <div className="info-item"><span className="info-key">Phone:</span><span className="info-val"><a href="tel:+919355263697">+91 9355263697</a></span></div>
              <div className="info-item"><span className="info-key">Freelance:</span><span className="info-val">Available</span></div>
            </div>

            <div className="about-btns">
              <a href="/public/Resume .pdf" className="btn btn-primary">Download Resume</a>
              <a href="tel:+919355263697" className="btn btn-outline">Contact Me</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;

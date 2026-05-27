import '../styles/Resume.css';

function Resume() {
  return (
    <section id="resume">
      <div className="section-wrap">
        <div className="section-label">My Background</div>
        <h2 className="section-heading">Resume</h2>

        <div className="resume-grid fade-up">
          <div>
            <div className="timeline-title">
              <div className="icon">🎓</div>
              <h3>Education</h3>
            </div>
            <div className="timeline">
              <div className="timeline-item">
                <h4>Bachelor of Computer Applications (BCA)</h4>
                <div className="date">2024 – Present</div>
                <p>Currently pursuing BCA and developing skills in Full Stack JavaScript Development.</p>
              </div>
              <div className="timeline-item">
                <h4>Higher Secondary (12th)</h4>
                <div className="date">Completed</div>
                <p>Completed 12th (Commerce with Mathematics) from Haryana Board.</p>
              </div>
              <div className="timeline-item">
                <h4>Secondary (10th)</h4>
                <div className="date">Completed</div>
                <p>Successfully completed 10th class from Haryana Board.</p>
              </div>
            </div>
          </div>

          <div>
            <div className="timeline-title">
              <div className="icon">💼</div>
              <h3>Experience</h3>
            </div>
            <div className="timeline">
              <div className="timeline-item">
                <h4>Full Stack Developer (Fresher)</h4>
                <div className="date">2025 – Present</div>
                <p>Building personal and academic projects using the MERN stack.</p>
              </div>
              <div className="timeline-item">
                <h4>Frontend Projects</h4>
                <div className="date">2024 – Present</div>
                <p>Developed multiple responsive web apps with React.</p>
              </div>
              <div className="timeline-item">
                <h4>Open Source Contributions</h4>
                <div className="date">Ongoing</div>
                <p>Learning and contributing to open source JavaScript projects.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;

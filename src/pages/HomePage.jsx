import "./HomePage.css";
import "../index.css";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <>
      <div className="HomePage">
        <div className="hero-section">
          <h1 className="hero-title">Find Your Perfect Team</h1>
          <p className="hero-subtitle">
            Connect with developers, designers, and visionaries. Build something
            amazing at your next hackathon.
          </p>
        </div>

        <div className="search-wrapper">
          <div className="filter-container">
            <button className="filter-chip active">All Skills</button>
            <button className="filter-chip">Frontend</button>
            <button className="filter-chip">Backend</button>
            <button className="filter-chip">Full Stack</button>
            <button className="filter-chip">Design</button>
            <button className="filter-chip">AI/ML</button>
            <button className="filter-chip">DevOps</button>
            <button className="filter-chip">Mobile</button>
            <button className="filter-chip">Data Science</button>
          </div>
        </div>

        <div className="profiles-container">
          <div className="results-info">Showing 7 of 7 members</div>

          <div className="profiles-grid">
            <div className="profile-card">
              <div className="profile-header">
                <div className="avatar">AC</div>
                <div className="profile-info">
                  <div className="profile-name">Alex Chen, 28</div>
                  <div className="profile-meta">
                    <span className="badge">👤 Solo</span>
                  </div>
                </div>
              </div>
              <div className="skills-list">
                <span className="skill-tag">Frontend</span>
                <span className="skill-tag">Backend</span>
                <span className="skill-tag">Full Stack</span>
              </div>
              <div className="profile-bio">
                Full-stack developer with 5+ years experience. Passionate about
                scalable architecture and mentoring junior developers.
              </div>
              <Link to="/profile-details?id=1" className="action-btn">
                View Profile
              </Link>
            </div>

            <div className="profile-card">
              <div className="profile-header">
                <div className="avatar team-avatar">👥</div>
                <div className="profile-info">
                  <div className="profile-name">Team Innovators</div>
                  <div className="profile-meta">
                    <span className="badge">👥 Team</span>
                  </div>
                </div>
              </div>
              
              <div className="skills-list">
                <span className="skill-tag">AI/ML</span>
                <span className="skill-tag">Design</span>
                <span className="skill-tag">Frontend</span>
              </div>
              <div className="profile-bio">
                A dynamic team of 3 engineers working on AI-powered healthcare
                solutions.
              </div>
              <Link to="/profile-details?id=2" className="action-btn">
                View Profile
              </Link>
            </div>

            <div className="profile-card">
              <div className="profile-header">
                <div className="avatar">SK</div>
                <div className="profile-info">
                  <div className="profile-name">Sarah Kim, 24</div>
                  <div className="profile-meta">
                    <span className="badge">👤 Solo</span>
                  </div>
                </div>
              </div>
              <div className="skills-list">
                <span className="skill-tag">Design</span>
                <span className="skill-tag">Frontend</span>
                <span className="skill-tag">Mobile</span>
              </div>
              <div className="profile-bio">
                Product designer obsessed with user experience and creative
                problem-solving.
              </div>
              <Link to="/profile-details?id=3" className="action-btn">
                View Profile
              </Link>
            </div>
            <div className="profile-card">
              <div className="profile-header">
                <div className="avatar">JL</div>
                <div className="profile-info">
                  <div className="profile-name">Jordan Lee, 26</div>
                  <div className="profile-meta">
                    <span className="badge">👤 Solo</span>
                  </div>
                </div>
              </div>
              <div className="skills-list">
                <span className="skill-tag">Backend</span>
                <span className="skill-tag">DevOps</span>
                <span className="skill-tag">Full Stack</span>
              </div>
              <div className="profile-bio">
                Backend specialist with expertise in Node.js and Python. Love
                building scalable systems.
              </div>
              <Link to="/profile-details?id=4" className="action-btn">
                View Profile
              </Link>
            </div>

            <div className="profile-card">
              <div className="profile-header">
                <div className="avatar team-avatar">👥</div>
                <div className="profile-info">
                  <div className="profile-name">Creative Squad</div>
                  <div className="profile-meta">
                    <span className="badge">👥 Team</span>
                  </div>
                </div>
              </div>
              <div className="skills-list">
                <span className="skill-tag">Design</span>
                <span className="skill-tag">Frontend</span>
                <span className="skill-tag">AI/ML</span>
              </div>
              <div className="profile-bio">
                Interdisciplinary team combining design thinking with data
                analytics.
              </div>
              <Link to="/profile-details?id=5" className="action-btn">
                View Profile
              </Link>
            </div>

            <div className="profile-card">
              <div className="profile-header">
                <div className="avatar">MR</div>
                <div className="profile-info">
                  <div className="profile-name">Maria Rodriguez, 25</div>
                  <div className="profile-meta">
                    <span className="badge">👤 Solo</span>
                  </div>
                </div>
              </div>
              <div className="skills-list">
                <span className="skill-tag">Data Science</span>
                <span className="skill-tag">Backend</span>
                <span className="skill-tag">AI/ML</span>
              </div>
              <div className="profile-bio">
                Data scientist passionate about machine learning and building
                predictive models.
              </div>
              <Link to="/profile-details?id=6" className="action-btn">
                View Profile
              </Link>
            </div>

            <div className="profile-card">
              <div className="profile-header">
                <div className="avatar">TP</div>
                <div className="profile-info">
                  <div className="profile-name">Tom Park, 27</div>
                  <div className="profile-meta">
                    <span className="badge">👤 Solo</span>
                  </div>
                </div>
              </div>
              <div className="skills-list">
                <span className="skill-tag">Mobile</span>
                <span className="skill-tag">Frontend</span>
                <span className="skill-tag">Full Stack</span>
              </div>
              <div className="profile-bio">
                Mobile app developer with expertise in React Native and Flutter.
              </div>
              <Link to="/profile-details?id=7" className="action-btn">
                View Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

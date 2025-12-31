import "./ProfileDetails.css"


export function ProfileDetails(){
    return(
        <>
        <div className="profile-detail-container">


  
        <div className="profile-hero">
            <div className="profile-avatar-large">AC</div>
            <h1 className="profile-name-large">Alex Chen</h1>
            <span className="profile-type-badge">👤 Solo</span>
        </div>


        <div className="profile-content">

            <div className="section">
                <h2 className="section-title">About</h2>
                <p className="section-content">
                    Full-stack developer with 5+ years experience. Passionate about scalable architecture and mentoring junior developers. Love building products that solve real problems.
                </p>
            </div>


            <div className="section">
                <h2 className="section-title">Skills</h2>
                <div className="skills-display">
                    <span className="skill-badge-large">Frontend</span>
                    <span className="skill-badge-large">Backend</span>
                    <span className="skill-badge-large">Full Stack</span>
                    <span className="skill-badge-large">React</span>
                    <span className="skill-badge-large">Node.js</span>
                </div>
            </div>

            <div className="section">
                <h2 className="section-title">Interested In Working On</h2>
                <p className="section-content">Web Development, Scalable Systems, Open Source</p>
            </div>

            <div className="section">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-grid">
                    <div className="contact-item">
                        <span className="contact-label">📧 Linkedin</span>
                        <span className="contact-value">
                            <a href="https://www.linkedin.com/in/dharun-karthikeyan-s-804b05373/">Linkedin</a>
                        </span>
                    </div>
                    <div className="contact-item">
                        <span className="contact-label">💬 Discord</span>
                        <span className="contact-value">alexchen#1234</span>
                    </div>
                </div>
            </div>


            <div className="action-buttons">
                <button className="btn-primary">✉️ Contact</button>
                <button className="btn-secondary">⭐ Save Profile</button>
            </div>
        </div>
    </div>
        </>

    )
}
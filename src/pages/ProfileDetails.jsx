import "./ProfileDetails.css"
import { useParams } from "react-router";
import { sampleData } from "../data/sampleData";


export function ProfileDetails(){

     const { id } = useParams();
  const user = sampleData[id];
    return(
        <>
        <div className="profile-detail-container">


  
        <div className="profile-hero">
            <div className="profile-avatar-large">{user.name.charAt(0)}</div>
            <h1 className="profile-name-large">{user.name}</h1>
            <span className="profile-type-badge">👤 Solo</span>
        </div>


        <div className="profile-content">

            <div className="section">
                <h2 className="section-title">About</h2>
                <p className="section-content">
                {user.bio}
                 </p>
            </div>


            <div className="section">
                <h2 className="section-title">Skills</h2>
                <div className="skills-display">
                     {user.skills.map((skill) => (
                    <span key={skill} className="skill-badge-large">
                      {skill}
                    </span>
                  ))}
                </div>
            </div>

            <div className="section">
                <h2 className="section-title">Interested In Working On</h2>
                <p className="section-content">
                    {user.interestedIn}
                </p>
            </div>

            <div className="section">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-grid">
                    <div className="contact-item">
                        <span className="contact-label">📧 Linkedin</span>
                        <span className="contact-value">
                            <a href={`https://linkedin.com/in/${user.linkedinId}`}>Linkedin</a>
                        </span>
                    </div>
                    <div className="contact-item">
                        <span className="contact-label">💬 Discord</span>
                        <span className="contact-value">{user.discord}</span>
                    </div>
                </div>
            </div>


            {/* <div className="aaction-buttons">
                <button className="btn-primary">✉️ Contact</button>
                <button className="btn-secondary">⭐ Save Profile</button>
            </div>
            */}
            
        </div>
    </div>
        </>

    )
}
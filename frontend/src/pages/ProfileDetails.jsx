import "./ProfileDetails.css"
import { useParams } from "react-router-dom";
import { getSoloProfileById } from "../data/soloProfiles";
import { getTeamProfileById } from "../data/teamProfiles";

export function ProfileDetails(){
  const { id } = useParams();
  
  const soloUser = getSoloProfileById(id);
  const teamUser = getTeamProfileById(id);
  
  const profile = soloUser || teamUser;
  

  return(
    <>
      <div className="profile-detail-container">
        <div className="profile-hero">

          <div className="profile-avatar-large">
            {profile.name?.charAt(0)}
          </div>
          

          <h1 className="profile-name-large">
            {profile.name}
          </h1>
          
        </div>

        <div className="profile-content">
          <div className="section">
            <h2 className="section-title">About</h2>
            <p className="section-content">
              {profile.bio}
            </p>
          </div>

          <div className="section">
            <h2 className="section-title">Skills</h2>
            <div className="skills-display">
              {profile.skills.map((skill) => (
                <span key={skill} className="skill-badge-large">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="section">
            <h2 className="section-title">Interested In Working On</h2>
            <p className="section-content">
              {profile.interestedIn}
            </p>
          </div>

          {/* Team Members - Only show if team */}
          {profile.type === 'team' && (
            <div className="section">
              <h2 className="section-title">Team Members</h2>
              <ul className="team-members-list">
                <li>{profile.member1Name}</li>
                <li>{profile.member2Name}</li>
                <li>{profile.member3Name}</li>
              </ul>
            </div>
          )}

          <div className="section">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-grid">
              <div className="contact-item">
                <span className="contact-label">📧 LinkedIn</span>
                <span className="contact-value">
                  <a href={`https://linkedin.com/in/${profile.linkedinId}`} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </span>
              </div>
              <div className="contact-item">
                <span className="contact-label">💬 Discord</span>
                <span className="contact-value">{profile.discord}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

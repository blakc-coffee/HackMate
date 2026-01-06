import "./HomePage.css";
import "../index.css";
import { useState } from "react";
import { Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getAllSoloProfiles,getAllUniqueSkills } from "../data/soloProfiles";
import { getMySoloId } from "../data/myProfile";

export function HomePage() {

  const allUsers = getAllSoloProfiles();
  const mySoloId = getMySoloId();
  const otherUsers = allUsers.filter(user => user.id !== mySoloId);

 const allSkills = getAllUniqueSkills();
 const [selectedSkill, setSelectedSkill] = useState(null);

 const filteredUsers = otherUsers.filter(user => 
    !selectedSkill || user.skills.includes(selectedSkill)
  );

  const navigate = useNavigate();
  
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

         <div className="type-selector">
              <label className="type-option active">
                <input type="radio" name="type" value="solo" defaultChecked />
                <div className="type-content">
                  <span>Solo Profiles</span>
                </div>
              </label>
              <label className="type-option">
                <input
                  type="radio"
                  name="type"
                  value="team"
                  onClick={() => navigate("/display-teams")}
                />
                <div className="type-content">
                  <span>Team Profiles</span>
                </div>
              </label>
            </div>

        <div className="search-wrapper">
          <div className="filter-container">
             <button 
              className={`filter-chip ${!selectedSkill ? 'active' : ''}`}
              onClick={() => setSelectedSkill(null)}
            >
              All Skills
            </button>

            {allSkills.map(skill => (
              <button
                key={skill}
                className={`filter-chip ${selectedSkill === skill ? 'active' : ''}`}
                onClick={() => setSelectedSkill(skill)}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        <div className="profiles-container">
          <div className="results-info">
            Showing {filteredUsers.length} of {otherUsers.length} members

          </div>

           <div className="profiles-grid">


         
            {filteredUsers.map((user) => (
              <div className="profile-card" key={user.id}>
                <div className="profile-header">
                  <div className="avatar">{user.name.charAt(0)}</div>
                  <div className="profile-info">
                    <div className="profile-name">{user.name}</div>
                    <div className="profile-meta">
                    </div>
                  </div>
                </div>
                <div className="skills-list">
                  {user.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="profile-bio">{user.bio}</div>
                <Link to={`/profile/${user.id}`} className="action-btn">
                  View Profile
                </Link>
              </div>
            ))}
           


          </div>
        </div>
      </div>
    </>
  );
}

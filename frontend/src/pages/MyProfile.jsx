import {  getMySoloId, getMyTeamId } from "../data/myProfile";
import { getSoloProfileById } from "../data/soloProfiles";
import { getTeamProfileById } from "../data/teamProfiles";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import "./MyProfile.css";
import "./HomePage.css"

export function MyProfile() {



  const [soloProfile, setSoloProfile] = useState(null);
  const [teamProfile, setTeamProfile] = useState(null);


  useEffect(() => {
    async function load() {
      const mySoloId = getMySoloId();
      const myTeamId = getMyTeamId();

      const solo = mySoloId ? await getSoloProfileById(mySoloId) : null;
      const team = myTeamId ? await getTeamProfileById(myTeamId) : null;

      setSoloProfile(solo);
      setTeamProfile(team);
    }

    load();
  }, []);

  return (
    <>
      <div className="my-profile-container">
        <h1>My Profiles</h1>
        <br />

        {/* SOLO PROFILE SECTION */}
        <div className="profile-section">
          <h2>Solo Profile</h2>
          {soloProfile ? (
            <div className="profile-detail-container">
              <div className="profile-hero">
                <div className="profile-avatar-large">
                  {soloProfile.name?.charAt(0)}
                </div>
                <h3>{soloProfile.name}</h3>
                <span className="profile-type-badge">👤 Solo</span>
              </div>

              <div className="profile-content">
                <div className="section">
                  <h4>About</h4>
                  <p>{soloProfile.bio}</p>
                </div>
                <div className="section">
                  <h4>Skills</h4>
                  <div className="skills-display">
                    {soloProfile.skills.map((skill) => (
                      <span key={skill} className="skill-badge-large">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="section">
                  <h4>Contact</h4>
                  <p>💬 {soloProfile.discord}</p>
                </div>
                <Link to="/edit-solo-profile" className="btn-edit">
                Edit Solo Profile
              </Link>
              </div>

              
            </div>
          ) : (
            <div className="empty-state">
              <p>You haven't created a solo profile yet</p><br />
              <Link to="/create-profile" className="btn-edit">
                Create Solo Profile
              </Link>
            </div>
          )}
        </div>

        {/* TEAM PROFILE SECTION */}
        <div className="profile-section">
          <h2>Team Profile</h2>
          {teamProfile ? (
            <div className="profile-detail-container">
              <div className="profile-hero">
                <div className="profile-avatar-large">
                  {teamProfile.name?.charAt(0)}
                </div>
                <h3>{teamProfile.name}</h3>
                <span className="profile-type-badge">🤝 Team</span>
              </div>

              <div className="profile-content">
                <div className="section">
                  <h4>About</h4>
                  <p>{teamProfile.bio}</p>
                </div>
                <div className="section">
                  <h4>Team Members</h4>
                  <ul className="team-members-list">
                    <li>{teamProfile.member1Name}</li>
                    <li>{teamProfile.member2Name}</li>
                    <li>{teamProfile.member3Name}</li>
                  </ul>
                </div>
                <div className="section">
                  <h4>Skills</h4>
                  <div className="skills-display">
                    {teamProfile.skills.map((skill) => (
                      <span key={skill} className="skill-badge-large">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="section">
                  <h4>Contact</h4>
                  <p>💬 {teamProfile.discord}</p>
                </div>
                <Link to="/edit-team-profile" className="btn-edit">
                Edit Team Profile
              </Link>
              </div>

              
            </div>
          ) : (
            <div className="empty-state">
              <p>You haven't created a team profile yet</p><br />
              <Link to="/create-team-profile" className="btn-edit">
                Create Team Profile
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

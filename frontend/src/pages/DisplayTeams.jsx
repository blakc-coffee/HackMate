import "./HomePage.css";
import "../index.css";
import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getAllTeamProfiles } from "../data/teamProfiles";
import { getMyTeamId } from "../data/myProfile";

export function DisplayTeams() {
  const navigate = useNavigate();
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    let isMounted = true;

    async function load() {
      try {
        const allTeams = await getAllTeamProfiles();
        if (!isMounted) return;
        const myTeamId = getMyTeamId();
        const filtered = (allTeams || []).filter(team => team.id !== myTeamId);
        setTeams(filtered);
      } catch (error) {
        console.error("Failed to load team profiles", error);
      }
    }

    load();
    return () => {
      isMounted = false;
    };
  }, []);

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
                <input type="radio" name="type" value="solo" onClick={() => navigate("/")} />
                <div className="type-content">
                  <span>Solo Attendee</span>
                </div>
              </label>
              <label className="type-option">
                <input
                  type="radio"
                  name="type"
                  value="team"
                  defaultChecked
                />
                <div className="type-content">
                  <span>Team</span>
                </div>
              </label>
            </div>

        <div className="search-wrapper">
          {/*<div className="filter-container">
            <button className="filter-chip active">All Skills</button>
            <button className="filter-chip">Frontend</button>
            <button className="filter-chip">Backend</button>
            <button className="filter-chip">Full Stack</button>
            <button className="filter-chip">Design</button>
            <button className="filter-chip">AI/ML</button>
            <button className="filter-chip">DevOps</button>
            <button className="filter-chip">Mobile</button>
            <button className="filter-chip">Data Science</button>
          </div>*/}
        </div>

        <div className="profiles-container">
          <div className="results-info"></div>

           <div className="profiles-grid">

            {teams.map((user) => (
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

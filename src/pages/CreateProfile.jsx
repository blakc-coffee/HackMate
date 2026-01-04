import "./CreateProfile.css";
import { Link } from "react-router";
import { CreateNewProfile } from "../components/CreateNewProfile";
import { addNewProfile } from "../data/sampleData";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function CreateProfile() {
  // CREATE STATE FOR ALL FORM FIELDS
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [skills, setSkills] = useState([]);
  const [interestedIn, setInterestedIn] = useState("");
  const [discord, setDiscord] = useState("");
  const [linkedinId, setLinkedinId] = useState("");

  const navigate = useNavigate();
  return (
    <>
      <div className="form-container">
        <div className="form-header">
          <h1>Create Your Profile</h1>
          <p>Join the community and find your perfect hackathon team</p>
        </div>

        <form className="profile-form">
          <div className="form-section">
            <h2 className="form-section-title">Basic Information</h2>

            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label>Bio *</label>
              <textarea
                name="bio"
                placeholder="Tell us about yourself, your experience, and what you're passionate about..."
                rows="4"
                required
                onChange={(e) => setBio(e.target.value)}
              ></textarea>
              <span className="char-count">
                <span id="charCount">0</span>/250
              </span>
            </div>
          </div>

          <div className="form-section">
            <h2 className="form-section-title">Profile Type *</h2>
            <div className="type-selector">
              <label className="type-option active">
                <input type="radio" name="type" value="solo" defaultChecked />
                <div className="type-content">
                  <span className="type-emoji">👤</span>
                  <span>Solo Attendee</span>
                </div>
              </label>
              <label className="type-option">
                <input
                  type="radio"
                  name="type"
                  value="team"
                  onClick={() => navigate("/create-team-profile")}
                />
                <div className="type-content">
                  <span className="type-emoji">👥</span>
                  <span>Team</span>
                </div>
              </label>
            </div>
          </div>

          <div className="form-section">
            <h2 className="form-section-title">
              Skills * <span className="hint">Select at least 1 (max 5)</span>
            </h2>
            <div className="skills-grid">
              <label className="skill-checkbox">
                <input
                  type="checkbox"
                  checked={skills.includes("Frontend")}
                  onChange={() => {
                    if (skills.includes("Frontend")) {
                      setSkills(skills.filter((s) => s !== "Frontend"));
                    } else {
                      setSkills([...skills, "Frontend"]);
                    }
                  }}
                />
                <span>Frontend</span>
              </label>
              <label className="skill-checkbox">
                <input
                  type="checkbox"
                  checked={skills.includes("Backend")}
                  onChange={() => {
                    if (skills.includes("Backend")) {
                      setSkills(skills.filter((s) => s !== "Backend"));
                    } else {
                      setSkills([...skills, "Backend"]);
                    }
                  }}
                />
                <span>Backend</span>
              </label>
              <label className="skill-checkbox">
                <input
                  type="checkbox"
                  checked={skills.includes("Full Stack")}
                  onChange={() => {
                    if (skills.includes("Full Stack")) {
                      setSkills(skills.filter((s) => s !== "Full Stack"));
                    } else {
                      setSkills([...skills, "Full stack"]);
                    }
                  }}
                />
                <span>Full Stack</span>
              </label>
              <label className="skill-checkbox">
                <input type="checkbox" 
                checked={skills.includes("Design")}
                  onChange={() => {
                    if (skills.includes("Design")) {
                      setSkills(skills.filter((s) => s !== "Design"));
                    } else {
                      setSkills([...skills, "Design"]);
                    }
                  }} />
                <span>Design</span>
              </label>
              <label className="skill-checkbox">
                <input type="checkbox" 
                checked={skills.includes("AI/ML")}
                  onChange={() => {
                    if (skills.includes("AI/ML")) {
                      setSkills(skills.filter((s) => s !== "AI/ML"));
                    } else {
                      setSkills([...skills, "AI/ML"]);
                    }
                  }} />
                <span>AI/ML</span>
              </label>
              <label className="skill-checkbox">
                <input type="checkbox" 
                checked={skills.includes("DevOps")}
                  onChange={() => {
                    if (skills.includes("DevOps")) {
                      setSkills(skills.filter((s) => s !== "DevOps"));
                    } else {
                      setSkills([...skills, "DevOps"]);
                    }
                  }} />
                <span>DevOps</span>
              </label>
              <label className="skill-checkbox">
                <input type="checkbox" checked={skills.includes("Mobile")}
                  onChange={() => {
                    if (skills.includes("Mobile")) {
                      setSkills(skills.filter((s) => s !== "Mobile"));
                    } else {
                      setSkills([...skills, "Mobile"]);
                    }
                  }} />
                <span>Mobile</span>
              </label>
              <label className="skill-checkbox">
                <input type="checkbox" 
                checked={skills.includes("Data Science")}
                  onChange={() => {
                    if (skills.includes("Data Science")) {
                      setSkills(skills.filter((s) => s !== "Data Science"));
                    } else {
                      setSkills([...skills, "FData Science"]);
                    }
                  }} />
                <span>Data Science</span>
              </label>
            </div>
          </div>

          <div className="form-section">
            <h2 className="form-section-title">Interested In Working On</h2>
            <div className="form-group">
              <input
                type="text"
                name="workingOn"
                onChange={(e) => setInterestedIn(e.target.value)}
                placeholder="e.g., Web Development, AI, Mobile Apps"
              />
            </div>
          </div>

          <div className="form-section">
            <h2 className="form-section-title">Contact Information</h2>

            <div className="form-group">
              <label>Discord Handle (Optional)</label>
              <input
                type="text"
                name="discord"
                placeholder="username#0000"
                onChange={(e) => setDiscord(e.target.value)}
              />

              <label>LinkedIn (Optional)</label>
              <input
                type="text"
                name="linkedIn"
                placeholder="username#0000"
                onChange={(e) => setLinkedinId(e.target.value)}
              />
            </div>
          </div>

          <div className="form-actions">
            <Link to="/" className="btn-cancel">
              Cancel
            </Link>
            <button
              type="button"
              onClick={() => {
                addNewProfile({
                  name,
                  bio,
                  skills,
                  interestedIn,
                  discord,
                  linkedinId,
                });
                alert("Profile saved! ✅");
              }}
            >
              Create Profile
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

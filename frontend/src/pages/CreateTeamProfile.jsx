import "./CreateProfile.css";
import { Link } from "react-router";
import { addTeamProfile } from "../data/teamProfiles";
import { setMyTeamId, getMyTeamId } from "../data/myProfile";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export function CreateTeamProfile() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [skills, setSkills] = useState([]);
  const [interestedIn, setInterestedIn] = useState("");
  const [discord, setDiscord] = useState("");
  const [linkedinId, setLinkedinId] = useState("");
  const [member1Name, setMember1Name] = useState("");
  const [member2Name, setMember2Name] = useState("");
  const [member3Name, setMember3Name] = useState("");

  const navigate = useNavigate();

  const handleCreate = async (event) => {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    // ✅ Check if user already has a solo profile
    const existingTeamId = getMyTeamId();
    if (existingTeamId) {
      alert(" You can only create ONE solo profile! Edit your existing one.");
      return;
    }
    // Simple validation
    if (!name?.trim()) {
      alert("Please enter your name");
      return;
    }
    if (!bio?.trim()) {
      alert("Please enter your bio");
      return;
    }
    if (skills.length === 0) {
      alert("Please select at least one skill");
      return;
    }
    const newTeamId = await addTeamProfile({
      name,
      bio,
      skills,
      interestedIn,
      discord,
      linkedinId,
      member1Name,
      member2Name,
      member3Name
    });

    setMyTeamId(newTeamId);

    alert("Profile created! ");
    navigate("/my-profile");
  };

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
              <label>Team Name</label>
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
                <input
                  type="radio"
                  name="type"
                  value="solo"
                  onClick={() => navigate("/create-profile")}
                />
                <div className="type-content">
                  <span className="type-emoji">👤</span>
                  <span>Solo Attendee</span>
                </div>
              </label>
              <label className="type-option">
                <input type="radio" name="type" value="team" defaultChecked />
                <div className="type-content">
                  <span className="type-emoji">👥</span>
                  <span>Team</span>
                </div>
              </label>
            </div>
          </div>

          <div className="form-section">
            <h2 className="form-section-title">Team Member Information</h2>

            <div className="form-group">
              <label>Team Member 1 Name</label>
              <input
                type="text"
                value={member1Name}
                onChange={(e) => setMember1Name(e.target.value)}
                placeholder="First member name"
              />
            </div>

            <div className="form-group">
              <label>Team Member 2 Name</label>
              <input
                type="text"
                value={member2Name}
                onChange={(e) => setMember2Name(e.target.value)}
                placeholder="Second member name"
              />
            </div>

            <div className="form-group">
              <label>Team Member 3 Name</label>
              <input
                type="text"
                value={member3Name}
                onChange={(e) => setMember3Name(e.target.value)}
                placeholder="Third member name"
              />
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
                      setSkills([...skills, "Full Stack"]);
                    }
                  }}
                />
                <span>Full Stack</span>
              </label>
              <label className="skill-checkbox">
                <input
                  type="checkbox"
                  checked={skills.includes("Design")}
                  onChange={() => {
                    if (skills.includes("Design")) {
                      setSkills(skills.filter((s) => s !== "Design"));
                    } else {
                      setSkills([...skills, "Design"]);
                    }
                  }}
                />
                <span>Design</span>
              </label>
              <label className="skill-checkbox">
                <input
                  type="checkbox"
                  checked={skills.includes("AI/ML")}
                  onChange={() => {
                    if (skills.includes("AI/ML")) {
                      setSkills(skills.filter((s) => s !== "AI/ML"));
                    } else {
                      setSkills([...skills, "AI/ML"]);
                    }
                  }}
                />
                <span>AI/ML</span>
              </label>
              <label className="skill-checkbox">
                <input
                  type="checkbox"
                  checked={skills.includes("DevOps")}
                  onChange={() => {
                    if (skills.includes("DevOps")) {
                      setSkills(skills.filter((s) => s !== "DevOps"));
                    } else {
                      setSkills([...skills, "DevOps"]);
                    }
                  }}
                />
                <span>DevOps</span>
              </label>
              <label className="skill-checkbox">
                <input
                  type="checkbox"
                  checked={skills.includes("Mobile")}
                  onChange={() => {
                    if (skills.includes("Mobile")) {
                      setSkills(skills.filter((s) => s !== "Mobile"));
                    } else {
                      setSkills([...skills, "Mobile"]);
                    }
                  }}
                />
                <span>Mobile</span>
              </label>
              <label className="skill-checkbox">
                <input
                  type="checkbox"
                  checked={skills.includes("Data Science")}
                  onChange={() => {
                    if (skills.includes("Data Science")) {
                      setSkills(skills.filter((s) => s !== "Data Science"));
                    } else {
                      setSkills([...skills, "Data Science"]);
                    }
                  }}
                />
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
            <button className="btn-cancel" onClick={handleCreate}>
              Create Profile
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

import "./CreateProfile.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getMyTeamProfile, updateMyTeamProfile } from "../data/teamProfiles";

export function EditTeamProfile() {
  const navigate = useNavigate();

  // ✅ Form states
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [skills, setSkills] = useState([]);
  const [interestedIn, setInterestedIn] = useState("");
  const [discord, setDiscord] = useState("");
  const [linkedinId, setLinkedinId] = useState("");
  const [member1Name, setMember1Name] = useState("");
  const [member2Name, setMember2Name] = useState("");
  const [member3Name, setMember3Name] = useState("");
  const [loading, setLoading] = useState(true);

  // ✅ Load YOUR team profile
  useEffect(() => {
    let isMounted = true;

    async function load() {
      const myTeam = await getMyTeamProfile();
      if (!isMounted) return;

      if (!myTeam) {
        alert("❌ You haven't created a team yet!");
        navigate("/create-team-profile");
        return;
      }

      // ✅ Pre-fill with your data
      setName(myTeam.name || "");
      setBio(myTeam.bio || "");
      setSkills(myTeam.skills || []);
      setInterestedIn(myTeam.interestedIn || "");
      setDiscord(myTeam.discord || "");
      setLinkedinId(myTeam.linkedinId || "");
      setMember1Name(myTeam.member1Name || "");
      setMember2Name(myTeam.member2Name || "");
      setMember3Name(myTeam.member3Name || "");
      setLoading(false);
    }

    load();
    return () => {
      isMounted = false;
    };
  }, []);

  // ✅ Handle skills
  const handleAddSkill = (skill) => {
    if (!skills.includes(skill) && skills.length < 5) {
      setSkills([...skills, skill]);
    }
  };

  const handleRemoveSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  // ✅ Handle update
  const handleUpdate = async () => {
    if (!name?.trim()) {
      alert("Please enter team name");
      return;
    }
    if (!bio?.trim()) {
      alert("Please enter bio");
      return;
    }
    if (skills.length === 0) {
      alert("Please select at least one skill");
      return;
    }
    if (!member1Name?.trim() || !member2Name?.trim() || !member3Name?.trim()) {
      alert("Please enter all 3 member names");
      return;
    }

    // ✅ Update YOUR team profile
    await updateMyTeamProfile({
      name,
      bio,
      skills,
      interestedIn,
      discord,
      linkedinId,
      member1Name,
      member2Name,
      member3Name,
    });

    alert("✅ Team profile updated!");
    navigate("/my-profile");
  };

  if (loading) return <p>Loading your team profile...</p>;

  return (
    <>
      <div className="form-container">
        <div className="form-header">
          <h1>Edit Team Profile</h1>
          <p>Update your team information</p>
        </div>

        <form className="profile-form">
          {/* TEAM NAME */}
          <div className="form-section">
            <h2 className="form-section-title">Basic Information</h2>
            <div className="form-group">
              <label>Team Name *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Team name"
              />
            </div>

            {/* BIO */}
            <div className="form-group">
              <label>Bio *</label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Tell us about your team..."
                rows="4"
              ></textarea>
            </div>
          </div>

          {/* TEAM MEMBERS */}
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

          {/* SKILLS - Pre-selected ✅ */}
          <div className="form-section">
            <h2 className="form-section-title">
              Skills * <span className="hint">Select at least 1 (max 5)</span>
            </h2>
            <div className="skills-grid">
              {[
                "Frontend",
                "Backend",
                "Full Stack",
                "Design",
                "AI/ML",
                "DevOps",
                "Mobile",
                "Data Science",
              ].map((skill) => (
                <label key={skill} className="skill-checkbox">
                  <input
                    type="checkbox"
                    checked={skills.includes(skill)} // ✅ Pre-checked
                    onChange={() => {
                      if (skills.includes(skill)) {
                        handleRemoveSkill(skill);
                      } else {
                        handleAddSkill(skill);
                      }
                    }}
                  />
                  <span>{skill}</span>
                </label>
              ))}
            </div>
          </div>

          {/* INTERESTED IN */}
          <div className="form-section">
            <h2 className="form-section-title">Interested In Working On</h2>
            <div className="form-group">
              <input
                type="text"
                value={interestedIn}
                onChange={(e) => setInterestedIn(e.target.value)}
                placeholder="e.g., Web Development, AI, Mobile Apps"
              />
            </div>
          </div>

          {/* CONTACT */}
          <div className="form-section">
            <h2 className="form-section-title">Contact Information</h2>
            <div className="form-group">
              <label>Discord Handle (Optional)</label>
              <input
                type="text"
                value={discord}
                onChange={(e) => setDiscord(e.target.value)}
                placeholder="username#0000"
              />
              <label>LinkedIn (Optional)</label>
              <input
                type="text"
                value={linkedinId}
                onChange={(e) => setLinkedinId(e.target.value)}
                placeholder="username"
              />
            </div>
          </div>

          {/* BUTTONS */}
          <div className="form-actions">
            <button
              type="button"
              className="btn-cancel"
              onClick={() => navigate("/my-profile")}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn-cancel"
              onClick={handleUpdate}
            >
              Update Team Profile
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

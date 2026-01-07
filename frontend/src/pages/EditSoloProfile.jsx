import "./CreateProfile.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getMyProfile, updateMySoloProfile } from "../data/soloProfiles";

export function EditSoloProfile() {
  const navigate = useNavigate();

  // ✅ Form states
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [skills, setSkills] = useState([]);
  const [interestedIn, setInterestedIn] = useState("");
  const [discord, setDiscord] = useState("");
  const [linkedinId, setLinkedinId] = useState("");
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    let isMounted = true;

    async function load() {
      const myProfile = await getMyProfile();
      if (!isMounted || !myProfile) {
        setLoading(false);
        return;
      }

      // ✅ Pre-fill with your data
      setName(myProfile.name || "");
      setBio(myProfile.bio || "");
      setSkills(myProfile.skills || []);
      setInterestedIn(myProfile.interestedIn || "");
      setDiscord(myProfile.discord || "");
      setLinkedinId(myProfile.linkedinId || "");
      setLoading(false);
    }

    load();
    return () => {
      isMounted = false;
    };
  }, []);

  // ✅ Handle skill selection
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

    // ✅ Update YOUR profile
    await updateMySoloProfile({
      name,
      bio,
      skills,
      interestedIn,
      discord,
      linkedinId,
    });

    alert("✅ Profile updated!");
    navigate("/my-profile");
  };

  if (loading) return <p>Loading your profile...</p>;

  return (
    <>
      <div className="form-container">
        <div className="form-header">
          <h1>Edit Your Profile</h1>
          <p>Update your information</p>
        </div>

        <form className="profile-form">
          {/* NAME */}
          <div className="form-section">
            <h2 className="form-section-title">Basic Information</h2>
            <div className="form-group">
              <label>Name *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
              />
            </div>

            {/* BIO */}
            <div className="form-group">
              <label>Bio *</label>
              <textarea
                placeholder="Tell us about yourself..."
                rows="4"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              ></textarea>
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
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

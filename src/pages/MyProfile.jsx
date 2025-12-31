import "./MyProfile.css";

export function MyProfile() {
  return (
    <>
      <div className="my-profile-container">
        <div className="my-profile-header">
          <h1>My Profiles</h1>
          <p>Manage your hackathon team profiles</p>
        </div>

        <div className="profiles-grid">
          <div className="profile-card">
            <div className="profile-header">
              <div className="avatar">YP</div>
              <div className="profile-info">
                <div className="profile-name">Your Profile Name</div>
                <div className="profile-meta">
                  <span className="badge">👤 Solo</span>
                </div>
              </div>
            </div>
            <div className="skills-list">
              <span className="skill-tag">Frontend</span>
              <span className="skill-tag">React</span>
            </div>
            <div className="profile-bio">
              Your profile description goes here. This is what other
              participants will see about you.
            </div>
            <div className="profile-card-action">
              <button className="btn-edit">✏️ Edit</button>
              <button className="btn-delete">🗑️ Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

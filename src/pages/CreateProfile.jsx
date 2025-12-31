import "./CreateProfile.css"
import { Link  } from "react-router"
export function CreateProfile (){
    return(
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
                    <input type="text" name="name" placeholder="Your full name" required />
                </div>

            

                <div className="form-group">
                    <label>Bio *</label>
                    <textarea name="bio" placeholder="Tell us about yourself, your experience, and what you're passionate about..." rows="4" required></textarea>
                    <span className="char-count"><span id="charCount">0</span>/250</span>
                </div>
            </div>


            <div className="form-section">
                <h2 className="form-section-title">Profile Type *</h2>
                <div className="type-selector">
                    <label className="type-option active">
                        <input type="radio" name="type" value="solo" checked />
                        <div className="type-content">
                            <span className="type-emoji">👤</span>
                            <span>Solo Attendee</span>
                        </div>
                    </label>
                    <label className="type-option">
                        <input type="radio" name="type" value="team" />
                        <div className="type-content">
                            <span className="type-emoji">👥</span>
                            <span>Team</span>
                        </div>
                    </label>
                </div>
            </div>

  
            <div className="form-section">
                <h2 className="form-section-title">Skills * <span className="hint">Select at least 1 (max 5)</span></h2>
                <div className="skills-grid">
                    <label className="skill-checkbox">
                        <input type="checkbox" name="skills" value="Frontend" />
                        <span>Frontend</span>
                    </label>
                    <label className="skill-checkbox">
                        <input type="checkbox" name="skills" value="Backend" />
                        <span>Backend</span>
                    </label>
                    <label className="skill-checkbox">
                        <input type="checkbox" name="skills" value="Full Stack" />
                        <span>Full Stack</span>
                    </label>
                    <label className="skill-checkbox">
                        <input type="checkbox" name="skills" value="Design" />
                        <span>Design</span>
                    </label>
                    <label className="skill-checkbox">
                        <input type="checkbox" name="skills" value="AI/ML" />
                        <span>AI/ML</span>
                    </label>
                    <label className="skill-checkbox">
                        <input type="checkbox" name="skills" value="DevOps" />
                        <span>DevOps</span>
                    </label>
                    <label className="skill-checkbox">
                        <input type="checkbox" name="skills" value="Mobile" />
                        <span>Mobile</span>
                    </label>
                    <label className="skill-checkbox">
                        <input type="checkbox" name="skills" value="Data Science" />
                        <span>Data Science</span>
                    </label>
                </div>
            </div>


            <div className="form-section">
                <h2 className="form-section-title">Interested In Working On</h2>
                <div className="form-group">
                    <input type="text" name="workingOn" placeholder="e.g., Web Development, AI, Mobile Apps" />
                </div>
            </div>


            <div className="form-section">
                <h2 className="form-section-title">Contact Information</h2>
                
                <div className="form-group">
                    <label>Discord Handle (Optional)</label>
                    <input type="text" name="discord" placeholder="username#0000" />
                </div>

               
            </div>

            <div className="form-actions">
                <Link to="/" className="btn-cancel">Cancel</Link>
                <button type="submit" className="btn-submit">Create Profile</button>
            </div>
        </form>
    </div>
        </>
    )
}
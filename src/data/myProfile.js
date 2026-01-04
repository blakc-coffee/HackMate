const defaultMyProfile = {
  id: "my-profile",
  myProfileId: null,  // ✅ ADD THIS - stores YOUR profile ID
  name: "Your Name",
  age: 19,
  type: "solo",
  bio: "First-year CSE student",
  skills: ["React", "JavaScript"],
  interestedIn: "Hackathons, Web Dev",
  discord: "your-discord#0000",
  linkedinId: "your-linkedin"
};

export let myProfile = JSON.parse(
  localStorage.getItem('myProfile') || JSON.stringify(defaultMyProfile)
);

// ✅ NEW: Set your profile ID when you create a solo profile
export function setMyProfileId(profileId) {
  myProfile.myProfileId = profileId;
  localStorage.setItem('myProfile', JSON.stringify(myProfile));
}

export function getMyProfileId() {
  return myProfile.myProfileId;
}

export function updateMyProfile(profile) {
  myProfile = { ...myProfile, ...profile };
  localStorage.setItem('myProfile', JSON.stringify(myProfile));
}

export function getMyProfile() {
  return myProfile;
}

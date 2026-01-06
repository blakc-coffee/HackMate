const defaultMyProfile = {
  id: "my-profile",
  mySoloId: null,
  myTeamProfileId: null, 
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

export function setMySoloId(profileId) {
  myProfile.mySoloId = profileId;
  localStorage.setItem('myProfile', JSON.stringify(myProfile));
}
export function setMyTeamId(teamId) {
  myProfile.myTeamId = teamId;
  localStorage.setItem('myProfile', JSON.stringify(myProfile));
}

export function getMySoloId() {
  return myProfile.mySoloId;
}


export function getMyTeamId() {
  return myProfile.myTeamId;
}

export function updateMyProfile(profile) {
  myProfile = { ...myProfile, ...profile };
  localStorage.setItem('myProfile', JSON.stringify(myProfile));
}

export function getMyProfile() {
  return myProfile;
}

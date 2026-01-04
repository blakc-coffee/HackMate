
const defaultTeamProfiles = {
  "team-1": {
    id: "team-1",
    name: "CodeCrushers",
    type: "team",
    bio: "Building scalable APIs",
    skills: ["Node.js", "Docker", "AWS"],
    interestedIn: "Backend, DevOps",
    
 
    member1Name: "John Smith",
    member2Name: "Emma Johnson",
    member3Name: "Mike Chen",
    
    discord: "codecrushers#3456",
    linkedinId: "codecrushers-team"
  },
  "team-2": {
    id: "team-2",
    name: "PixelPioneers",
    type: "team",
    bio: "Design-focused fintech",
    skills: ["Figma", "React", "JavaScript"],
    interestedIn: "Frontend, Design",
    
    member1Name: "Lisa Wong",
    member2Name: "David Park",
    member3Name: "Sofia Garcia",
    
    discord: "pixelpioneers#7890",
    linkedinId: "pixelpioneers"
  }
};

export let teamProfiles = JSON.parse(
  localStorage.getItem('teamProfiles') || JSON.stringify(defaultTeamProfiles)
);

// Save new team profile
export function addTeamProfile(team) {
  const id = `team-${Date.now()}`;
  teamProfiles[id] = { id, type: 'team', ...team };
  localStorage.setItem('teamProfiles', JSON.stringify(teamProfiles));
  return id;
}

// Get all as array
export function getAllTeamProfiles() {
  return Object.values(teamProfiles);
}

// Get single by ID
export function getTeamProfileById(id) {
  return teamProfiles[id];
}

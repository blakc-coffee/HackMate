const defaultSoloProfiles = {
  "solo-1": {
    id: "solo-1",
    name: "Aditya Seetam",
    age: 22,
    type: "solo",
    bio: "Jobless herbivore",
    skills: ["AI/ML", "Data Science"],
    interestedIn: "Jobs",
    discord: "dark-1410",
    linkedinId: "Aditya"
  },
  "solo-2": {
    id: "solo-2",
    name: "Nili Thayyil",
    age: 23,
    type: "solo",
    bio: "I'm really tall",
    skills: ["Python", "Mobile"],
    interestedIn: "AI/ML",
    discord: "yougurt",
    linkedinId: "Nilli-Thayill"
  },
  "solo-3": {
    id: "solo-3",
    name: "Joahana",
    age: 23,
    type: "solo",
    bio: "ML engineer",
    skills: ["Python", "Backend"],
    interestedIn: "AI/ML",
    discord: "sarah#5678",
    linkedinId: "sarah-patel"
  }
};

export let soloProfiles = JSON.parse(
  localStorage.getItem('soloProfiles') || JSON.stringify(defaultSoloProfiles)
);
export function getAllUniqueSkills() {
  const allSkills = Object.values(soloProfiles).flatMap(user => user.skills || []);
  return [...new Set(allSkills)].sort(); // Unique + sorted
}

// Save new solo profile
export function addSoloProfile(profile) {
  const id = `solo-${Date.now()}`;
  soloProfiles[id] = { id, type: 'solo', ...profile };
  localStorage.setItem('soloProfiles', JSON.stringify(soloProfiles));
  return id;
}

// Get all as array
export function getAllSoloProfiles() {
  return Object.values(soloProfiles);
}

// Get single by ID
export function getSoloProfileById(id) {
  return soloProfiles[id];
}

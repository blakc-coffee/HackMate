const defaultSoloProfiles = {
  "solo-1": {
    id: "solo-1",
    name: "Alex Chen",
    age: 22,
    type: "solo",
    bio: "Full-stack dev looking for team",
    skills: ["React", "Node.js"],
    interestedIn: "Web Dev",
    discord: "alex#1234",
    linkedinId: "alex-chen"
  },
  "solo-2": {
    id: "solo-2",
    name: "Sarah Patel",
    age: 23,
    type: "solo",
    bio: "ML engineer",
    skills: ["Python", "TensorFlow"],
    interestedIn: "AI/ML",
    discord: "sarah#5678",
    linkedinId: "sarah-patel"
  }
};

export let soloProfiles = JSON.parse(
  localStorage.getItem('soloProfiles') || JSON.stringify(defaultSoloProfiles)
);

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

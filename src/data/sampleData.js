const defaultData = {
  "alex-chen-2024": {
    "id": "alex-chen-2024",
    "name": "Alex Chen",
    "age": "28",
    "type": "solo",
    "bio": "Full-stack developer with 5+ years experience.",
    "skills": ["Frontend", "Backend", "Full Stack"],
    "interestedIn": "Web Development, Scalable Systems",
    "discord": "alexchen#1234",
    "linkedinId": "alex-chen-fullstack"
  },
  "sarah-kim-designer": {
    "id": "sarah-kim-designer",
    "name": "Sarah Kim",
    "age": "24",
    "type": "solo",
    "bio": "Product designer obsessed with UX.",
    "skills": ["Design", "Frontend", "Mobile"],
    "interestedIn": "Product Design, UX/UI",
    "discord": "sarahkim#5678",
    "linkedinId": "sarah-kim-ux"
  },
  "jordan-lee-backend": {
    "id": "jordan-lee-backend",
    "name": "Jordan Lee",
    "age": "26",
    "type": "solo",
    "bio": "Backend specialist with Node.js and Python.",
    "skills": ["Backend", "DevOps", "Full Stack"],
    "interestedIn": "Cloud Architecture, DevOps",
    "discord": "jordanlee#9101",
    "linkedinId": "jordan-lee-devops"
  }
};

// Load from localStorage - if nothing there, use default data!
export let sampleData = JSON.parse(
  localStorage.getItem('sampleData') || JSON.stringify(defaultData)
);

// Function to add new profile
export function addNewProfile(newProfile) {
  const id = 'user-' + Date.now();
  sampleData[id] = { id, ...newProfile };
  
  // Save to localStorage - data persists after refresh!
  localStorage.setItem('sampleData', JSON.stringify(sampleData));
}

// Skill options
export const sampleSkills = [
  "Frontend",
  "Backend",
  "Full Stack",
  "Design",
  "AI/ML",
  "DevOps",
  "Mobile",
  "Data Science"
];
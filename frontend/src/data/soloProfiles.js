import { getMySoloId } from "./myProfile";
import {
  createSoloProfile as createSoloProfileInDb,
  getSoloProfile as getSoloProfileFromDb,
  getAllSoloProfilesFromDb,
  updateSoloProfile as updateSoloProfileInDb,
} from "./firebaseProfiles";

// Map Firestore solo profile to the shape used in the UI
function mapSoloFromDb(doc) {
  if (!doc) return null;
  const contact = doc.contact || {};
  return {
    id: doc.id,
    type: "solo",
    name: doc.name,
    bio: doc.bio,
    skills: doc.skills || [],
    interestedIn: doc.interests || "",
    discord: contact.discord || doc.discord || "",
    linkedinId: contact.linkedin || doc.linkedinId || "",
  };
}

export async function getAllUniqueSkills() {
  const all = await getAllSoloProfiles();
  const allSkills = all.flatMap(user => user.skills || []);
  return [...new Set(allSkills)].sort();
}

// Save new solo profile in Firestore
export async function addSoloProfile(profile) {
  const id = `solo-${Date.now()}`;

  await createSoloProfileInDb(id, {
    name: profile.name,
    bio: profile.bio,
    skills: profile.skills || [],
    interests: profile.interestedIn || "",
    contact: {
      discord: profile.discord || "",
      linkedin: profile.linkedinId || "",
    },
  });

  return id;
}

// Get all as array from Firestore
export async function getAllSoloProfiles() {
  const docs = await getAllSoloProfilesFromDb();
  return docs.map(mapSoloFromDb);
}

// Get single by ID from Firestore
export async function getSoloProfileById(id) {
  const doc = await getSoloProfileFromDb(id);
  return mapSoloFromDb(doc);
}

export async function updateMySoloProfile(updatedProfile) {
  const mySoloId = getMySoloId();
  if (!mySoloId) return null;

  await updateSoloProfileInDb(mySoloId, {
    name: updatedProfile.name,
    bio: updatedProfile.bio,
    skills: updatedProfile.skills || [],
    interests: updatedProfile.interestedIn || "",
    contact: {
      discord: updatedProfile.discord || "",
      linkedin: updatedProfile.linkedinId || "",
    },
  });

  const doc = await getSoloProfileFromDb(mySoloId);
  return mapSoloFromDb(doc);
}

export async function getMyProfile() {
  const mySoloId = getMySoloId();
  if (!mySoloId) return null;
  return getSoloProfileById(mySoloId);
}
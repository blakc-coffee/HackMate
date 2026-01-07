import { getMyTeamId } from "./myProfile";
import {
  createTeam as createTeamInDb,
  getTeam as getTeamFromDb,
  getAllTeamsFromDb,
  updateTeam as updateTeamInDb,
} from "./firebaseProfiles";

// Map Firestore team profile to the shape used in the UI
function mapTeamFromDb(doc) {
  if (!doc) return null;
  const contact = doc.contact || {};
  const members = Array.isArray(doc.members) ? doc.members : [];

  return {
    id: doc.id,
    type: "team",
    name: doc.name,
    bio: doc.bio,
    skills: doc.tags || doc.skills || [],
    interestedIn: doc.interests || "",
    member1Name: members[0]?.name || "",
    member2Name: members[1]?.name || "",
    member3Name: members[2]?.name || "",
    discord: contact.discord || doc.discord || "",
    linkedinId: contact.linkedin || doc.linkedinId || "",
  };
}

export async function getAllUniqueSkills() {
  const all = await getAllTeamProfiles();
  const allSkills = all.flatMap(team => team.skills || []);
  return [...new Set(allSkills)].sort();
}

// Save new team profile in Firestore
export async function addTeamProfile(team) {
  const id = `team-${Date.now()}`;

  await createTeamInDb(id, {
    name: team.name,
    bio: team.bio,
    tags: team.skills || [],
    interests: team.interestedIn || "",
    contact: {
      discord: team.discord || "",
      linkedin: team.linkedinId || "",
    },
    members: [
      { uid: `${id}-m1`, name: team.member1Name || "", role: "Member" },
      { uid: `${id}-m2`, name: team.member2Name || "", role: "Member" },
      { uid: `${id}-m3`, name: team.member3Name || "", role: "Member" },
    ],
  });

  return id;
}

// Get all as array from Firestore
export async function getAllTeamProfiles() {
  const docs = await getAllTeamsFromDb();
  return docs.map(mapTeamFromDb);
}

// Get single by ID from Firestore
export async function getTeamProfileById(id) {
  const doc = await getTeamFromDb(id);
  return mapTeamFromDb(doc);
}

export async function updateMyTeamProfile(updatedProfile) {
  const myTeamId = getMyTeamId();
  if (!myTeamId) return null;

  await updateTeamInDb(myTeamId, {
    name: updatedProfile.name,
    bio: updatedProfile.bio,
    tags: updatedProfile.skills || [],
    interests: updatedProfile.interestedIn || "",
    contact: {
      discord: updatedProfile.discord || "",
      linkedin: updatedProfile.linkedinId || "",
    },
    members: [
      { uid: `${myTeamId}-m1`, name: updatedProfile.member1Name || "", role: "Member" },
      { uid: `${myTeamId}-m2`, name: updatedProfile.member2Name || "", role: "Member" },
      { uid: `${myTeamId}-m3`, name: updatedProfile.member3Name || "", role: "Member" },
    ],
  });

  const doc = await getTeamFromDb(myTeamId);
  return mapTeamFromDb(doc);
}

export async function getMyTeamProfile() {
  const myTeamId = getMyTeamId();
  if (!myTeamId) return null;
  return getTeamProfileById(myTeamId);
}

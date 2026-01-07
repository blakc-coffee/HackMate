import { db } from '../firebaseConfig'
import {
  collection,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  addDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore'

// USERS COLLECTION (private-ish account metadata)
// Collection: users
// Document ID: Auth UID
export async function createOrUpdateUserDoc({
  uid,
  email,
  displayName,
  photoURL,
  soloProfileId = null,
  teamId = null,
  isTeamLeader = false,
}) {
  const ref = doc(db, 'users', uid)
  const data = {
    uid,
    email,
    displayName: displayName || '',
    photoURL: photoURL || '',
    soloProfileId,
    teamId,
    isTeamLeader,
    createdAt: new Date().toISOString(),
  }

  await setDoc(ref, data, { merge: true })
  const snap = await getDoc(ref)
  return { id: snap.id, ...snap.data() }
}

export async function getUserDoc(uid) {
  const ref = doc(db, 'users', uid)
  const snap = await getDoc(ref)
  if (!snap.exists()) return null
  return { id: snap.id, ...snap.data() }
}

// SOLO PROFILES (public)
// Collection: solo_profiles
// Document ID: same as Auth UID
export async function createSoloProfile(uid, {
  name,
  bio,
  skills,
  interests,
  contact = {},
}) {
  const profileRef = doc(db, 'solo_profiles', uid)

  const soloProfile = {
    id: uid,
    name,
    bio,
    skills: skills || [],
    interests: interests || '',
    contact: {
      discord: contact.discord || '',
      linkedin: contact.linkedin || '',
      email: contact.email || '',
    },
    status: 'looking',
    lastUpdated: new Date().toISOString(),
  }

  // Create/overwrite solo profile
  await setDoc(profileRef, soloProfile)

  // Link in user doc
  const userRef = doc(db, 'users', uid)
  await setDoc(
    userRef,
    { soloProfileId: uid },
    { merge: true },
  )

  return soloProfile
}

export async function updateSoloProfile(uid, updates) {
  const profileRef = doc(db, 'solo_profiles', uid)
  await updateDoc(profileRef, {
    ...updates,
    lastUpdated: new Date().toISOString(),
  })

  const snap = await getDoc(profileRef)
  return snap.exists() ? { id: snap.id, ...snap.data() } : null
}

export async function getSoloProfile(uid) {
  const ref = doc(db, 'solo_profiles', uid)
  const snap = await getDoc(ref)
  if (!snap.exists()) return null
  return { id: snap.id, ...snap.data() }
}

// Example search: filter solo profiles by a single skill
export async function searchSoloProfilesBySkill(skill) {
  const q = query(
    collection(db, 'solo_profiles'),
    where('skills', 'array-contains', skill),
  )
  const snap = await getDocs(q)
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

// TEAMS (public)
// Collection: teams
export async function createTeam(leaderUid, {
  name,
  bio,
  tags,
  interests,
  contact = {},
  members,
}) {
  const teamDoc = {
    id: leaderUid,
    name,
    bio,
    interests: interests || '',
    tags: tags || [],
    leaderId: leaderUid,
    members: Array.isArray(members) && members.length > 0
      ? members
      : [
        {
          uid: leaderUid,
          name,
          role: 'Leader',
        },
      ],
    contact: {
      discord: contact.discord || '',
      linkedin: contact.linkedin || '',
      email: contact.email || '',
    },
    createdAt: new Date().toISOString(),
  }

  const teamRef = doc(db, 'teams', leaderUid)
  await setDoc(teamRef, teamDoc)

  // Link team in user doc
  const userRef = doc(db, 'users', leaderUid)
  await setDoc(
    userRef,
    { teamId: leaderUid, isTeamLeader: true },
    { merge: true },
  )

  return teamDoc
}

export async function getTeam(teamId) {
  const ref = doc(db, 'teams', teamId)
  const snap = await getDoc(ref)
  if (!snap.exists()) return null
  return { id: snap.id, ...snap.data() }
}

export async function updateTeam(teamId, updates) {
  const ref = doc(db, 'teams', teamId)
  await updateDoc(ref, updates)
  const snap = await getDoc(ref)
  return snap.exists() ? { id: snap.id, ...snap.data() } : null
}

export async function addTeamMember(teamId, { uid, name, role = 'Member' }) {
  const ref = doc(db, 'teams', teamId)
  const snap = await getDoc(ref)
  if (!snap.exists()) return null

  const current = snap.data()
  const members = Array.isArray(current.members) ? current.members : []

  const nextMembers = [
    ...members.filter(m => m.uid !== uid),
    { uid, name, role },
  ]

  await updateDoc(ref, { members: nextMembers })

  const userRef = doc(db, 'users', uid)
  await setDoc(
    userRef,
    { teamId, isTeamLeader: false },
    { merge: true },
  )

  const updatedSnap = await getDoc(ref)
  return { id: updatedSnap.id, ...updatedSnap.data() }
}
 
export async function getAllSoloProfilesFromDb() {
  const snap = await getDocs(collection(db, 'solo_profiles'))
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

export async function getAllTeamsFromDb() {
  const snap = await getDocs(collection(db, 'teams'))
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

// Example search: filter teams by tag
export async function searchTeamsByTag(tag) {
  const q = query(
    collection(db, 'teams'),
    where('tags', 'array-contains', tag),
  )
  const snap = await getDocs(q)
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

import { 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  arrayUnion,
  query, 
  where, 
  getDocs,
} from 'firebase/firestore';
import { db } from '../firebase/config';
import { Collection, SoloProfile, TeamProfile, TeamMember } from '../types';

// Solo Profile Operations
export const createSoloProfile = async (profileData: Omit<SoloProfile, 'id' | 'lastUpdated'>, userId: string) => {
  try {
    const profileRef = doc(collection(db, Collection.SOLO_PROFILES), userId);
    const userRef = doc(db, Collection.USERS, userId);
    
    const newProfile: SoloProfile = {
      ...profileData,
      id: userId,
      lastUpdated: new Date().toISOString(),
      status: 'looking' as const
    };

    // Create profile and update user document in a batch
    await Promise.all([
      setDoc(profileRef, newProfile),
      updateDoc(userRef, { soloProfileId: userId })
    ]);

    return newProfile;
  } catch (error) {
    console.error('Error creating solo profile:', error);
    throw error;
  }
};

export const updateSoloProfile = async (userId: string, updates: Partial<SoloProfile>) => {
  try {
    const profileRef = doc(db, Collection.SOLO_PROFILES, userId);
    const updatedData = {
      ...updates,
      lastUpdated: new Date().toISOString()
    };
    
    await updateDoc(profileRef, updatedData);
    return { ...updates, id: userId };
  } catch (error) {
    console.error('Error updating solo profile:', error);
    throw error;
  }
};

export const getSoloProfile = async (userId: string): Promise<SoloProfile | null> => {
  try {
    const docRef = doc(db, Collection.SOLO_PROFILES, userId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data() as SoloProfile;
    }
    return null;
  } catch (error) {
    console.error('Error getting solo profile:', error);
    throw error;
  }
};

// Team Operations
export const createTeam = async (teamData: Omit<TeamProfile, 'id' | 'createdAt' | 'members'>, userId: string) => {
  try {
    const teamsRef = collection(db, Collection.TEAMS);
    const teamRef = doc(teamsRef);
    const userRef = doc(db, Collection.USERS, userId);
    
    const newTeam: TeamProfile = {
      ...teamData,
      id: teamRef.id,
      leaderId: userId,
      members: [{
        uid: userId,
        name: teamData.name, // This should be the user's display name
        role: 'Leader'
      }],
      createdAt: new Date().toISOString()
    };

    // Create team and update user document in a batch
    await Promise.all([
      setDoc(teamRef, newTeam),
      updateDoc(userRef, { 
        teamId: teamRef.id,
        isTeamLeader: true 
      })
    ]);

    return newTeam;
  } catch (error) {
    console.error('Error creating team:', error);
    throw error;
  }
};

export const getTeam = async (teamId: string): Promise<TeamProfile | null> => {
  try {
    const docRef = doc(db, Collection.TEAMS, teamId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data() as TeamProfile;
    }
    return null;
  } catch (error) {
    console.error('Error getting team:', error);
    throw error;
  }
};

export const addTeamMember = async (teamId: string, member: TeamMember) => {
  try {
    const teamRef = doc(db, Collection.TEAMS, teamId);
    const userRef = doc(db, Collection.USERS, member.uid);
    
    // Add member to team and update user's team reference
    await Promise.all([
      updateDoc(teamRef, {
        members: arrayUnion(member)
      }),
      updateDoc(userRef, {
        teamId: teamId,
        isTeamLeader: false
      })
    ]);
  } catch (error) {
    console.error('Error adding team member:', error);
    throw error;
  }
};

// Search Operations
export const searchSoloProfiles = async (filters: { skills?: string[] } = {}) => {
  try {
    let q = query(collection(db, Collection.SOLO_PROFILES));
    
    // Add filters if provided
    if (filters.skills && filters.skills.length > 0) {
      // For multiple skills, we'd need to use array-contains-any or restructure the query
      // This is a simplified version that searches for the first skill
      q = query(q, where('skills', 'array-contains', filters.skills[0]));
    }
    
    const querySnapshot = await getDocs(q);
    const profiles: SoloProfile[] = [];
    
    querySnapshot.forEach((doc) => {
      profiles.push(doc.data() as SoloProfile);
    });
    
    return profiles;
  } catch (error) {
    console.error('Error searching solo profiles:', error);
    throw error;
  }
};

export const searchTeams = async (filters: { tags?: string[] } = {}) => {
  try {
    let q = query(collection(db, Collection.TEAMS));
    
    // Add filters if provided
    if (filters.tags && filters.tags.length > 0) {
      q = query(q, where('tags', 'array-contains', filters.tags[0]));
    }
    
    const querySnapshot = await getDocs(q);
    const teams: TeamProfile[] = [];
    
    querySnapshot.forEach((doc) => {
      teams.push(doc.data() as TeamProfile);
    });
    
    return teams;
  } catch (error) {
    console.error('Error searching teams:', error);
    throw error;
  }
};

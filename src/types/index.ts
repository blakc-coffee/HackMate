// Shared Types
export type SocialLinks = {
  discord?: string;
  linkedin?: string;
  email?: string;
};

// User (Private)
export interface UserData {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  createdAt: string;
  soloProfileId?: string | null;
  teamId?: string | null;
  isTeamLeader?: boolean;
}

// Solo Profile (Public)
export interface SoloProfile {
  id: string; // matches auth uid
  name: string;
  bio: string;
  skills: string[];
  interests: string;
  contact: SocialLinks;
  status: 'looking' | 'joined_team';
  lastUpdated: string;
}

// Team Member
export interface TeamMember {
  uid: string;
  name: string;
  role?: string;
}

// Team Profile (Public)
export interface TeamProfile {
  id: string;
  name: string;
  bio: string;
  tags: string[];
  leaderId: string;
  members: TeamMember[];
  contact: SocialLinks;
  createdAt: string;
}

// Collection Names
export enum Collection {
  USERS = 'users',
  SOLO_PROFILES = 'solo_profiles',
  TEAMS = 'teams'
}

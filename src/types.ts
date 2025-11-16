export type Level = "Beginner" | "Intermediate" | "Advanced";

export interface Instructor {
  id: string;
  name: string;
  avatar?: string;
  bio: string;
}

export interface Tutorial {
  id: string;
  instructorId: string;
  title: string;
  description: string;
  level: Level;
  tags?: string[];
}

export interface Episode {
  id: string;
  tutorialId: string;
  title: string;
  videoUrl: string;
  description: string;
  summary: string;
  duration: string; // e.g. "12:34"
  free?: boolean;
  number: number;
}

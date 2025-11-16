import type { Tutorial } from "../types";

export const tutorials: Tutorial[] = [
  {
    id: "tut-1",
    instructorId: "dev-1",
    title: "Modern React Patterns",
    description:
      "A practical series about hooks, context, and component design.",
    level: "Intermediate",
    tags: ["react", "hooks", "patterns"],
  },
  {
    id: "tut-2",
    instructorId: "dev-2",
    title: "Building REST APIs with Node",
    description: "From routing to authentication and testing.",
    level: "Beginner",
    tags: ["node", "api", "express"],
  },
  {
    id: "tut-3",
    instructorId: "dev-1",
    title: "MERN Stack Overview",
    description: "An introduction to the MERN stack and its components.",
    level: "Intermediate",
    tags: ["mern", "mongodb", "express", "react", "node"],
  },
];

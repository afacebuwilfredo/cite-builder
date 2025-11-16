import type { Episode } from "../types";

export const episodes: Episode[] = [
  // Episodes for tut-1
  {
    id: "e-1",
    tutorialId: "tut-1",
    title: "Intro & Setup",
    videoUrl:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    description: "Overview of the series and project setup.",
    summary: "We scaffold the project and outline what we'll build.",
    duration: "08:32",
    free: true,
    number: 1,
  },
  {
    id: "e-2",
    tutorialId: "tut-1",
    title: "Custom Hooks Best Practices",
    videoUrl:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    description: "How to extract logic into reusable hooks.",
    summary: "We write `useFetch` and `useLocalStorage` examples.",
    duration: "14:10",
    free: false,
    number: 2,
  },
  // Episodes for tut-2
  {
    id: "e-3",
    tutorialId: "tut-2",
    title: "Routing & Basic Endpoints",
    videoUrl:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    description: "Create routes and simple CRUD endpoints.",
    summary: "A basic Express app with in-memory data.",
    duration: "10:05",
    free: true,
    number: 1,
  },
];

import type { Episode } from "../types";

export const episodes: Episode[] = [
  // Episodes for tut-1
  {
    id: "e-1",
    tutorialId: "tut-1",
    title: "Introduction to Cite Builder",
    videoUrl:
      "https://storage.googleapis.com/loveme-assets/cite-builder-tutorial%20/into%20to%20cite%20builder.mp4",
    description: "Overview to Cite Builde",
    summary: "Get a quick overview of Cite Builder, your all-in-one platform for building and managing websites. Learn what the tool does and how it helps both beginners and experienced users streamline their workflow.",
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
    free: true,
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

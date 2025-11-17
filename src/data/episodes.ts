import type { Episode } from "../types";

export const episodes: Episode[] = [
  // Episodes for tut-1
  {
    id: "e-1",
    tutorialId: "tut-1",
    title: "Introduction to Cite Builder",
    videoUrl: 
      "https://storage.googleapis.com/loveme-assets/cite-builder-tutorial/cite-builder.mp4",
    description: "Your website, your way—no limits, no hassle.",
    summary: "Build smarter. Manage faster. Publish effortlessly.",
    duration: "0:18",
    free: true,
    number: 1,
  },
  {
    id: "e-2",
    tutorialId: "tut-1",
    title: "What Is Cite Builder?",
    videoUrl:
      "https://storage.googleapis.com/loveme-assets/cite-builder-tutorial/introduction-to-cite-builder.mp4",
    description: "Cite Builder’s quick overview",
    summary: "Get a quick overview of Cite Builder, your all-in-one platform for building and managing websites. Learn what the tool does and how it helps both beginners and experienced users streamline their workflow.",
    duration: "0:20",
    free: true,
    number: 2,
  },
  {
    id: "e-3",
    tutorialId: "tut-1",
    title: "Logging In to Your Dashboard",
    videoUrl: "",
    description: "Logging Cite Builder Dashboard",
    summary: "Watch how to access the Cite Builder dashboard. You’ll see the login process step-by-step and learn what happens once you sign in. Perfect for first-time users.",
    duration: "0:20",
    free: true,
    number: 3,
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

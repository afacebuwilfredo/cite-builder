import type { Episode } from "../types";

export const episodes: Episode[] = [
  // Episodes for tut-1
  {
    id: "e-1",
    tutorialId: "tut-1",
    title: "Introduction to Cite Builder",
    videoUrl: 
      "https://storage.googleapis.com/loveme-assets/cite-builder-tutorial/cite-builder.mp4",
    description: "Your website, your way, no limits, no hassle.",
    summary: "Build smarter. Manage faster. Publish effortlessly.",
    duration: "0:18",
    free: false,
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
    free: false,
    number: 2,
  },
  {
    id: "e-3",
    tutorialId: "tut-1",
    title: "Logging In to Your Dashboard",
    videoUrl: "https://storage.googleapis.com/loveme-assets/cite-builder-tutorial/Login.mp4",
    description: "Logging Cite Builder Dashboard",
    summary: "Watch how to access the Cite Builder dashboard. You’ll see the login process step-by-step and learn what happens once you sign in. Perfect for first-time users.",
    duration: "0:15",
    free: false,
    number: 3,
  },
  {
    id: "e-4",
    tutorialId: "tut-1",
    title: "Website Manager Dashboard",
    videoUrl: "https://storage.googleapis.com/loveme-assets/cite-builder-tutorial/website-manager.mp4",
    description: "Exploring Your Website Manager Dashboard",
    summary: "Take a tour of the dashboard—the command center for all your websites. Learn where to find your tools, how to navigate between sites, and how to start managing your content.",
    duration: "1:25",
    free: false,
    number: 4,
  },
  {
    id: "e-5",
    tutorialId: "tut-1",
    title: "Adding a New Page",
    videoUrl: "https://storage.googleapis.com/loveme-assets/cite-builder-tutorial/add%20page.mp4",
    description: "Adding a New Page",
    summary: "Learn how to create a brand-new page from scratch. This part walks you through clicking “Add Page,” entering details, and saving your new page so it appears instantly in your site structure.",
    duration: "3:34",
    free: false,
    number: 5,
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
    free: false,
    number: 1,
  },
];

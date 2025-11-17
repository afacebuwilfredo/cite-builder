import type { Tutorial } from "../types";

export const tutorials: Tutorial[] = [
  {
    id: "tut-1",
    instructorId: "dev-1",
    title: "Introduction to Cite Builder",
    description:
      `This video provides a complete walkthrough of Cite Builder, an all-in-one platform designed to simplify website creation and management for users of all experience levels. The tutorial starts with a friendly introduction to what Cite Builder is and what it can do, highlighting its core features such as secure login, site management, page creation, and an easy-to-use editing experience. \n
      Viewers are guided step-by-step through the login process and shown how to access the Website Manager Dashboard, which acts as the central hub for managing multiple websites. From there, the video demonstrates how to navigate to the Website Pages section, where users can view, generate, and edit pages within their site. \n
      The tutorial also covers how to create a brand-new page using the “Add Page” feature, including filling out page details and saving it to the live site structure. Additionally, it explains how to edit existing pages using Cite Builder’s visual editor, allowing users to update content, adjust layout, replace images, and more with just a few clicks.\n
      The video wraps up with a short recap and encourages users to visit the support page if they need help or have questions.\n
      Overall, the tutorial gives users everything they need to confidently log in, navigate, build, and manage their website using Cite Builder.`,
    level: "Beginner",
    tags: ["Cite Builder", "Website Managment", "Introduction"],
  },
  {
    id: "tut-2",
    instructorId: "dev-2",
    title: "Building REST APIs with Node",
    description: "From routing to authentication and testing.",
    level: "Intermediate",
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

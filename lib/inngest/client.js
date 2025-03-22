import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "futured", // Unique app ID
  name: "FuturEd Ai",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});

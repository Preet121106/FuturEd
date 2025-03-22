import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async (retries = 3, delay = 500) => {
  let user = await currentUser();

  // Retry mechanism in case user is not immediately available
  while (!user && retries > 0) {
    await new Promise((res) => setTimeout(res, delay)); // Wait before retrying
    user = await currentUser();
    retries--;
  }

  if (!user) {
    console.error("User not found after retries.");
    return null;
  }

  try {
    let loggedInUser = await db.user.findUnique({
      where: { clerkUserId: user.id },
    });

    if (loggedInUser) return loggedInUser;

    const name = `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim();

    loggedInUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name,
        imageUrl: user.imageUrl ?? "",
        email: user.emailAddresses?.[0]?.emailAddress ?? "",
      },
    });

    return loggedInUser;
  } catch (error) {
    console.error("Error in checkUser:", error);
    return null;
  }
};

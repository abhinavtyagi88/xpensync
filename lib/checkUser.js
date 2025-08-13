import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  try {
    // First try to find by Clerk ID
    let loggedInUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    if (loggedInUser) {
      return loggedInUser;
    }
    
    // If not found by Clerk ID, check if user exists with the same email
    const email = user.emailAddresses[0].emailAddress;
    const existingUserWithEmail = await db.user.findUnique({
      where: {
        email: email,
      },
    });
    
    if (existingUserWithEmail) {
      // Update the existing user with the new Clerk ID
      loggedInUser = await db.user.update({
        where: {
          id: existingUserWithEmail.id,
        },
        data: {
          clerkUserId: user.id,
        },
      });
      return loggedInUser;
    }

    // If no user exists at all, create a new one
    const name = `${user.firstName} ${user.lastName}`;

    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name,
        imageUrl: user.imageUrl,
        email: email,
      },
    });

    return newUser;
  } catch (error) {
    console.error("Error in checkUser:", error.message);
    throw error; // Re-throw to handle it at a higher level
  }
};

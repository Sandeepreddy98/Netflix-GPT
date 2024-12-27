import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export const signUpUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // User created successfully
    return userCredential.user
  } catch (error) {
    // Handle errors
    throw new Error(error);
  }
};


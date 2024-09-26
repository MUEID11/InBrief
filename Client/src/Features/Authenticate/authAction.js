import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { authFailure, authStart, authSuccess, logOut } from "./AuthSlice";
import auth from "../../../firebase.config";

export const signUpUser = async (email, password, name) => {
  try {
    // Create the user with email and password
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );    
    // Update the user's profile with the display name
    const update = await updateProfile(userCredential.user, {
      displayName: name,
    });
    console.log(update)
    return update;
  } catch (error) {
    // Dispatch failure action with error message
    return error.message;
  }
};

export const signInUser = (email, password) => async (dispatch) => {
  dispatch(authStart());
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    dispatch(authSuccess(userCredential.user));
  } catch (error) {
    dispatch(authFailure(error.message));
  }
};

export const googleSignIn = () => async (dispatch) => {
  dispatch(authStart());
  try {
    const result = await signInWithPopup(auth, GoogleAuthProvider);
    dispatch(authSuccess(result.user));
  } catch (error) {
    dispatch(authFailure(error.message));
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    await signOut(auth);
    dispatch(logOut());
  } catch (error) {
    console.log(error);
  }
};

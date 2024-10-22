import { createAsyncThunk } from "@reduxjs/toolkit";
import auth, { googleProvider } from "../../../firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

const userThunk = createAsyncThunk("user/userThunk", async (_, { rejectWithValue }) => {
  const getToken = localStorage.getItem("token");
  console.log("thunk", getToken);
  try {
    if (getToken) {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/users/uservalidation`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${getToken}`,
        },
      });
      const data = await response.json();
      console.log("consoling from user thunk", data);

      if (response.ok) {
        return data;
      } else {
        // Use rejectWithValue to handle errors properly
        return rejectWithValue(data.message);
      }
    } else {
      return;
    }
  } catch (error) {
    console.log("Error in thunk:", error);
    // Return a simple error message instead of the entire error object
    return rejectWithValue("Failed to fetch user data.");
  }
});

export const updateUser = createAsyncThunk("user/updateUser", async (user, { rejectWithValue }) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/users/updateUser`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    console.log("consoling from update thunk", data);
    return data;
  } catch (error) {
    return rejectWithValue("something went wrong updating the user");
  }
});

export const createUserWithGoogle = createAsyncThunk("user/createWithGoogle", async (_, { rejectWithValue }) => {
  try {
    const userCredential = await signInWithPopup(auth, googleProvider);
    const user = userCredential.user; // Return user object for fulfilled case
    const userData = { name: user?.displayName, email: user?.email, imageUrl: user?.photoURL, role: "user" };
    const response = await fetch(`${import.meta.env.VITE_API_URL}/users/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    // Handle the response data
    const data = await response.json(); //token on data
    localStorage.setItem("token", data?.token);
    // Check if there is an error in the response
    if (!response.ok) {
      throw new Error(data.message || "Failed to create user");
    }

    return data?.user;
  } catch (error) {
    return rejectWithValue(error.message); // Pass error message for rejected case
  }
});

// Monitor authentication state
export const checkAuthState = createAsyncThunk("auth/checkAuthState", async (_, { rejectWithValue }) => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(
      auth,
      async (user) => {
        if (user) {
          const userData = { name: user?.displayName, email: user?.email, imageUrl: user?.photoURL, role: "user" };
          const response = await fetch(`${import.meta.env.VITE_API_URL}/users/createuser`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          });

          // Handle the response data
          const data = await response.json(); //token on data
          // Check if there is an error in the response
          if (!response.ok) {
            throw new Error(data.message);
          }
          resolve(data?.user); // Resolve with user object if logged in
        } else {
          resolve(null); // Resolve with null if logged out
        }
      },
      (error) => {
        reject(rejectWithValue(error.message));
      }
    );
  });
});

export const firebaseLogout = createAsyncThunk("user/firebaseLogout", async (_, { rejectWithValue }) => {
  try {
    await signOut(auth); // Logs out the user from Firebase
    return true; // Indicating successful logout
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export default userThunk;

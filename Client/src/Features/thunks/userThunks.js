import { createAsyncThunk } from "@reduxjs/toolkit";

const userThunk = createAsyncThunk("user/userThunk", async (_, { rejectWithValue }) => {
  const getToken = localStorage.getItem("token");
  console.log("thunk", getToken);
  try {
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
  } catch (error) {
    console.log("Error in thunk:", error);
    // Return a simple error message instead of the entire error object
    return rejectWithValue("Failed to fetch user data.");
  }
});

export default userThunk;

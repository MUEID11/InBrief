import { createAsyncThunk } from "@reduxjs/toolkit";

export const getForums = createAsyncThunk(
  "forums/getForums",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/forum`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      });
      const data = await response.json();
      console.log("consoling form forum", data, response);
      if (response.ok) {
        console.log(data);
        return data;
      }
    } catch (error) {
      console.log(error);
      rejectWithValue("failed to fetch articles");
    }
  }
);

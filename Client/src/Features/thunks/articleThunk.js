import { createAsyncThunk } from "@reduxjs/toolkit";

export const getArticleByPreference = createAsyncThunk("articles/getArticleByPreference", async ({ id, sort }, { rejectWithValue }) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/articles/getArticleByPreferences/${id}?sort=${sort}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    if (response.ok) {
      console.log(data);
      return data.data;
    }
  } catch (error) {
    console.log(error);
    rejectWithValue("failed to fetch articles");
  }
});

import {createAsyncThunk} from "@reduxjs/toolkit"


const userThunk = createAsyncThunk('user/userThunk', async() => {
  console.log(1)
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/users/uservalidation`, {
      method: "GET",
      headers: {'content-type': "application/json", "Authorization": `Bearer ${localStorage.getItem('token')}`}
    })
    const data = await response.json();
    console.log('conosling from user thank',data);
    return data;
  } catch (error) {
    console.log(error)
    return error;
  }
});

export default userThunk;
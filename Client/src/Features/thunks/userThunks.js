import {createAsyncThunk} from "@reduxjs/toolkit"


const userThunk = createAsyncThunk('user/userThunk', async() => {
  
  const getToken = localStorage.getItem('token')
  console.log('thunk',getToken)
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/users/uservalidation`, {
      method: "GET",
      headers: {'content-type': "application/json", "Authorization": `Bearer ${getToken}`}
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
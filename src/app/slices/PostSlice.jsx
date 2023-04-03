import { createSlice } from "@reduxjs/toolkit";


const postSlice = createSlice({

  name: "user",
  initialState: ['post1', 'post2'],
  reducers: {
   
  },
});

// console.log(postSlice.actions.addUser());

export default postSlice.reducer;
export const {  } = postSlice.actions;

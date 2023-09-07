import { createSlice } from "@reduxjs/toolkit";
import { usersList } from "./Data";

const userSlice = createSlice({
  name: "user",
  initialState: usersList,
  reducers: {},
});

export default userSlice.reducer;

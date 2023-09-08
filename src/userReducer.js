import { createSlice } from "@reduxjs/toolkit";
import { usersList } from "./Data";

const userSlice = createSlice({
  name: "user",
  initialState: usersList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const { addUser } = userSlice.actions;
export default userSlice.reducer;

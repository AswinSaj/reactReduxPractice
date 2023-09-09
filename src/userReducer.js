import { createSlice } from "@reduxjs/toolkit";
import { usersList } from "./Data";

const userSlice = createSlice({
  name: "user",
  initialState: usersList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const uu = state.find((user) => user.id == id);
      if (uu) {
        uu.name = name;
        uu.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const uu = state.find((user) => user.id == id);
      if (uu) {
        return state.filter((user) => user.id !== id);
      }
    },
  },
});
export const { addUser } = userSlice.actions;
export default userSlice.reducer;
export const { updateUser } = userSlice.actions;
export const { deleteUser } = userSlice.actions;

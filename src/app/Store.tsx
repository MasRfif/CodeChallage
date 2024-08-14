import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@/app/feature/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

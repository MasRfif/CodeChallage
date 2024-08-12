import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@/components/4.Function/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

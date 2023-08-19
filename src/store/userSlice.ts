import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { userEndpoint } from "../API/userApi";

export interface User {
  id: number;
  avatar_url: string;
  bio: string;
  url: string;
  name: string;
}

export interface InitialStateTypes {
  user: User | null;
  status: "pending" | "fulfilled" | "rejected" | null;
}

const initialState: InitialStateTypes = {
  user: null,
  status: null,
};

export const fetchUserInfo = createAsyncThunk("user/fetchUserInfo", async (userName: string) => {
  const response = await axios.get(`${userEndpoint.getUser}/${userName}`);
  const result: User = {
    id: response.data.id,
    avatar_url: response.data.avatar_url,
    bio: response.data.bio || "",
    url: response.data.html_url,
    name: response.data.name,
  };
  return result;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInfo.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.status = "fulfilled";
        usersSlice.caseReducers.setUser(state, action);
      })
      .addCase(fetchUserInfo.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export const { setUser } = usersSlice.actions;
export default usersSlice.reducer;

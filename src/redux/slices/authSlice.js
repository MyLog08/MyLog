import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import supabase from '../../supabase/supabase';

const initialState = {
  isLoggedIn: false,
  status: 'idle',
  error: null,
  user: null
};

export const checkSignIn = createAsyncThunk('auth/checkSignIn', async () => {
  const session = await supabase.auth.getSession();
  const user = session.data.session?.user || null;
  return user;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(checkSignIn.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(checkSignIn.fulfilled, (state, action) => {
        state.isLoggedIn = !!action.payload;
        state.user = action.payload;
        state.status = 'success';
      })
      .addCase(checkSignIn.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

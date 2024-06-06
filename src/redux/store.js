import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import userProfileReducer from './slices/userProfileSlice';

export const store = configureStore({
  reducer: {
    userProfile: userProfileReducer,
    auth: authReducer
  }
});

export default store;

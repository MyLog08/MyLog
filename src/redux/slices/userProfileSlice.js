import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import supabase from '../../supabase/supabase';

// 비동기적으로 이미지를 업로드하고 사용자 프로필을 업데이트하는 thunk
export const updateUserProfile = createAsyncThunk(
  'userProfile/update',
  async ({ userId, updates }, { rejectWithValue }) => {
    try {
      // 이미지 파일이 있으면 먼저 업로드
      if (updates.profilePictureFile) {
        const { data, error: uploadError } = await supabase.storage
          .from('Users')
          .upload(`public/${updates.profilePictureFile.name}`, updates.profilePictureFile);

        if (uploadError) throw new Error(uploadError.message);
        updates.profilePicture = data.Key; // 업로드된 이미지의 URL로 변경
      }

      // 사용자 정보 업데이트
      const { error } = await supabase.from('Users').update({
        userName: updates.name,
        newPassword: updates.newPassword,
        profilePicture: updates.profilePicture,
      }).match({ id: userId });

      if (error) throw new Error(error.message);

      return {
        userName: updates.name,
        profilePicture: updates.profilePicture,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState: {
    user: {},
    status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUserProfile.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default userProfileSlice.reducer;

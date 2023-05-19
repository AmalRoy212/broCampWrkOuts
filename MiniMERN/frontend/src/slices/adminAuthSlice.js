import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  adminInfo: localStorage.getItem('adminInfo') ? JSON.parse(localStorage.getItem('adminInfo')) : 'will'
};


const authAdminSlice = createSlice({
  name: 'adminAuth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.adminInfo = action.payload;
      localStorage.setItem('adminInfo', JSON.stringify(action.payload))
    },
    logout: (state, action) => {
      state.adminInfo = null;
      localStorage.removeItem('adminInfo');
    }
  }
})

export const { setCredentials, logout } = authAdminSlice.actions

export default authAdminSlice.reducer;
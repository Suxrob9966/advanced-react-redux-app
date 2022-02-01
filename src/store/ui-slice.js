import { createSlice } from '@reduxjs/toolkit';

const initialUIState = {
  cartIsVisible: false,
  notification: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUIState,
  reducers: {
    toggle(state) {
      //   console.log('Something');
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions; // named export

export default uiSlice;

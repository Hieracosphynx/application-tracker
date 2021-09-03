import { createSlice } from '@reduxjs/toolkit';

const appInitialState = {
  applications: [],
};

const applicationSlice = createSlice({
  name: 'application',
  initialState: appInitialState,
  reducers: {
    replaceApplication(state, action) {
      state.applications = action.payload.applications;
    },
  },
});

export const applicationActions = applicationSlice.actions;
export default applicationSlice;

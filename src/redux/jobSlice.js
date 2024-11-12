import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: 'job',
  initialState: {
    allJobs: [],
    allEmployerJobs: [],
    singleJob: null,
    searchJobByText: "",
    allAppliedJobs: [], // Applied jobs state
    searchedQuery: "",
  },
  reducers: {
    setAllJobs: (state, action) => {
      state.allJobs = action.payload;
    },
    setSingleJob: (state, action) => {
      state.singleJob = action.payload;
    },
    setAllEmployerJobs: (state, action) => {
      state.allEmployerJobs = action.payload;
    },
    setAllAppliedJobs: (state, action) => {
      state.allAppliedJobs = action.payload;
    },
    removeAppliedJob: (state, action) => {
      // Filter out the deleted job from the applied jobs array
      state.allAppliedJobs = state.allAppliedJobs.filter(
        (appliedJob) => appliedJob.job._id !== action.payload
      );
    },
    searchJobByText: (state, action) => {
      state.searchJobByText = action.payload;
    },
    setSearchedQuery: (state, action) => {
      state.searchedQuery = action.payload;
    },
  },
});

export const { 
  setAllJobs, 
  setSingleJob, 
  setAllEmployerJobs, 
  setAllAppliedJobs, 
  removeAppliedJob, 
  searchJobByText, 
  setSearchedQuery 
} = jobSlice.actions;

export default jobSlice.reducer;

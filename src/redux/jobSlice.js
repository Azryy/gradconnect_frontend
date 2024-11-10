import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({ 
    name:'job',
    initialState: {
        allJobs: [],
        allEmployerJobs:[],
        singleJob:null,
        searchJobByText:"",
        allAppliedJobs:[],

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
        searchJobByText: (state, action) => {
            state.searchJobByText = action.payload;
        },
        setAllAppliedJobs: (state, action) => {
            state.allAppliedJobs = action.payload;
        }
    }
})

export const {setAllJobs, setSingleJob, setAllEmployerJobs, searchJobByText, setAllAppliedJobs} = jobSlice.actions;
export default jobSlice.reducer;
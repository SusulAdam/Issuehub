import {createSlice} from '@reduxjs/toolkit';

export type Issue = {
  title: string;
};

export type IssuesSliceState = {
  issues: Issue[];
  loadingIssues: boolean;
  loadingError: boolean;
};

const initialState: IssuesSliceState = {
  issues: [],
  loadingIssues: false,
  loadingError: false,
};

const issuesSlice = createSlice({
  name: 'issuesSlice',
  initialState: initialState,
  reducers: {},
  extraReducers: {},
});

export default issuesSlice.reducer;

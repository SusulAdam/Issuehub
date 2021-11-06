import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {fetchIssues} from './api';

export type Issue = {
  title: string;
};

export type IssuesSliceState = {
  issues: Issue[];
  issuesError: boolean;
  issuesLoading: boolean;
};

const initialState: IssuesSliceState = {
  issues: [],
  issuesLoading: false,
  issuesError: false,
};

export const fetchIssuesPagination = createAsyncThunk<
  {issues: Issue[]},
  {page: number}
>('fetchIssuesPagination', async ({page}) => {
  const response = await fetchIssues(page, 20);

  if ((response.kind = 'success')) {
    return {
      issues: response.body ?? [],
    };
  } else {
    throw 'Error fetching issues';
  }
});

const issuesSlice = createSlice({
  name: 'issuesSlice',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchIssuesPagination.fulfilled, (state, action) => {
        state.issues = action.payload.issues;
        state.issuesError = false;
        state.issuesLoading = false;
      })
      .addCase(fetchIssuesPagination.pending, state => {
        state.issuesLoading = true;
      })
      .addCase(fetchIssuesPagination.rejected, state => {
        state.issuesError = true;
        state.issuesLoading = false;
      });
  },
});

export default issuesSlice.reducer;

import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {fetchIssues} from './api';

export type Issue = {
  title: string;
  url: string;
  id: number;
};

export type IssuesSliceState = {
  issues: Issue[];
  issuesError: boolean;
  issuesLoading: boolean;
  nextPage: number;
};

const initialState: IssuesSliceState = {
  issues: [],
  issuesLoading: false,
  issuesError: false,
  nextPage: 1,
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
        state.issues = state.issues.concat(action.payload.issues);
        state.issuesError = false;
        state.issuesLoading = false;
        state.nextPage += 1;
      })
      .addCase(fetchIssuesPagination.pending, state => {
        state.issuesLoading = true;
        state.issuesError = false;
      })
      .addCase(fetchIssuesPagination.rejected, state => {
        state.issuesError = true;
        state.issuesLoading = false;
      });
  },
});

export default issuesSlice.reducer;

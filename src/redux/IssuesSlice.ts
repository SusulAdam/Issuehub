import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {fetchIssues, fetchOneIssue} from './api';

export type Issue = {
  title: string;
  url: string;
  id: number;
  number: number;
};

export type OneIssue = {
  state: string;
  body: any;
  title: string;
  url: string;
};

export type IssuesSliceState = {
  issues: Issue[];
  issuesError: boolean;
  issuesLoading: boolean;
  selectedIssueLoading: boolean;
  selectedIssueError: boolean;
  nextPage: number;
  selectedIssue: OneIssue | undefined;
};

const initialState: IssuesSliceState = {
  issues: [],
  issuesLoading: false,
  issuesError: false,
  nextPage: 1,
  selectedIssue: {body: '', state: '', title: '', url: ''},
  selectedIssueLoading: false,
  selectedIssueError: false,
};

export const fetchIssuesPagination = createAsyncThunk<
  {issues: Issue[]},
  {page: number}
>('fetchIssues', async ({page}) => {
  const response = await fetchIssues(page, 20);

  if (response.kind === 'success') {
    return {
      issues: response.body ?? [],
    };
  } else {
    throw 'Error fetching issues';
  }
});

export const fetchIssue = createAsyncThunk<{isssue: OneIssue}, {url: string}>(
  'fetchOneIssue',
  async ({url}) => {
    const response = await fetchOneIssue(url);

    if (response.kind === 'success') {
      return {
        isssue: response.body ?? {body: '', state: '', title: ''},
      };
    } else {
      throw 'Error fetching issue';
    }
  },
);

const issuesSlice = createSlice({
  name: 'issuesSlice',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchIssuesPagination.pending, state => {
        state.issuesLoading = true;
        state.issuesError = false;
      })
      .addCase(fetchIssuesPagination.fulfilled, (state, action) => {
        state.nextPage += 1;
        state.issues = state.issues.concat(action.payload.issues);
        state.issuesLoading = false;
      })
      .addCase(fetchIssuesPagination.rejected, state => {
        state.issuesError = true;
        state.issuesLoading = false;
      })
      .addCase(fetchIssue.fulfilled, (state, action) => {
        state.selectedIssue = action.payload.isssue;
        state.selectedIssueLoading = false;
      })
      .addCase(fetchIssue.rejected, state => {
        state.selectedIssueError = true;
        state.selectedIssueLoading = false;
      })
      .addCase(fetchIssue.pending, state => {
        state.selectedIssueError = false;
        state.selectedIssueLoading = true;
      });
  },
});

export default issuesSlice.reducer;

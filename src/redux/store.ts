import {combineReducers, configureStore} from '@reduxjs/toolkit';
import issues from './IssuesSlice';

const rootReducer = combineReducers({
  issues,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export {store};

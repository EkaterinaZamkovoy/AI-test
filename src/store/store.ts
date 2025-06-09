import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './slices/taskSlice';
import questionsReducer from './slices/questionsSlice';
import { uploadApi } from './api/uploadApi';

export const store = configureStore({
  reducer: {
    task: taskReducer,
    questions: questionsReducer,
    [uploadApi.reducerPath]: uploadApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(uploadApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

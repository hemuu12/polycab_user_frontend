import { configureStore } from '@reduxjs/toolkit';
import authTokenReducer from './reducers/authReducer'; 

export const store = configureStore({
  reducer: {
    authToken: authTokenReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
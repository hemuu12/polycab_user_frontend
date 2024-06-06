import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthToken{
  token: string | null;
}

const initialState: AuthToken = {
    token: null,
};

export const authTokenSlice = createSlice({
    name: 'authToken',
    initialState,
    reducers: {
      setToken: (state, action: PayloadAction<string | null>) => {
        state.token = action.payload;
      },
    },
  });
  
  export const { setToken } = authTokenSlice.actions;
  export default authTokenSlice.reducer;
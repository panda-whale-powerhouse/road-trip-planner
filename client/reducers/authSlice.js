import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk('auth/login', async (credentials) => {
  const response = await fetch('login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  if (!response.ok) throw new Error('Invalid username or password.');
  const data = await response.json();
  localStorage.setItem('token', data.token);
  return data.user;
});

export const signup = createAsyncThunk('auth/signup', async (userData) => {
  const response = await fetch('signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  if (!response.ok) throw new Error('Error: please check your inputs.');
  const data = await response.json();
  localStorage.setItem('token', data.token);
  return data.user;
});

export const logout = () => {
  localStorage.removeItem('token');
  return { type: 'auth/logout' };
}

export const authSlice = createSlice({
  name: 'auth', 
  initialState: {
    user: null,
    loadin: false,
    error: null
  }, 
  reducer: {
    logout: (state) => {
      state.user = null;
      state.loading = false;
      localStorage.removeItem('token');
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const {logout: logoutAction } = authSlice.actions;
export default authSlice.reducer
// figure out how to get user id from user profile
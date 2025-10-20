import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// --- ASYNC THUNKS ---

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/api/products');
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (id, { getState, rejectWithValue }) => {
    try {
      const { userLogin: { userInfo } } = getState();
      const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };
      await axios.delete(`/api/products/${id}`, config);
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createProduct = createAsyncThunk(
  'products/createProduct',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { userLogin: { userInfo } } = getState();
      const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };
      const { data } = await axios.post('/api/products', {}, config);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// --- ADD THIS NEW THUNK ---
export const updateProduct = createAsyncThunk(
  'products/updateProduct',
  async (product, { getState, rejectWithValue }) => {
    try {
      const { userLogin: { userInfo } } = getState();
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post(`/api/products/update/${product._id}`, product, config);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// ----------------------------

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    loading: false,
    error: null,
    successCreate: false,
    successUpdate: false, // Add success flag for updates
  },
  reducers: {
    resetProductState: (state) => {
      state.successCreate = false;
      state.successUpdate = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch products cases...
      .addCase(fetchProducts.pending, (state) => { state.loading = true; })
      .addCase(fetchProducts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.products = payload;
      })
      .addCase(fetchProducts.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      // Delete product cases...
      .addCase(deleteProduct.pending, (state) => { state.loading = true; })
      .addCase(deleteProduct.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.products = state.products.filter((p) => p._id !== payload);
      })
      .addCase(deleteProduct.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      // Create product cases...
      .addCase(createProduct.pending, (state) => { state.loading = true; })
      .addCase(createProduct.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.successCreate = true;
        state.products.push(payload);
      })
      .addCase(createProduct.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      // --- ADD CASES FOR updateProduct ---
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProduct.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.successUpdate = true;
        state.products = state.products.map((p) => p._id === payload._id ? payload : p);
      })
      .addCase(updateProduct.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { resetProductState } = productSlice.actions;
export default productSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    searchText: '',
    category: 'hamısı', 
    filteredItems: [] 
  },
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    filterItems: (state, action) => {
      const { searchText, category, items } = action.payload;
      let filtered = items;

      if (searchText) {
        filtered = filtered.filter(item =>
          item.title?.toLowerCase().includes(searchText?.toLowerCase()) || 
          item.description?.toLowerCase().includes(searchText?.toLowerCase()) 
        );
      }
      if (category && category !== 'hamısı') {
        filtered = filtered.filter(item => item.category === category);
      }
      state.filteredItems = filtered;
    },
    clearFilters: (state) => {
      state.searchText = '';
      state.category = 'hamısı';
      state.filteredItems = [];
    }
  }
});

export const { setSearchText, setCategory, filterItems, clearFilters } = filterSlice.actions;

export default filterSlice.reducer;

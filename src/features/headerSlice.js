import { createSlice } from '@reduxjs/toolkit'

export const headerSlice = createSlice({
  name: 'header',
  initialState: {
    'header': {
      'fullName': '',
      'jobTitle': '',
      'phone': '',
      'email': '',
      'website': '',
      'address': ''
    }
  },
  reducers: {
    setFullName: (state, action) => {
      state.header.fullName = action.payload;
    },
    setJobTitle: (state, action) => {
      state.header.jobTitle = action.payload;
    },
    setPhone: (state, action) => {
      state.header.phone = action.payload;
    },
    setEmail: (state, action) => {
      state.header.email = action.payload;
    },
    setWebsite: (state, action) => {
      state.header.website = action.payload;
    },
    setAddress: (state, action) => {
      state.header.address = action.payload;
    }
  },
})

export const {
  setFullName,
  setJobTitle,
  setPhone,
  setEmail,
  setWebsite,
  setAddress
} = headerSlice.actions

export const selectHeader = state => state.header.header

export default headerSlice.reducer

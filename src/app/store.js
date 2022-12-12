import { configureStore } from '@reduxjs/toolkit'
import headerReducer from '../features/headerSlice'

export default configureStore({
  reducer: {
    header: headerReducer
  }
})

import { configureStore } from '@reduxjs/toolkit'
import universitySlice from './features/universitySlice'
import commentSlice from './features/commentSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      university : universitySlice,
      comment: commentSlice
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
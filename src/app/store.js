import { configureStore } from '@reduxjs/toolkit'
import registerReduces from '../features/Registration/registration-reducer'
import user from '../features/User/UserSlice'

export const store = configureStore({
  reducer: {
    register: registerReduces,
    user: user 
  },
})

export default store
import { configureStore } from '@reduxjs/toolkit';
import registerReducer from '../features/Registration/RegistrationSlice';
import userReducer from '../features/User/UserSlice';
import homeReducer from '../features/Home/Categoryies'; 

export const store = configureStore({
  reducer: {
    register: registerReducer,
    user: userReducer,
    home: homeReducer, 
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import registerReducer from '../features/Registration/RegistrationSlice';
import userReducer from '../features/User/UserSlice';
import homeReducer from '../features/Home/Categoryies'; 
import shortreducer from '../features/Home/shorts';

export const store = configureStore({
  reducer: {
    register: registerReducer,
    user: userReducer,
    home: homeReducer,
    short: shortreducer 
  },
});

export default store;

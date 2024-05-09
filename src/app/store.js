import { configureStore } from '@reduxjs/toolkit';
import registerReducer from '../features/Registration/RegistrationSlice';
import userReducer from '../features/User/UserSlice';
import homeReducer from '../features/Home/Categoryies'; // corrected import path
import shortReducer from '../features/Home/shorts'; // corrected naming and import path


const store = configureStore({
  reducer: {
    register: registerReducer,
    user: userReducer,
    home: homeReducer,
    short: shortReducer,
  },
});


export default store
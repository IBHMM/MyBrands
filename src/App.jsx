import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home/Home'
import store from './app/store'
import { Provider } from 'react-redux'
import Signin from './pages/Registration/Signin'
import ForgetPassword from './pages/Registration/Forget'
import OTP from './pages/Registration/OTP'
import Reset from './pages/Registration/ResetPassword'
import Succesful from './pages/Registration/SuccesfulReset'
import Signup from './pages/Registration/Signup'
import Profile from './pages/Profile/Profile'
import AskedQuestions from './pages/Profile/AskedQuestions'
import Liked from './pages/Profile/Liked'
import Address from './pages/Profile/Address'
import UserInformation from './pages/Profile/UserInformation'
import PaymentDelivery from './pages/Profile/Payment&Delivery'
import About from './pages/Home/About'
import CustomerService from './pages/Profile/Customerservices'
import Product from './pages/Products/Product'

function App() {

  return (
    <Provider store={store}>
      <>
          <Routes>
              <Route path='/home' element={<Home />}/>
              <Route path='/signin' element={<Signin />} />
              <Route path='/forget' element={<ForgetPassword />} />
              <Route path='/otp' element={<OTP />} />
              <Route path='/reset' element={<Reset />} />
              <Route path='/success' element={<Succesful />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/home/profile' element={<Profile />} />
              <Route path='/profile/questions' element={<AskedQuestions />} />
              <Route path='/profile/liked' element={<Liked />} />
              <Route path='/profile/address' element={<Address />} />
              <Route path='/profile/userinfo' element={<UserInformation />} />
              <Route path='/profile/paymentdelivery' element={<PaymentDelivery />} />
              <Route path='/profile/CustomerService' element={<CustomerService />} />
              <Route path='/home/about' element={<About />} />
              <Route path='/products' element={<Product />} />
          </Routes>     
      </>
    </Provider>
  )
}

export default App

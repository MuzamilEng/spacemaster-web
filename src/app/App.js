import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import JoinAsTeam from './pages/JoinAsTeam'
import HowItWorks from './pages/HowItWorks'
import Subscription from './pages/Subscription/Subscription'
import Login from './pages/Auth/Login'
import Signup from './pages/SignUp'
import Success from './pages/Subscription/Success'
import PaymentCheckout from './pages/Subscription/PaymentCheckout'
import Dashboard from './pages/Dashboard'
import Subscriptions from './pages/Dashboard/Subscription/Subscriptions'
import Receipts from './pages/Dashboard/Subscription/Receipts'
import Notifications from './pages/Dashboard/Notification/Notifications'
import AddCard from './pages/Dashboard/Records/AddCard'
import AddRecord from './pages/Dashboard/Records/AddRecord'
import CardRecords from './pages/Dashboard/Records/CardRecords'
import Messages from './pages/Dashboard/Message/Messages'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/join' element={<JoinAsTeam />} />
        <Route path='/howitworks' element={<HowItWorks />} />
        <Route path='/subscription' element={<Subscription />} />
        <Route path='/subscriptions' element={<Subscriptions />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/success' element={<Success />} />
        <Route path='/payment' element={<PaymentCheckout />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/receipts' element={<Receipts />} />
        <Route path='/notification' element={<Notifications />} />
        <Route path='/addcard' element={<AddCard />} />
        <Route path='/addrecord' element={<AddRecord />} />
        <Route path='/cardrecord' element={<CardRecords />} />
        <Route path='/messages' element={<Messages />} />

      </Routes>
    </>
  )
}


export default App
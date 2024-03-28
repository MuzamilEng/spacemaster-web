import React, { useState } from 'react'
import Topbar from '../../Component/Common/Topbar'
import Navbar from '../../Component/Common/Navbar'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import method from './method'

const Signup = () => {
  const [show, setShow] = useState(false);
  const { profile, handleInputChange, signUp } = method();

  return (
    <main className='w-full'>
    <Topbar />
    <Navbar />
    <div className='w-full col-center p-2vw max-w-[90vw] m-auto'>
      <form className="w-full max-w-[35vw] boredr-[1px] bg-[#F8F8F8] rounded-xl col-center">
      <h1 className='text-[2.5vw] xl:text-[2vw] lg:lg:text-[2vw] md:text-[2vw] capitalize text-center leading-[3vw] text-black mt-vw font-bold'>Sign Up<span className="text-[#092370]"> Space Master</span></h1>
      <section className="mt-vw w-full  col-center p-vw">
        <div className="flex mt-vw row-center p-[1vw] xl:p-[0.7vw] lg:p-[0.7vw] md:p-[0.7vw] w-full max-w-[35vw] hover:bg-gray-100 bg-white rounded-full border-[0.15vw] border-black focus:outline-none">
        <Icon icon="logos:apple" className='text-[1.6vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw]' />
        <button className='text-black ml-[0.4vw] text-vw font-bold '>Continue with Apple</button>
        </div>
        <button className="w-full relative max-w-[35vw] row-center rounded-full p-[1.2vw] xl:p-[0.7vw] lg:p-[0.7vw] md:p-[0.7vw] text-white text-center mt-vw font-bold text-vw bg-[#092370] hover:bg-[#092370]">
        <span className='bg-white absolute top-[1.5] left-1 rounded-full text-[2.5vw] xl:text-[2vw] lg:lg:text-[2vw] md:text-[2vw] p-0.5vw'><Icon icon="flat-color-icons:google" className='text-[1.6vw] xl:text-[1.3vw] lg:lg:text-[1.3vw] md:text-[1.3vw] ' /></span>
           Continue with Google
        </button>
      </section>
      <section className="flex items-center mt-vw">
        <div className="border-b-[0.2vw] border-gray-300 w-[13vw]"></div>
        <span className="text-vw mx-vw bg-white px-vw">or</span>
        <div className="border-b-[0.2vw] border-gray-300 w-[13vw]"></div>
      </section>
      <section className="mt-vw w-full col-center max-w-[35vw] p-vw">
        <div className="flex items-center justify-between w-full">
          <input 
            type="text" 
            placeholder="First name"
            onChange={handleInputChange}
            name='firstName'
            style={{ textIndent: '1vw' }}
            className="w-full pl-[1vw]  max-w-[16vw] text-[1.6vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] bg-white p-[1vw] pr-[0.5vw] xl:p-[0.7vw] lg:p-[0.7vw] md:p-[0.7vw] rounded-[1.6vw] border-[2px] border-[#E4EBE4] focus:outline-none"  
          />

          <input 
            type="text" 
            placeholder="Last name"
            name='lastName'
            onChange={handleInputChange}
            style={{ textIndent: '1vw' }}
            className="w-full max-w-[16vw] text-[1.6vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] bg-white p-[1vw] xl:p-[0.7vw] lg:p-[0.7vw] md:p-[0.7vw] rounded-[1.6vw] border-[2px] border-[#E4EBE4] focus:outline-none" 
          />
        </div>
        <input 
          type="email" 
          placeholder="Email"
          name='email'
          style={{ textIndent: '1vw' }}
          onChange={handleInputChange}
          className="w-full max-w-[35vw] text-[1.6vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] mt-vw bg-white p-[1vw] xl:p-[0.7vw] lg:p-[0.7vw] md:p-[0.7vw] rounded-[1.6vw] border-[2px] border-[#E4EBE4] focus:outline-none" />
        <div className="flex items-center w-full max-w-[35vw] bg-white rounded-[1.6vw] mt-vw border-[2px] border-[#E4EBE4] focus:outline-none">
            <input 
              type={`${show ? 'text': 'password'}`} 
              placeholder="Password (8 or more characters)" 
              name='password'
              style={{ textIndent: '1vw' }}
              onChange={handleInputChange}
              className={`p-[1vw] xl:p-[0.7vw] lg:p-[0.7vw] md:p-[0.7vw] rounded-[1.6vw] text-[1.6vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] focus:outline-none border-none w-full`} />
          <Icon icon={`${show ? 'iconamoon:eye-thin' : 'mdi:eye-off'}`} className='text-[1.5vw] -ml-[3vw] bg-inherit' onClick={()=> setShow(!show)} />
          </div>
          <div className="flex w-full mt-vw items-center">
            <input type="checkbox" className='text-[1.5vw] text-[#092370]' />
            <p className='text-[1.2vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] text-gray-900 ml-vw font-medium'>Send me emails with tips on how to find the talent</p>
          </div>
          <div className="flex w-full mt-vw items-start">
            <input type="checkbox" className='text-[1.5vw] mt-0.5vw text-[#092370]' />
            <p className='text-[1.2vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] text-gray-900 ml-vw font-medium'>I understand and agree to the <Link className='text-[#092370]'>Terms of Service</Link>, including the <Link className='text-[#092370]'>User Agreement</Link> and <Link className='text-[#092370]'>Privacy Policy</Link></p>
          </div>
        <button 
          onClick={(e) => signUp(e)}
          className="w-full max-w-[35vw] rounded-full text-white text-center p-[0.8vw] mt-vw font-bold text-[1.6vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] bg-[#092370] hover:bg-[#092370ee]">
            Create my account
          </button>
      </section>
      <p className="text-[1.6vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] w-full text-center mx-vw font-medium text-gray-600">Already have an account? <Link to="/login" className="text-blue-900 font-medium text-[1.6vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw]">Login</Link></p>
      </form>
    </div>
  </main>  )
}

export default Signup
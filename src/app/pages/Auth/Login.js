import React from 'react'
import Topbar from '../../Component/Common/Topbar'
import Navbar from '../../Component/Common/Navbar'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <main className='w-full'>
      <Topbar />
      <Navbar />
      <div className='w-full col-center p-2vw max-w-[90vw] m-auto'>
        <form className="w-full max-w-[35vw] boredr-[1px] bg-[#F8F8F8] rounded-[1.2vw] col-center">
        <h1 className='text-[2.7vw] xl:text-[2vw] lg:lg:text-[2vw] md:text-[2vw] capitalize text-black mt-vw font-bold'>Sign In SpaceMaster</h1>
        <section className="mt-vw w-full col-center p-vw">
          <div className="flex items-center w-full max-w-[30vw] bg-white rounded-[1.7vw] border-[2px] border-[#E4EBE4] focus:outline-none">
          <Icon icon="line-md:account-small" className='text-[2vw] ml-0.5vw xl:text-[1.5vw] lg:lg:text-[1.5vw] md:text-[1.5vw] bg-inherit' />
            <input type="text" placeholder="Username or Email" className="p-[1vw] xl:p-[0.7vw] lg:p-[0.7vw] md:p-[0.7vw] rounded-[1.7vw] text-[1.6vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] focus:outline-none border-none w-full" />
          </div>
          <button className="w-full max-w-[30vw] rounded-full text-white text-center p-[1vw] xl:p-[0.7vw] lg:p-[0.7vw] md:p-[0.7vw] mt-vw font-bold text-[1.6vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] bg-[#092370] hover:bg-[#092370ee]">Continue with Email</button>
        </section>
        <section className="flex items-center mt-vw">
          <div className="border-b-[2px] border-gray-300 w-[12vw]"></div>
          <span className="text-[1.6vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] mx-vw bg-white px-vw">or</span>
          <div className="border-b-[2px] border-gray-300 w-[12vw]"></div>
        </section>
        <section className="mt-vw w-full  col-center p-vw">
        <button className="w-full relative max-w-[30vw] row-center rounded-full p-[1.2vw] xl:p-[0.7vw] lg:p-[0.7vw] md:p-[0.7vw] text-white text-center mt-vw font-bold text-vw bg-[#092370] hover:bg-[#092370]">
        <span className='bg-white absolute top-[1.5] left-1 rounded-full text-[2.5vw] xl:text-[2vw] lg:lg:text-[2vw] md:text-[2vw] p-0.5vw'><Icon icon="flat-color-icons:google" className='text-[1.6vw] xl:text-[1.3vw] lg:lg:text-[1.3vw] md:text-[1.3vw] ' /></span>
           Continue with Google
        </button>
          <div className="flex mt-vw row-center p-[1vw] xl:p-[0.7vw] lg:p-[0.7vw] md:p-[0.7vw] w-full max-w-[30vw] hover:bg-gray-100 bg-white rounded-full border-[0.1vw] border-black focus:outline-none">
          <Icon icon="logos:apple" className='text-[1.6vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw]' />
          <button className='text-black ml-[0.4vw] text-[1.6vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] font-bold '>Continue with Apple</button>
          </div>
        </section>
        <div className="mt-3vw w-full col-center p-vw">
        <section className="flex items-center mt-vw">
          <div className="border-b-[0.2vw] border-gray-400 w-[8vw]"></div>
          <Link to="/signup" className="text-[1.6vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] w-full text-center mx-vw text-gray-600">Don't have an account?</Link>
          <div className="border-b-[0.2vw] border-gray-400 w-[8vw]"></div>
        </section>
        <button className='text-[1.6vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] text-white font-bold bg-[#092370] p-[1vw] xl:p-[0.7vw] lg:p-[0.7vw] md:p-[0.7vw] mt-vw rounded-full w-full max-w-[15vw]'>Sign Up</button>
        </div>
        </form>
      </div>
    </main>
  )
}

export default Login
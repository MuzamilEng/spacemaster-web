import { Icon } from '@iconify/react'
import React from 'react'

const Searchbar = () => {
  return (
    <nav className='grid grid-cols-3 place-items-center place-content-center w-full p-[0.5vw] border-b-[1px] border-gray-400'>
      <section className='w-full flex items-center p-[0.5vw] max-w-[35vw]'>
        <p className='text-[#898989] text-[1.5vw]'>Welcome, <span className='text-black font-bold'>Amanda</span></p>
      </section>
      <section className='w-full flex items-center bg-gray-100 text-[#898989] rounded-[2vw] p-[0.5vw] max-w-[25vw] h-[2.5vw]'>
      <Icon icon="iconamoon:search" className='text-[1.2vw]' />
      <input type="text" className='text-[1vw] ml-vw w-full bg-inherit border-none focus:outline-none' placeholder='Search' />
      </section>
      <section className='w-full flex items-center ml-[13vw] bg-gray-100 p-[0.5vw] rounded-full max-w-[5vw] h-[2.5vw]'>
        <div className="w-full max-w-[2vw]">
          <img src="/img/Pr-1.png" alt="profile" className='w-full object-cover' />
        </div>
          <Icon icon="eva:arrow-down-fill" className='text-[1.4vw] ml-vw' />
      </section>
    </nav>
  )
}

export default Searchbar
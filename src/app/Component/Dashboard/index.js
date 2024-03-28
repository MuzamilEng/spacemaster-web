import React from 'react'
import { dashboard } from '../../Data'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

const ClientDashboard = () => {
  return (
    <main className='w-full relative bg-gray-900 flex flex-col items-center p-[1vw] max-w-[20vw] xl:max-w-[15vw] lg:max-w-[15vw] md:max-w-[15vw] px-[1vw] border-r-[1px] border-gray-400 h-full'>
      <div className="w-full max-w-[14vw] xl:max-w-[11vw] lg:max-w-[11vw] md:max-w-[11vw]  mt-[0.5vw]">
        <Link to="/">
        <img src="/img/logo_white.png" alt="spaceMaster" className='w-full' />
        </Link>
      </div>
      <div className="mt-[0.5vw]">
        {dashboard?.map((item, index)=> (
          <Link to={item?.link}>
          <main className='flex items-center text-gray-400 hover:text-[#ffff] cursor-pointer justify-between w-full p-[0.7vw]' key={index}>
            <section className='flex items-center'>
              <span className='text-[2vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw]'>{item?.icon}</span>
              <p className='text-[2vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw] font-medium ml-0.5vw'>{item?.title}</p>
            </section>
            <Icon icon="iconamoon:arrow-right-2-bold" className='text-[2.3vw] xl:text-[1.3vw] lg:text-[1.3vw] md:text-[1.3vw] font-medium' />
          </main>
          </Link>
        ))}
      </div>
      <section className="absolute bottom-[8vw] w-full max-w-[18vw] xl:max-w-[13vw] lg:max-w-[13vw] md:max-w-[13vw] col-center p-[1vw] rounded-[0.9vw] bg-[#092370] text-white">
        <p className='text-[2vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw] text-white w-full text-center font-medium'>Upgarde Your <br /> Membership</p>
        <button className='text-[1.7vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw] bg-white mt-vw hover:bg-gray-100 p-[0.5vw] w-full rounded-[1.5vw] text-[#092370] font-medium'>Upgrade now</button>
      </section>
        <button className='text-[2vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw] bg-[#092370] absolute bottom-[1vw] hover:bg-[#092370f1] mt-vw p-[0.5vw] w-full max-w-[18vw] xl:max-w-[13vw] lg:max-w-[13vw] md:max-w-[13vw] flex items-center rounded-[1.5vw] text-white font-medium'><Icon icon="majesticons:logout" className='text-[2vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw] text-white mr-[0.5vw]' />Logout</button>
    </main>
  )
}

export default ClientDashboard
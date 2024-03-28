import React from 'react'
import DashboardContainer from '../../../container/dashboardContainer'
import { Icon } from '@iconify/react'

const AddRecord = () => {
  return (
    <div>
      <DashboardContainer>
        <main className="w-full row-center">
        <section className=' w-full max-w-[40vw] p-3vw'>
          <div className="w-full">
          <h1 className='text-[2.5vw] xl:text-[1.7vw] lg:lg:text-[1.7vw] md:text-[1.7vw] font-bold'>Payment</h1>
          <p className='text-gray-500 text-[2vw] xl:text-[1.1vw] lg:lg:text-[1.1vw] md:text-[1.1vw]'>All transactions are secure and encrypted.</p>
          <div className="w-full mt-vw">
           <main className='rounded-t-lg border-[1px] bg-[#F3F4F6]'>
           <section className="flex items-center bg-white rounded-t-lg border-b-[1px] p-0.5vw justify-between w-full">
              <div className="flex items-center">
                <img src="/img/On.png" alt="card" className='w-[1vw]' />
                <p className='text-[2vw] xl:text-[1.1vw] lg:lg:text-[1.1vw] md:text-[1.1vw] font-medium ml-[1vw]'>Card</p>
              </div>
              <img src="/img/cards.png" alt="cards" className='w-full max-w-[9vw]' />
            </section>
            <div className="mt-vw border-b-[1px] border-gray-400 pb-vw col-center">
            <input type="text" placeholder="Card Number" className="p-[0.7vw] w-full max-w-[32vw] rounded-[0.9vw] border-[1px] border-gray-300 text-[1vw] focus:outline-none" />
            <input type="text" placeholder="Name on Card" className="p-[0.7vw] mt-vw w-full max-w-[32vw] rounded-[0.9vw] border-[1px] border-gray-300 text-[1vw] focus:outline-none" />
            <div className="w-full max-w-[32vw] flex justify-between items-center">
            <input type="text" placeholder="Expiration date (MM/YY)" className="p-[0.7vw] mt-vw w-full max-w-[15vw] rounded-[0.9vw] border-[1px] border-gray-300 text-[1vw] focus:outline-none" />
            <input type="text" placeholder="Secure Card" className="p-[0.7vw] mt-vw w-full max-w-[15vw] rounded-[0.9vw] border-[1px] border-gray-300 text-[1vw] focus:outline-none" />
            </div>
            <div className="w-full max-w-[32vw] flex justify-between items-center">
            <input type="text" placeholder="Address" className="p-[0.7vw] mt-vw w-full max-w-[15vw] rounded-[0.9vw] border-[1px] border-gray-300 text-[1vw] focus:outline-none" />
            <input type="text" placeholder="Postal Code" className="p-[0.7vw] mt-vw w-full max-w-[15vw] rounded-[0.9vw] border-[1px] border-gray-300 text-[1vw] focus:outline-none" />
            </div>
            </div>
           </main>
            <div className="flex p-0.5vw mt-0.5vw items-center w-full">
              <input type="checkbox" className="w-[1vw] h-[1vw] mr-vw text-blue-900" />
              <p className='text-[1.5vw] w-full xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw]'>Please check to acknowledge  <span className='text-[#092370] font-medium'>Privacy/terms policy</span></p>
            </div>
            <button className='w-full p-[1vw] row-center text-center mt-2vw rounded-md hover:bg-[#092370fd] bg-[#092370] text-white text-[1.2vw] font-medium'><Icon icon="ion:card-outline" className='text-white mr-0.5vw' /> Add Payment Card</button>
          </div>
          </div>
        </section>
        <section className="w-full max-w-[30vw]">
          <img src="/img/cr_card1.png" alt="card" className='w-full' />
        </section>
        </main>
      </DashboardContainer>
    </div>
  )
}

export default AddRecord
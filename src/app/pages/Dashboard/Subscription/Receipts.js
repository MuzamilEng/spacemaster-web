import React from 'react'
import DashboardContainer from '../../../container/dashboardContainer'
import { Icon } from '@iconify/react'
import { reciepts } from '../../../Data'

const Status = ({statas, statas_color, price, date, billing_no}) => {
  return(
    <main className="flex justify-between items-center h-[12vw] xl:h-[6.4vw] lg:h-[6.4vw] md:h-[6.4vw] mt-2vw w-full max-w-[45vw] rounded-[0.7vw] bg-[#f5f5f5] p-[1vw] xl:p-[0.7vw] lg:p-[0.7vw] md:p-[0.7vw]">
      <div className="w-full max-w-[30vw] xl:max-w-[25vw] lg:max-w-[25vw] md:max-w-[25vw]">
      <section className="flex items-center">
        <p className={`${statas_color} text-white text-vw xl:text-[0.7vw] lg:text-[0.7vw] md:text-[0.7vw] rounded-[0.5vw] p-[0.8vw] xl:p-[0.5vw] lg:p-[0.5vw] md:p-[0.5vw] `}>{statas}</p>
        <p className='text-[1.9vw] xl:text-[1.2vw] lg:text-[1.2vw] md:text-[1.2vw] text-[#092370] font-semibold ml-2vw'>{price}</p>
      </section>
      <section className="flex mt-vw items-center">
        <p className={`text-vw xl:text-[0.7vw] lg:text-[0.7vw] md:text-[0.7vw] font-medium rounded-[0.9vw]`}>{date}</p>
        <p className='text-[1.7vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw] ml-3vw'>Billing No. <span className='text-[#092370] font-semibold'>{billing_no}</span></p>
      </section>
      </div>
      <button className='text-[#092370] flex items-center border-[#092370] hover:bg-[#092370] hover:text-white border-[0.1vw] text-[1.3vw] xl:text-[0.7vw] lg:text-[0.7vw] md:text-[0.7vw] font-semibold p-[0.4vw] rounded-[0.5vw]'>VIEW MORE <Icon icon="ep:d-arrow-right" className='text-[1.3vw] xl:text-[0.7vw] lg:text-[0.7vw] md:text-[0.7vw] ml-0.5vw' /></button>
    </main>
  )
}
const Receipts = () => {
  return (
    <div className='overflow-x-hidden'>
      <DashboardContainer>
        <main className="w-full p-vw ml-5vw z-20">
          <div className="flex items-center">
            <p className='text-[1.9vw] xl:text-[1.2vw] lg:text-[1.2vw] md:text-[1.2vw] font-semibold border-b-[0.2vw] cursor-pointer border-black'>Receipts History</p>
            <p className='text-[1.9vw] xl:text-[1.2vw] lg:text-[1.2vw] md:text-[1.2vw] ml-2vw font-semibold cursor-pointer text-gray-400'>Achieved</p>
          </div>
          <div className="mt-2vw relative z-20">
            <div className="border-[0.1vw] w-[0.1vw] z-10 absolute top-[6.5vw] xl:top-5vw lg:top-5vw md:top-5vw  left-[0.9vw] border-black h-[72vw] xl:h-[41vw] lg:h-[41vw] md:h-[41vw]"></div>
            <section className='z-20'>
            {reciepts?.map((reciept, index)=> (
              <div className="flex relative items-center z-20 " key={index}>
                <div className="w-full max-w-[2vw] mt-vw mr-2vw">
                <img src="/img/rounded.png" alt="circle" className='w-full bg-white z-20' />
                </div>
               <Status statas={reciept?.status} statas_color={reciept?.status_Color} price={reciept?.amount} date={reciept?.date} billing_no={reciept?.billing_no} />
              </div>
            ))}
            </section>
          </div>
        </main>
      </DashboardContainer>
    </div>
  )
}

export default Receipts
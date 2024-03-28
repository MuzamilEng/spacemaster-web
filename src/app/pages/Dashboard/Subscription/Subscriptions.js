import React from 'react'
import DashboardContainer from '../../../container/dashboardContainer'
import { Icon } from '@iconify/react'

const BilledCard = ({time, price, icon, promo}) => {
  return (
    <main className="w-full max-w-[22vw] xl:max-w-[17vw] lg:max-w-[17vw] md:max-w-[17vw] relative p-vw">
      {icon && <span className='absolute text-vw top-0 right-0 text-[#092370] rotate-45'>{icon}</span> }
      <div className="border-[#092370] border-[0.1vw] rounded-[0.9vw] p-0.5vw">
        <section className="flex mx-[1vw] w-full items-center">
          <span className='text-[1.7vw] xl:text-vw lg:text-vw md:text-vw font-semibold'>{time}</span>
         {promo && <span className='text-[0.8vw] xl:text-[0.6vw] lg:text-[0.6vw] md:text-[0.6vw] ml-vw xl:ml-[2vw] lg:ml-[2vw] md:ml-[2vw] rounded-full text-white bg-[#092370] p-0.4vw w-fit font-medium'>{promo}</span>}
        </section>
        <p className='text-[1.5vw] text-center w-full font-semibold'>${price}/month</p>
      </div>
    </main>
  )
}
const Subscriptions = () => {
  return (
    <main className='w-full'>
      <DashboardContainer>
        <article className="w-full">
          <div className="col-center p-2vw w-full">
            <section className="flex items-center">
              <img src="/img/rocket_1.png" alt="upgrade" className='w-4vw xl:w-2vw lg:w-2vw md:w-2vw' />
              <h1 className='text-3vw xl:text-2vw lg:text-2vw md:text-2vw ml-vw font-semibold'>UPGRADE YOUR PRODUCTABILITY</h1>
            </section>
            <p className='text-[1.7vw] xl:text-vw lg:text-vw md:text-vw text-black mt-0.5vw font-medium'>The free version includes <span className='text-[#092370] font-semibold'>unlimited</span> projects and members</p>
            <main className="w-full mt-vw max-w-[60vw] xl:max-w-[50vw] lg:max-w-[50vw] md:max-w-[50vw] border-[0.1vw] rounded-[1.3vw] p-vw">
              <div className="flex items-center">
                <BilledCard time={'Billed Yearly'} price={'12,500'} promo={'Best value'} icon={<Icon icon="fa-solid:crown" />} />
                <BilledCard time={'Billed Yearly'} price={'25,500'} />
                <BilledCard time={'Billed Yearly'} price={'50,500'} />
              </div>
              <section className="flex items-center justify-between mt-vw">
                <img src="/img/logo3.png" alt="spacemaster" className='w-12vw object-cover xl:w-8vw lg:w-8vw md:w-8vw' />
                <p className='text-[1.7vw] xl:text-vw lg:text-vw md:text-vw text-gray-400 font-semibold'>5 Team Members</p>
              </section>
              <p className='text-[1.3vw] mt-vw ml-0.5vw text-[#092370] font-bold'>Add promo code</p>
              <section className="flex items-center justify-between mt-vw ml-0.5vw">
                <p className='text-[1.7vw] xl:text-vw lg:text-vw md:text-vw text-gray-400 font-semibold'>Other services:</p>
                <p className='text-[1.7vw] xl:text-vw lg:text-vw md:text-vw text-gray-400 font-semibold'>$12,480.00</p>
              </section>
              <section className="flex border-b-[0.1vw] pb-[0.5vw] items-center justify-between mt-vw ml-0.5vw">
                <p className='text-[1.7vw] xl:text-vw lg:text-vw md:text-vw text-gray-400 font-semibold'>Due in 14 days</p>
                <p className='text-[1.7vw] xl:text-vw lg:text-vw md:text-vw text-gray-400 font-semibold'>$14,480.00</p>
              </section>
              <section className="flex items-center justify-between mt-vw ml-0.5vw">
                <p className='text-[1.7vw] xl:text-vw lg:text-vw md:text-vw text-[#092370] font-semibold'>Total:</p>
                <p className='text-[1.7vw] xl:text-vw lg:text-vw md:text-vw text-[#092370] font-semibold'>$14,480.00</p>
              </section>
              <section className="flex items-center justify-between mt-vw ml-0.5vw">
                <p className=' text-gray-400'>
                  <span className='font-semibold text-[1.5vw] capitalize'>Payment Method</span> <br />
                  <span className='text-[1.7vw] xl:text-vw lg:text-vw md:text-vw'>All transactions are secure and encrypted.</span>
                </p>
                <p className='text-[1.7vw] xl:text-vw lg:text-vw md:text-vw flex items-center text-gray-400 font-semibold'><Icon icon="bx:lock" className='text-[1.3vw]' />Secure Checkout</p>
              </section>
              <section className="flex items-center w-full p-[0.7vw] rounded-[0.7vw] bg-[#F5F5F5] justify-between mt-vw ml-0.5vw">
               <div className="flex items-center w-full max-w-[25vw]">
               <Icon icon="solar:card-outline" className='text-[1.5vw]' />
               <input type="text" className='bg-inherit border-none text-[1.5vw] xl:text-vw lg:text-vw md:text-vw w-full max-w-[25vw] focus:outline-none ml-vw' />
               </div>
                <p className='text-[1.7vw] xl:text-vw lg:text-vw md:text-vw flex items-center text-gray-400 font-semibold'>
                  <span className='text-[1.7vw] xl:text-vw lg:text-vw md:text-vw'>MM / YY</span>
                  <span className='text-[1.7vw] xl:text-vw lg:text-vw md:text-vw ml-2vw'>CVC</span>
                </p>
              </section>
              <button className='bg-[#092370] mt-vw ml-0.5vw text-white font-semibold text-[1.5vw] xl:text-vw lg:text-vw md:text-vw uppercase rounded-[0.7vw] p-[0.5vw] w-fit'>Subscribe Now</button>
            </main>
            <p className='text-[1.3vw] xl:text-[0.8vw] lg:text-[0.8vw] md:text-[0.8vw] mt-vw text-gray-400 text-center'>Continue with our free version</p>
            <p className='text-[1.3vw] xl:text-[0.8vw] lg:text-[0.8vw] md:text-[0.8vw] mt-vw text-gray-400 text-center'>By continuing, you are agreeing to our membership terms. You will automatically charge at the end of <br /> 
            the 14-day trial period. <br />Have question? visit our Help Center or Contact Us</p>
          </div>
        </article>
      </DashboardContainer>
    </main>
  )
}

export default Subscriptions
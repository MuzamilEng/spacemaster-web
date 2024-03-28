import { Icon } from '@iconify/react'
import React from 'react'
import { Link } from 'react-router-dom'

const ActiveSubscription = ({title, price, selectedPackage, info, headingColor, textColor, blueBg}) => {
  return (
    <article className={`w-full max-w-[40vw] xl:max-w-[26vw] lg:max-w-[26vw] md:max-w-[26vw] bg-[#F5F5F5] hover:shadow-xl shadow-md p-2vw rounded-[2vw]`}>
      <div className="border-b-[1px] p-0.5vw border-gray-400 w-full">
        <h1 className={`${headingColor} text-[2vw] w-full xl:text-[1.5vw] lg:text-[1.5vw] md:text-[1.5vw] font-bold`}>{title}</h1>
      </div>
      <section className='p-0.5vw border-b-[1px] border-gray-400'>
        <p className={` w-full p-[0.5vw] text-[1.5vw]  xl:text-[1.5vw] lg:text-[1.5vw] md:text-[1.5vw] font-bold`}>{selectedPackage}</p>
        <p className={`${textColor} text-[2vw] xl:text-[1.5vw] lg:text-[1.5vw] md:text-[1.5vw] flex items-center font-bold`}><Icon icon="flowbite:dollar-solid" className={`${textColor} text-[2vw]  xl:text-[1.5vw] lg:text-[1.5vw] md:text-[1.5vw] font-bold`} />{price}</p>
      </section>
      <div className="mt-[1vw]">
        {info && info?.map((item, index)=> <p key={index} className={`${textColor} p-[0.7vw] text-[1.5vw]  xl:text-[1vw] lg:text-[1vw] md:text-[1vw] font-medium`}>{item}</p>)}
      <div className="row-center mt-[1vw] w-full">
      <Link to="/payment" className='w-full'>
      <button className={`${blueBg} w-full max-w-[12vw] xl:max-w-[8vw] bg-[#092370] hover:bg-[#092370f3] text-white lg:max-w-[8vw] md:max-w-[8vw] p-[1vw] mt-vw rounded-full  text-[1.5vw]  xl:text-[1vw] lg:text-[1vw] md:text-[1vw] font-medium`}>Get Started</button>
        </Link>
        <Link to="/payment" className='w-full ml-2vw'>
      <button className={`${blueBg} w-full max-w-[12vw] xl:max-w-[8vw] bg-[#EA4D67] hover:bg-[#ea4d67fa] text-white lg:max-w-[8vw] md:max-w-[8vw] p-[1vw] mt-vw rounded-full text-[1.5vw]  xl:text-[1vw] lg:text-[1vw] md:text-[1vw] font-medium`}>Cancel</button>
        </Link>
      </div>
      </div>
    </article>
  )
}


export default ActiveSubscription
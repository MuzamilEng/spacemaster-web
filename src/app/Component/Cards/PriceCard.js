import { Icon } from '@iconify/react'
import React from 'react'
import { Link } from 'react-router-dom'

const PriceCard = ({title, popular, price, billed, info, bgColor, headingColor, textColor, blueBg, icon}) => {
  return (
    <article className={`w-full relative h-[55vw] xl:h-[45vw] lg:h-[45vw]  md:h-[45vw]  max-w-[30vw] xl:max-w-[23vw] lg:max-w-[23vw] md:max-w-[23vw] ${bgColor} hover:shadow-xl shadow-md p-2vw rounded-[2vw]`}>
      <div className="flex relative -mt-vw m-0.5vw p-vw border-b-[1px] border-gray-400 w-full justify-between items-center">
        {icon && <span className='absolute -top-[0.5vw] xl:top-[0vw] lg:top-[0vw] md:top-[0vw] text-[#FBB227] text-[1.5vw]  xl:text-[1vw] lg:text-[1vw] md:text-[1vw]'>{icon}</span>}
        <h1 className={`${headingColor} text-[2vw]  xl:text-[1.5vw] lg:text-[1.5vw] md:text-[1.5vw] font-bold`}>{title}</h1>
        {popular && <p className={`bg-white p-[0.5vw] rounded-[1.3vw] w-full max-w-[7vw] xl:max-w-[6vw] lg:max-w-[6vw] md:max-w-[6vw] text-center text-black font-semibold text-[1.5vw]  xl:text-[1vw] lg:text-[1vw] md:text-[1vw]`}>{popular}</p>}
      </div>
      <section className='m-0.5vw p-vw col-center border-b-[1px] border-gray-400'>
        <p className={`${textColor} text-[2vw]  xl:text-[2.5vw] lg:text-[1.5vw] md:text-[1.5vw] flex items-center font-bold`}>{price}</p>
        <p className={`${blueBg} w-full p-[0.5vw] mt-vw rounded-full ${title === 'Premium' ? 'text-black' : 'text-white'} text-[1.5vw]  xl:text-[1vw] lg:text-[1vw] md:text-[1vw] text-center font-medium`}>Billed as {billed} per month</p>
      </section>
      <div className="">
        {info && info?.map((item, index)=> (
          <div style={{ display: 'flex', alignItems: 'center'}}>
          <Icon icon="lets-icons:check-fill" style={{ color: title === 'Premium' ? '#fff' : '#228B22', fontSize: 25, flexShrink: 0 }} />
          <p key={index} className={`${textColor} p-0.5vw text-[1.5vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw]`}>{item}</p>
        </div>
          
        ))}
        <Link to="/payment" className='w-full absolute bottom-vw right-[0.2vw] row-center'>
      <button className={`${blueBg} w-full max-w-[12vw] xl:max-w-[8vw] lg:max-w-[8vw] md:max-w-[8vw] p-[1vw] mt-vw rounded-full ${title === 'Premium' ? 'text-black hover:bg-gray-200' : 'text-white hover:bg-[#092370e7]'} text-[1.5vw]  xl:text-[1vw] lg:text-[1vw] md:text-[1vw] font-medium`}>Get Started</button>
        </Link>
      </div>
    </article>
  )
}

export default PriceCard
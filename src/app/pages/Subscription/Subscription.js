import React from 'react'
import { subscription, willGet } from '../../data';
import PriceCard from '../../component/Cards/PriceCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "../../component/Common/Hero";
import Container from '../../container'

const Subscription = () => {

  return (
    <main className='w-full'>
      <Container>
       <Hero title={"Exclusive Tech Team"}
          info={"Elevate your project execution with SpaceMaster. Subscribe today and transform your digital strategy with a dedicated team that’s committed to your success."}
          btn={'Join Our Team'}
          />  
      <main className="row-center relative mt-2vw m-auto w-full max-w-[85vw]">
          <article className="w-full z-20">
          <h1 className='text-[2vw] text-black font-bold'>Subscription plan</h1>
          <div className="grid grid-cols-3 gap-3 w-full p-2vw">
            {subscription?.map((card, index) => <PriceCard key={index} {...card} />)}
          </div>
          </article>
        </main>
        <article className="col-center mt-2vw m-auto w-full max-w-[85vw]">
          <div className="grid grid-cols-3 w-full place-content-center place-items-center gap-3">
            {willGet?.slice(0,3).map((card, index) => (
               <main className={`w-full h-[15vw] max-w-[25vw] p-[1vw] rounded-md border-[1px] `} key={index}>
               <img src={card?.icon } alt={card?.title} className='w-full max-w-[3vw]' />
               <h1 className="text-[#092370] mt-[0.5vw] text-[1.5vw] font-bold">{card?.title}</h1>
               <p className="text-gray-600 w-full max-w-[20vw] text-[1vw] font-medium">{card?.info}</p>
             </main>
            ))}
          </div>
        </article>
        <article className="col-center mx-auto mt-2vw mb-3vw w-full max-w-[55vw]">
          <div className="grid grid-cols-2 w-full place-content-center place-items-center gap-3">
            {willGet?.slice(3, 5).map((card, index) => (
               <main className={`w-full h-[15vw] max-w-[25vw] p-[1vw] rounded-md border-[1px] `} key={index}>
               <img src={card?.icon } alt={card?.title} className='w-full max-w-[3vw]' />
               <h1 className="text-[#092370] mt-[0.5vw] text-[1.5vw] font-bold">{card?.title}</h1>
               <p className="text-gray-600 w-full max-w-[20vw] text-[1vw] font-medium">{card?.info}</p>
             </main>
            ))}
          </div>
        </article>
      
      </Container>
    </main>
  )
}

export default Subscription
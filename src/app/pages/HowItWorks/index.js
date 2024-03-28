import React from 'react'
import Container from '../../container'
import Hero from '../../component/Common/Hero'
import { about_works, benifits, getStarted, hiringProcess14, hiringProcess58 } from '../../data'
import ApproachCard from '../../component/Cards/ApproachCard'

const HowItWorks = () => {
  return (
    <main className='w-full'>
      <Container>
        <main className="row-center m-auto w-full">
          <Hero title={'Get senior remote Professionals Team'}
          info={'We connect you with trusted remote Professionalss so you stop wasting time on bad hires. Only the top 2.3% pass our Silicon Valley-caliber interview process. Hire in days, not months.'}
          btn={'Get started'} url={'/login'}
          />
        </main>
        <main className="col-center mt-2vw m-auto max-w-[90vw] w-full">
        <h1 className='text-[2.5vw] xl:text-[2vw] lg:lg:text-[2vw] md:text-[2vw] text-center text-black capitalize font-bold'>The SpaceMaster Blueprint</h1>
        <p className='text-[#999999] mt-vw text-[1.5vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] w-full max-w-[45vw] xl:max-w-[38vw] lg:max-w-[38vw] md:max-w-[38vw] text-center'>
          Step into a world where only the top 2.3% of talent makes the cut. 
          That's right, we've got the crème de la crème of tech brains, ready to jump into 
          your team faster than you can say "deadline."

        </p>
        <div className="relative">
          <div className="w-full mt-vw -ml-3vw">
            <img src="/img/about_img.png" alt="process" className='w-full' />
          </div>
          <div className="col-center absolute top-vw p-2vw">
            {about_works?.map((card, index) => <ApproachCard key={index} {...card} />)}
          </div>
           </div>
        </main>
        <p className="w-full bg-[#021B9C] col-center mt-2vw p-3vw">
        <span className='text-white text-[3vw] xl:text-[2.5vw] lg:lg:text-[2.5vw] md:text-[2.5vw] font-semibold max-w-[40vw] text-center'>How it works to Build your business app with your own software team</span>
        </p>
        <main className="col-center p-2vw mt-2vw m-auto max-w-[90vw] w-full">
          <h1 className='text-[#092370] font-bold text-[2vw] xl:text-[1.5vw] lg:lg:text-[1.5vw] md:text-[1.5vw] w-full text-center max-w-[25vw] xl:max-w-[20vw] lg:max-w-[20vw] md:max-w-[20vw]'>Hire Great Professionalss 4x Faster</h1>
          <section className="flex relative border-b-[2px] pb-[4vw] border-gray-200 items-start">
          <p className='text-[#092370] absolute top-3vw left-[20.5vw] mx-[3vw] mt-vw font-medium text-[2vw] xl:text-[1.5vw] lg:lg:text-[1.5vw] md:text-[1.5vw]'>VS</p>
            <div className="col-center p-vw w-full max-w-[40vw]">
              <div className="w-[20vw]">
                <img src="/img/logo_crown.png" alt="process" className='w-full' />
              </div>
              <h1 className='text-[1.5vw] xl:text-[1.2vw] lg:lg:text-[1.2vw] md:text-[1.2vw] mt-vw font-semibold text-black'>~ 14 days</h1>
              <p className='text-[#666666] text-vw'>Average for permanent full-time roles</p>
              <div className="w-full col-center">
                {hiringProcess14?.map((item, index) => (
                  <div key={index} className="col-center p-vw w-full bg-white shadow-md border-[1px] rounded-md m-vw text-center max-w-[40vw]">
                    <p className='text-[#666666]'>{item.days}</p>
                    <h1 className={`text-[1.5vw] xl:text-[1.2vw] lg:lg:text-[1.2vw] md:text-[1.2vw] font-semibold ${item?.titleColor}`}>{item.title}</h1>
                  </div>
                ))}
              </div>
              <img src="/img/find.png" alt="hired" className='w-full max-w-[15vw] mt-9vw' />
            </div>
            <div className="col-center p-vw w-full max-w-[50vw] ml-3vw">
              <p className='text-[#666666] bg-[#E6E6E6] text-[1.3vw] mt-[2vw] w-full max-w-[35vw] p-[0.8vw] rounded-[0.5vw]'>Your Traditional Hiring Process</p>
            <h1 className='text-[1.5vw] xl:text-[1.2vw] lg:lg:text-[1.2vw] md:text-[1.2vw] mt-vw font-semibold text-black'>~ 58 days</h1>
              <p className='text-[#666666] text-vw'>According to Workable</p>
              <div className="w-full col-center">
                {hiringProcess58?.map((item, index) => (
                  <div key={index} className="row-center p-vw w-full bg-white shadow-md border-[1px] rounded-md m-vw text-center max-w-[50vw]">
                    <p className='text-[#666666] w-full max-w-[6vw] text-[1.5vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] mr-vw'>{item.days}</p>
                    <h1 className={`text-[1.5vw] w-full xl:text-[1.2vw] lg:lg:text-[1.2vw] md:text-[1.2vw] font-semibold ${item?.titleColor}`}>{item.title}</h1>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <article className='row-center p-2vw mt-2vw m-auto max-w-[90vw] w-full'>
          <section className=" grid grid-cols-2 gap-[5vw]">
            {benifits?.map((item, index)=> (
              <div className="w-full max-w-[40vw]" key={index}>
                <section className="flex items-center">
                <img src={item?.img} alt={item?.title} className='w-full max-w-[4vw]' />
                <h1 className='text-[2vw] xl:text-[1.5vw] lg:lg:text-[1.5vw] md:text-[1.5vw] ml-vw text-[#092370] font-bold'>{item?.title}</h1>
                </section>
                <div className="mt-vw">
                {item?.lists?.map((list, index) => (
                  <li className='flex items-center list-disc text-[1.5vw] lg:text-[1vw] mg:text-[1vw]' key={index}>
                    <li className='mr-[1vw] list-disc'></li>
                    <span className='w-full max-w-[25vw]'>{list}</span>
                  </li>
                ))}
                </div>
              </div>
            ))}
          </section>
        </article>
        <main className="col-center relative p-2vw mt-2vw m-auto max-w-[90vw] w-full">
          <h1 className='text-[2.5vw] xl:text-[2vw] lg:lg:text-[2vw] md:text-[2vw] text-center text-black capitalize font-bold'>How to Get Started with SpaceMaster</h1>
            <div className="border-[2px] border-[#E5EEFF] w-full max-w-[50vw] mt-[9vw]  absolute"></div>
          <div className="mt-2vw grid grid-cols-3 gap-[3vw]">
            {getStarted?.map((item, index)=> (
              <div className="w-full col-center max-w-[35vw] p-vw" key={index}>
                <img src={item?.img} alt={item?.title} className='w-full max-w-[20vw]' />
                <h1 className='text-[1.8vw] w-full xl:text-[1.2vw] lg:lg:text-[1.2vw] md:text-[1.2vw] text-center capitalize text-black mt-vw font-bold'>{item?.title}</h1>
                <p className='text-[1.5vw] xl:text-[1.2vw] lg:lg:text-[1.2vw] md:text-[1.2vw] w-full mt-vw max-w-[15vw] text-center text-gray-500'>{item?.info}</p>
              </div>
            ))}
          </div>
        </main>
        <section className="w-full p-6vw bg-[#092370] col-center">
          <img src="/img/logo_white.png" alt="spacemaster" className='w-full max-w-[14vw] xl:max-w-[9vw] lg:max-w-[9vw] md:max-w-[9vw]' />
          <h1 className='text-[3vw] mt-2vw text-center text-white capitalize font-bold'>Tired of the Hiring Fuss</h1>
          <p className='text-[#999999] mt-vw text-[1.5vw] xl:text-[1.2vw] lg:lg:text-[1.2vw] md:text-[1.2vw] w-full max-w-[38vw] text-center'>
              Step into a world where only the top 2.3% of talent makes the cut. 
              That's right, we've got the crème de la crème of tech brains, ready to jump into your 
              team faster than you can say "deadline."

          </p>
          <button className='text-[1.5vw] xl:text-[1.2vw] lg:lg:text-[1.2vw] md:text-[1.2vw] text-back p-[0.7vw] rounded-[0.5vw] font-semibold mt-2vw w-full max-w-[10vw] text-center bg-[#FBB227] hover:bg-[#fbb127e7]'>Order Team</button>
        </section>
      </Container>
    </main>
  )
}

export default HowItWorks
import React from 'react'
import Container from '../../container'
import Hero from '../../Component/Common/Hero'
import { Languages, achievements, ratings, solveproblem } from '../../Data'
import HelpCard from '../../Component/Cards/HelpCard'
import AchievementCard from '../../Component/Cards/AchievementCard'

const About = () => {
  return (
    <main className='w-full'>
      <Container>
        <main className="row-center m-auto w-full">
          <Hero title={'Empowering Your Digital Journey'}
          info={"At SpaceMaster, we're more than just a tech company; we're your partners in shaping the future. Born from a vision to lead and innovate, we've quickly become the go-to ally for businesses worldwide, from bustling startups to global giants"}
          btn={'Contact Us'} url={'/contact'}
          />
        </main>
        <main className="col-center mt-2vw m-auto max-w-[90vw] w-full">
        <h1 className='text-[2.5vw] xl:text-[2vw] lg:lg:text-[2vw] md:text-[2vw] text-black font-bold'>To drive your business value <span className='text-[#092370]'>sky-high</span></h1>
        <div className="grid grid-cols-3 p-3vw w-full gap-3">
            {solveproblem?.map((card, index) => <HelpCard key={index} {...card} />)}
          </div>
        </main>
        <img src="/img/quote.png" alt="quote" className='w-full -mt-[2vw]' />
       <main className="row-center bg-[#F8F8F8] mt-2vw w-full">
        <h1 className='text-[3vw] xl:text-[3vw] lg:lg:text-[3vw] md:text-[3vw] text-black w-full max-w-[30vw] ml-2vw font-bold'>Achievements and <br /><span className='text-[#092370]'>Awards</span></h1>
        <div className="grid grid-cols-4 p-3vw w-full">
            {achievements?.map((card, index) => <AchievementCard key={index} {...card} />)}
          </div>
        </main>
        <main className="bg-[#f8f8f8] mt-2vw m-auto max-w-[90vw] w-full">
          <div className="p-3vw w-full">
            {Languages?.map((item, index)=> (
              <section className='w-full' key={index}>
                <h1 className='text-[2vw] xl:text-[1.5vw] lg:lg:text-[1.5vw] md:text-[1.5vw] mt-vw text-[#092370] font-bold'>{item?.title}</h1>
                <article className="flex mt-vw w-full">
                  <main className="flex -ml-2vw">
                    {item?.info?.map((infos, index2) =>(
                      <section key={index2} className='ml-2vw'>
                        <h1 className='text-[1.5vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] mb-[0.3vw] text-[#092370] font-medium'>{infos?.title}</h1>
                       <section className="flex items-center">
                       <div className="flex  bg-white">
                       {infos?.info?.map((img, index3) => <div key={index3} className='border-[0.5px] border-gray-100 p-[1.5vw] max-w-[12vw] h-[8vw] xl:h-[6vw] lg:h-[6vw] md:h-[6vw]'>
                      <img src={img?.img} className='w-full hover:bg-gray-100 cursor-pointer' />
                      </div>)}
                       </div>
                       {/* {infos?.icon && <div className='text-white row-center cursor-pointer hover:bg-[#092370e5] text-center w-full bg-[#092370] text-[1.4vw] max-w-[4vw] h-[6vw] '><span className='text-center'>{infos?.icon}</span></div>} */}
                       </section>
                      </section>
                    ))}
                  </main>
                </article>
              </section>
            ))}
          </div>
        </main>
        <main className="col-center mt-2vw bg-[#092370] p-4vw w-full">
          <div className="flex items-center w-full max-w-[80vw]">
            {ratings?.map((rat, index) => <section className="rounded-full -ml-[1vw] border-[1px] w-[17vw] h-[17vw] col-center border-white" key={index}>
              <p className="text-[4vw] text-center text-[#FBB227] font-bold">{rat?.title}</p>
              <p className="text-[1.2vw] text-center w-full text-white">{rat.info}</p>
            </section>)}
          </div>
        </main>
      </Container>
    </main>
  )
}

export default About
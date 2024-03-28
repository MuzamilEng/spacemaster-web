import React from 'react'
import Container from '../../container'
import { Icon } from '@iconify/react'
import { approach, expertise, helpCards, howitworks, partners, profiles, subscription, toggleInfo, whyChoose } from '../../Data'
import HelpCard from '../../component/Cards/HelpCard'
import ApproachCard from '../../component/Cards/ApproachCard'
import PriceCard from '../../component/Cards/PriceCard'
import ProfileCard from '../../component/Cards/ProfileCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Questions from '../../component/Queries/Questions'
import { Link } from 'react-router-dom'

const Home = () => {
  const settings = { dots: true, arrows: false, infinite: false, speed: 500, slidesToShow: 3, slidesToScroll: 3, autoplay: true, autoplaySpeed: 3000 };

  return (
    <main className='w-full'>
      <Container>
        <main className="row-center m-auto w-full max-w-[90vw]">
        <article className="w-full flex justify-between items-start p-[2vw] bg-white">
          <section className="w-full max-w-[45vw] p-[1vw]">
            <h1 className="text-[2vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] text-[#1B1B1B] font-medium capitalize">Dedicated Service</h1>
            <div className="border-b-[0.6vw] rounded-lg w-[5vw] border-[#092370]"></div>
            <p className="w-full max-w-[40vw] mt-[2vw] capitalize text-[#1B1B1B] leading-[4.5vw] text-[4vw] font-bold ">

              Build Your <br/><span className='text-[#092370]'>Business App</span> With <br/> your own  <br/>

              <span className='text-[#092370]'>Software Team</span>
            </p>
            <Link to="/login">
            <button className="w-full max-w-[10vw] flex items-center text-[2vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] justify-center hover:bg-white hover:text-[#092370] border-[2px] mt-[2vw] bg-[#092370] text-white p-[0.8vw] rounded-[0.5vw] font-medium">Get started <Icon icon="formkit:arrowright" /></button>
            </Link>
          </section>
          <section className="w-full -ml-[3vw] relative max-w-[40vw]">
              <img src="/img/hero_img.png" alt="home" className="w-full" />
          </section>
        </article>
        </main>
        <article className="row-center m-auto w-full max-w-[85vw]">
          <section className="flex w-full justify-between">
            <div className="w-full">
              <h1 className='text-[2.5vw] xl:text-[2vw] lg:lg:text-[2vw] md:text-[2vw] font-bold text-[#1B1B1B]'>Why SpaceMaster?</h1>
              <p className="text-[2vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] text-[#1B1B1B]">Hard-to-fill tech positions are no longer an issue!</p>
            </div>
            <div className="w-full max-w-[12vw] flex items-center">
            <button className='text-[2vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] bg-white border-[1.5px] text-gray-500 p-[0.6vw] rounded-[0.5vw] font-medium'>prev</button>
            <button className='text-[2vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] ml-[2vw] bg-[#092370] text-white p-[0.6vw] rounded-[0.5vw] font-medium'>next</button>
            </div>
          </section>
        </article>
        <article className="row-center mt-2vw m-auto w-full max-w-[85vw]">
          <div className="grid grid-cols-3 w-full gap-3">
            {helpCards?.map((card, index) => <HelpCard key={index} {...card} />)}
          </div>
        </article>
        <section className="flex justify-between items-center mt-2vw p-[2vw] rounded-lg bg-[#092370] m-auto w-full max-w-[85vw]">
          <div className="w-full max-w-[50vw]">
            <h1 className='text-[2.5vw] xl:text-[2vw] lg:lg:text-[2vw] md:text-[2vw] font-bold text-white'>Choose Excellence. Choose SpaceMaster.</h1>
            <p className="text-[2vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] text-white w-full max-w-[47vw] xl:max-w-[42vw] lg:max-w-[42vw] md:max-w-[42vw]">

              Ready to transform your software development journey? Let's get started with SpaceMaster.
            </p>
          </div>
          <Link to='/login' className=''>
          <button className="w-full flex items-center text-[2vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] justify-center max-w-[16vw] xl:max-w-[10vw] lg:max-w-[9vw] md:max-w-[9vw] mt-[2vw] bg-white border-[2px] text-[#092370] hover:bg-[#092370] hover:text-white p-[0.5vw] rounded-[0.5vw] font-semibold">Get started <Icon icon="formkit:arrowright" className='text-vw ml-0.5vw' /></button>
          </Link>
        </section>
        <figure className="flex items-start justify-center w-full mt-2vw p-[4vw] bg-[#1B1B1B]">
          <div className="w-full max-w-[30vw]">
            <h1 className='text-[2.5vw] xl:text-[2vw] lg:lg:text-[2vw] md:text-[2vw] w-full max-w-[30vw] xl:max-w-[25vw] lg:max-w-[25vw] md:max-w-[25vw] leading-[2.5vw] font-bold text-white'>How SpaceMaster Dedicated Team works?</h1>
            <p className="text-[2vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] text-white w-full mt-[0.7vw] max-w-[25vw] xl:max-w-[25vw] lg:max-w-[25vw] md:max-w-[25vw]">We'll seamlessly integrate software experts, enabling you to quickly increase your development capabilities.</p>
            <Link to="/join">
            <button className="w-full flex text-[2vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] border-[2px] border-[#092370] items-center justify-center max-w-[22vw] xl:max-w-[12vw] lg:max-w-[12vw] md:max-w-[12vw] mt-[2vw] hover:bg-white hover:text-[#092370] bg-[#092370] text-white p-[0.5vw] rounded-[0.5vw] capitalize font-semibold">Build your team <Icon icon="formkit:arrowright" /></button>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full max-w-[50vw]">
            {howitworks?.map((card, index) => (
              <main className={`w-full ${card?.no ? 'bg-[#1B1B1B]' : card?.title === 'Full Transperency' ? 'bg-[#092370]' : ''} h-[25vw] xl:h-[15vw] lg:h-[15vw] md:h-[15vw] max-w-[30vw] xl:max-w-[25vw] lg:max-w-[25vw] md:max-w-[25vw] p-[1vw] rounded-[0.5vw] ${card?.title !== '' && 'border-[1px]'}`} key={index}>
               {card?.no &&  <span className="text-white hidden xl:block lg:block md:block text-[1.5vw] ml-[1vw] font-bold">{card?.no}</span>}
                <img src={card?.icon } alt={card?.title} className='w-full max-w-[3vw]' />
                <h1 className="text-white mt-[0.5vw] text-[2.2vw] xl:text-[1.5vw] lg:lg:text-[1.5vw] md:text-[1.5vw] font-bold">{card?.title}</h1>
                <p className="text-white w-full xl:max-w-[20vw] lg:max-w-[20vw] md:max-w-[20vw] text-[1.7vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] font-medium">{card?.info}</p>
              </main>
            ))}
          </div>
        </figure>
        <main className="row-center relative mt-2vw m-auto w-full max-w-[85vw]">
          <div className="border-[1px] border-gray-400 z-10 absolute top-[10vw] w-full max-w-[65vw] border-dashed rounded-2xl p-vw h-[27vw]"></div>
          <section className="w-full col-center absolute top-[20vw] left-[8vw] bg-white z-20 max-w-[4vw]">
            <img src="/img/star.png" alt="stars" className='w-full' />
            <h1 className='text-[2vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] mt-vw font-bold'>CLIENT</h1>
          </section>
          <section className="w-full col-center absolute top-[20vw] right-[8vw] bg-white z-20 max-w-[4vw]">
            <img src="/img/team2.png" alt="stars" className='w-full' />
            <h1 className='text-[2vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] mt-vw font-bold'>TEAM</h1>
          </section>
          <article className="w-full z-20">
          <h1 className='text-[2.5vw] xl:text-[2vw] lg:lg:text-[2vw] md:text-[2vw] text-black font-bold'>Our Customer <span className='text-[#092370]'>Centric Approach</span></h1>
          <div className="col-center p-2vw">
            {approach?.map((card, index) => <ApproachCard key={index} {...card} />)}
          </div>
          </article>
        </main>
        <main className="row-center relative mt-2vw m-auto w-full max-w-[90vw] xl:max-w-[85vw] lg:max-w-[85vw] md:max-w-[85vw]">
          <article className="w-full z-20">
          <h1 className='text-[2.5vw] xl:text-[2vw] lg:lg:text-[2vw] md:text-[2vw] text-black font-bold'>Avail <span className='text-[#092370]'>Subscription</span></h1>
          <div className="grid grid-cols-3 gap-3 w-full p-2vw">
            {subscription?.map((card, index) => <PriceCard key={index} {...card} />)}
          </div>
          </article>
        </main>
        <main className="row-center relative mt-2vw m-auto w-full max-w-[90vw] xl:max-w-[85vw] lg:max-w-[85vw] md:max-w-[85vw]">
          <article className="w-full z-20">
          <h1 className='text-[2vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] text-center uppercase text-[#092370] font-medium'>Testimonials</h1>
          <h1 className='text-[2.5vw] xl:text-[2vw] lg:lg:text-[2vw] md:text-[2vw] text-center text-black font-bold'>What Clients Express?</h1>
          <div className="grid grid-cols-1 w-full mt-[4vw]">
            <Slider {...settings}>
            {profiles?.map((card, index) => <ProfileCard key={index} {...card} />)}
            </Slider>
          </div>
          </article>
        </main>
        <main className="row-center relative mt-2vw m-auto w-full max-w-[90vw] xl:max-w-[85vw] lg:max-w-[85vw] md:max-w-[85vw]">
          <article className="w-full z-20">
          <h1 className='text-[2.5vw] xl:text-[2vw] lg:lg:text-[2vw] md:text-[2vw] text-black font-bold'>Which expertise will drive <span className='text-[#092370]'>your vision?</span></h1>
           <div style={{color: 'rgba(0, 0, 0, 0.20)'}} className="w-[0.1vw] z-10 -top-[10vw] xl:-top-[5.5vw] lg:-top-[7vw] md:-top-[5.5vw] left-[2vw] xl:left-[2vw] lg:left-[2vw] md:left-[1.5vw] absolute h-[34vw] xl:h-[23vw] lg:h-[25vw] md:h-[25vw] bg-[#50575E] translate-y-[50%]"></div>
           <div style={{color: 'rgba(0, 0, 0, 0.20)'}} className="w-[0.1vw] z-10 -top-[10vw] xl:-top-[5.5vw] lg:-top-[7vw] md:-top-[5.5vw] left-[25vw] xl:left-[23.4vw] lg:left-[23.4vw] md:left-[23.4vw]  absolute h-[34vw] xl:h-[23vw] lg:h-[25vw] md:h-[25vw] bg-[#50575E] translate-y-[50%]"></div>
           <div style={{color: 'rgba(0, 0, 0, 0.20)'}} className="w-[0.1vw] z-10 -top-[10vw] xl:-top-[5.5vw] lg:-top-[7vw] md:-top-[5.5vw] left-[48.5vw] xl:left-[44.78vw] lg:left-[45vw] md:left-[45vw] absolute h-[34vw] xl:h-[23vw] lg:h-[25vw] md:h-[25vw] bg-[#50575E] translate-y-[50%]"></div>
           <div style={{color: 'rgba(0, 0, 0, 0.20)'}} className="w-[0.1vw] z-10 -top-[10vw] xl:-top-[5.5vw] lg:-top-[7vw] md:-top-[5.5vw] left-[71.7vw] xl:left-[66.3vw] lg:left-[66.5vw] md:left-[66.5vw] absolute h-[34vw] xl:h-[23vw] lg:h-[25vw] md:h-[25vw] bg-[#50575E] translate-y-[50%]"></div>
         <div className="grid grid-cols-4 gap-3 w-full z-20">
          {expertise?.map((item, index) => {
            return <main key={index} className='flex items-center z-20'>
              <img src="/img/list_icon.png" alt={item?.title} className='w-full mt-[1vw] max-w-[4vw]' />
              <h1 className='text-[1.5vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] mt-vw text-[#1B1B1B] font-medium'>{item?.title}</h1>
            </main>
          })}
         </div>
         <Link to='/subscription'>
         <button className="w-full text-[2vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] flex items-center justify-center max-w-[13vw] xl:max-w-[9vw] lg:max-w-[9vw] md:max-w-[9vw] hover:bg-white hover:text-[#092370] border-[2px] mt-[2vw] bg-[#092370] text-white p-[0.5vw] rounded-[0.5vw] font-medium">Order Team</button>
         </Link>
          </article>
        </main>
        <main className="col-center relative mt-2vw m-auto w-full max-w-[85vw]">
          <h1 className='text-[2.5vw] xl:text-[2vw] lg:lg:text-[2vw] md:text-[2vw] text-center text-black font-bold'>Frequently Asked Questions</h1>
          <div className="mt-2vw w-full max-w-[60vw]">
                {toggleInfo?.map((item, index) => (
                  <Questions key={index} title={item?.title} info={item?.info} />
                ))}
              </div>
        </main>
        <main className="col-center relative mt-2vw m-auto w-full max-w-[90vw] xl:max-w-[85vw] lg:max-w-[85vw] md:max-w-[85vw]">
        <h1 className='text-[2.5vw] xl:text-[2vw] lg:lg:text-[2vw] md:text-[2vw] text-black text-center font-bold'>Why Choose <span className='text-[#092370]'>SpaceMaster</span> to Hire Teams Professionals</h1>
          <div className="mt-2vw grid grid-cols-3 gap-3 w-full">
                {whyChoose?.map((item, index) => (
                  <main className='col-center w-full max-w-[30vw]' key={index}>
                    <img src={item?.img} alt={item?.title} className='w-full max-w-[12vw] object-cover' />
                    <h1 className='text-[2vw] xl:text-[1.5vw] lg:lg:text-[1.5vw] md:text-[1.5vw] mt-vw text-[#1B1B1B] font-bold'>{item?.title}</h1>
                    <p className='text-[1.5vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] w-full max-w-[15vw] text-center font-medium mt-vw'>{item?.info}</p>
                  </main>
                ))}
              </div>
         <p className="w-full flex items-center justify-center text-gray-500 text-[2vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] mt-[2vw] font-medium">Trusted by leading startups and businesses:</p>
         <div className="flex mt-vw justify-evenly items-center w-full max-w-[60vw]">
          {partners?.map((partners, index) =>(
            <div className="w-full max-w-[5vw]" key={index}><img src={partners?.img} alt="partner" className='w-full' /></div>
          ))}
         </div>
        </main>
      </Container>
    </main>
  )
}

export default Home
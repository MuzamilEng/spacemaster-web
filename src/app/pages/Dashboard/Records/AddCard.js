import React from 'react'
import DashboardContainer from '../../../container/dashboardContainer'
import { Link } from 'react-router-dom'

const AddCard = () => {
  const cards = ['/img/cr_card1.png','/img/cr_card.png', '/img/cr_card.png']
  return (
    <div>
      <DashboardContainer>
        <main className="mt-3vw p-vw">
          <p className='text-[1.7vw] xl:text-[1.3vw] lg:text-[1.3vw] md:text-[1.3vw]'>Card <span className='font-semibold'>Billings</span></p>
          <div className="flex items-center -ml-[1vw] mt-vw w-full">
            {cards?.map((card, i) =>(
               <div key={i} className="w-full max-w-[25vw] cursor-pointer ml-[1vw] rounded-[1.2vw]">
               <img src={card} alt="credit" className='w-full' />
             </div>
            ))}
          </div>
          <Link to="/addrecord">
          <button className='text-white bg-[#092370] p-[0.7vw] text-[1.7vw] xl:text-vw lg:text-vw md:text-vw rounded-[0.6vw] w-fit mt-2vw font-medium hover:bg-[#092370f6]'>Add Payment Card</button>
          </Link>
        </main>
      </DashboardContainer>
    </div>
  )
}

export default AddCard
import React from 'react'
import DashboardContainer from '../../../container/dashboardContainer'
import { notifications } from '../../../Data'

const Notifications = () => {
  return (
    <div>
      <DashboardContainer>
        <article className='w-full p-vw mt-3vw'>
          <h1 className='text-[2.4vw] xl:text-[1.5vw] lg:text-[1.5vw] md:text-[1.5vw] font-bold'>NOTIFICATIONS</h1>
          <div className="mt-vw">
            {notifications?.map((notification, index) => {
              return <main key={index} className='w-full p-vw mt-vw'>
                {notification?.day && <h1 className='text-[1.9vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw] font-semibold'>{notification?.day}</h1>}
                <div className="flex mt-vw items-center">
                  <p className='text-[#EFEFEF] text-[2.4vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw] p-vw cursor-pointer rounded-[0.5vw] bg-[#092370]'>{notification?.icon}</p>
                  <div className=" ml-vw">
                    <p className='text-black font-semibold text-[1.9vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw] '>{notification?.title}</p>
                    <p className='text-gray-400 text-vw'>{notification?.message}</p>
                  </div>
                </div>
              </main>
            })}
          </div>
        </article>
      </DashboardContainer>
    </div>
  )
}

export default Notifications
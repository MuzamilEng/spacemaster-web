import React from 'react'
import DashboardContainer from '../../container/dashboardContainer'
import { projectSummary, yourTeam } from '../../Data'
import ActiveSubscription from '../../component/Cards/ActiveSubscription'

const Dashboard = () => {
  const info = ['Unlimited members', 'Unlimited feedback ', 'Weekly team Feedback Friday  ', 'Custom Kudos +9 illustration ', 'Team feedback history (30 items)']
  return (
    <DashboardContainer>
      <div className="w-full flex flex-col xl:flex xl:flex-row lg:flex lg:flex-row md:flex md:flex-row mt-vw justify-center items-center xl:justify-normal xl:items-start lg:justify-normal lg:items-start md:justify-normal md:items-start p-[2vw]">
      <main className='w-full max-w-[90vw] xl:max-w-[50vw] lg:max-w-[80vw] md:max-w-[80vw] bg-[#F5F5F5] pb-2vw rounded-[1.3vw]'>
        <h1 className='border-b-[1px] text-2vw xl:text-[1.5vw] lg:text-[1.5vw] md:text-[1.5vw] font-semibold mx-vw p-[0.5vw]'>Your Team</h1>
        <div className="mt-vw">
          <div className="flex w-full">
            <p className='text-[2vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw] w-full font-bold text-gray-500 ml-vw max-w-[25vw]'>#Sr</p>
            <p className='text-[2vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw] w-full font-bold text-gray-500 ml-vw max-w-[25vw]'>Name</p>
            <p className='text-[2vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw] w-full font-bold text-gray-500 ml-vw  max-w-[25vw]'>Job Title</p>
          </div>
       {yourTeam?.map((item, index)=> (
         <div className={`w-full p-[0.7vw] ${index !== 5 && 'border-b-[1px]'}  grid grid-cols-3`} key={index}>
           <div className='w-full row-center max-w-[6vw] xl:max-w-[3vw] lg:max-w-[3vw] md:max-w-[3vw] mx-vw'>
             <p className='text-[2vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw]'>{item?.sr_no}</p>
             <img src={item?.img} alt="spaceMaster" className='w-full ml-2vw' />
           </div>
             <p className='text-[1.7vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw] mt-vw w-full font-semibold'>{item?.name}</p>
             <p className='text-[1.6vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw] mt-vw w-full font-semibold'>{item?.job_title}</p>
         </div>
       ))}
        </div>
      </main>
        {/* <section className="w-full flex-col xl:flex lg:flex md:flex items-center justify-center p-vw"> */}
        <div className="w-full ml-[3vw] max-w-[40vw] xl:max-w-[27vw] lg:max-w-[27vw] md:max-w-[27vw] mt-2vw xl:mt-0 lg:mt-0 md:mt-0">
          <ActiveSubscription title={'Your Active Subscription'} selectedPackage={'Premium'} price={'30.99'} info={info} />
          </div>
      </div>
        <section className="w-full p-vw flex flex-col xl:flex xl:flex-row lg:flex lg:flex-row md:flex md:flex-row mt-2vw justify-center items-center xl:justify-normal xl:items-start lg:justify-normal lg:items-start md:justify-normal md:items-start">
          <article className="w-full xl:max-w-[90vw] lg:max-w-[90vw] md:max-w-[90vw] rounded-[1.3vw] bg-[#F5F5F5] p-vw">
            <h1 className='text-[2vw] font-semibold'>Project summary</h1>
            <div className="mt-vw">
            <div className="grid grid-cols-4 gap-[1vw] pb-[0.5vw] border-b-[0.1vw] m-[0.3vw]">
            <p className='text-[1.5vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw] w-full font-bold text-gray-800 '>Name</p>
            <p className='text-[1.5vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw] w-full ml-[5.5vw] font-bold text-gray-800 '>Member</p>
            <p className='text-[1.5vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw] w-full ml-[4vw] font-bold text-gray-800  '>Status</p>
            <p className='text-[1.5vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw] w-full ml-[2vw] font-bold text-gray-800  '>Progress</p>
          </div>
             <section className="w-full mt-vw xl:max-w-[90vw] lg:max-w-[90vw] md:max-w-[90vw] ">
             {projectSummary?.map((item, index)=> (
                <main key={index} className='grid grid-cols-4 items-center gap-[1vw] m-[0.3vw]'>
                  <p className='text-[1.5vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw] w-[25vw] xl:w-[25vw] lg:w-[25vw] md:w-[25vw] font-medium'>{item?.name}</p>
                  <p className='text-[1.5vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw] ml-[5vw] w-[15vw] font-medium'>{item?.member}</p>
                  <p className={`text-[1.5vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw] w-fit rounded-full  ${item?.status === 'Completed' ? 'text-green-500 w-fit p-[0.5vw] bg-green-100' : item?.status === 'Delayed' ? 'text-yellow-500 p-[0.5vw] w-fit bg-yellow-100' : item?.status === 'At risk' ? 'text-red-800 w-fit p-[0.5vw] bg-red-100': 'text-orange-500 p-[0.5vw] w-fit bg-orange-100'} font-medium ml-[3vw]`}>{item?.status}</p>
                  <p className={`text-[0.6vw] text-center flex items-center justify-center w-[3vw] h-[3vw] border-[0.3vw] rounded-full ${item?.status === 'Completed' ? ' p-[0.7vw] border-[.6vw] border-green-600' : item?.status === 'Delayed' ? ' p-[0.7vw] border-[.6vw] border-t-[#E5AE21] border-r-[#E5AE21]' : item?.status === 'At risk' ? ' p-[0.7vw] border-[.6vw] border-r-[#EE201C] border-b-[#EE201C]': ' p-[0.7vw] border-[.6vw] border-r-orange-400 border-b-orange-400 border-t-orange-400'} font-medium ml-[3vw]`}>{item?.progress}</p>
                </main>
              ))}
             </section>
            </div>
          </article>
        </section>
    </DashboardContainer>
  )
}

export default Dashboard
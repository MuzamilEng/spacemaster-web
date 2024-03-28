import React from 'react'

const ProfileCard = ({img, title, info}) => {
  return (
    <main className='w-full max-w-[29vw] xl:max-w-[26vw] lg:max-w-[26vw]  md:max-w-[26vw] h-[30vw] xl:h-[20vw] lg:h-[20vw] md:h-[20vw] m-vw bg-gray-200 p-2vw rounded-[1.3vw]'>
      <div className="w-full z-50 -mt-[3vw] ml-vw max-w-[8vw] rounded-full border-[2px] border-[#092370]">
        <img src={img} alt={title} className='w-full rounded-full' />
      </div>
      <h1 className='text-[1.9vw] xl:text-[1.3vw] lg:lg:text-[1.3vw] md:text-[1.3vw] font-bold text-black mt-vw'>{title}</h1>
      <p className='text-[1.5vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] pb-[2vw] text-black font-medium w-full max-w-[30vw]'>{info}</p>
    </main>
  )
}

export default ProfileCard
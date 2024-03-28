import React from 'react';

export const Chat = ({img, name, msg, time, count}) => {
    return (
      <main className="flex border-b-[0.1vw] hover:bg-gray-100 cursor-pointer w-full max-w-[25vw] justify-between items-center p-vw">
        <section className="w-full hover:bg-gray-100 max-w-[18vw] flex items-center">
          <img src={img} alt={name} className='w-[3vw] h-[3vw] rounded-full' />
          <div className="">
          <p className='text-[1.5vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw] w-full font-bold ml-[1vw]'>{name}</p>
          <p className='text-[1.5vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw] w-full text-gray-400 font-medium ml-[1vw]'>{msg}</p>
          </div>
        </section>
        <section className="w-full col-center max-w-[5vw]">
        <p className='text-[1.5vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw] w-full text-gray-400 font-medium ml-[1vw]'>{time}</p>
        <p className='w-[1.5vw] h-[1.5vw] flex justify-center items-center bg-blue-500 text-center text-white text-[0.5vw] rounded-full'>{count}</p>
        </section>
      </main>
    )
  }
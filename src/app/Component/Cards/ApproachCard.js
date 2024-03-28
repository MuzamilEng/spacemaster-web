import React from 'react'

const ApproachCard = ({bg, title, titleColor, infoColor, info,icon1Text, icon1, icon2Text, icon2 }) => {
  return (
    <main className={`w-full m-vw flex justify-between items-center ${icon1 ? 'max-w-[50vw]' : 'max-w-[40vw]'} ${bg} p-vw rounded-[0.9vw]`}>
      <section className="w-full max-w-[45vw]">
        <h1 className={`text-[2vw] xl:text-[1.5vw] lg:lg:text-[1.5vw] md:text-[1.5vw] ${titleColor} font-bold`}>{title}</h1>
        <p className={`text-[1.5vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] mt-[0.5vw] w-full max-w-[30vw] ${infoColor}`}>{info}</p>
      </section>
      <section className="w-full col-center max-w-[7vw]">
      <img src={icon1} alt={icon1Text} className='w-full max-w-[6vw] xl:max-w-[4vw] lg:max-w-[4vw] md:max-w-[4vw]' />
      <img src={icon2} alt={icon2Text} className='w-full max-w-[6vw] xl:max-w-[4vw] lg:max-w-[4vw] md:max-w-[4vw] mt-[1vw]' />
      </section>

    </main>
  )
}

export default ApproachCard
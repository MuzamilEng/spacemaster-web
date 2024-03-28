import React from 'react'
import { joinTeamForm } from '../../Data';
import Container from '../../container';
import { useForm, Controller } from 'react-hook-form'
import { useState } from 'react'
import Hero from '../../component/Common/Hero';
import { Icon } from '@iconify/react';

const JoinAsTeam = () => {
  const [emailDetails, setEmailDetails] = useState({name: '', phoneNumber: '', email: '', message: ''})
  const  {handleSubmit, control, reset, setValue } = useForm({
      defaultValues: {
          name: '',
          phoneNumber: "",
          email: '',
          message: ''
      }
  })

  const handleInputChange = (e)=> {
      const {name, value} = e.target
      setEmailDetails({...emailDetails, [name]: value})
      setValue(name, value)
  }

  const onSubmit = (data) => {
      console.log(data)
  }
  return (
    <Container>
         <Hero title={'Join our Global Remote Software Engineers Team'}
          info={"Dive into an ecosystem where your drive to excel is matched by endless opportunities to grow, learn, and lead. We believe in empowering our team members with the tools and freedom they need to shine, fostering a culture where challenges are met with enthusiasm and victories are celebrated together."}
          />    
      <main className='w-full col-center p-2vw bg-white' >
      <form onSubmit={handleSubmit(onSubmit)} className='w-full bg-[#F3F4F6] col-center max-w-[90vw] rounded-xl p-2vw'>
          {joinTeamForm?.map((item, index)=> {
              return <div className="w-full max-w-[45vw] p-[0.5vw]" key={index}>
                  <label htmlFor={item?.id} className='text-[1.5vw] w-full xl:text-[1.2vw] lg:lg:text-[1.2vw] md:text-[1.2vw] flex items-center font-medium'> <span className='text-red-600 mt-0.2vw'>* </span> {item?.label} </label>
                  {item?.type === 'textarea' ? 
                     <Controller
                      name={item?.name}
                      control={control}
                      rules={item?.rules}
                      render={({field}) => (
                          <textarea type={item?.type} placeholder={item?.placeholder} {...field}
                           onChange={handleInputChange} rows={3} className='w-full max-w-[45vw] p-[0.7vw] text-[1.5vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] focus:outline-none focus:shadow-md border-[1.5px] border-gray-400 rounded-[0.5vw] mt-0.5vw' ></textarea>
                      )}
                  /> : 
                  <Controller
                  name={item?.name}
                  control={control}
                  rules={item?.rules}
                  render={({field}) => (
                      <input type={item?.type} placeholder={item?.placeholder} {...field}
                       onChange={handleInputChange} className='w-full p-[0.7vw] text-[1.5vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] max-w-[45vw] border-[1.5px] focus:outline-none focus:shadow-md border-gray-400 rounded-[0.5vw] mt-0.5vw spin-button-none' />
                  )}
                 />
                 }   
              </div>
          })}
          
          <section className='w-full max-w-[45vw]'>
          <label htmlFor={''} className='text-[1.5vw] w-full xl:text-[1.2vw] lg:lg:text-[1.2vw] md:text-[1.2vw] flex items-center font-medium'> <span className='text-red-600 mt-0.2vw'>*</span>Tell us about yourself </label>
          <input type={'text'} placeholder={''}
            onChange={handleInputChange} className='w-full max-w-[45vw] text-[1.5vw] xl:text-[1.2vw] lg:lg:text-[1.2vw] md:text-[1.2vw] ml-0.3vw p-[2vw] border-[1.5px] focus:outline-none focus:shadow-md border-gray-400 rounded-[0.5vw] mt-0.5vw spin-button-none' />
          </section>
          <div className="w-full max-w-[45vw]">
          <label htmlFor={''} className='text-[1.5vw] w-full xl:text-[1.2vw] lg:lg:text-[1.2vw] md:text-[1.2vw] mt-vw flex items-center font-medium'> <span className='text-red-600 mt-0.2vw'>*</span>Tell us about yourself </label>
          <section className='w-full border-dashed col-center p-3vw mt-vw rounded-[0.5vw] border-[1px] border-gray-950 max-w-[45vw]'>
          <Icon icon="ion:cloud-upload-sharp" className='text-3vw text-black hover:text-gray-800' />
          </section>
          <p className='text-vw text-gray-600 mt-vw'>Select CV file (TXT, PDF or Word DOC)</p>
          </div>
          <div className="w-full max-w-[45vw]">
          <button className='w-full max-w-[45vw] hover:bg-[#021c9cf3] bg-[#021B9C] text-white p-[0.7vw] rounded-full mt-2vw'>Submit</button>
          </div>
      </form>
     
      </main>
    </Container>
    )
}

export default JoinAsTeam
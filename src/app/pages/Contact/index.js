import React from 'react'
import { emailForm, toggleInfo } from '../../Data';
import Container from '../../container';
import { useForm, Controller } from 'react-hook-form'
import { useState } from 'react'
import Hero from '../../component/Common/Hero';
import Questions from '../../component/Queries/Questions';

const Contact = () => {
  const [emailDetails, setEmailDetails] = useState({name: '', phoneNumber: '', email: '', message: ''})
  const {handleSubmit, control, reset, setValue} = useForm({
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
         <Hero title={'Join Us on the Journey'}
          info={'A partnership with SpaceMaster means co-creating a digital legacy that lasts. With us, your vision is destined for success. Redefine your boundaries and set new standards in the digital domain TODAY!'}
          btn={'Order Team'} url={'/subscription'}
          />    
      <main className='w-full flex items-start p-2vw bg-white' >
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-[40vw] p-2vw'>
          {emailForm?.map((item, index)=> {
              return <div className="w-full max-w-[35vw] p-[0.5vw]" key={index}>
                  <label htmlFor={item?.id} className='text-[1.8vw] xl:text-[1.2vw] lg:lg:text-[1.2vw] md:text-[1.2vw] flex items-center font-medium'>{item?.label} <span className='text-red-600 ml-0.3vw mt-0.2vw'>*</span> </label>
                  {item?.type === 'textarea' ? 
                     <Controller
                      name={item?.name}
                      control={control}
                      rules={item?.rules}
                      render={({field}) => (
                          <textarea type={item?.type} placeholder={item?.placeholder} {...field}
                           onChange={handleInputChange} rows={6} className='w-full p-[0.7vw] text-[1.5vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] focus:outline-none focus:shadow-md border-[1.5px] border-gray-400 rounded-[0.5vw] mt-0.5vw' ></textarea>
                      )}
                  /> : 
                  <Controller
                  name={item?.name}
                  control={control}
                  rules={item?.rules}
                  render={({field}) => (
                      <input type={item?.type} placeholder={item?.placeholder} {...field}
                       onChange={handleInputChange} className='w-full p-[0.7vw] text-[1.5vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] border-[1.5px] focus:outline-none focus:shadow-md border-gray-400 rounded-[0.5vw] mt-0.5vw spin-button-none' />
                  )}
                 />
                 }   
              </div>
          })}
          <div className="w-full mb-2vw -ml-vw relative max-w-[35vw]">
          <button className='w-full text-[1.5vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] max-w-[10vw] absolute right-0 hover:bg-[#021c9cf3] bg-[#021B9C] text-white p-[0.7vw] rounded-[0.5vw] mt-2vw'>Submit</button>
          </div>
      </form>
      <section className='w-full mt-2vw'>
      <h1 className='text-[#092370] font-bold text-[3vw] xl:text-[2.5vw] lg:lg:text-[2.5vw] md:text-[2.5vw] w-full'>Get in Touch with SpaceMaster</h1>
      <p className='text-[1.7vw] xl:text-[1.3vw] lg:lg:text-[1.3vw] md:text-[1.3vw] text-black font-medium'> 
        Hello! Welcome to SpaceMaster, where we're passionate about turning your innovative ideas into reality! <br/> <br/> 
        Whether you're looking to enhance your team with specialized talent or need a dedicated group to bring your vision to life, we're eager to help.

      <span className='text-[#092370] font-semibold'>remote developers?</span></p>
      <p className='text-[1.7vw] xl:text-[1.3vw] lg:lg:text-[1.3vw] md:text-[1.3vw] mt-2vw text-gray-700 font-semibold'>Sales Inquiries</p>
      <p className='text-[1.7vw] xl:text-[1.3vw] lg:lg:text-[1.3vw] md:text-[1.3vw] text-[#092370] mt-0.5vw '>+1 (858) 586 7777</p>
      <p className='text-[1.7vw] xl:text-[1.3vw] lg:lg:text-[1.3vw] md:text-[1.3vw] mt-2vw text-gray-700 font-semibold'>Business Inquiries</p>
      <p className='text-[1.7vw] xl:text-[1.3vw] lg:lg:text-[1.3vw] md:text-[1.3vw] text-[#092370] mt-0.5vw '>adam@vteams.com</p>
      <p className='text-[1.7vw] xl:text-[1.3vw] lg:lg:text-[1.3vw] md:text-[1.3vw] mt-2vw text-gray-700 font-semibold'>Mailling Address</p>
      <p className='text-[1.7vw] xl:text-[1.3vw] lg:lg:text-[1.3vw] md:text-[1.3vw] text-[#092370] mt-0.5vw '>Division of Nextwerk Inc. 6790 Embarcadero Ln, Ste 100, Carlsbad, <br />A 92011, USA</p>
      </section>
      </main>
      <main className="col-center relative mt-3vw m-auto w-full max-w-[85vw]">
          <h1 className='text-[3vw] xl:text-[2.5vw] lg:lg:text-[2.5vw] md:text-[2.5vw] text-center text-black font-bold'>Frequently Asked Questions</h1>
          <div className="mt-2vw w-full max-w-[60vw]">
                {toggleInfo?.map((item, index) => (
                  <Questions key={index} title={item?.title} info={item?.info} />
                ))}
              </div>
        </main>
    </Container>
    )
}

export default Contact
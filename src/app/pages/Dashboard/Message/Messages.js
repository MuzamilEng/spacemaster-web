import React, { useState } from 'react';
import DashboardContainer from '../../../container/dashboardContainer';
import { Icon } from '@iconify/react';
import { dummyChat } from '../../../data';
import { Chat } from '../../../component/Chat/Chat';

const Messages = () => {
  const active = ['/img/team1.png', '/img/team_2.png', '/img/team3.png', '/img/team4.png', '/img/team5.png'];
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  const sendMessage = () => {
    setMessages([...messages, message])
    setMessage('')
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  };
  return (
    <div>
      <DashboardContainer>
        <main className="flex bg-[#f5f5f5]">
          <section className={`w-full max-w-[20vw] `}>
            <div className="fixed w-full max-w-[20vw] bg-white">
              <div className="flex items-center p-0.5vw pb-[0.5vw] border-b-[0.1vw]">
                <div className='w-full flex items-center bg-[#f5f5f5] border-b-[0.1vw] text-[#898989] rounded-[2vw] p-[0.5vw]'>
                  <Icon icon="iconamoon:search" className='text-[1.9vw] xl:text-[1.5vw] lg:text-[1.5vw] md:text-[1.5vw]' />
                  <input type="text" className='text-[1.5vw] xl:text-[1vw] lg:text-[1vw] md:text-[1vw] ml-2 w-full bg-inherit border-none focus:outline-none' placeholder='Search' />
                </div>
                <Icon icon="basil:add-outline" className='text-gray-400 ml-2vw text-[2.3vw] xl:text-[2vw] lg:text-[2vw] md:text-[2vw]'/>
              </div>
              <main className='flex bg-white fixed items-center w-full max-w-[20vw]'>
                {active?.map((actives, index) =>(
                  <div className="w-full max-w-[3vw] cursor-pointer rounded-full h-[3vw] m-[0.7vw] relative" key={index}>
                    <img src={actives} alt="circle" className='w-full rounded-full object-cover' />
                    <div className="text-[5vw] absolute -bottom-[2vw] -right-[0.9vw] text-green-600 p-[0.7vw]">.</div>
                  </div>
                ))}
              </main>
            </div>
            <div className='mt-[8vw] h-[100vh] overflow-y-scroll scrollbar-hide bg-white '>
              <div className=" bg-white w-full  max-w-[20vw]">
                {dummyChat?.map((chat, index)=> (
                  <Chat key={index} img={chat?.img} name={chat?.name} msg={chat?.message} time={chat?.time} count={chat?.count} />
                ))}
              </div>
            </div>
          </section>
          <section className="w-full border-l-[0.1vw] bg-[#f5f5f5] h-[100vh]">
            <div className="flex p-[0.5vw] h-[6vw] xl:h-[3.8vw] lg:h-[3.8vw] md:h-[3.8vw] fixed bg-white border-b-[1px] w-full justify-between items-center">
              <div className="flex items-center">
                <img src="/img/team1.png" alt="card" className='w-[5vw] xl:w-3vw lg:w-3vw md:w-3vw rounded-full' />
                <p className='text-[2vw] xl:text-[1.1vw] lg:lg:text-[1.1vw] md:text-[1.1vw] font-medium ml-[1vw]'>Jhon Hartely</p>
              </div>
              <div className="flex items-center"> 
              <Icon icon="material-symbols:call" className='text-[2vw] xl:text-[1.1vw] lg:lg:text-[1.1vw] md:text-[1.1vw] rounded-full text-gray-400 cursor-pointer hover:text-gray-700 border-[1px] ml-vw p-[0.4vw]' />
              <Icon icon="system-uicons:video" className=' text-[2vw] xl:text-[1.1vw] lg:lg:text-[1.1vw] md:text-[1.1vw] rounded-full text-gray-400 cursor-pointer hover:text-gray-700 border-[1px] ml-vw p-[0.3vw]'/>
              </div>
            </div>
            <main className='h-[100vh] mt-[4vw] p-2vw fixed overflow-y-scroll scrollbar-hide overflow-x-hidden'>
              <article className='h-[25vw] overflow-y-scroll scrollbar-hide'>{messages?.map((meg, index) => <p className={`text-vw w-fit p-[0.6vw] m-vw rounded-[1vw] ${index % 2 === 0 ? 'bg-teal-100 text-gray-500' : 'bg-white text-gray-700'  }`} key={index}>{meg}</p> )}</article>
              <div className="relative w-full">
               <main className='w-full fixed bottom-2vw'>
               <section className="flex items-center mt-3vw bottom-1">
                  <input type="text" onKeyDown={handleKeyDown} value={message} onChange={(e)=> setMessage(e.target.value)} className='w-full max-w-[50vw] focus:outline-none p-vw bg-white rounded-full text-[1.5vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] ' placeholder='Write your message...' />
                  <Icon icon="tabler:microphone" className='text-[1.5vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] cursor-pointer text-gray-300 -ml-2vw' />
                  <Icon icon="lucide:smile" className='text-[1.5vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] cursor-pointer text-gray-300 -ml-2vw' />
                  <p onClick={sendMessage} className='p-vw bg-blue-600 ml-0 xl:ml-3vw lg:ml-3vw md:ml-3vw text-white text-[1.5vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw] rounded-full'><Icon icon="tabler:send" className='text-[1.5vw] xl:text-[1vw] lg:lg:text-[1vw] md:text-[1vw]'/></p>
                </section>
               </main>
              </div>
            </main>
          </section>
        </main>
      </DashboardContainer>
    </div>
  );
};

export default Messages;

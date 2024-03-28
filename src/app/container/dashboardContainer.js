import React from 'react';
import ClientDashboard from '../component/Dashboard';
import Searchbar from '../component/Searchbar';

const DashboardContainer = ({ children }) => {
  return (
    <main className='flex h-screen overflow-hidden'>
      <section className="w-full max-w-[20vw] xl:max-w-[15vw] lg:max-w-[15vw] md:max-w-[15vw]">
        <ClientDashboard />
      </section>
      <section className="flex-1 flex flex-col">
        <Searchbar />
        <article className="flex-1 overflow-y-scroll">
          {children}
        </article>
      </section>
    </main>
  );
};

export default DashboardContainer;

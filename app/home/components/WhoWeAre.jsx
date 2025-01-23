import Header from '@/components/Header'
import WhyCard from '@/components/WhyCard'
import React from 'react'

const WhoWeAre = () => {
  return (
   <section  className='flex w-full items-center justify-center py-[60px] h-auto flex-col bg-whyBg'>
    <div className='flex flex-col gap-[56px] h-auto items-center w-11/12 max-w-[1280px]  justify-between'>
     <Header/>
    <WhyCard/>
    </div>

   </section>
  )
}

export default WhoWeAre

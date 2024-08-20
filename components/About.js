import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='container flex items-center justify-between gap-12 p-10 w-screen m-10'>
      <Image className='lg:flex hidden' src="/frame.svg" alt="Frame Icon" width={153.23} height={446}/>
      <div className='text-lg text-balance flex justify-center items-center flex-col gap-8'>
        <h2 className='text-center text-4xl'>My Journey</h2>
        <p className='text-start m-5'>Hi, I’m Sara Doe, and I’m a passionate UI/UX designer with a love for creating intuitive and visually stunning digital experiences. My journey into the world of design began with graphic design, where I discovered my fascination with visual storytelling and aesthetics. Over time, this passion naturally evolved into a deeper interest in UI/UX design.</p>
        <p className='text-start m-5'>What captivated me about UI/UX was the blend of creativity and functionality. I thrive on the challenge of not just making things look good but also ensuring they work seamlessly for users. My background in graphic design has given me a strong foundation in visual principles, which I now apply to create user-centered designs that are both beautiful and functional.</p>
      </div>
      <Image className='lg:flex hidden' src="/frame1.svg" alt="Frame Icon" width={153.23} height={446}/>
    </div>
  )
}

export default About
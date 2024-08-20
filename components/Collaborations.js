import Image from 'next/image'
import React from 'react'

const Collaborations = () => {
  return (
    <div className='container flex justify-center sm:justify-between items-center flex-wrap gap-10 py-6 px-10 w-screen'>
      <Image src="/google.svg" alt='Google' width={116.07} height={38.21} />
      <Image src="/nike.svg" alt='Nike' width={86.42} height={30.74}/>
      <Image src="/samsung.svg" alt='SAMSUNG' width={113.11} height={17.41}/>
      <Image src="/apple.svg" alt='Apple' width={38.11} height={46.83}/>
      <Image src="/adidas.svg" alt='adidas' width={64.94} height={43.67}/>
    </div>
  )
}

export default Collaborations
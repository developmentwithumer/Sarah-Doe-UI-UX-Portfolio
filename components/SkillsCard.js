import Image from 'next/image'
import React from 'react'

const SkillsCard = ({ title, icon, alt, description }) => {
  return (
    <div className='flex gap-4 flex-col p-8 items-center justify-center'>
        <Image src={icon} alt={alt} width={100} height={100} />
        <h2 className='text-2xl text-center'>{title}</h2>
        <p className='text-balance md:text-center text-start'>{description}</p>
    </div>
  )
}

export default SkillsCard
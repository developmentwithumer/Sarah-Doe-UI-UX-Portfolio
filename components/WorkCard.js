import Image from 'next/image'
import React from 'react'

const WorkCard = ({ img, alt, title, description }) => {
  return (
    <div className='flex flex-col gap-4 p-4'>
        <Image src={img} alt={alt} width={394.67} height={330} layout="responsive" />
        <div className='flex flex-col'>
            <h3 className='text-balance text-start text-xl'>{title}</h3>
            <p className='text-balance text-start text-sm'>{description}</p>
        </div>
    </div>
  )
}

export default WorkCard
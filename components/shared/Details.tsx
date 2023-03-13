import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface keyboardComponent{
  id: string;
  image:string;
  by:string;
  source:string;
  download:string;
}



const Details = ({id, image, by, source, download} :keyboardComponent) => {
  return (
    <div className='flex flex-col w-5/6 items-center justify-center'>
        <Image src={image} height={256} width={1440} alt='/'/>
        
        <div className='flex flex-col w-full'>
            <p className='text-white font-bold text-6xl'>{id}</p>
            <p className='text-white font-semibold text-2xl'>{image}</p>
            <p className='text-white font-semibold text-xl'>{by}</p>
            <p className='text-white'>{source}</p>
            <p className='text-white'>{download}</p>

        </div>
    </div>
  )
}

export default Details
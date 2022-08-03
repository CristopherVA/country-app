import Image from 'next/image'
import Router, { useRouter } from 'next/router'
import React from 'react'

function CardFlag({ data }) {

   const router = useRouter()
  
   return (
      <div
         onClick={() => {
            router.push({
               pathname: data.name.common, 
               query: data.name.common 
            })
         }}
         className='bg-dark-blue w-64 rounded-md text-white shadow-lg cursor-pointer hover:scale-105 duration-200 ease-in active:scale-75'>
         <img className='rounded-t-md  w-64 h-40' src={data.flags.png} alt={data.name.common} />

         <div className='mt-5 px-6 pb-10'>
            <p className='text-lg font-bold mb-2 '>{data.name.common}</p>
            <p className='text-xs font-normal mt-1'> <span className='font-bold text-xs text-very-light-mode-background'>Population: </span> {data.population}</p>
            <p className='text-xs font-normal mt-1'> <span className='font-bold text-xs text-very-light-mode-background'>Region: </span> {data.region}</p>
            <p className='text-xs font-normal mt-1'> <span className='font-bold text-xs text-very-light-mode-background'>Capital: </span> {data.capital}</p>

         </div>

      </div>
   )
}

export default CardFlag
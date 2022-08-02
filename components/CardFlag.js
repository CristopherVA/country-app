import Image from 'next/image'
import Router, { useRouter } from 'next/router'
import React from 'react'

function CardFlag({ data }) {

   const { name, flags, capital, population, region } = data

   const router = useRouter()
   console.log(router)

   return (
      <div
         onClick={() => {
            router.push({
               pathname: `${name.common}`,
               query: {
                  name: name.common,
                  image: flags.png,
                  population: population,
                  region: region,
                  capital: capital
               }
            })
         }}
         className='bg-dark-blue w-64 rounded-md text-white shadow-lg cursor-pointer hover:scale-105 duration-200 ease-in'>
         <img className='rounded-t-md  w-64 h-40' src={flags.png} alt={name.common} />

         <div className='mt-5 px-6 pb-8'>
            <p className='text-lg font-bold mb-2'>{name.common}</p>
            <p className='text-xs font-normal mt-1'> <span className='font-normal text-xs text-dark-gray-light-mode'>Population: </span> {population}</p>
            <p className='text-xs font-normal mt-1'> <span className='font-normal text-xs text-dark-gray-light-mode'>Region: </span> {region}</p>
            <p className='text-xs font-normal mt-1'> <span className='font-normal text-xs text-dark-gray-light-mode'>Capital: </span> {capital}</p>

         </div>

      </div>
   )
}

export default CardFlag
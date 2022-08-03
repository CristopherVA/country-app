import { useRouter } from 'next/router'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
function DetailCountry({data}) {

   const { push } = useRouter()

   const newArray = data.map(cu => ({
      ...cu,
      currencies: new Array(cu.currencies)
   }))   

   return (
      <div className='px-6'>
         <div
            onClick={() => push({pathname: '/'})} 
            className='text-white mt-8 flex items-center space-x-2 px-6 w-28 py-1 bg-dark-blue shadow-xl cursor-pointer hover:scale-105 ease-linear duration-100 active:scale-75'>
            <FaArrowLeft />
            <p className='text-sm font-light'>Back</p>
         </div>

         <div className='grid grid-cols-1 mt-8 sm:grid-cols-2 sm:place-items-center  '>
            <img className='h-52 sm:h-96 place-content-center' src={data[0].flags.png} alt={data[0].name.common} />

            <div className='text-white'>
                  <p className='font-bold text-2xl mt-5 mb-5'>{data[0].name.common}</p>
               <div className='sm:grid sm:grid-cols-2'>
                  <div className='space-y-3 mb-8 sm:mb-0 '>
                     <p className='font-normal text-sm'>Native Name: <span className='font-light'>{data[0].name.official}</span></p>
                     <p className='font-normal text-sm'>Population: <span className='font-light'>{data[0].population}</span></p>
                     <p className='font-normal text-sm'>Region: <span className='font-light'>{data[0].region}</span></p>
                     <p className='font-normal text-sm'>Sub Region: <span className='font-light'>{data[0].subregion}</span></p>
                     <p className='font-normal text-sm'>Capital: <span className='font-light'>{data[0].capital}</span></p>
                  </div>

                  <div className='space-y-3 sm:ml-8'>
                     <p className='font-normal text-sm'>Top Level Domain: <span className='font-light'>{data[0].  tld}</span></p>
                     <p className='font-normal text-sm'>Currencies: <span className='font-light'>{ ''  }</span></p>
                     <p className='font-normal text-sm'>Languages: <span className='font-light'>{''}</span></p>
                  </div>
               </div>

               <div className='mt-8'>
                  <p>Bouder Countries:</p>
                  <div className='mt-4 flex justify-between'>
                     <div className='py-1 w-full mx-1 text-sm bg-dark-blue shadow-xl  flex justify-center items-center'>France</div>
                     <div className='py-1 w-full mx-1 text-sm bg-dark-blue shadow-xl  flex justify-center items-center'>Germany</div>
                     <div className='py-1 w-full mx-1 text-sm bg-dark-blue shadow-xl  flex justify-center items-center'>Nethelands</div>

                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default DetailCountry

export const getServerSideProps = async ({ params }) => {

   const country = await fetch(`https://restcountries.com/v3.1/name/${params.id}`)
      .then(res => res.json())
      console.log(country)
   return {
      props:{
         data:country
      }
   }
}
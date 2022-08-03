import React from 'react'
import { FaSearch } from 'react-icons/fa'

function Search({ value, region, handleChange, handleChangeRegion }) {

   return (
      <div className='flex justify-between items-center flex-wrap lg:px-[90px]'>
         <div className='flex items-center bg-dark-blue px-6 py-4 rounded-lg w-[500px]'>
            <FaSearch className='text-white mr-6 ' />
            <input
               name='search'
               value={value}
               onChange={handleChange}
               className=' bg-dark-blue outline-none border-none w-full text-white '
               type="text"
               placeholder='Search for a country...' 
            />
         </div>

         <div
            className='flex items-center bg-dark-blue px-6 py-4 rounded-lg w-56 mt-10 md:mt-0'
         >
            <select
               name='region'
               value={region}
               onChange={handleChangeRegion}
               className='bg-dark-blue outline-none border-none w-full text-white'
               placeholder='Filter by Region'
            >
               <option className='text-sm mx-5' value='africa'>Africa</option>
               <option className='text-sm mx-5' value='america'>America</option>
               <option className='text-sm mx-5' value='asia'>Asia</option>
               <option className='text-sm mx-5' value='europa'>Europa</option>
               <option className='text-sm mx-5' value='oceania'>Africa</option>
            </select>
         </div>

      </div>
   )
}

export default Search

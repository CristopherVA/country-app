import React from 'react'
import { FaSearch } from 'react-icons/fa'

function Search({ value, region, handleChange, handleChangeRegion }) {

   return (
      <div className='flex justify-between items-center flex-wrap lg:px-[90px]'>
         <div className='flex items-center dark:bg-dark-blue px-6 py-4 shadow-md rounded-lg w-[500px]'>
            <FaSearch className='dark:text-white mr-6  ' />
            <input
               // style={{
               //    backgroundColor: 'transparent'
               // }}
               name='search'
               value={value}
               onChange={handleChange}
               className=' dark:bg-dark-blue outline-none border-none w-full dark:text-white '
               type="text"
               placeholder='Search for a country...'
            />
         </div>

         <div
            className='flex items-center shadow-md dark:bg-dark-blue px-6 py-4 rounded-lg w-56 mt-10 md:mt-0'
         >
            <select
               // style={{
               //    backgroundColor: 'transparent'
               // }}
               name='region'
               value={region}
               onChange={handleChangeRegion}
               className='dark:bg-dark-blue outline-none border-none w-full  dark:text-white'
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

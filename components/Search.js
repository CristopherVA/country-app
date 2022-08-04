import React from 'react'
import { FaSearch } from 'react-icons/fa'
import Select from 'react-select'

function Search({ value, region, handleChange, handleChangeRegion }) {

   const options = [
      { value: 'africa', label: 'Africa' },
      { value: 'america', label: 'America' },
      { value: 'asia', label: 'Asia' },
      { value: 'europa', label: 'Europa' },
      { value: 'oceania', label: 'Oceania' },
    ];

   return (
      <div className='flex justify-between items-center flex-wrap lg:px-[90px]'>
         <div className='flex items-center dark:bg-dark-blue px-6 py-4 shadow-md rounded-lg w-[500px]'>
            <FaSearch className='dark:text-white mr-6  ' />
            <input
               style={{
                  backgroundColor: 'transparent'
               }}
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
               style={{
                  backgroundColor: 'transparent'
               }}
               name='region'
               value={region}
               onChange={handleChangeRegion}
               className='dark:bg-very-dark-blue-dark-mode outline-none border-none w-full dark:text-white'
               placeholder='Filter by Region'
            >
               <option className='text-sm mx-5 dark:bg-very-dark-blue-dark-mode' value='africa'>Africa</option>
               <option className='text-sm mx-5 dark:bg-very-dark-blue-dark-mode' value='america'>America</option>
               <option className='text-sm mx-5 dark:bg-very-dark-blue-dark-mode' value='asia'>Asia</option>
               <option className='text-sm mx-5 dark:bg-very-dark-blue-dark-mode' value='europa'>Europa</option>
               <option className='text-sm mx-5 dark:bg-very-dark-blue-dark-mode' value='oceania'>Oceania</option>


            </select>
            {/* <Select 
               option={options}
               onChange={handleChangeRegion}
               value={options.map(opt => ({label: opt.label, value: opt.value}))}
            /> */}
         </div>

      </div>
   )
}

export default Search

import React from 'react'
import { FaMoon } from 'react-icons/fa'
function Header() {
  return (
    <div className='flex items-center justify-between px-6 py-8 text-md text-white bg-dark-blue'>
      <p className='font-bold'>Where in the world?</p>
    
      <div className='flex items-center space-x-2 hover:scale-105 ease-in duration-100 active:scale-75 cursor-pointer'>
         <FaMoon className='w-3 h-3 -rotate-12 hover:rotate-180 duration-200 ease-out' />
         <p className='text-sm'>Dark Mode</p>
      </div>
    </div>
  )
}

export default Header
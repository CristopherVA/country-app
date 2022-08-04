import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from 'next-themes'
function Header() {

  const { theme, setTheme } = useTheme()

  const changeMode = () => {
    console.log('HOLA')
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className='flex items-center justify-between px-6 py-8 text-md shadow-lg dark:text-white dark:bg-dark-blue'>
      <p className='font-bold'>Where in the world?</p>
    
      <button 
        onClick={() => changeMode()}
        className='flex items-center space-x-2 hover:scale-100 ease-in duration-100 active:scale-75 cursor-pointer'>
         {
          theme === 'light' 
            ? ( <FaMoon className='w-5 h-5 -rotate-12 hover:rotate-180 duration-200 ease-out' />) 
            : (<FaSun className='w-5 h-5 -rotate-12 hover:rotate-180 duration-200 ease-out' />)
         
         }
         {/* <p className='text-sm'>
          {  theme === 'light' ? 'Dark Mode' : 'Light Mode'  }
         </p> */}
      </button>
    </div>
  )
}

export default Header
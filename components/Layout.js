import React from 'react'
import Header from './Header'

function Layout({children}) {
  return (
    <div className='dark:bg-very-dark-blue-dark-mode'>
      <Header />
      {children}
    </div >
  )
}

export default Layout
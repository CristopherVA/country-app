import { useRouter } from 'next/router'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
function DetailCountry() {

   const { query: id } = useRouter()

   console.log(id)

  return (
    <div>
      <button>
         <FaArrowLeft />
      </button>
    </div>
  )
}

export default DetailCountry
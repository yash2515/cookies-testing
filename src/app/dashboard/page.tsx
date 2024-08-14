'use client'

import useAuth from '@/hooks/useAuth'
import React from 'react'


const page = () => {
  useAuth()


  return (

    <div className='flex items-center justify-center text-[40px] capitalize font-bold'>
      
      wellcome to dashboard
    </div>
  )
}

export default page
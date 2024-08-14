'use client'

import useAuth from '@/hooks/useAuth'
import React, { useEffect } from 'react'
import useRoleProtection from '@/hooks/useRole'
import Router, { useRouter } from 'next/navigation'


const page = () => {
  useAuth()
  const userAuth = useRoleProtection(["admin"])
  const router = useRouter();
  useEffect(() => {
    
    if (userAuth === false) {
      router.push('/unauthorized'); 
    }
  }, [userAuth,router]);
  return (

    <>
      {userAuth ? <div className='flex items-center justify-center text-[40px] capitalize font-bold'>
      Enjoy brother you are admin
      </div> :
       <div className='flex items-center justify-center text-[40px] capitalize font-bold'>
       loading..... 
      </div>}
    </>
  )
}

export default page
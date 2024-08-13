'use client'

import useAuth from '@/hooks/useAuth'
import React from 'react'
import useRoleProtection from '@/hooks/useRole'

const page = () => {
  useAuth()
  const userAuth = useRoleProtection(["admin", "superadmin"])
  
  return (

    <>
      {userAuth ? <div>
      Enjoy brother you are admin
      </div> :
       <div>
       loading..... 
      </div>}
    </>
  )
}

export default page
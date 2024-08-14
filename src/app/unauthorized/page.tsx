"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
    const router = useRouter()
    return (
        <div className='flex flex-col gap-5 justify-center items-center'>
            <div className='flex items-center justify-center text-[40px] capitalize font-bold'>you are not authorized to this page </div>
            <button onClick={() => router.push("/")} className='p-2 bg-black text-white rounded-[5px]'>Back to home</button>
        </div>
    )
}

export default page
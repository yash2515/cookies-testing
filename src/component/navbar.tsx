'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const Navbar = () => {
    const router = useRouter();

    const handleClick = () => {
        Cookies.remove('token');
        router.push('/login');
    }

    return (
        <div className='m-5'>
            <button onClick={handleClick} className='bg-black p-5 rounded-full text-white '>
                Logout
            </button>
        </div>
    )
}

export default Navbar;

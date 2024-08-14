'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const token = Cookies.get('token');
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        Cookies.remove('token');
        router.push('/');
        Cookies.remove('token');
        Cookies.remove('role');
        localStorage.clear();
    }


    const handleLogin = () => {
        router.push('/login');
    }
    const handleAdmin = () => {

        router.push('/dashboard/admin')
    }
    return (
        <div className=' bg-black p-5 flex justify-between'>
            {isLoggedIn ? (
                <button onClick={handleLogout} className='p-2 bg-white rounded-[5px]'>
                    Logout
                </button>
            ) : (
                <button onClick={handleLogin} className='p-2 bg-white rounded-[5px]'>
                    Login
                </button>
            )}
            {
                isLoggedIn && (
                    <>
                        <button onClick={handleAdmin} className='p-2 bg-white rounded-[5px]'>
                            admin
                        </button>
                    </>
                )
            }
        </div>
    )
}

export default Navbar;


'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const useRoleProtection = (allowedRoles: string[]) => {
    const router = useRouter();
    const [isAuthorized, setIsAuthorized] = useState(false);
    const role = Cookies.get('role'); // Get user role from cookies
    console.log(role);
    
    useEffect(() => {
        if (allowedRoles.includes(role || '')) {
            setIsAuthorized(true);
        } else {
            router.push('/login'); // Redirect if the role is not allowed
        }
    }, [role, allowedRoles, router]);

    return isAuthorized;
};

export default useRoleProtection;

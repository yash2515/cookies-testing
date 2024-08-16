'use client'

import useAuth from '@/hooks/useAuth';
import React, { useEffect, useState } from 'react';
import useRoleProtection from '@/hooks/useRole';
import { useRouter } from 'next/navigation';

const AdminPage = () => {
  // Authenticate the user
  useAuth();

  // Protect the route based on the user's role
  const userAuth = useRoleProtection(["admin"]);
  const router = useRouter();

  // State to handle loading status
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (userAuth === false) {
      router.push('/unauthorized');
    } else if (userAuth) {
      setIsLoading(false);
    }
  }, [userAuth, router]);

  if (isLoading) {
    return (
      <div className='flex items-center justify-center text-[40px] capitalize font-bold'>
        Loading...
      </div>
    );
  }

  return (
    <div className='flex items-center justify-center text-[40px] capitalize font-bold'>
      Enjoy brother, you are an admin!
    </div>
  );
}

export default AdminPage;

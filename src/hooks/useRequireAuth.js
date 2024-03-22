import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/components/AuthContext';

const useRequireAuth = (requiredAuthLevel) => {
  const { isLoggedIn, authLevel } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn || authLevel < requiredAuthLevel) {
      // Redirect them to the home page (or any other page)
      router.push('/');
    }
  }, [isLoggedIn, authLevel, requiredAuthLevel, router]);
};

export default useRequireAuth;

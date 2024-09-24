'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  }, [router]);

  return null; // This will render nothing, just redirect to /home
}

'use client';

import { useEffect, useState } from 'react';

export function useOnlineDetector() {
  const [isOnline, setIsOnline] = useState(true);

  const onlineHandler = () => {
    setIsOnline(true);
  };

  const offlienHandler = () => {
    setIsOnline(false);
  };

  useEffect(() => {
    if (typeof window === 'undefined') {
      return () => null;
    }

    window.addEventListener('online', onlineHandler);
    window.addEventListener('offline', offlienHandler);

    return () => {
      window.removeEventListener('online', onlineHandler);
      window.removeEventListener('offline', offlienHandler);
    };
  }, []);

  return { isOnline };
}

'use client';

import { PropsWithChildren } from 'react';
import { useOnlineDetector } from '../../hooks/online/useOnlineDetector';
import { ErrorOffline } from '../ErrorOffline';

type OnlineDetectorWrapperProps = PropsWithChildren;

export default function OnlineDetectorWrapper({
  children,
}: OnlineDetectorWrapperProps) {
  const { isOnline } = useOnlineDetector();

  if (!isOnline) {
    return <ErrorOffline />;
  }

  return <>{children}</>;
}

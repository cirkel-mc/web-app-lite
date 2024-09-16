'use client';

import Image from 'next/image';
// import Button from '@/views/common/ui/components/Button';
import OfflineImage from '@/views/common/assets/bandmember.png'

export function ErrorOffline() {

  return (
    <div className='flex flex-col justify-center items-center fixed left-0 top-0 w-screen h-screen bg-white !z-[999]'>
      <div className='flex flex-col justify-center items-center max-w-[400px] px-4'>
        <Image src={OfflineImage} alt='' width={180} height={180} />
        <p className='text-2xl font-bold text-neutral-900'>You are offline</p>
        <p className='text-neutral-500 font-thin text-center mt-2 mb-6'>Network is disconnected. Please check your network again</p>
        {/* <Button variant='primary' size='md' round='md' onClick={handler}>Reload the page</Button> */}
      </div>
    </div>
  );
}

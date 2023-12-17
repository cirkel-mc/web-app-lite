'use client'

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Edit } from "iconsax-react";

const Profile = () => {
  const router = useRouter()

  return (
    <div className="relative h-screen">
      <div className="bg-white shadow-md px-4 py-3">
        <div className="flex items-center gap-4">
          <ArrowLeft size={24} onClick={() => router.back()} />
          <p className="font-bold text-base">My Profile</p>
        </div>
      </div>
      <div className="relative bg-white py-4 px-6 flex gap-4 shadow-2xl mt-4 w-[90%] ml-auto mr-auto rounded-2xl">
        <div className="bg-gray-200 w-[80px] h-[80px] rounded-full" />
        <div className="flex flex-col pt-1">
          <p className="font-semibold text-lg">Syahrul Utomo</p>
          <p className="text-sm text-gray-600">Drummer - Jazz, HipHop</p>
        </div>
        <Edit size={24} className="absolute right-4 top-4" />
      </div>
      <div className="relative flex flex-col bg-white py-4 px-6 gap-3 shadow-lg mt-4 w-[90%] ml-auto mr-auto rounded-lg">
        <div className="flex gap-4">
          <p className="w-[100px] text-gray-400">Username</p>
          <p>syahrulutomo</p>
        </div>
        <div className="flex gap-4">
          <p className="w-[100px] text-gray-400">Email</p>
          <p>syahrulutomo@gmail.com</p>
        </div>
        <div className="flex gap-4">
          <p className="w-[100px] text-gray-400">City</p>
          <p>Bogor</p>
        </div>
        <div className="flex gap-4">
          <p className="w-[100px] text-gray-400">Preference</p>
          <p>Casual Jamming</p>
        </div>
        <div className="flex gap-4">
          <p className="w-[100px] text-gray-400">Genre</p>
          <p>Jazz, Rock, HipHop</p>
        </div>
        <div className="flex gap-4">
          <p className="w-[100px] text-gray-400">Password</p>
          <p>*******</p>
        </div>
      </div>
      <p className="absolute left-1/2 bottom-4 -translate-x-1/2 text-gray-400">Cirkel &copy;2023</p>
    </div>
  );
};

export default Profile;

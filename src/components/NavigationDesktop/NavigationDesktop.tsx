'use client'

import React from "react";
import { useAuth } from "@/hooks/use-auth";
import Logo from "../Navigation/TopNavigation/Logo";
import Cart from "../Navigation/TopNavigation/Cart";
import {User} from 'iconsax-react'

const NavigationDesktop = () => {
  const { isAuth } = useAuth();
  return (
    <div className="fixed left-0 top-0 px-7 py-4 w-full bg-teal-600 z-50 ">
      <div className="flex items-center justify-between mx-auto lg:max-w-[1024px] 2xl:max-w-[1440px]">
        <Logo />
        <div className="flex items-center gap-4 text-sm">
          <a href="/venue" aria-label="venue" className="text-white">
            Book Studio
          </a>
          <a href="/session" aria-label="session" className="text-white">
            Jamming
          </a>
          <a href="/learn" aria-label="learn" className="text-white">
            Learn
          </a>
        </div>
        {isAuth ? (
          <div className="flex justify-center items-center gap-4">
            <Cart ordersCount={1} />
            <div className="w-8 h-8 flex justify-center items-center bg-slate-300 rounded-full cursor-pointer">
              <User color="white" variant="Bold"/>
              </div>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <a href="/login" aria-label="login" className="text-white text-sm">
              Login
            </a>
            <a
              href="/register"
              aria-label="login"
              className="text-white text-sm py-1 px-3 bg-teal-900 rounded-lg flex items-center"
            >
              Register
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavigationDesktop;

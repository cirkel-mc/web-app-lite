"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "@/ui/component/Button";
import { Sound, Google } from "iconsax-react";
import FormGroup from "./components/FormGroup";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import Divider from "./components/Divider";
import ThirdPartyLogin from "./components/ThirdPartyLogin";
import Banner from "./components/Banner";
import ErrorMessage from "./components/ErrorMessage";
import { cookie } from "@/utils/cookie";
import { loginSchema } from "@/model/schema/login";

interface LoginForm {
  email: string;
  password: string;
}

const LoginPage = () => {
  const router = useRouter();
  const form = useForm<LoginForm>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(loginSchema),
    mode: 'all'
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: LoginForm) => {
    cookie.set('user', { email: data.email })
    router.push('/')
  };

  return (
    <div className="bg-teal-400 w-screen h-screen">
      <div className="flex-col md:flex md:flex-row w-[80%] max-w-[700px] fixed z-10 left-1/2 top-1/2 rounded-lg shadow-md bg-white -translate-x-1/2 -translate-y-1/2">
        <div className="w-full md:width-2/5 p-4">
          <Title />
          <Subtitle />
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="mb-4 w-full">
              <p className="text-sm mb-1">Email</p>
              <input
                className="w-full text-sm rounded border-gray-400 border-[1px] py-2 px-3"
                type="email"
                alt="Please input your email"
                placeholder="Ex: johndoe@gmail.com"
                {...register('email')}
              />
            </div>
            {errors.email && <ErrorMessage>{errors?.email?.message}</ErrorMessage>}
            <div className="mb-4" />
            <div className="mb-4 w-full">
              <p className="text-sm mb-1">Password</p>
              <input
                className="w-full text-sm rounded border-gray-400 border-[1px] py-2 px-3"
                type="password"
                alt="Please input your password"
                placeholder="Your password"
                {...register('password')}
              />
            </div>
            {errors.password && <ErrorMessage>{errors?.password?.message}</ErrorMessage>}
            <Button
              disabled={!!errors?.email || !!errors?.password}
              classes="w-full mt-6 text-sm py-2"
              size="sm"
              round="md"
              variant="primary"
              btnType="fill"
              type="submit"
            >
              Sign in
            </Button>
          </form>
          <Divider />
          <ThirdPartyLogin
            href=""
            icon={<Google />}
            text="Sign in with Google"
          />
          <ThirdPartyLogin
            href=""
            icon={<Sound />}
            text="Sign in with SoundCloud"
          />
          <p className="text-xs mt-6 text-center">
            Does not have account?{" "}
            <Link href="/register" className="text-teal-500">
              Sign up here
            </Link>
          </p>
        </div>
        <Banner />
      </div>
    </div>
  );
};

export default LoginPage;

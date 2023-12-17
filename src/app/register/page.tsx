"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "@/ui/components/Button";

import { Sound, Google } from "iconsax-react";
import Select, { StylesConfig } from "react-select";
import makeAnimated from "react-select/animated";
import { cityOptions } from "@/model/mock-data/cities";
import { cookie } from "@/utils/cookie";
import { registerSchema } from "@/model/schema/register";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import Banner from "./components/Banner";
import ThirdPartyLogin from "./components/ThirdPartyLogin";
import Divider from "./components/Divider";
import ErrorMessage from "./components/ErrorMessage";

const animatedComponents = makeAnimated();

interface RegisterForm {
  email: string;
  username: string;
  password: string;
}

const RegisterPage = () => {
  const router = useRouter();
  const [cities, setCities] = useState([]);

  const form = useForm<RegisterForm>({
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
    resolver: yupResolver(registerSchema),
    mode: 'all'
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: RegisterForm) => {
    cookie.set("user", {
      email: data.email,
      username: data.username,
      cities: cities,
    });
    router.push("/onboard");
  };

  return (
    <div className="w-screen h-screen bg-primary-400">
      <div className="flex-col md:flex md:flex-row w-[80%] max-w-[700px] fixed z-10 left-1/2 top-1/2 rounded-lg shadow-md bg-white -translate-x-1/2 -translate-y-1/2">
        <div className="w-full md:width-2/5 p-4">
          <Title />
          <Subtitle />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4 w-full">
              <p className="text-sm mb-1">Email:</p>
              <input
                type="text"
                alt=""
                placeholder="Ex: johndoe@gmail.com"
                className="outline-none w-full text-sm rounded border-gray-400 border-[1px] py-2 px-3"
                {...register("email")}
              />
              {errors.email && (
                <ErrorMessage>{errors?.email?.message}</ErrorMessage>
              )}
            </div>
            <div className="w-full mb-4">
              <p className="text-sm mb-1">Username:</p>
              <input
                type="text"
                alt=""
                placeholder="Ex: John Doe"
                className="outline-none w-full text-sm rounded border-gray-400 border-[1px] py-2 px-3"
                {...register("username")}
              />
              {errors.username && (
                <ErrorMessage>{errors?.username?.message}</ErrorMessage>
              )}
            </div>
            <div className="w-full mb-4">
              <p className="text-sm mb-1">Password:</p>
              <input
                type="password"
                alt=""
                placeholder="Your password"
                className="outline-none w-full text-sm rounded border-gray-400 border-[1px] py-2 px-3"
                {...register("password")}
              />
              {errors.password && (
                <ErrorMessage>{errors?.password?.message}</ErrorMessage>
              )}
            </div>
            <div className="w-full">
              <p className="text-sm mb-1">City:</p>
              <Select
                className="outline-none"
                closeMenuOnSelect={false}
                components={animatedComponents}
                defaultValue={cityOptions[0]}
                isMulti
                options={cityOptions}
                value={cities}
                onChange={(e: any) => {
                  setCities(e);
                }}
              />
            </div>
            <Button
              disabled={!!errors.email || !!errors.password || !!errors.username || cities.length === 0}
              size="sm"
              round="md"
              variant="primary"
              btnType="fill"
              type="submit"
              classes="w-full mt-6 text-sm py-2"
            >
              Sign up
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
            Already have account?{" "}
            <Link href="/login" className="text-primary-500">
              Sign in here
            </Link>
          </p>
        </div>
        <Banner />
      </div>
    </div>
  );
};

export default RegisterPage;

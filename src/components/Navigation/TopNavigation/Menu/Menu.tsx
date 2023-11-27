import React from "react";
import clsx from "clsx";
import BottomSheet from "@/components/BottomSheet";
import { useAuth } from "@/hooks/use-auth";
import { Reserve, MusicPlay, Notepad2, Profile, LoginCurve } from "iconsax-react";
import Link from "next/link";

interface MenuProps {
  show: boolean;
  onClose: () => void;
}

const Menu = (props: MenuProps) => {
  const { show, onClose } = props;
  const { isAuth } = useAuth();

  return (
    <BottomSheet title="My Menu" open={show} onClose={onClose}>
      <div className="pt-4 pl-3 pb-4 flex flex-col gap-5 max-w-[500px] mx-auto md:max-w-[700px] lg:max-w-[1024px]">
        <Link
          key={0}
          className="text-gray-400 hover:text-sky-300 flex gap-2 items-center"
          href="/venue"
        >
          <Reserve size="24" color="#FF8A65" variant="Bold" />
          Book venue
        </Link>
        <Link
          key={1}
          className="text-gray-400 hover:text-sky-300 flex gap-2 items-center"
          href="/activities"
        >
          <MusicPlay size="24" color="#FF8A65" variant="Bold" />
          Jamming
        </Link>
        <Link
          key={2}
          className="text-gray-400 hover:text-sky-300 flex gap-2 items-center"
          href="/learn"
        >
          <Notepad2 size="24" color="#FF8A65" variant="Bold" />
          Learn
        </Link>
        {isAuth ? (
          <Link
            key={2}
            className="text-gray-400 hover:text-sky-300 flex gap-2 items-center"
            href="/profile"
          >
            <Profile size="24" color="#FF8A65" variant="Bold" />
            Profile
          </Link>
        ) : (
          <Link
            key={2}
            className="text-gray-400 hover:text-sky-300 flex gap-2 items-center"
            href="/login"
          >
            <LoginCurve size="24" color="#FF8A65" variant="Bold" />
            Sign in
          </Link>
        )}
      </div>
    </BottomSheet>
  );
};

export default Menu;

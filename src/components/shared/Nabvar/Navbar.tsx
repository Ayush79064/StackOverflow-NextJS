"use client";
import { Input } from "@/components/ui/input";
import { Toggle } from "@/components/ui/toggle";
import { useTheme } from "@/contexts/ThemeContext";
import { Theme } from "@/types/ContextTypes";
import { SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { isDark, handleToggleTheme } = useTheme() as Theme;
  console.log(isDark);

  return (
    <nav
      className="bg-gray-800 w-full text-white flex items-center justify-between
    "
    >
      <Link href={"/"}>
        <Image
          src={"/assets/images/site-logo.svg"}
          alt="logo"
          height={23}
          width={23}
        />
      </Link>
      <Input type="text" placeholder="Enter the text...." />
      <div>
        <Toggle
          size="lg"
          aria-label="Toggle italic"
          onClick={() => handleToggleTheme()}
        >
          {isDark ? (
            <Image src={"/next.svg"} height={23} width={23} alt="dark" />
          ) : (
            <Image
              src={"/assets/images/auth-dark.png"}
              height={23}
              width={23}
              alt="dark"
            />
          )}
        </Toggle>
        <SignInButton>
          <UserButton />
        </SignInButton>
      </div>
    </nav>
  );
};

export default Navbar;

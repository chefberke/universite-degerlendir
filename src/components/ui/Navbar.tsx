"use client";

import React, { useEffect, useState } from "react";
import Logo from "../common/Logo";
import Button from "../common/Button";
import { MdDarkMode } from "react-icons/md";
import { IoSunnySharp } from "react-icons/io5";

import "../../styles/globals.css";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import { createClient } from "@/utils/client";

function Navbar() {
  const [theme, setTheme] = useState(false);
  const [isUserLogin, isUserSetLogin] = useState(false);
  const router = useRouter();
  const params = useSearchParams();
  const focusParams = params.getAll("login");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setTheme(true);
    }
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  function toggleTheme() {
    if (!theme) {
      setTheme(true);
      localStorage.setItem("theme", "dark");
    } else {
      setTheme(false);
      localStorage.setItem("theme", "");
    }
  }

  async function userCheck() {
    const supabase = createClient();

    const { data, error } = await supabase.auth.getUser();

    if (error || data?.user) {
      isUserSetLogin(false);
    }

    if (data.user) {
      isUserSetLogin(true);
    }

    if (focusParams !== null) {
      if (focusParams[0] === "true" && data.user) {
        isUserSetLogin(true);
      }
    }
  }

  const signOut = async () => {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error signing out:", error);
    } else {
      router.push("/sign-in");
      isUserSetLogin(false);
    }

    userCheck();
  };

  useEffect(() => {
    userCheck();
  }, [params, router, focusParams]);

  return (
    <div className="w-full h-[6rem] flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Logo />
        <h1 className="text-[1.2rem] font-medium dark:text-white text-gray-950 max-sm:text-[1rem]">
          Üniversite Değerlendir
        </h1>
      </div>
      <div className="flex items-center justify-center gap-6">
        <button onClick={toggleTheme}>
          {theme ? <IoSunnySharp className="text-[1.5rem] text-white" /> : <MdDarkMode className="text-[1.5rem]" />}
        </button>
        {!isUserLogin ? (
          <Link href={"/sign-in"}>
            <Button text={"Giriş yap"} />
          </Link>
        ) : (
          <div onClick={signOut}>
            <Button text={"Çıkış yap"} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;

import Link from "next/link";
import React from "react";
import { signup } from "./action";

function page() {
  return (
    <div className="flex items-center justify-center h-[45rem]">
      <div className="flex-col items-center justify-center text-center border border-gray-300 px-[4rem] py-[5rem] rounded-lg max-sm:border-none dark:border-gray-600">
        <div className="mt-2">
          <h2 className="font-medium text-[1.1rem]">Kayıt Ol</h2>
        </div>
        <div className="mt-1">
          <p className="text-gray-500">Hemen kayıt ol ve görüşlerini paylaş!</p>
        </div>
        <div className="mt-8">
          <form>
            <div className="w-[23rem] flex-col items-center justify-center mt-5 shadow-sm">
              <div className="flex items-center justify-start">
                <label htmlFor="email" className="text-[0.9rem]">
                  Email
                </label>
              </div>
              <div className="pt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-100 border border-gray-300 rounded-md px-2 h-[2.2rem] w-full focus:outline-gray-400 dark:text-gray-950"
                  required
                />
              </div>
            </div>
            <div className="w-[23rem] flex-col items-center justify-center mt-5 shadow-sm">
              <div className="flex items-center justify-start">
                <label htmlFor="password" className="text-[0.9rem]">
                  Şifre
                </label>
              </div>
              <div className="pt-2">
                <input
                  name="password"
                  id="password"
                  type="password"
                  className="bg-gray-100 border border-gray-300 rounded-md px-2 h-[2.2rem] w-full focus:outline-gray-400 dark:text-gray-950"
                  required
                />
              </div>
            </div>

            <div className="w-[23rem] flex-col items-center justify-center mt-5 shadow-sm">
              <div className="flex items-center justify-start">
                <label className="text-[0.9rem]">Şifre Tekrar</label>
              </div>
              <div className="pt-2">
                <input
                  type="password"
                  className="bg-gray-100 border border-gray-300 rounded-md px-2 h-[2.2rem] w-full focus:outline-gray-400 dark:text-gray-950"
                  required
                />
              </div>
            </div>

            <div className="w-[23rem] flex-col items-center justify-center mt-10 shadow-md">
              <button
                formAction={signup}
                className="bg-gray-950 text-white w-full font-medium rounded-md h-[2.5rem] hover:opacity-85 dark:bg-blue-600 dark:text-white"
              >
                Kayıt Ol
              </button>
            </div>
            <div className="w-[23rem] flex-col items-center justify-center mt-8">
              <h2 className="text-gray-400 text-[0.9rem] dark:text-gray-300">
                Zaten hesabın var mı?{" "}
                <span className="text-gray-950 dark:text-gray-100">
                  <Link href="/sign-in">Giriş yap</Link>
                </span>
              </h2>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default page;

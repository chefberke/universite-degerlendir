import Link from "next/link";
import React, { Suspense } from "react";
import { signin } from "./action";

function page() {
  return (
    <Suspense fallback={<div className="w-full h-full flex items-center justify-center">Yükleniyor...</div>}>
      <div className="flex items-center justify-center h-[45rem]">
        <div className="flex-col items-center justify-center text-center border border-gray-300 px-[3.4rem] py-[6rem] rounded-lg max-sm:border-none dark:border-gray-600">
          <div className="mt-2">
            <h2 className="font-medium text-[1.1rem]">Giriş Yap</h2>
          </div>
          <div className="mt-1">
            <p className="text-gray-500">Tekrardan hoşgeldin! Lütfen giriş yap.</p>
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

              <div className="w-[23rem] flex-col items-center justify-center mt-10 shadow-md">
                <button
                  formAction={signin}
                  className="bg-gray-950 text-white w-full rounded-md h-[2.5rem] hover:opacity-85 dark:bg-blue-600 font-medium"
                >
                  Giriş Yap
                </button>
              </div>
              <div className="w-[23rem] flex-col items-center justify-center mt-8">
                <h2 className="text-gray-400 text-[0.9rem] dark:text-gray-300">
                  Hesabın yok mu?{" "}
                  <span className="text-gray-950 dark:text-white">
                    <Link href="/sign-up">Kayıt ol</Link>
                  </span>
                </h2>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default page;

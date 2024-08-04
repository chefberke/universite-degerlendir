"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Comments from "@/components/ui/Comment";
import Rate from "@/components/ui/Rate";
import Submit from "@/components/ui/Submit";
import { IoIosArrowBack } from "react-icons/io";

import { createClient } from "@/utils/client";
import { fetchComment } from "@/lib/features/commentSlice";
import { AppDispatch } from "@/lib/store";
import { Spinner } from "@radix-ui/themes";
import Link from "next/link";

const University = () => {
  const path = usePathname();

  const pathLastIndex = path.lastIndexOf("/");
  const pathId = path.slice(pathLastIndex + 1);

  const [focusUniversity, setFocusUniversity] = useState([]);
  const [isUserLogin, isUserSetLogin] = useState(false);

  const state = useSelector((item: any) => item.university.list);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchComment(pathId));
  }, []);

  useEffect(() => {
    const universityUrl = state.filter((item: any) => (item.id.toString() === pathId.toString() ? item : null));

    if (universityUrl === null) {
      return;
    }

    setFocusUniversity(universityUrl);
  }, []);

  const supabase = createClient();

  async function userInfo() {
    const { data: user, error } = await supabase.auth.getUser();

    if (error) {
      console.log("User fetch error");
      isUserSetLogin(false);
    }

    if (user && user?.user) {
      isUserSetLogin(true);
    }
  }

  useEffect(() => {
    userInfo();
  }, []);

  return (
    <div className="w-full h-full flex-col items-center justify-start dark:bg-slate-950">
      {focusUniversity.length === 0 ? (
        <div className="w-full flex items-center justify-center h-[32rem] text-[1.1rem]">
          <Spinner size="3" />
        </div>
      ) : (
        <div className="mb-2">
          <Link href={"/"}>
            <button className="flex gap-2 items-center hover:opacity-90 text-[1.1rem] font-medium mt-4">
              <IoIosArrowBack />
              Geri
            </button>
          </Link>
        </div>
      )}
      {focusUniversity && focusUniversity.length > 0
        ? focusUniversity.map((item: any) => (
            <div key={item.date_of_establishment} className="flex-col items-center justify-center mt-24">
              <div>
                <Image src={item.image} alt="universityImage" width={180} height={180} />
              </div>
              <div className="pt-12">
                <h2 className="font-medium text-[1.6rem] dark:text-white">{item.name}</h2>
              </div>
              <div className="pt-2">
                <p className="text-gray-600 dark:text-gray-300">Kuruluş yılı: {item.date_of_establishment}</p>
              </div>
              <div className="pt-4">
                <p className="text-gray-600 font-normal dark:text-gray-200">{item.description}</p>
              </div>
            </div>
          ))
        : null}
      <div className="flex-col items-center justify-center">
        <Rate universityId={pathId} />
        <div className="flex items-center w-full">
          {isUserLogin ? (
            <Submit />
          ) : (
            <div className="text-[1.2rem] font-medium mt-16">Yorumunu hemen paylaşmak için giriş yap!</div>
          )}
        </div>
        <div className="dark:text-white mt-3 pt-12">
          <Comments universityId={pathId} />
        </div>
      </div>
    </div>
  );
};

export default University;

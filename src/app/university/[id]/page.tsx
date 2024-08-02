"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import Comments from "@/components/ui/Comment";
import Rate from "@/components/ui/Rate";
import Submit from "@/components/ui/Submit";

const University = () => {
  const path = usePathname();

  const pathLastIndex = path.lastIndexOf("/");
  const pathId = path.slice(pathLastIndex + 1);

  const [focusUniversity, setFocusUniversity] = useState([]);

  const state = useSelector((item: any) => item.university.list);

  useEffect(() => {
    const universityUrl = state.filter((item: any) => (item.id.toString() === pathId.toString() ? item : null));

    if (universityUrl === null) {
      return;
    }

    setFocusUniversity(universityUrl);
  }, []);

  return (
    <div className="w-full h-full flex-col items-center justify-start">
      {focusUniversity.length === 0 ? (
        <div className="w-full flex items-center justify-center h-[32rem] text-[1.1rem]">Yükleniyor...</div>
      ) : null}
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
        <Rate />
        <div className="h-[18rem] flex items-center w-full">
          <Submit />
        </div>
        <div className="dark:text-white mt-3 pt-12">{/* <Comments /> */}</div>
      </div>
    </div>
  );
};

export default University;

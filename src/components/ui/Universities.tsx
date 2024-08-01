"use client";

import React from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";
import { useSelector } from "react-redux";

interface UniversityList {
  id: number;
  name: string;
  description: string;
  date_of_establishment: string;
  image: any;
}

const Universities = () => {
  const router = useRouter();

  function universitiesRouter(item: UniversityList) {
    router.push(`/university/${item.id}`);
  }

  const List = useSelector((item: any) => item.university.list);

  return (
    <div className="grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 place-items-center">
      {List.map((item: any) => (
        <div
          onClick={() => universitiesRouter(item)}
          key={item.id}
          className="flex items-center justify-center w-[22rem] h-[22rem] mt-8 border border-gray-300 dark:border-gray-800 rounded py-4 px-4 hover:border-blue-500 dark:hover:border-blue-500 hover:cursor-pointer transition-all"
        >
          <div className="flex-col items-center justify-center">
            <div>
              <Image src={item.image} alt={item.name} width={110} height={110} />
            </div>
            <div className="pt-4 text-[1.2rem] font-medium dark:text-white">
              {item.name.length > 30 ? <p>{item.name.slice(0, 30)}...</p> : <p>{item.name.slice(0, 30)}</p>}
            </div>
            <div className="pt-2 text-[0.9rem] text-gray-500 dark:text-gray-300">{item.description.slice(0, 120)}</div>
            <div className="pt-1 text-[0.9rem] text-gray-800 dark:text-gray-200">Daha fazla...</div>
            <div className="pt-6 flex items-center w-full justify-between dark:text-gray-100">
              <div>4.5+</div>
              <div>1 Yorum</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Universities;

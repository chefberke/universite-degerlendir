"use client";

import { search } from "@/lib/features/universitySlice";
import { AppDispatch } from "@/lib/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function SearchBar() {
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(search(searchText));
  }, [searchText]);

  return (
    <div>
      <div className="relative flex items-center justify-center w-full text-gray-950 font-medium text-[0.9rem]">
        <input
          value={searchText}
          onChange={(e: any) => setSearchText(e.target.value)}
          placeholder="Üniversite ismini gir..."
          className="input shadow-lg focus:border-2 border-gray-300 px-5 py-3 rounded-xl w-[24rem] max-sm:w-[19rem] focus:w-[26rem] max-sm:focus:w-[20rem] h-[3rem] transition-all outline-none"
          name="search"
        />
        <svg
          className="size-6 absolute top-3 right-3 text-gray-500"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            strokeLinejoin="round"
            strokeLinecap="round"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default SearchBar;

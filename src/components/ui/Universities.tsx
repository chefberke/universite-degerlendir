"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import RateStar from "./RateStar";

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/lib/store";
import { fetchAllComment } from "@/lib/features/commentSlice";
import { Spinner } from "@radix-ui/themes";

interface UniversityList {
  id: number;
  name: string;
  description: string;
  date_of_establishment: string;
  image: any;
}

const Universities = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  function universitiesRouter(item: UniversityList) {
    router.push(`/university/${item.id}`);
  }

  const FilteredList = useSelector((state: any) => state.university.filteredlist);

  const displayedUniversities = useMemo(() => {
    return FilteredList;
  }, [FilteredList]);

  useEffect(() => {
    dispatch(fetchAllComment());
  }, []);

  const Comments = useSelector((state: any) => state.comment);

  const [universityPerPage, setUniversityPerPage] = useState(9);

  const loadMore = displayedUniversities.slice(0, universityPerPage);

  const handleLoadingMore = () => {
    setUniversityPerPage(universityPerPage + 9);
  };

  return (
    <div>
      <div className="grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 place-items-center dark:bg-slate-950">
        {displayedUniversities.length === 0 ? (
          <div className="w-full flex items-center justify-start mt-12 text-[1.1rem]">
            <Spinner size="3" />
          </div>
        ) : null}
        {loadMore.map((item: UniversityList) => {
          const uniComment = Comments.allComments?.filter((comment: any) =>
            comment.university_id === item.id ? comment : null
          );

          let rate = 0;

          if (uniComment && uniComment.length > 0) {
            rate = uniComment.reduce((acc: number, commn: any) => acc + Number(commn.rate), 0);
          }

          const totalRate = rate / uniComment?.length;

          return (
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
                  {item.name.length > 30 ? <div>{item.name.slice(0, 30)}...</div> : <div>{item.name}</div>}
                </div>
                <div className="pt-2 text-[0.9rem] text-gray-500 dark:text-gray-300">
                  {item.description.slice(0, 120)}
                </div>
                <div className="pt-1 text-[0.9rem] text-gray-800 dark:text-gray-200">Daha fazla...</div>
                <div className="pt-6 flex items-center w-full justify-between dark:text-gray-100">
                  {Comments.loading === true ? (
                    <div>
                      {" "}
                      <Spinner size="3" />{" "}
                    </div>
                  ) : null}
                  <div>
                    <RateStar totalRate={totalRate} />
                  </div>
                  <div>
                    {uniComment && uniComment.length > 0 ? <div>{uniComment.length} Yorum</div> : <div>0 Yorum</div>}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {displayedUniversities.length === 0 ? null : (
        <div className="w-full flex items-center justify-center mt-8">
          <div className="flex-col items-center justify-center">
            <button className="text-white bg-blue-600 px-8 h-[2.2rem] rounded" onClick={handleLoadingMore}>
              Daha Fazla
            </button>
            <p className="text-center pt-4 text-gray-500 dark:text-gray-200">{universityPerPage} Listeleniyor</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Universities;

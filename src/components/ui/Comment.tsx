import React, { useEffect, useState } from "react";

import RateStar from "./RateStar";

import Image from "next/image";

// user images
import user1 from "../../../public/assets/user_1.png";
import user2 from "../../../public/assets/user_2.png";
import user3 from "../../../public/assets/user_3.png";
import user4 from "../../../public/assets/user_4.png";
import user5 from "../../../public/assets/user_5.png";
import user6 from "../../../public/assets/user_6.png";
import user7 from "../../../public/assets/user_7.png";
import user8 from "../../../public/assets/user_8.png";
import user9 from "../../../public/assets/user_9.png";
import user10 from "../../../public/assets/user_10.png";
import user11 from "../../../public/assets/user_11.png";
import user12 from "../../../public/assets/user_12.png";
import user13 from "../../../public/assets/user_13.png";
import user14 from "../../../public/assets/user_14.png";
import user15 from "../../../public/assets/user_15.png";

import { useDispatch, useSelector } from "react-redux";
import { fetchComment } from "@/lib/features/commentSlice";
import { AppDispatch } from "@/lib/store";

function Comments({ universityId }: any) {
  const userImage = [
    {
      id: 1,
      image: user1,
    },
    {
      id: 2,
      image: user2,
    },
    {
      id: 3,
      image: user3,
    },
    {
      id: 4,
      image: user4,
    },
    {
      id: 5,
      image: user5,
    },
    {
      id: 6,
      image: user6,
    },
    {
      id: 7,
      image: user7,
    },
    {
      id: 8,
      image: user8,
    },
    {
      id: 9,
      image: user9,
    },
    {
      id: 10,
      image: user10,
    },
    {
      id: 11,
      image: user11,
    },
    {
      id: 12,
      image: user12,
    },
    {
      id: 13,
      image: user13,
    },
    {
      id: 14,
      image: user14,
    },
    {
      id: 15,
      image: user15,
    },
  ];

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchComment(universityId));
  }, [universityId]);

  const state = useSelector((item: any) => item.comment);

  return state.data && state.data.length > 0
    ? state.data.map((item: any) => (
        <div key={item.id} className="w-full h-full flex items-center mt-4 pb-12 border-t pt-12 dark:border-t-gray-600">
          <div className="flex-col items-center w-full">
            <div className="flex items-center justify-between w-full max-md:flex-col max-md:justify-start max-md:items-start">
              <div className="flex items-center gap-3">
                <div>
                  <Image src={userImage[item.image].image.src} width={50} height={50} alt="userImg" />
                </div>
                <div className="font-medium">@Anonim</div>
                <div className="text-gray-500 dark:text-gray-300">{item.created_at}</div>
              </div>
              <div className="flex items-center gap-3 max-md:flex-col max-md:items-start max-md:mt-4">
                <RateStar totalRate={item.rate} />
              </div>
            </div>

            <div className="mt-6">
              {item.comment.length > 4000 ? <p>{item.comment.slice(0, 4000)}...</p> : item.comment}
            </div>
          </div>
        </div>
      ))
    : null;
}

export default Comments;

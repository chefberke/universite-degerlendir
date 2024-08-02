import React, { useEffect, useState } from "react";

import { FaStar } from "react-icons/fa6";

import Image from "next/image";

// user images
import user1 from "../../../public/assets/user_1.png";
import user2 from "../../../public/assets/user_2.png";
import user3 from "../../../public/assets/user_3.png";
import user4 from "../../../public/assets/user_4.png";
import user5 from "../../../public/assets/user_5.png";

function Comments() {
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
  ];

  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    const number = Math.floor(Math.random() * 5);
    setRandomNumber(number);
  }, []);

  return (
    <div className="w-full h-full flex items-center mt-4 pb-12 border-t pt-12">
      <div className="flex-col items-center w-full">
        <div className="flex items-center justify-between w-full max-md:flex-col max-md:justify-start max-md:items-start">
          <div className="flex items-center gap-4">
            <div>
              <Image src={userImage[randomNumber].image.src} width={50} height={50} alt="userImg" />
            </div>
            <div>@Anonim</div>
            <div className="text-gray-500">01.08.2024</div>
          </div>
          <div className="flex items-center gap-3 max-md:flex-col max-md:items-start max-md:mt-4">
            <div className="flex items-center mt-4">
              3.5+ <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>
          </div>
        </div>

        <div className="mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eius illum autem, laudantium possimus blanditiis,
          ut voluptas delectus accusantium nam at nisi dolor omnis numquam sint alias voluptates cumque non!
        </div>
      </div>
    </div>
  );
}

export default Comments;

import Link from "next/link";
import React from "react";
import { FaBookOpen } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";

function Logo() {
  return (
    <div>
      <Link href={"/"}>
        <FaBookOpen className="text-[2rem] dark:text-white text-blue-500" />
      </Link>
    </div>
  );
}

export default Logo;

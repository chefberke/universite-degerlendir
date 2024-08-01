import Link from "next/link";
import React from "react";
import { MdRateReview } from "react-icons/md";

function Logo() {
  return (
    <div>
      <Link href={"/"}>
        <MdRateReview className="text-[3rem] dark:text-white text-blue-500" />
      </Link>
    </div>
  );
}

export default Logo;

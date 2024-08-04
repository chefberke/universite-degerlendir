import React from "react";
import Image from "next/image";

import kampus from "../../../public/assets/kampusimg.png";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <div className="relative w-full h-[32rem] border border-white dark:border-slate-950 rounded-xl overflow-hidden">
      <div className="relative w-full h-full">
        <Image src={kampus} fill style={{ objectFit: "cover" }} alt="kampus" className="absolute inset-0 z-0" />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-[2.5rem] font-bold z-10 p-4">
        <h2>Üniversite Değerlendir</h2>
        <p className="text-center max-sm:text-start mt-1 font-normal text-[1.2rem] text-gray-200">
          Deneyimlerinizi ve görüşlerinizi paylaşarak diğerlerinin eğitimleri hakkında daha
          <br /> bilinçli kararlar vermelerine yardımcı olun.
        </p>
        <div className="text-center mt-6">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default Header;

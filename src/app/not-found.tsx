import React from "react";
import Image from "next/image";

import Error from "../../public/assets/404img.svg";

function notfound() {
  return (
    <div className="flex items-center justify-center w-full h-[40rem]">
      <Image src={Error} alt="error" width={500} height={500} />
    </div>
  );
}

export default notfound;

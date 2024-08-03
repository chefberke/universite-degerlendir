import React, { Suspense } from "react";
import Image from "next/image";

import Error from "../../public/assets/404img.svg";

function notfound() {
  return (
    <Suspense fallback={<div className="w-full h-full flex items-center justify-center">Yükleniyor...</div>}>
      <div className="flex items-center justify-center w-full h-[40rem]">
        <Image src={Error} alt="error" width={500} height={500} />
      </div>
    </Suspense>
  );
}

export default notfound;

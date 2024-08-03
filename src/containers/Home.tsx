import Universities from "@/components/ui/Universities";
import React, { Suspense } from "react";

function Homepage() {
  return (
    <Suspense fallback={<div className="w-full h-full flex items-center justify-center">Yükleniyor...</div>}>
      <div>
        <Universities />
      </div>
    </Suspense>
  );
}

export default Homepage;

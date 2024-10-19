import Header from "@/components/ui/Header";
import Universities from "@/components/ui/Universities";
import React, { Suspense } from "react";

function Homepage() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          Yükleniyor...
        </div>
      }
    >
      <div>
        <Header />
      </div>
      <div className="flex items-center justify-start">
        <h2 className="text-[1.8rem] font-semibold mt-12">Üniversiteler</h2>
      </div>
      <div>
        <Universities />
      </div>
    </Suspense>
  );
}

export default Homepage;

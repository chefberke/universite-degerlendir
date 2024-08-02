import { fetchComment } from "@/lib/features/commentSlice";
import { AppDispatch } from "@/lib/store";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

import RateStar from "./RateStar";

function Rate({ universityId }: any) {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchComment(universityId));
  }, [dispatch, universityId]);

  const state = useSelector((item: any) => item.comment);

  let rate = 0;

  if (state.data && state.data.length > 0) {
    rate = state.data.reduce((acc: number, commn: any) => acc + Number(commn.rate), 0);
  }

  const totalRate = state?.data?.length ? rate / state.data.length : 0;

  return (
    <div>
      <div className="mt-24 text-[1.5rem] dark:text-white font-medium">Değerlendirmeler</div>
      <div className="w-full flex items-center justify-between pt-12 dark:text-gray-200 max-sm:flex-col max-sm:items-start max-sm:justify-start">
        {state?.loading === true ? <div>Yükleniyor...</div> : null}
        {state?.data?.length === 0 ? <div>Hiç değerlendirme yok.</div> : null}
        <div>
          <h2 className="text-gray-500 text-[1.1rem] dark:text-gray-300">Toplam Değerlendirme</h2>
          <div className="text-gray-950 text-[1.4rem] flex justify-center pt-6 font-medium dark:text-white max-sm:justify-start">
            {state?.data?.length}
          </div>
        </div>
        <div>
          <h2 className="text-gray-500 text-[1.1rem] dark:text-gray-300 max-sm:mt-12">Ortalama Puan</h2>
          <div className="text-gray-950 text-[1.4rem] flex justify-center pt-6 font-medium dark:text-white max-sm:justify-start">
            <RateStar totalRate={totalRate} />
          </div>
        </div>

        <div className="max-sm:mt-12">
          <p className="flex items-center justify-start gap-2 text-gray-500 dark:text-gray-300">
            <FaStar className="text-green-600 text-[1.2rem]" />5 Mükemmel
          </p>
          <p className="flex items-center justify-start gap-2 text-gray-500 dark:text-gray-300">
            <FaStar className="text-green-500 text-[1.2rem]" />4 İyi
          </p>
          <p className="flex items-center justify-start gap-2 text-gray-500 dark:text-gray-300">
            <FaStar className="text-yellow-500 text-[1.2rem]" />3 Fena Değil
          </p>
          <p className="flex items-center justify-start gap-2 text-gray-500 dark:text-gray-300">
            <FaStar className="text-orange-500 text-[1.2rem]" />2 Tercih Edilmez
          </p>
          <p className="flex items-center justify-start gap-2 text-gray-500 dark:text-gray-300">
            <FaStar className="text-red-500 text-[1.2rem]" />1 Kötü
          </p>
        </div>
      </div>
    </div>
  );
}

export default Rate;

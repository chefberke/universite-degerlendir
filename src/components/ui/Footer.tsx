import Link from "next/link";
import React from "react";
import Logo from "../common/Logo";

function Footer() {
  return (
    <div className="flex items-center justify-start h-[19rem] border-t dark:border-t-gray-800 mt-[6rem] max-md:h-[25rem]">
      <div className="flex-col items-center justify-center">
        <div>
          <div className="flex gap-3">
            <Logo />
            <h2 className="text-[1.4rem] font-medium dark:text-white">Üniversite Değerlendir</h2>
          </div>
          <p className="text-gray-500 text-[0.9rem] w-[40rem] pt-4 max-md:w-[26rem] dark:text-gray-400">
            Bu platform, İzmir'deki üniversiteleri puanlamanıza ve anonim yorum bırakmanıza olanak tanır.
            Deneyimlerinizi ve görüşlerinizi paylaşarak diğerlerinin eğitimleri hakkında daha bilinçli kararlar
            vermelerine yardımcı olun. Değerli geri bildirimleri keşfedin ve bilgili öğrenciler ve aday öğrencilerden
            oluşan bir topluluğa katkıda bulunun.
          </p>
        </div>
        <div className="pt-[3rem] flex items-center justify-start gap-16 text-gray-600 text-[0.9rem] dark:text-gray-400">
          <div className="cursor-pointer hover:text-gray-950 dark:hover:text-gray-100 transition-all">
            <Link href={"/privacy"}>Gizlilik</Link>
          </div>
          <div className="cursor-pointer hover:text-gray-950 dark:hover:text-gray-100 transition-all">
            <a target="_blank" href="https://github.com/chefberke">
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

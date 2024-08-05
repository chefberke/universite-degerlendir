import React, { Suspense } from "react";

function Page() {
  return (
    <Suspense fallback={<div className="w-full h-full flex items-center justify-center">Yükleniyor...</div>}>
      <div className="w-full h-full flex items-center justify-start mt-[6rem] dark:bg-slate-950">
        <div className="flex-col items-center justify-center px-6">
          <div>
            <h1 className="font-black text-[1.8rem] dark:text-white">Gizlilik Politikası</h1>
            <p className="text-gray-500 text-[1rem] dark:text-gray-300">Son Güncelleme: 31 Temmuz 2024</p>
          </div>
          <div className="pt-6">
            <p className="text-[1rem] dark:text-gray-100 font-medium">
              Üniversiteleri Puanlama uygulaması olarak gizliliğinize büyük önem veriyoruz. İşte bilgilerinizi nasıl
              işlediğimiz:
            </p>
          </div>
          <div className="pt-4 space-y-4">
            <div>
              <h2 className="font-bold text-[1.3rem] dark:text-gray-200">Verileriniz:</h2>
              <p className="text-gray-700 dark:text-gray-400 pt-1">
                Uygulamamızı kullandığınızda kişisel verileriniz yalnızca size hizmet sunmak amacıyla toplanır ve
                tamamen gizli olarak saklanır.
              </p>
            </div>
            <div>
              <h2 className="font-bold text-[1.3rem] dark:text-gray-200">Kullanım:</h2>
              <p className="text-gray-700 dark:text-gray-400 pt-1">
                Verilerinizi yalnızca uygulamanın işlevselliği ve kullanıcı deneyimini iyileştirmek amacıyla kullanırız.
                Üçüncü şahıslarla paylaşılmayacaktır.
              </p>
            </div>
            <div>
              <h2 className="font-bold text-[1.3rem] dark:text-gray-200">Veri Güvenliği:</h2>
              <p className="text-gray-700 dark:text-gray-400 pt-1">
                Verilerinizi yetkisiz erişimden korumak için gerekli tüm güvenlik önlemlerini alırız. Güvenliğiniz bizim
                önceliğimizdir.
              </p>
            </div>
            <div>
              <h2 className="font-bold text-[1.3rem] dark:text-gray-200">Üniversite Bağlantıları ve Şeffaflık:</h2>
              <p className="text-gray-700 dark:text-gray-400 pt-1">
                Uygulamamız herhangi bir üniversite ile resmi bir anlaşma yapmamaktadır. Dolayısıyla, üniversiteler
                hakkında yorum ekleme, silme veya değiştirme yetkimiz bulunmamaktadır. Tüm yorumlar ve puanlamalar
                kullanıcıların gerçek görüşlerini yansıtacak şekilde tamamen şeffaf bir şekilde yönetilmektedir. Site
                geliştiricisi tarafından yapılan herhangi bir müdahale kesinlikle söz konusu değildir
              </p>
            </div>
            <div>
              <h2 className="font-bold text-[1.3rem] dark:text-gray-200">İletişim:</h2>
              <p className="text-gray-700 dark:text-gray-400 pt-1">
                Gizlilik politikamız hakkında herhangi bir sorunuz veya endişeniz varsa, bizimle iletişime geçmekten
                çekinmeyin:{" "}
                <a href="mailto:berkekanber@gmail.com" className="text-blue-800 underline dark:text-blue-500">
                  berkekanber@gmail.com
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default Page;

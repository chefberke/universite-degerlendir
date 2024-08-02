import React from "react";

function page() {
  return (
    <div className="w-full h-full flex items-center justify-start mt-[6rem] dark:bg-slate-950">
      <div className="flex-col items-center justify-center">
        <div>
          <h2 className="font-medium text-[1.6rem] dark:text-white">Gizlilik Politikası</h2>
          <p className="text-gray-500 text-[0.9rem] dark:text-gray-300">Son Güncelleme: 31 Temmuz 2024</p>
        </div>
        <div className="pt-6">
          <p className="text-[1rem] dark:text-gray-100 font-medium">
            Izmir Üniversiteleri Puanlama uygulaması olarak, gizliliğinize değer veriyoruz. İşte bilgilerinizi nasıl
            işlediğimiz:
          </p>
        </div>
        <div className="pt-4">
          <div>
            <h2 className="font-medium text-[1.1rem] dark:text-gray-200">Verileriniz:</h2>
            <p className="text-gray-700 dark:text-gray-400">
              Uygulamamızı kullandığınızda, kişisel verileriniz başkalarına görünmez. Güvende ve özel olarak saklanır.
            </p>
          </div>
          <div className="pt-4">
            <h2 className="font-medium text-[1.1rem] dark:text-gray-200">Kullanım:</h2>
            <p className="text-gray-700 dark:text-gray-400">
              Verilerinizi toplar ve saklarız, ancak yalnızca uygulamanın işlevselliği için.
            </p>
          </div>
          <div className="pt-4">
            <h2 className="font-medium text-[1.1rem] dark:text-gray-200">Veri Güvenliği:</h2>
            <p className="text-gray-700 dark:text-gray-400">
              Verilerinizi yetkisiz erişimden korumak için makul önlemler alırız.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;

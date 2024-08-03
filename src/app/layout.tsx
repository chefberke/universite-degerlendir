import type { Metadata } from "next";
import "../styles/globals.css";
import "@radix-ui/themes/styles.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import StoreProvider from "./StoreProvider";
import { Theme } from "@radix-ui/themes";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Üniversite Değerlendir",
  description: "Bu platform, İzmirdeki üniversiteleri puanlamanıza ve anonim yorum bırakmanıza olanak tanır",
  icons: {
    icon: "/assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <StoreProvider>
        <body className="dark:bg-slate-950">
          <div className="flex items-center justify-center font-poppins">
            <div className="h-screen max-w-[70rem] w-[90%]">
              <div>
                <Suspense
                  fallback={<div className="w-full h-full flex items-center justify-center">Yükleniyor...</div>}
                >
                  <Navbar />
                </Suspense>
              </div>
              <div>
                <Theme className="dark:bg-slate-950">{children}</Theme>
              </div>
              <div>
                <Footer />
              </div>
            </div>
          </div>
        </body>
      </StoreProvider>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "../app/components/MainLayout";
import MenuContextProvider from "../context/MenuContext";
export const metadata: Metadata = {
  title: "Nextjs Tailwind SandBox",
  description: "This is a tutorial project from DevEmpower Youtube",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MenuContextProvider>
          <MainLayout>{children}</MainLayout>
        </MenuContextProvider>
      </body>
    </html>
  );
}
// 1. Khi truy cập 1 trang, NextJS tự động lấy nội dung từ page.tsx và tự động truyền nó vào biến children của RootLayout

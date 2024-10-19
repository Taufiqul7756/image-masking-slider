import type { Metadata } from "next";
import "./globals.css";
import DefaultLayout from "@/components/shared/DefaultLayout";
// import { QueryClient } from "@tanstack/react-query";
import QueryClientProvider from "@/provider/QueryClientProvider";

export const metadata: Metadata = {
  title: "Image Masking Slider",
  description: "Image Masking Slider - Compare img color by slider",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider>
          <DefaultLayout>{children}</DefaultLayout>
        </QueryClientProvider>
      </body>
    </html>
  );
}

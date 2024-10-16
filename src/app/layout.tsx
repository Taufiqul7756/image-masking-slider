import type { Metadata } from "next";
import "./globals.css";
import DefaultLayout from "@/components/shared/DefaultLayout";
// import { QueryClient } from "@tanstack/react-query";
import QueryClientProvider from "@/provider/QueryClientProvider";

export const metadata: Metadata = {
  title: "JSON Builder",
  description: "A JSON builder for your needs",
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

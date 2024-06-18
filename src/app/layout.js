import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import CommonLayout from "@/components/common-layout";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JOBSCO",
  description: "Find your dream job",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Suspense fallback={<Loading />}>
            <CommonLayout
              attribute="class"
              defaultTheme="system"
              children={children}
            />
          </Suspense>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}

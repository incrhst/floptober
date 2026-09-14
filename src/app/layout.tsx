import { ClerkProvider } from "@clerk/nextjs";
import { ConvexClientProvider } from "./ConvexClientProvider";
import type { Metadata } from "next";
import { Gochi_Hand, Nunito } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { GlossaryDrawer } from "@/components/GlossaryDrawer";

const gochiHand = Gochi_Hand({
  weight: "400",
  variable: "--font-hand",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://floptober.netlify.app"),
  title: "Floptober | Digital Wreckage & Learning",
  description: "Floptober is a 31-day challenge to launch ugly, fail in public, and cure your paralyzing perfectionism.",
  openGraph: {
    siteName: "Floptober",
    title: "Floptober | Digital Wreckage & Learning",
    description: "Floptober is a 31-day challenge to launch ugly, fail in public, and cure your paralyzing perfectionism.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${gochiHand.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ClerkProvider>
          <ConvexClientProvider>
            {children}
            <Suspense fallback={null}>
              <GlossaryDrawer />
            </Suspense>
          </ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}

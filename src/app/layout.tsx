import type { Metadata } from "next";
import { Geist } from "next/font/google";
import NavBar from "@/app/components/NavBar";
import "@/app/globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GDSC Soongsil University",
  description: "GDSC Soongsil University는 서로의 실력과 무관하게 시너지를 발휘하는 학생 개발자 커뮤니티입니다.",
  openGraph: {
    title: "GDSC Soongsil University",
    description: "GDSC Soongsil University는 서로의 실력과 무관하게 시너지를 발휘하는 학생 개발자 커뮤니티입니다.",
    url: "https://gdscsoongsil.pages.dev",
    images: [
      {
        url: "https://gdscsoongsil.pages.dev/opengraph.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "GDSC Soongsil University",
    description: "GDSC Soongsil University는 서로의 실력과 무관하게 시너지를 발휘하는 학생 개발자 커뮤니티입니다.",
    images: ["https://gdscsoongsil.pages.dev/opengraph.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={geist.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

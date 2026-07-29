import type { Metadata } from "next";
import PointerGlow from "./PointerGlow";
import "./globals.css";

export const metadata: Metadata = {
    title: "陆李彬 — AI 内容创作者",
    description: "陆李彬的个人作品集：内容策划、AI 漫剧与 AI 视频。",
    openGraph: {
      title: "陆李彬 — AI 内容创作者",
      description: "内容策划、AI 漫剧与 AI 视频作品集。",
      images: [{ url: "/og.png", width: 1734, height: 907, alt: "陆李彬黑金电影感作品集" }],
    },
    twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body><PointerGlow />{children}</body></html>;
}

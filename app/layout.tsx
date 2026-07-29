import type { Metadata } from "next";
import { headers } from "next/headers";
import PointerGlow from "./PointerGlow";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  return {
    title: "陆李彬 — AI 内容创作者",
    description: "陆李彬的个人作品集：内容策划、AI 漫剧与 AI 视频。",
    openGraph: {
      title: "陆李彬 — AI 内容创作者",
      description: "内容策划、AI 漫剧与 AI 视频作品集。",
      images: [{ url: `${origin}/og.png`, width: 1734, height: 907, alt: "陆李彬黑金电影感作品集" }],
    },
    twitter: { card: "summary_large_image", images: [`${origin}/og.png`] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body><PointerGlow />{children}</body></html>;
}

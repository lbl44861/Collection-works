"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  no: string;
  title: string;
  src: string;
  featured?: boolean;
  meta?: string;
  summary?: string;
  scriptHref?: string;
};

export default function VideoCard({
  no,
  title,
  src,
  featured,
  meta = "AI 漫剧 · 2026",
  summary,
  scriptHref,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [poster, setPoster] = useState<string>();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const capture = () => {
      const target = Math.min(1.2, Math.max(0.2, video.duration * 0.05));
      video.currentTime = target;
    };
    const draw = () => {
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext("2d")?.drawImage(video, 0, 0);
      setPoster(canvas.toDataURL("image/jpeg", 0.82));
      video.currentTime = 0;
    };
    video.addEventListener("seeked", draw, { once: true });
    video.addEventListener("loadedmetadata", capture, { once: true });
    if (video.readyState >= 1) capture();
    return () => {
      video.removeEventListener("loadedmetadata", capture);
      video.removeEventListener("seeked", draw);
    };
  }, [src]);

  return (
    <article className={`videoCard ${featured ? "featured" : ""}`}>
      <div className="videoFrame">
        <video ref={videoRef} controls preload="auto" playsInline poster={poster}>
          <source src={src} type="video/mp4" />
          当前浏览器不支持视频播放。
        </video>
      </div>
      <div className="mediaMeta"><span>{no}</span><h4>{title}</h4><p>{meta}</p></div>
      {summary && scriptHref && (
        <div className="scriptPanel">
          <div>
            <span>DIRECTOR&apos;S SCRIPT</span>
            <p>{summary}</p>
          </div>
          <a href={scriptHref} download>
            下载完整分镜脚本 <b>↗</b>
          </a>
        </div>
      )}
    </article>
  );
}

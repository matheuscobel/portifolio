"use client";

import type { ProjectImage, ProjectImageFrameVariant } from "@/content/projects";
import Image from "next/image";
import { useCallback, useState } from "react";
import { imageFrameClass } from "./imageFrame";

type Props = {
  before: ProjectImage;
  after: ProjectImage;
  hint?: string;
  imageFrameVariant: ProjectImageFrameVariant;
};

export default function ProjectImageCompare({
  before,
  after,
  hint = "Passe o mouse sobre a imagem para ver o layout atual",
  imageFrameVariant,
}: Props) {
  const [reveal, setReveal] = useState(0);

  const updateReveal = useCallback((clientX: number, element: HTMLDivElement) => {
    const rect = element.getBoundingClientRect();
    const percent = ((clientX - rect.left) / rect.width) * 100;
    setReveal(Math.min(100, Math.max(0, percent)));
  }, []);

  return (
    <figure className="space-y-4">
      <div
        className={`relative w-full cursor-ew-resize select-none overflow-hidden rounded-xl ${imageFrameClass[imageFrameVariant]}`}
        onMouseMove={(e) => updateReveal(e.clientX, e.currentTarget)}
        onMouseLeave={() => setReveal(0)}
        onTouchMove={(e) => {
          const touch = e.touches[0];
          if (touch) updateReveal(touch.clientX, e.currentTarget);
        }}
        onTouchEnd={() => setReveal(0)}
        role="img"
        aria-label={`Comparativo entre ${before.alt} e ${after.alt}`}
      >
        <Image
          src={before.src}
          alt={before.alt}
          width={1920}
          height={1080}
          className="block h-auto w-full"
          sizes="(max-width: 1024px) 100vw, 896px"
          draggable={false}
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - reveal}% 0 0)` }}
        >
          <div className="relative h-full w-full">
            <Image
              src={after.src}
              alt={after.alt}
              fill
              className="object-cover object-left-top"
              sizes="(max-width: 1024px) 100vw, 896px"
              draggable={false}
            />
          </div>
        </div>
        {reveal > 2 && reveal < 98 ? (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 z-10 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_12px_rgba(0,0,0,0.45)]"
            style={{ left: `${reveal}%` }}
          />
        ) : null}
      </div>
      {hint ? <figcaption className="case-study-caption">{hint}</figcaption> : null}
    </figure>
  );
}

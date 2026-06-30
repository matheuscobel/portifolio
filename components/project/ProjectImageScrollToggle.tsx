"use client";

import type {
  ProjectImageFrameVariant,
  ProjectImageScrollToggle as ProjectImageScrollToggleConfig,
} from "@/content/projects";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { imageFrameClass } from "./imageFrame";

type Props = {
  config: ProjectImageScrollToggleConfig;
  imageFrameVariant: ProjectImageFrameVariant;
};

function BlockCaption({ caption }: { caption: string | string[] }) {
  const lines = Array.isArray(caption)
    ? caption.map((line) => line.trim()).filter(Boolean)
    : [caption.trim()].filter(Boolean);

  return (
    <figcaption className="case-study-caption space-y-1">
      {lines.map((line, i) => (
        <span key={i} className="block">
          {line}
        </span>
      ))}
    </figcaption>
  );
}

export default function ProjectImageScrollToggle({
  config,
  imageFrameVariant,
}: Props) {
  const { options, scrollHint = "Role dentro da imagem para ver o layout completo.", caption } =
    config;
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const active = options[activeIndex];

  useEffect(() => {
    scrollRef.current?.scrollTo(0, 0);
  }, [activeIndex]);

  return (
    <figure className="space-y-4">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {options.map((option, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={option.label}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`rounded-full px-4 py-2 font-headline text-sm transition-colors md:px-5 md:text-base ${
                isActive
                  ? "bg-white text-black"
                  : "border border-white/20 bg-white/[0.04] text-white hover:border-white/30 hover:bg-white/[0.08]"
              }`}
              aria-pressed={isActive}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      <div className={`overflow-hidden rounded-xl ${imageFrameClass[imageFrameVariant]}`}>
        <div
          ref={scrollRef}
          className="max-h-[min(52vh,28rem)] overflow-y-auto overscroll-contain md:max-h-[min(56vh,32rem)]"
          tabIndex={0}
          aria-label={active.image.alt}
        >
          <Image
            src={active.image.src}
            alt={active.image.alt}
            width={1920}
            height={4800}
            className="block h-auto w-full"
            sizes="(max-width: 1024px) 100vw, 896px"
            draggable={false}
          />
        </div>
      </div>

      <p className="case-study-caption opacity-70">{scrollHint}</p>
      {caption ? <BlockCaption caption={caption} /> : null}
    </figure>
  );
}

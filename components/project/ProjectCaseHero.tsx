import type { ProjectImageFrameVariant } from "@/content/projects";
import Image from "next/image";
import { imageFrameClass } from "./imageFrame";

type Props = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  imageFrameVariant?: ProjectImageFrameVariant;
};

export default function ProjectCaseHero({
  title,
  imageSrc,
  imageAlt,
  imageFrameVariant = "forest",
}: Props) {
  return (
    <header className="bg-black text-white">
      <div className="mx-auto max-w-5xl px-8 pt-16 pb-10 md:pt-24 md:pb-14">
        <h1 className="case-study-hero-title text-center">{title}</h1>
      </div>
      <div className="mx-auto max-w-5xl px-8 pb-16 md:pb-24">
        <div
          className={`overflow-hidden rounded-2xl p-6 shadow-2xl md:p-10 lg:p-12 ${imageFrameClass[imageFrameVariant]}`}
        >
          <div className="relative mx-auto aspect-video w-full max-w-4xl">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 896px"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
}

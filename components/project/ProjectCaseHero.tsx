import type { ProjectImageFrameVariant } from "@/content/projects";
import Image from "next/image";
import { imageFrameClass } from "./imageFrame";

type Props = {
  caseName: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  imageFrameVariant?: ProjectImageFrameVariant;
};

export default function ProjectCaseHero({
  caseName,
  subtitle,
  imageSrc,
  imageAlt,
  imageFrameVariant = "forest",
}: Props) {
  return (
    <header className="bg-black text-white">
      <div className="mx-auto max-w-5xl px-8 pt-16 pb-10 md:pt-24 md:pb-14">
        <p className="font-headline text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
          {caseName}
        </p>
        <h1 className="case-study-hero-title mt-4 text-left">{subtitle}</h1>
      </div>
      <div className="mx-auto max-w-5xl px-8 pb-16 md:pb-24">
        <div
          className={`overflow-hidden rounded-2xl shadow-2xl ${imageFrameClass[imageFrameVariant]}`}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1920}
            height={1080}
            className="block h-auto w-full"
            sizes="(max-width: 1024px) 100vw, 896px"
            priority
          />
        </div>
      </div>
    </header>
  );
}

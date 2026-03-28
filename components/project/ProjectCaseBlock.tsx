import type { ProjectBodyBlock } from "@/content/projects";
import Image from "next/image";
import { imageFrameClass } from "./imageFrame";

type Props = {
  block: ProjectBodyBlock;
};

function splitParagraphs(text: string) {
  const parts = text.split(/\n\n/).map((p) => p.trim()).filter(Boolean);
  return parts.length ? parts : [text];
}

export default function ProjectCaseBlock({ block }: Props) {
  const { title, text, image, caption, imageFrameVariant = "muted" } = block;
  const paragraphs = splitParagraphs(text);

  return (
    <section className="border-b border-white/10 bg-black py-14 last:border-b-0 md:py-20">
      <div className="mx-auto max-w-5xl px-8">
        <h2 className="case-study-block-title mb-6 md:mb-8">{title}</h2>
        <div className="case-study-body mb-10 max-w-3xl space-y-4 md:mb-12">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        {image ? (
          <figure className="space-y-4">
            <div
              className={`overflow-hidden rounded-xl p-6 md:p-8 lg:p-10 ${imageFrameClass[imageFrameVariant]}`}
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 896px"
                />
              </div>
            </div>
            {caption ? <figcaption className="case-study-caption">{caption}</figcaption> : null}
          </figure>
        ) : null}
      </div>
    </section>
  );
}

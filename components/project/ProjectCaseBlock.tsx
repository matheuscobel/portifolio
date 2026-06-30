import type {
  ProjectBodyBlock,
  ProjectImage,
  ProjectSubsection,
  ProjectVisualBlock,
} from "@/content/projects";
import Image from "next/image";
import ProjectImageCompare from "./ProjectImageCompare";
import ProjectImageScrollToggle from "./ProjectImageScrollToggle";
import { imageFrameClass } from "./imageFrame";

type Props = {
  block: ProjectBodyBlock;
};

function splitParagraphs(text: string) {
  const parts = text.split(/\n\n/).map((p) => p.trim()).filter(Boolean);
  return parts.length ? parts : [text];
}

function normalizeParagraphs(text: string | string[]) {
  if (Array.isArray(text)) {
    return text.map((p) => p.trim()).filter(Boolean);
  }
  return splitParagraphs(text);
}

function normalizeCaption(caption: string | string[]) {
  if (Array.isArray(caption)) {
    return caption.map((line) => line.trim()).filter(Boolean);
  }
  return [caption.trim()].filter(Boolean);
}

function BlockCaption({ caption }: { caption: string | string[] }) {
  const lines = normalizeCaption(caption);

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

function BlockProse({ text }: { text: string | string[] }) {
  const paragraphs = normalizeParagraphs(text);

  return (
    <div className="case-study-block-prose space-y-5 md:space-y-6">
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}

function BlockImages({
  images,
  imageFrameVariant,
}: {
  images: ProjectImage[];
  imageFrameVariant: NonNullable<ProjectVisualBlock["imageFrameVariant"]>;
}) {
  return (
    <div className="space-y-4">
      {images.map((img, i) => (
        <div
          key={`${img.src}-${i}`}
          className={`overflow-hidden rounded-xl ${imageFrameClass[imageFrameVariant]}`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            width={1920}
            height={1080}
            className="block h-auto w-full"
            sizes="(max-width: 1024px) 100vw, 896px"
          />
        </div>
      ))}
    </div>
  );
}

function BlockVisuals({
  visual,
  defaultFrameVariant,
}: {
  visual: ProjectVisualBlock;
  defaultFrameVariant: NonNullable<ProjectVisualBlock["imageFrameVariant"]>;
}) {
  const { image, images, imageCompare, imageScrollToggle, caption } = visual;
  const imageFrameVariant = visual.imageFrameVariant ?? defaultFrameVariant;
  const stackedImages = images ?? (image ? [image] : []);
  const hasScrollToggle = Boolean(imageScrollToggle);
  const hasCompare = Boolean(imageCompare);
  const hasStackedImages = !hasScrollToggle && !hasCompare && stackedImages.length > 0;

  if (!hasScrollToggle && !hasCompare && !hasStackedImages) return null;

  return (
    <figure className="space-y-4">
      {hasScrollToggle && imageScrollToggle ? (
        <ProjectImageScrollToggle
          config={imageScrollToggle}
          imageFrameVariant={imageFrameVariant}
        />
      ) : null}
      {hasCompare && imageCompare ? (
        <ProjectImageCompare
          before={imageCompare.before}
          after={imageCompare.after}
          hint={imageCompare.hint}
          imageFrameVariant={imageFrameVariant}
        />
      ) : null}
      {hasStackedImages ? (
        <>
          <BlockImages images={stackedImages} imageFrameVariant={imageFrameVariant} />
          {caption ? <BlockCaption caption={caption} /> : null}
        </>
      ) : null}
    </figure>
  );
}

function ProjectSubsectionBlock({
  subsection,
  defaultFrameVariant,
}: {
  subsection: ProjectSubsection;
  defaultFrameVariant: NonNullable<ProjectVisualBlock["imageFrameVariant"]>;
}) {
  return (
    <div className="space-y-8 md:space-y-10">
      <div className="case-study-block-content pl-5 md:pl-7">
        <h3 className="case-study-subsection-title">{subsection.title}</h3>
        <div className="mt-4 md:mt-5">
          <BlockProse text={subsection.text} />
        </div>
      </div>
      <BlockVisuals visual={subsection} defaultFrameVariant={defaultFrameVariant} />
    </div>
  );
}

export default function ProjectCaseBlock({ block }: Props) {
  const {
    title,
    intro,
    text,
    subsections,
    imageFrameVariant = "muted",
  } = block;
  const hasSubsections = Boolean(subsections?.length);

  return (
    <section className="bg-black py-10 md:py-15 lg:py-18">
      <div className="mx-auto max-w-5xl px-8">
        <div className="case-study-block-content mb-9 md:mb-12 lg:mb-15">
          <h2 className="case-study-block-title text-white">{title}</h2>
          {intro ? (
            <div className="mt-6 md:mt-8">
              <BlockProse text={intro} />
            </div>
          ) : null}
          {!hasSubsections && text ? (
            <div className={intro ? "mt-6 md:mt-8" : "mt-6 md:mt-8"}>
              <BlockProse text={text} />
            </div>
          ) : null}
        </div>

        {hasSubsections ? (
          <div className="space-y-14 md:space-y-16 lg:space-y-20">
            {subsections!.map((subsection, i) => (
              <ProjectSubsectionBlock
                key={`${title}-subsection-${i}`}
                subsection={subsection}
                defaultFrameVariant={imageFrameVariant}
              />
            ))}
          </div>
        ) : (
          <BlockVisuals visual={block} defaultFrameVariant={imageFrameVariant} />
        )}
      </div>
    </section>
  );
}

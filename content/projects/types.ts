export type ProjectImageFrameVariant = "neutral" | "muted" | "forest";

export type ProjectImage = {
  src: string;
  alt: string;
};

export type ProjectImageCompare = {
  before: ProjectImage;
  after: ProjectImage;
  hint?: string;
};

export type ProjectImageScrollToggleOption = {
  label: string;
  image: ProjectImage;
};

export type ProjectImageScrollToggle = {
  options: ProjectImageScrollToggleOption[];
  scrollHint?: string;
  caption?: string | string[];
};

export type ProjectVisualBlock = {
  image?: ProjectImage;
  images?: ProjectImage[];
  imageCompare?: ProjectImageCompare;
  imageScrollToggle?: ProjectImageScrollToggle;
  caption?: string | string[];
  imageFrameVariant?: ProjectImageFrameVariant;
};

export type ProjectSubsection = {
  title: string;
  text: string | string[];
} & ProjectVisualBlock;

export type ProjectBodyBlock = {
  title: string;
  intro?: string | string[];
  text?: string | string[];
  subsections?: ProjectSubsection[];
} & ProjectVisualBlock;

export type ProjectMeta = {
  intro: string;
  client: string;
  role: string;
  location: string;
  missao: string;
};

export type Project = {
  slug: string;
  destaque: boolean;
  title: string;
  caseName: string;
  subtitle: string;
  description: string;
  metric?: string;
  metricTitle?: string;
  metricText?: string;
  coverImage: string;
  cardImage?: string;
  /** Onde ancorar o crop da imagem no card (padrão: center). */
  cardImagePosition?: "top" | "center" | "bottom";
  coverAlt: string;
  tags: string[];
  heroImageFrameVariant?: ProjectImageFrameVariant;
  meta: ProjectMeta;
  bodyBlocks: ProjectBodyBlock[];
};

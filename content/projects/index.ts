import { recHelp } from "./data/rec-help";
import { sgocean } from "./data/sgocean";
import { surfguru } from "./data/surfguru";
import type { Project } from "./types";

export type {
  Project,
  ProjectBodyBlock,
  ProjectImage,
  ProjectImageCompare,
  ProjectImageScrollToggle,
  ProjectImageScrollToggleOption,
  ProjectImageFrameVariant,
  ProjectMeta,
  ProjectSubsection,
  ProjectVisualBlock,
} from "./types";

export const projects: Project[] = [sgocean, surfguru, recHelp];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.destaque);
}

export function getAllProjects(): Project[] {
  return projects;
}

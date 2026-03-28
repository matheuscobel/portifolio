import type { ProjectImageFrameVariant } from "@/content/projects";

export const imageFrameClass: Record<ProjectImageFrameVariant, string> = {
  neutral: "border border-white/10 bg-white/[0.04]",
  muted: "border border-white/10 bg-zinc-900/80",
  forest: "border border-white/10 bg-zinc-950",
};

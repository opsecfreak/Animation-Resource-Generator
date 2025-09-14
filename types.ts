export interface GeneratedImage {
  id: string;
  url: string;
  prompt: string;
  createdAt: string;
}

export type AspectRatio = "1:1" | "16:9" | "9:16" | "4:3" | "3:4";

export type Preset = "character" | "background" | "item" | "vehicle" | "custom";

export type ArtStyle = "none" | "photorealistic" | "anime" | "cartoon" | "watercolor" | "low-poly";

export type ColorPalette = "none" | "vibrant" | "pastel" | "monochromatic" | "earthy" | "neon";
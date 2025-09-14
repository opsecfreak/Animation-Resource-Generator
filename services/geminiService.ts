import { GoogleGenAI } from "@google/genai";
import type { AspectRatio, Preset, ArtStyle, ColorPalette } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const getPromptPrefix = (preset: Preset): string => {
    switch (preset) {
      case 'character':
        return 'Generate a high-quality, professional character concept sheet for animation or 3D modeling. The character should be presented in a T-pose or A-pose on a neutral grey background to facilitate modeling. Description: ';
      case 'background':
        return 'Generate a high-quality, professional background/environment concept art for an animation or game. Style should be painterly and evocative. Description: ';
      case 'item':
        return 'Generate a high-quality, professional concept art of a single item or prop. The item should be on a neutral background, shown from multiple angles. Description: ';
      case 'vehicle':
        return 'Generate a high-quality, professional concept design of a vehicle. The vehicle should be on a neutral background, showing its key features. Description: ';
      case 'custom':
      default:
        return '';
    }
};

export async function generateImagesFromApi(
  prompt: string, 
  aspectRatio: AspectRatio, 
  preset: Preset,
  artStyle: ArtStyle,
  negativePrompt: string,
  colorPalette: ColorPalette
): Promise<string[]> {
  try {
    let finalPrompt = `${getPromptPrefix(preset)}${prompt}`;

    const styleDetails: string[] = [];
    if (artStyle !== 'none') {
      styleDetails.push(`art style: ${artStyle.replace('-', ' ')}`);
    }
    if (colorPalette !== 'none') {
        styleDetails.push(`color palette: ${colorPalette}`);
    }

    if (styleDetails.length > 0) {
      finalPrompt += `\n\n--- Style Attributes ---\n${styleDetails.join(', ')}.`;
    }

    if (negativePrompt) {
      finalPrompt += `\n\n--- Negative Prompt (what to exclude) ---\nAvoid the following: ${negativePrompt}.`;
    }

    const response = await ai.models.generateImages({
      model: 'imagen-4.0-generate-001',
      prompt: finalPrompt,
      config: {
        numberOfImages: 4,
        outputMimeType: 'image/png',
        aspectRatio: aspectRatio,
      },
    });

    if (!response.generatedImages || response.generatedImages.length === 0) {
      throw new Error("Image generation failed, no images were returned.");
    }
    
    return response.generatedImages.map(img => {
        if (!img.image.imageBytes) {
            throw new Error("Received an empty image from the API.");
        }
        return `data:image/png;base64,${img.image.imageBytes}`;
    });

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to generate images. Please check your prompt or API key.");
  }
}
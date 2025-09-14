import React, { useState } from 'react';
import type { AspectRatio, Preset, ArtStyle, ColorPalette } from '../types';
import { Icon } from './Icon';
import { Spinner } from './Spinner';

interface ControlPanelProps {
  onGenerate: (prompt: string, aspectRatio: AspectRatio, preset: Preset, artStyle: ArtStyle, negativePrompt: string, colorPalette: ColorPalette) => void;
  isLoading: boolean;
}

const aspectRatios: { value: AspectRatio; label: string }[] = [
  { value: "1:1", label: "Square (1:1)" },
  { value: "16:9", label: "Widescreen (16:9)" },
  { value: "9:16", label: "Portrait (9:16)" },
  { value: "4:3", label: "Standard (4:3)" },
  { value: "3:4", label: "Tall (3:4)" },
];

const presets: { value: Preset; label: string; icon: string; placeholder: string }[] = [
    { value: "character", label: "Character", icon: "character", placeholder: "A brave knight with a glowing sword, fantasy style, detailed armor..." },
    { value: "background", label: "Background", icon: "background", placeholder: "An enchanted forest with glowing mushrooms and ancient trees..." },
    { value: "item", label: "Item", icon: "item", placeholder: "A magical potion bottle, shimmering with a swirling galaxy inside..." },
    { value: "vehicle", label: "Vehicle", icon: "vehicle", placeholder: "A sleek, futuristic cyberpunk motorcycle with neon lights..." },
];

const artStyles: { value: ArtStyle; label: string }[] = [
    { value: "none", label: "Default" },
    { value: "photorealistic", label: "Photorealistic" },
    { value: "anime", label: "Anime" },
    { value: "cartoon", label: "Cartoon" },
    { value: "watercolor", label: "Watercolor" },
    { value: "low-poly", label: "Low Poly" },
];

const colorPalettes: { value: ColorPalette; label: string }[] = [
    { value: "none", label: "Default" },
    { value: "vibrant", label: "Vibrant" },
    { value: "pastel", label: "Pastel" },
    { value: "monochromatic", label: "Monochromatic" },
    { value: "earthy", label: "Earthy Tones" },
    { value: "neon", label: "Neon Glow" },
];

export const ControlPanel: React.FC<ControlPanelProps> = ({ onGenerate, isLoading }) => {
  const [prompt, setPrompt] = useState('');
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>('1:1');
  const [preset, setPreset] = useState<Preset>('character');
  const [artStyle, setArtStyle] = useState<ArtStyle>('none');
  const [negativePrompt, setNegativePrompt] = useState('');
  const [colorPalette, setColorPalette] = useState<ColorPalette>('none');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(prompt, aspectRatio, preset, artStyle, negativePrompt, colorPalette);
  };
  
  const currentPlaceholder = presets.find(p => p.value === preset)?.placeholder || "Describe your vision...";

  return (
    <aside className="w-full md:w-96 bg-brand-primary p-6 md:p-8 flex-shrink-0 border-r border-brand-secondary/50">
      <form onSubmit={handleSubmit} className="flex flex-col h-full gap-6">
        <h2 className="text-2xl font-semibold text-white">Create Your Asset</h2>
        
        <div className="flex flex-col gap-6 overflow-y-auto pr-2 -mr-2">
          <div>
            <label className="block text-sm font-medium text-brand-text-muted mb-2">
              1. Select a Preset
            </label>
            <div className="grid grid-cols-2 gap-2">
              {presets.map(p => (
                   <button
                      type="button"
                      key={p.value}
                      onClick={() => setPreset(p.value)}
                      disabled={isLoading}
                      className={`flex flex-col items-center justify-center p-3 rounded-lg border-2 transition-colors duration-200 disabled:opacity-50 ${
                          preset === p.value 
                          ? 'bg-brand-accent/20 border-brand-accent text-white' 
                          : 'bg-brand-secondary border-gray-600 text-brand-text-muted hover:border-gray-500'
                      }`}
                   >
                      <Icon name={p.icon} className="w-6 h-6 mb-1" />
                      <span className="text-sm font-semibold">{p.label}</span>
                   </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="prompt" className="block text-sm font-medium text-brand-text-muted mb-2">
              2. Describe your vision
            </label>
            <textarea
              id="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder={currentPlaceholder}
              className="w-full h-32 p-3 bg-brand-secondary border border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition duration-200 resize-none text-brand-text placeholder-gray-500"
              disabled={isLoading}
            />
          </div>

          <div>
            <label htmlFor="artStyle" className="block text-sm font-medium text-brand-text-muted mb-2">
              3. Choose an Art Style (Optional)
            </label>
            <div className="relative">
               <select
                  id="artStyle"
                  value={artStyle}
                  onChange={(e) => setArtStyle(e.target.value as ArtStyle)}
                  className="w-full p-3 bg-brand-secondary border border-gray-600 rounded-lg appearance-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition duration-200 text-brand-text"
                  disabled={isLoading}
               >
                  {artStyles.map(style => (
                      <option key={style.value} value={style.value}>{style.label}</option>
                  ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-brand-text-muted">
                  <Icon name="chevronDown" className="w-5 h-5" />
              </div>
            </div>
          </div>
          
          <div>
            <label htmlFor="colorPalette" className="block text-sm font-medium text-brand-text-muted mb-2">
              4. Choose a Color Palette (Optional)
            </label>
            <div className="relative">
               <select
                  id="colorPalette"
                  value={colorPalette}
                  onChange={(e) => setColorPalette(e.target.value as ColorPalette)}
                  className="w-full p-3 bg-brand-secondary border border-gray-600 rounded-lg appearance-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition duration-200 text-brand-text"
                  disabled={isLoading}
               >
                  {colorPalettes.map(palette => (
                      <option key={palette.value} value={palette.value}>{palette.label}</option>
                  ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-brand-text-muted">
                  <Icon name="chevronDown" className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="negativePrompt" className="block text-sm font-medium text-brand-text-muted mb-2">
              5. What to avoid? (Optional)
            </label>
            <input
              type="text"
              id="negativePrompt"
              value={negativePrompt}
              onChange={(e) => setNegativePrompt(e.target.value)}
              placeholder="e.g., blurry, extra limbs, ugly"
              className="w-full p-3 bg-brand-secondary border border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition duration-200 text-brand-text placeholder-gray-500"
              disabled={isLoading}
            />
          </div>

          <div>
            <label htmlFor="aspectRatio" className="block text-sm font-medium text-brand-text-muted mb-2">
              6. Choose aspect ratio
            </label>
            <div className="relative">
               <select
                  id="aspectRatio"
                  value={aspectRatio}
                  onChange={(e) => setAspectRatio(e.target.value as AspectRatio)}
                  className="w-full p-3 bg-brand-secondary border border-gray-600 rounded-lg appearance-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition duration-200 text-brand-text"
                  disabled={isLoading}
               >
                  {aspectRatios.map(ratio => (
                      <option key={ratio.value} value={ratio.value}>{ratio.label}</option>
                  ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-brand-text-muted">
                  <Icon name="chevronDown" className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-brand-secondary/50">
            <button
              type="submit"
              disabled={isLoading || !prompt}
              className="w-full flex items-center justify-center gap-2 bg-brand-accent text-white font-bold py-3 px-4 rounded-lg hover:bg-brand-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-primary focus:ring-brand-accent transition-all duration-200 disabled:bg-gray-500 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Spinner />
                  Generating...
                </>
              ) : (
                <>
                   <Icon name="sparkles" className="w-5 h-5" />
                   Generate
                </>
              )}
            </button>
             <p className="text-xs text-brand-text-muted mt-4 text-center">
                Generates 4 images per request. Your creations are saved in your browser.
             </p>
        </div>
      </form>
    </aside>
  );
};
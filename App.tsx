import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { ControlPanel } from './components/ControlPanel';
import { Gallery } from './components/Gallery';
import { useLocalStorage } from './hooks/useLocalStorage';
import { generateImagesFromApi } from './services/geminiService';
import type { GeneratedImage, AspectRatio, Preset, ArtStyle, ColorPalette } from './types';

function App() {
  const [galleryImages, setGalleryImages] = useLocalStorage<GeneratedImage[]>('galleryImages', []);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async (
    prompt: string, 
    aspectRatio: AspectRatio, 
    preset: Preset,
    artStyle: ArtStyle,
    negativePrompt: string,
    colorPalette: ColorPalette
  ) => {
    if (!prompt) {
      setError('Please enter a description for your creation.');
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const imageResults = await generateImagesFromApi(prompt, aspectRatio, preset, artStyle, negativePrompt, colorPalette);
      const newImages: GeneratedImage[] = imageResults.map(url => ({
        id: crypto.randomUUID(),
        url,
        prompt,
        createdAt: new Date().toISOString(),
      }));
      setGalleryImages(prevImages => [...newImages, ...prevImages]);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [setGalleryImages]);

  const handleDelete = useCallback((id: string) => {
    setGalleryImages(prevImages => prevImages.filter(image => image.id !== id));
  }, [setGalleryImages]);
  
  const handleClearAll = useCallback(() => {
    setGalleryImages([]);
  }, [setGalleryImages]);

  return (
    <div className="min-h-screen bg-brand-primary font-sans">
      <Header />
      <main className="flex flex-col md:flex-row min-h-[calc(100vh-4rem)]">
        <ControlPanel onGenerate={handleGenerate} isLoading={isLoading} />
        <div className="flex-grow p-4 md:p-8 bg-brand-secondary overflow-y-auto">
          {error && (
            <div className="bg-red-500/20 border border-red-500 text-red-300 p-3 rounded-lg mb-6 text-center">
              <strong>Error:</strong> {error}
            </div>
          )}
          <Gallery 
            images={galleryImages} 
            onDelete={handleDelete}
            onClearAll={handleClearAll}
            isLoading={isLoading}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
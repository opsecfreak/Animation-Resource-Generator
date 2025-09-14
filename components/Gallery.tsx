import React from 'react';
import { ImageCard } from './ImageCard';
import { Icon } from './Icon';
import type { GeneratedImage } from '../types';

interface GalleryProps {
  images: GeneratedImage[];
  onDelete: (id: string) => void;
  onClearAll: () => void;
  isLoading: boolean;
}

const LoadingSkeleton: React.FC = () => (
  <div className="aspect-square bg-brand-primary/50 rounded-lg animate-pulse"></div>
);

export const Gallery: React.FC<GalleryProps> = ({ images, onDelete, onClearAll, isLoading }) => {
  const hasImages = images.length > 0;

  return (
    <div className="w-full">
        <div className="flex justify-between items-center mb-6">
            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold text-white">Your Creations</h2>
              <p className="text-sm text-brand-text-muted">Download images and import as 'Images as Planes' in Blender.</p>
            </div>
            {hasImages && !isLoading && (
              <button onClick={onClearAll} className="flex items-center gap-2 text-sm bg-red-500/20 text-red-300 px-4 py-2 rounded-lg hover:bg-red-500/40 transition-colors">
                  <Icon name="trash" className="w-4 h-4" />
                  Clear All
              </button>
            )}
        </div>

      {isLoading && images.length === 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => <LoadingSkeleton key={i} />)}
        </div>
      ) : !hasImages && !isLoading ? (
        <div className="flex flex-col items-center justify-center h-96 border-2 border-dashed border-gray-600 rounded-lg text-center p-8">
            <Icon name="image" className="w-16 h-16 text-gray-500 mb-4" />
            <h3 className="text-xl font-semibold text-white">Your gallery is empty</h3>
            <p className="text-brand-text-muted mt-2">Describe a creation and click 'Generate' to see your concepts here.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {isLoading && [...Array(4)].map((_, i) => <LoadingSkeleton key={i} />)}
          {images.map(image => (
            <ImageCard key={image.id} image={image} onDelete={onDelete} />
          ))}
        </div>
      )}
    </div>
  );
};

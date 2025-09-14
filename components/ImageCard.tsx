
import React from 'react';
import { Icon } from './Icon';
import type { GeneratedImage } from '../types';

interface ImageCardProps {
  image: GeneratedImage;
  onDelete: (id: string) => void;
}

export const ImageCard: React.FC<ImageCardProps> = ({ image, onDelete }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = image.url;
    // Sanitize prompt for filename
    const fileName = `${image.prompt.substring(0, 30).replace(/[^a-z0-9]/gi, '_').toLowerCase()}_${image.id.substring(0, 4)}.png`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="group relative aspect-square overflow-hidden rounded-lg shadow-lg">
      <img src={image.url} alt={image.prompt} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
        <div className="flex justify-end gap-2">
           <button onClick={handleDownload} className="p-2 bg-black/50 rounded-full text-white hover:bg-brand-accent transition-colors" title="Download Image">
            <Icon name="download" className="w-5 h-5" />
          </button>
          <button onClick={() => onDelete(image.id)} className="p-2 bg-black/50 rounded-full text-white hover:bg-red-500 transition-colors" title="Delete Image">
            <Icon name="trash" className="w-5 h-5" />
          </button>
        </div>
        <p className="text-xs text-white/90 line-clamp-3">{image.prompt}</p>
      </div>
    </div>
  );
};

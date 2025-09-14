
import React from 'react';
import { Icon } from './Icon';

export const Header: React.FC = () => {
  return (
    <header className="flex items-center h-16 px-4 md:px-8 bg-brand-secondary border-b border-brand-primary shadow-md">
      <div className="flex items-center gap-3">
        <Icon name="logo" className="w-8 h-8 text-brand-accent"/>
        <h1 className="text-xl font-bold text-white tracking-wider">AnimChar Studio</h1>
      </div>
    </header>
  );
};

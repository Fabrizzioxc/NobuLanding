import React from 'react';

interface BadgeProps {
  text: string;
  className?: string;
}

const Badge = ({ text, className = "" }: BadgeProps) => {
  return (
    // "items-center" asegura que el punto y el texto estén alineados a la mitad
    <div className={`flex items-center gap-2 ${className}`}>
      {/* El Punto */}
      <div className="w-1.5 h-1.5 rounded-full bg-neutral-500 flex-shrink-0" />
      
      {/* El Texto */}
      <span className="text-xs font-medium text-neutral-500 uppercase tracking-widest">
        {text}
      </span>
    </div>
  );
};

export default Badge;
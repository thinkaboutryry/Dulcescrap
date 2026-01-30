import React from 'react';

interface SectionTitleProps {
  title: string;
  highlightedWord?: string; // Word to have the pink underline
  className?: string;
  center?: boolean;
  textColor?: string;
}

export function SectionTitle({ title, highlightedWord, className = '', center = true, textColor = 'text-black' }: SectionTitleProps) {
  
  // Base classes for the title
  const titleClasses = `font-['Nunito'] font-bold text-[32px] md:text-[48px] ${textColor} leading-tight tracking-[-1px] md:tracking-[-2.4px] relative z-10`;
  const containerClasses = `relative mb-8 ${center ? 'text-center' : ''} ${className}`;

  if (!highlightedWord) {
    return (
      <div className={containerClasses}>
        <h2 className={titleClasses}>
          {title}
        </h2>
      </div>
    );
  }

  // Split logic
  const parts = title.split(highlightedWord);
  // Handle case where split might produce unexpected results if word not found (though developer should ensure it matches)
  if (parts.length < 2) {
      return (
        <div className={containerClasses}>
            <h2 className={titleClasses}>{title}</h2>
        </div>
      );
  }

  return (
    <div className={containerClasses}>
      <h2 className={titleClasses}>
        {parts[0]}
        <span className="relative inline-block whitespace-nowrap z-10">
          {highlightedWord}
          <span className="absolute left-0 bottom-[4px] md:bottom-[8px] w-full h-[6px] md:h-[9px] bg-[#ec268f] rounded-full -z-10" />
        </span>
        {parts[1]}
      </h2>
    </div>
  );
}

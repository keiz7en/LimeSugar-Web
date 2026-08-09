"use client";

export default function ManimLoader({ size = 80, className = "" }: { size?: number; className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src="/logo-loader.gif" 
        alt="Loading..." 
        width={size} 
        height={size} 
        className="animate-pulse"
        alt="LimeSugar loading"
      />
    </div>
  );
}
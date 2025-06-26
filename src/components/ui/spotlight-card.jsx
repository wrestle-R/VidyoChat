import React, { useRef } from "react";
import { cn } from "../../lib/utils";

export const SpotlightCard = ({
  children,
  className = "",
  spotlightColor,
  onClick
}) => {
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty("--mouse-x", `${x}px`);
    divRef.current.style.setProperty("--mouse-y", `${y}px`);
    
    if (spotlightColor) {
      divRef.current.style.setProperty("--spotlight-override", spotlightColor);
    }
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className={cn("spotlight-card relative overflow-hidden rounded-3xl flex flex-col items-center justify-center p-8 transition-all duration-500 cursor-pointer transform hover:scale-105", className)}
    >
      <style jsx>{`
        .spotlight-card {
          --card-bg: rgba(0, 0, 0, 0.8);
          --card-border: rgba(255, 255, 255, 0.1);
          --heading-text: rgba(255, 255, 255, 0.95);
          --paragraph-text: rgba(255, 255, 255, 0.7);
          --icon-color: rgba(255, 255, 255, 0.9);
          --spotlight-default-color: rgba(255, 255, 255, 0.1);
          
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(20, 20, 20, 0.8));
          border: 1px solid var(--card-border);
          backdrop-filter: blur(10px);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8);
        }

        .spotlight-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            400px circle at var(--mouse-x) var(--mouse-y),
            var(--spotlight-override, var(--spotlight-default-color)),
            transparent 70%
          );
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
          z-index: 0;
        }

        .spotlight-card:hover::before {
          opacity: 1;
        }
        
        .spotlight-card > * {
          position: relative;
          z-index: 1;
        }

        .spotlight-card:hover {
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 32px 64px -12px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(255, 255, 255, 0.05);
        }
      `}</style>
      {children}
    </div>
  );
};

export default SpotlightCard;

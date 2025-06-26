import React, { useRef } from "react";

const SpotlightCard = ({
  children,
  className = "",
  spotlightColor,
  onClick,
  ...props
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
      className={`spotlight-card relative overflow-hidden rounded-[25px] flex flex-col items-center justify-center p-6 sm:p-8 transition-colors duration-300 cursor-pointer ${className}`}
      {...props}
    >
      <style jsx>{`
        .spotlight-card {
          --card-bg: hsl(0, 0%, 8%);
          --card-border: hsl(0, 0%, 15%);
          --spotlight-default-color: rgba(255, 255, 255, 0.1);
          
          background-color: var(--card-bg);
          border: 1px solid var(--card-border);
        }

        .spotlight-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            600px circle at var(--mouse-x) var(--mouse-y),
            var(--spotlight-override, var(--spotlight-default-color)),
            transparent 80%
          );
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
          z-index: 0;
        }

        .spotlight-card:hover::before {
          opacity: 1;
        }
        
        .spotlight-card > * {
          position: relative;
          z-index: 1;
        }
      `}</style>
      {children}
    </div>
  );
};

export default SpotlightCard;
        
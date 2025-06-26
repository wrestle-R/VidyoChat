export const DotScreenShader = () => {
  return (
    <div className="absolute inset-0 opacity-30">
      <div 
        className="w-full h-full"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
          animation: 'dotMove 20s ease-in-out infinite',
        }}
      />
      <style jsx>{`
        @keyframes dotMove {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(5px, -5px); }
          50% { transform: translate(-3px, 3px); }
          75% { transform: translate(2px, -2px); }
        }
      `}</style>
    </div>
  )
}

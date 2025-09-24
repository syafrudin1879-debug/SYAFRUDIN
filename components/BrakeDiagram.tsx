
import React from 'react';

const BrakeDiagram: React.FC = () => {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      <svg viewBox="0 0 200 200" className="w-full h-auto">
        {/* Disc Rotor */}
        <circle cx="100" cy="100" r="80" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
        <circle cx="100" cy="100" r="70" fill="none" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="100" cy="100" r="25" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1.5" />
        
        {/* Caliper */}
        <path d="M 20 100 A 80 80 0 0 1 100 20 L 100 40 A 60 60 0 0 0 40 100 Z" fill="#475569" stroke="#1E293B" strokeWidth="1.5" />
        <rect x="95" y="22" width="10" height="16" fill="#475569" stroke="#1E293B" strokeWidth="1.5" rx="2" />

        {/* Brake Pad */}
        <path d="M 34 100 A 66 66 0 0 1 100 34 V 42 A 58 58 0 0 0 42 100 Z" fill="#F59E0B" />
        
        {/* Labels */}
        <g fontSize="6" fontFamily="sans-serif" fill="#1E293B">
          {/* Caliper Label */}
          <line x1="80" y1="30" x2="60" y2="15" stroke="#334155" strokeWidth="0.8" />
          <text x="35" y="14">Caliper</text>

          {/* Pad Brake Label */}
          <line x1="60" y1="70" x2="30" y2="60" stroke="#334155" strokeWidth="0.8" />
          <text x="0" y="59">Pad Brake</text>

          {/* Disc Rotor Label */}
          <line x1="140" y1="140" x2="165" y2="155" stroke="#334155" strokeWidth="0.8" />
          <text x="160" y="162">Disc Rotor</text>

          {/* Bleeder Screw Label */}
          <line x1="100" y1="22" x2="110" y2="10" stroke="#334155" strokeWidth="0.8" />
          <text x="112" y="9">Bleeder Screw</text>
        </g>
      </svg>
    </div>
  );
};

export default BrakeDiagram;

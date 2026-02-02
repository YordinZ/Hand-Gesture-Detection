import { useEffect, useState } from 'react';

const handLandmarks = [
  { id: 0, name: 'Muñeca', x: 50, y: 80 },
  { id: 1, name: 'Pulgar base', x: 40, y: 70 },
  { id: 2, name: 'Pulgar 2', x: 30, y: 60 },
  { id: 3, name: 'Pulgar 3', x: 22, y: 50 },
  { id: 4, name: 'Pulgar punta', x: 15, y: 40 },
  { id: 5, name: 'Índice base', x: 48, y: 60 },
  { id: 6, name: 'Índice 2', x: 48, y: 45 },
  { id: 7, name: 'Índice 3', x: 48, y: 30 },
  { id: 8, name: 'Índice punta', x: 48, y: 15 },
  { id: 9, name: 'Medio base', x: 58, y: 60 },
  { id: 10, name: 'Medio 2', x: 60, y: 43 },
  { id: 11, name: 'Medio 3', x: 60, y: 26 },
  { id: 12, name: 'Medio punta', x: 60, y: 10 },
  { id: 13, name: 'Anular base', x: 68, y: 60 },
  { id: 14, name: 'Anular 2', x: 70, y: 45 },
  { id: 15, name: 'Anular 3', x: 72, y: 30 },
  { id: 16, name: 'Anular punta', x: 73, y: 18 },
  { id: 17, name: 'Meñique base', x: 78, y: 62 },
  { id: 18, name: 'Meñique 2', x: 82, y: 50 },
  { id: 19, name: 'Meñique 3', x: 84, y: 38 },
  { id: 20, name: 'Meñique punta', x: 86, y: 28 },
];

const connections = [
  [0, 1], [1, 2], [2, 3], [3, 4],
  [0, 5], [5, 6], [6, 7], [7, 8],
  [5, 9], [9, 10], [10, 11], [11, 12],
  [9, 13], [13, 14], [14, 15], [15, 16],
  [13, 17], [0, 17], [17, 18], [18, 19], [19, 20],
];

const gestureStates: Record<string, number[]> = {
  'open-hand': [4, 8, 12, 16, 20],
  'thumbs-up': [4],
  'pointing': [8],
  'peace': [8, 12],
  'fist': [],
};

interface HandVisualizationProps {
  selectedGesture: string;
}

export default function HandVisualization({ selectedGesture }: HandVisualizationProps) {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const activeTips = gestureStates[selectedGesture] || [];

  return (
    <div className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-slate-700/50">
      <div className="relative aspect-[4/5] max-w-md mx-auto">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          style={{ filter: 'drop-shadow(0 4px 20px rgba(6, 182, 212, 0.3))' }}
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
            </linearGradient>

            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {connections.map(([start, end], idx) => {
            const startPoint = handLandmarks[start];
            const endPoint = handLandmarks[end];

            return (
              <line
                key={idx}
                x1={startPoint.x}
                y1={startPoint.y}
                x2={endPoint.x}
                y2={endPoint.y}
                stroke="url(#lineGradient)"
                strokeWidth="0.8"
                strokeLinecap="round"
                className="transition-all duration-300"
              />
            );
          })}

          {handLandmarks.map((point) => {
            const isActive = activeTips.includes(point.id);
            const isTip = [4, 8, 12, 16, 20].includes(point.id);

            return (
              <g key={point.id}>
                <circle
                  cx={point.x}
                  cy={point.y}
                  r={hoveredPoint === point.id ? 2.5 : isTip ? 2 : 1.5}
                  className={`transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'fill-cyan-400'
                      : hoveredPoint === point.id
                      ? 'fill-blue-400'
                      : 'fill-slate-400'
                  }`}
                  filter={isActive || hoveredPoint === point.id ? 'url(#glow)' : ''}
                  onMouseEnter={() => setHoveredPoint(point.id)}
                  onMouseLeave={() => setHoveredPoint(null)}
                />

                {isActive && (
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r="3"
                    className="fill-none stroke-cyan-400 animate-ping"
                    strokeWidth="0.5"
                  />
                )}
              </g>
            );
          })}
        </svg>

        {hoveredPoint !== null && (
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-slate-900 px-4 py-2 rounded-lg border border-slate-700 shadow-xl transition-opacity duration-200">
            <p className="text-xs text-cyan-400 font-medium">
              Landmark #{hoveredPoint}
            </p>
            <p className="text-xs text-slate-400">
              {handLandmarks[hoveredPoint].name}
            </p>
          </div>
        )}
      </div>

      <div className="mt-6 space-y-3">
        <div className="flex items-center gap-3 text-sm">
          <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"></div>
          <span className="text-slate-300">Puntos activos en el gesto</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <div className="w-3 h-3 rounded-full bg-slate-400"></div>
          <span className="text-slate-300">Landmarks de referencia</span>
        </div>
      </div>

      <div className="mt-6 p-4 bg-slate-900/50 rounded-lg border border-slate-700/50">
        <p className="text-xs text-slate-400 leading-relaxed">
          MediaPipe detecta <span className="text-cyan-400 font-semibold">21 puntos clave</span> en
          cada mano. El sistema analiza las coordenadas X e Y de estos landmarks para determinar
          qué dedos están extendidos o cerrados.
        </p>
      </div>
    </div>
  );
}

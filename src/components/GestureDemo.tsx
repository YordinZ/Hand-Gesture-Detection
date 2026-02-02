import { useState } from 'react';
import { Hand, Code2, Cpu } from 'lucide-react';
import GestureCard from './GestureCard';
import HandVisualization from './HandVisualization';
import TechStack from './TechStack';
import CodeSection from './CodeSection';

const gestures = [
  {
    id: 'open-hand',
    name: 'Mano Abierta',
    emoji: '✋',
    description: 'Todos los dedos extendidos',
    color: 'from-emerald-500 to-teal-500',
    detection: 'Detecta los 5 dedos completamente abiertos usando coordenadas Y de landmarks',
  },
  {
    id: 'thumbs-up',
    name: 'Pulgar Arriba',
    emoji: '👍',
    description: 'Aprobación o confirmación',
    color: 'from-amber-500 to-orange-500',
    detection: 'Pulgar extendido verticalmente, otros dedos cerrados',
  },
  {
    id: 'pointing',
    name: 'Señalar',
    emoji: '☝️',
    description: 'Solo índice extendido',
    color: 'from-pink-500 to-rose-500',
    detection: 'Índice arriba, pulgar y otros dedos cerrados',
  },
  {
    id: 'peace',
    name: 'Dos Dedos',
    emoji: '✌️',
    description: 'Victoria o paz',
    color: 'from-blue-500 to-cyan-500',
    detection: 'Índice y medio extendidos, otros cerrados',
  },
  {
    id: 'fist',
    name: 'Puño Cerrado',
    emoji: '✊',
    description: 'Todos los dedos cerrados',
    color: 'from-red-500 to-rose-600',
    detection: 'Todos los dedos incluido el pulgar completamente cerrados',
  },
];

export default function GestureDemo() {
  const [selectedGesture, setSelectedGesture] = useState(gestures[0].id);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-6 shadow-lg shadow-blue-500/50">
            <Hand className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
            Detección de Gestos con IA
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Sistema de reconocimiento de gestos en tiempo real usando
            <span className="text-cyan-400 font-semibold"> MediaPipe</span> y
            <span className="text-cyan-400 font-semibold"> OpenCV</span>
          </p>

          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-slate-400">
              <Code2 className="w-5 h-5" />
              <span className="text-sm">Python</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Cpu className="w-5 h-5" />
              <span className="text-sm">21 Landmarks</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Hand className="w-5 h-5" />
              <span className="text-sm">5 Gestos</span>
            </div>
          </div>
        </header>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm">
                01
              </span>
              Gestos Detectados
            </h2>

            <div className="space-y-3">
              {gestures.map((gesture) => (
                <GestureCard
                  key={gesture.id}
                  gesture={gesture}
                  isSelected={selectedGesture === gesture.id}
                  onSelect={() => setSelectedGesture(gesture.id)}
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm">
                02
              </span>
              Visualización de Landmarks
            </h2>

            <HandVisualization selectedGesture={selectedGesture} />
          </div>
        </div>

        <TechStack />

        <CodeSection />
      </div>
    </div>
  );
}

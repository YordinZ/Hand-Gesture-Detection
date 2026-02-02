import { CheckCircle2 } from 'lucide-react';

interface GestureCardProps {
  gesture: {
    id: string;
    name: string;
    emoji: string;
    description: string;
    color: string;
    detection: string;
  };
  isSelected: boolean;
  onSelect: () => void;
}

export default function GestureCard({ gesture, isSelected, onSelect }: GestureCardProps) {
  return (
    <button
      onClick={onSelect}
      className={`w-full text-left p-5 rounded-xl transition-all duration-300 ${
        isSelected
          ? 'bg-slate-800 ring-2 ring-cyan-500 shadow-lg shadow-cyan-500/20 scale-[1.02]'
          : 'bg-slate-800/50 hover:bg-slate-800/80 hover:scale-[1.01]'
      }`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${gesture.color} flex items-center justify-center text-3xl flex-shrink-0 shadow-lg transition-transform duration-300 ${
            isSelected ? 'scale-110' : ''
          }`}
        >
          {gesture.emoji}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-lg font-semibold text-white">{gesture.name}</h3>
            {isSelected && (
              <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
            )}
          </div>

          <p className="text-sm text-slate-400 mb-2">{gesture.description}</p>

          <div className="flex items-start gap-2">
            <span className="text-xs text-slate-500 mt-0.5 flex-shrink-0">→</span>
            <p className="text-xs text-slate-500 leading-relaxed">{gesture.detection}</p>
          </div>
        </div>
      </div>
    </button>
  );
}

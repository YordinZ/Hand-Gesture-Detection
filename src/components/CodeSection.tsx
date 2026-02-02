import { useState } from "react";
import { Copy, Check } from "lucide-react";
import codeSnippet from "../code/hand.py?raw";

export default function CodeSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <span className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-sm">
          05
        </span>
        Código Principal
      </h2>

      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-blue-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="relative bg-slate-950 rounded-xl border border-slate-700/50 overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 bg-slate-900/50 border-b border-slate-700/50">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-xs text-slate-400 ml-2 font-mono">hand_detection.py</span>
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600/50 transition-all duration-200 group/btn"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs text-emerald-400">Copiado</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400 group-hover/btn:text-slate-200" />
                  <span className="text-xs text-slate-400 group-hover/btn:text-slate-200">Copiar</span>
                </>
              )}
            </button>
          </div>

          <div className="max-h-[420px] overflow-y-auto overflow-x-auto">
            <pre className="p-6 text-sm leading-relaxed font-mono text-slate-300">

              <code>
                {codeSnippet.split('\n').map((line, idx) => {
                  const trimmed = line.trim();
                  let color = 'text-slate-300';

                  if (line.startsWith('import') || line.startsWith('from')) {
                    color = 'text-emerald-400';
                  } else if (
                    trimmed.startsWith('def ') ||
                    trimmed.startsWith('with ') ||
                    trimmed.startsWith('while ') ||
                    trimmed.startsWith('if ')
                  ) {
                    color = 'text-blue-400';
                  } else if (
                    trimmed.startsWith('#') ||
                    (line.includes('//') && line.trim().startsWith('#'))
                  ) {
                    color = 'text-slate-500';
                  } else if (trimmed.includes('=')) {
                    color = 'text-slate-300';
                  }

                  return (
                    <div key={idx} className="flex">
                      <span className="w-8 text-slate-600 text-right pr-4 flex-shrink-0 select-none">
                        {idx + 1}
                      </span>
                      <span className={color}>{line}</span>
                    </div>
                  );
                })}
              </code>
            </pre>
          </div>

          <div className="px-6 py-4 bg-slate-900/30 border-t border-slate-700/50 flex flex-wrap gap-2">
            <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 text-xs">
              Python
            </span>
            <span className="px-2 py-1 rounded bg-blue-500/10 text-blue-400 text-xs">
              OpenCV
            </span>
            <span className="px-2 py-1 rounded bg-indigo-500/10 text-indigo-400 text-xs">
              MediaPipe
            </span>
            <span className="px-2 py-1 rounded bg-slate-500/10 text-slate-400 text-xs">
              Real-time Processing
            </span>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mt-6">
        <div className="p-4 rounded-lg bg-slate-800/30 border border-slate-700/50">
          <p className="text-xs text-slate-400 mb-1">Funcionalidad Principal</p>
          <p className="text-sm text-white font-semibold">Captura de video en tiempo real</p>
        </div>
        <div className="p-4 rounded-lg bg-slate-800/30 border border-slate-700/50">
          <p className="text-xs text-slate-400 mb-1">Algoritmo de Detección</p>
          <p className="text-sm text-white font-semibold">Análisis de coordenadas X/Y</p>
        </div>
        <div className="p-4 rounded-lg bg-slate-800/30 border border-slate-700/50">
          <p className="text-xs text-slate-400 mb-1">Rendimiento</p>
          <p className="text-sm text-white font-semibold">30 FPS con 70%+ precisión</p>
        </div>
      </div>
    </div>
  );
}

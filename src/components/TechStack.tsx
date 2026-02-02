import { Code2, Camera, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Camera,
    title: 'Detección en Tiempo Real',
    description: 'Procesa video desde la cámara usando OpenCV a 30 FPS',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Zap,
    title: 'Precisión del 70%+',
    description: 'Confidence threshold optimizado para detección confiable',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: Code2,
    title: 'MediaPipe Hands',
    description: '21 landmarks por mano con tracking de alta velocidad',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Shield,
    title: 'Ambas Manos',
    description: 'Detecta mano izquierda y derecha con lógica específica',
    gradient: 'from-pink-500 to-rose-500',
  },
];

const techStack = [
  { name: 'Python', desc: 'Lenguaje principal' },
  { name: 'OpenCV', desc: 'Procesamiento de video' },
  { name: 'MediaPipe', desc: 'ML para detección de manos' },
  { name: 'NumPy', desc: 'Cálculos numéricos' },
];

export default function TechStack() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm">
            03
          </span>
          Características Técnicas
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-lg transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400 text-sm">
            04
          </span>
          Stack Tecnológico
        </h2>

        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50 group-hover:animate-pulse"></div>
                <div>
                  <p className="text-white font-semibold text-sm">{tech.name}</p>
                  <p className="text-xs text-slate-500">{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-slate-700/50">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-slate-900 text-cyan-400 text-xs font-mono rounded-full border border-slate-700">
                cv2.VideoCapture(0)
              </span>
              <span className="px-3 py-1 bg-slate-900 text-cyan-400 text-xs font-mono rounded-full border border-slate-700">
                mp_hands.Hands()
              </span>
              <span className="px-3 py-1 bg-slate-900 text-cyan-400 text-xs font-mono rounded-full border border-slate-700">
                hand_landmarks.landmark
              </span>
              <span className="px-3 py-1 bg-slate-900 text-cyan-400 text-xs font-mono rounded-full border border-slate-700">
                max_num_hands=1
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/50">
            <Code2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Aplicaciones Prácticas</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Este sistema puede aplicarse en control de interfaces sin contacto, lenguaje de señas,
              interacción en realidad virtual, controles de accesibilidad, y automatización de tareas
              mediante gestos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

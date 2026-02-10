import { Github, ExternalLink } from "lucide-react";
import GestureDemo from "./components/GestureDemo";

function App() {
  return (
    <main
      className="min-h-screen bg-gradient-to-br 
      from-slate-900 via-slate-800 to-slate-900 
      flex flex-col items-center justify-center gap-10 px-4"
    >
      {/* TITLE */}
      <header className="text-center space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-white">
          Hand Gesture Detection
        </h1>
        <p className="text-gray-400 text-sm sm:text-base max-w-xl">
          Real-time hand gesture detection using computer vision and webcam input.
        </p>
      </header>

      {/* DEMO */}
      <GestureDemo />

      {/* LINKS */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href="https://github.com/YordinZ/Hand-Gesture-Detection"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-8 py-3 
          bg-gradient-to-r from-blue-500 to-indigo-600 
          rounded-lg font-semibold text-white 
          hover:shadow-lg hover:shadow-blue-500/40 
          transition-all duration-300 transform hover:scale-105"
        >
          <Github className="w-5 h-5" />
          Ver en GitHub
        </a>

        <a
          href="https://yordinz.github.io/PORTFOLIO/#projects"
          target="_blank"
          className="flex items-center gap-2 px-8 py-3 
          bg-gray-800 border border-gray-700 
          rounded-lg font-semibold text-white 
          hover:bg-gray-700 transition-all duration-300"
        >
          <ExternalLink className="w-5 h-5" />
          Volver al Portafolio
        </a>
      </div>
    </main>
  );
}

export default App;

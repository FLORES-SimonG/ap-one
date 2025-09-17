import { Brain } from "lucide-react";

interface NavigationButtonsProps {
  onPrev: () => void;
  onNext: () => void;
  onToggleImportant: () => void;
}

export default function NavigationButtons({
  onPrev,
  onNext,
  onToggleImportant,
}: NavigationButtonsProps) {
  return (
    <div className="flex gap-4 w-full items-center justify-center">
      <button
        onClick={onPrev}
        className="px-4 py-2 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700 flex justify-center items-center gap-2 content-center"
      >
        ← <span className="hidden sm:block">Pregunta anterior</span>
      </button>

      <button
        onClick={onToggleImportant}
        className="p-3 bg-yellow-500 text-white rounded-full shadow hover:bg-yellow-600"
      >
        <Brain className="w-6 h-6" />
      </button>

      <button
        onClick={onNext}
        className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 flex justify-center items-center gap-2 content-center"
      >
        <span className="hidden sm:block">Siguiente pregunta</span> →
      </button>
    </div>
  );
}

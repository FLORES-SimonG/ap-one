import { AlertCircle } from "lucide-react";

interface ProgressCardProps {
  currentIndex: number;   
  total: number;     
  withImage?: boolean;    
}

export default function ProgressCard({
  currentIndex,
  total,
  withImage = false,
}: ProgressCardProps) {
  return (
    <div className="flex gap-2">
      <p className="text-gray-600 dark:text-gray-400">
        Pregunta {currentIndex + 1} de {total}
      </p>
      {withImage && <AlertCircle className="h-full stroke-red-500" />}
    </div>
  );
}

import { Dispatch, SetStateAction } from "react";
import { ScrollArea } from "../ui/scroll-area";

interface AnswerSectionProps {
  title: string;
  text: string;
  setFlipped: Dispatch<SetStateAction<boolean>>;
}

export default function AnswerSection({
  title,
  text,
  setFlipped,
}: AnswerSectionProps) {
  return (
    <div className="absolute inset-0 bg-white dark:bg-gray-800 shadow-xl rounded-2xl flex flex-col justify-center items-center p-6 backface-hidden">
      <h2 className="text-xl font-bold mb-4 text-center">{title}</h2>
      <p className="text-center text-gray-700 dark:text-gray-300">{text}</p>
      <button
        onClick={() => setFlipped(true)}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
      >
        Ver respuesta
      </button>
    </div>
  );
}

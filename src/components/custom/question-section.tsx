import { Dispatch, SetStateAction } from "react";

interface QuestionSectionProps {
  title: string;
  text: string;
  setFlipped: Dispatch<SetStateAction<boolean>>;
}

export default function QuestionSection({
  title,
  text,
  setFlipped,
}: QuestionSectionProps) {
  return (
    <div
      className="absolute h-full inset-0 bg-gray-100 dark:bg-gray-900 shadow-xl rounded-2xl flex flex-col justify-center items-center p-6 backface-hidden self-center overflow-scroll"
      style={{ transform: "rotateY(180deg)" }}
    >
      <h2 className="text-xl font-bold mb-4 text-center">{title}</h2>
      <p className="text-center text-gray-700 dark:text-gray-300 whitespace-pre-line">
        {text}
      </p>
      <button
        onClick={() => setFlipped(false)}
        className="mt-6 px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
      >
        See Answer
      </button>
    </div>
  );
}

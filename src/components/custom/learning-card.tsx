"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { learningCards } from "@/lib/mock/api/cards";
import AnswerSection from "./answer-section";
import QuestionSection from "./question-section";
import { AlertCircle } from "lucide-react";

export default function LearningCard() {
  const [flipped, setFlipped] = useState(false);
  const [index, setIndex] = useState(0);

  const card = learningCards[index];

  const handleNext = () => {
    setFlipped(false);
    setIndex((prev) => (prev + 1) % learningCards.length);
  };

  const handlePrev = () => {
    setFlipped(false);
    setIndex((prev) => (prev === 0 ? learningCards.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Progreso */}
      <div className="flex gap-2">
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          Pregunta {index + 1} de {learningCards.length}
        </p>

        {card.withImage && <AlertCircle className=" h-full stroke-red-500" />}
      </div>

      {/* Contenedor de la tarjeta con efecto flip */}
      <div className="relative w-5xl h-96 perspective">
        <motion.div
          className="relative w-full h-full"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Frente (pregunta) */}
          <QuestionSection
            title={card.question.title}
            text={card.question.text}
            setFlipped={setFlipped}
          />
          <AnswerSection
            title={card.answer.title}
            text={card.answer.text}
            setFlipped={setFlipped}
          />
        </motion.div>
      </div>

      {/* Botones de navegación */}
      <div className="flex justify-between w-full max-w-md mt-4">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700"
        >
          ← Pregunta anterior
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700"
        >
          Siguiente pregunta →
        </button>
      </div>
    </div>
  );
}

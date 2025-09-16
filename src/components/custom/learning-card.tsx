"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { learningCards } from "@/lib/mock/api/cards"; // importa tu data
import { ScrollArea } from "../ui/scroll-area";

export default function LearningCard() {
  const [flipped, setFlipped] = useState(false);
  const [index, setIndex] = useState(0);

  const card = learningCards[index]; // 👈 obtenemos la card actual

  const handleNext = () => {
    setFlipped(false); // resetea a pregunta cuando pasás a la siguiente
    setIndex((prev) => (prev + 1) % learningCards.length);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Progreso */}
      <p className="text-gray-600 dark:text-gray-400 mb-2">
        Pregunta {index + 1} de {learningCards.length}
      </p>

      {/* Contenedor de la tarjeta con efecto flip */}
      <div className="relative w-5xl h-96 perspective">
        <motion.div
          className="relative w-full h-full"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Frente (pregunta) */}
          <div className="absolute inset-0 bg-white dark:bg-gray-800 shadow-xl rounded-2xl flex flex-col justify-center items-center p-6 backface-hidden">
            <h2 className="text-xl font-bold mb-4 text-center">
              {card.question.title}
            </h2>
            <p className="text-center text-gray-700 dark:text-gray-300">
              {card.question.text}
            </p>
            <button
              onClick={() => setFlipped(true)}
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
            >
              Ver respuesta
            </button>
          </div>

          {/* Reverso (respuesta) */}
          <ScrollArea
            className="absolute inset-0 bg-gray-100 dark:bg-gray-900 shadow-xl rounded-2xl flex flex-col justify-center items-center p-6 backface-hidden"
            style={{ transform: "rotateY(180deg)" }}
          >
            <h2 className="text-xl font-bold mb-4 text-center">
              {card.answer.title}
            </h2>
            <p className="text-center text-gray-700 dark:text-gray-300 whitespace-pre-line">
              {card.answer.text}
            </p>
            <button
              onClick={() => setFlipped(false)}
              className="mt-6 px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
            >
              Ver pregunta
            </button>
          </ScrollArea>
        </motion.div>
      </div>

      {/* Botón siguiente pregunta */}
      <div className="self-end">
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

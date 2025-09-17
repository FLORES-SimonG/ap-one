"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { learningCards } from "@/lib/mock/api/cards";
import AnswerSection from "./answer-section";
import QuestionSection from "./question-section";
import ImportantWords from "./important-words";
import NavigationButtons from "./navigation-buttons";
import ProgressCard from "./progress-card";

export default function LearningCard() {
  const [flipped, setFlipped] = useState(true);
  const [index, setIndex] = useState(0);
  const [sectionImportantWords, setSectionImportantWords] = useState(false);
  const card = learningCards[index];

  const handleNext = () => {
    setSectionImportantWords(false);
    setFlipped(true);
    setIndex((prev) => (prev + 1) % learningCards.length);
  };

  const handlePrev = () => {
    setSectionImportantWords(false);
    setFlipped(true);
    setIndex((prev) => (prev === 0 ? learningCards.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col items-center gap-4 content-center justify-center h-full ">
      <ProgressCard
        currentIndex={index}
        total={learningCards.length}
        withImage={card.withImage}
      />
      <div className="flex flex-col gap-4">
        <div className="relative w-full xl:w-5xl h-full p-2">
          {sectionImportantWords === false ? (
            <motion.div
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.6 }}
              style={{ transformStyle: "preserve-3d" }}
            >
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
          ) : (
            <ImportantWords
              questions={card.question.importantWords}
              answers={card.answer.importantWords}
            />
          )}
        </div>
        <NavigationButtons
          onPrev={handlePrev}
          onNext={handleNext}
          onToggleImportant={() =>
            setSectionImportantWords(!sectionImportantWords)
          }
        />
      </div>
    </div>
  );
}

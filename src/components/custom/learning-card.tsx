"use client";

import { useState } from "react";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import { motion, AnimatePresence } from "framer-motion";
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
  const [language, setLanguage] = useState<true | false>(true);
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
      <div className="flex items-center gap-2 mb-2">
        <span className={language === false ? "opacity-100" : "opacity-50"}>
          🇪🇸
        </span>
        <Switch
          checked={language === true}
          onCheckedChange={() => setLanguage(!language)}
          className="mx-1"
          aria-label="Cambiar idioma"
        />
        <span className={language === true ? "opacity-100" : "opacity-50"}>
          🇩🇪
        </span>
      </div>
      <ProgressCard
        currentIndex={index}
        total={learningCards.length}
        withImage={card.withImage}
      />
      <div className="flex flex-col gap-4">
        <div className="relative w-full xl:w-5xl h-full p-2">
          <AnimatePresence mode="wait">
            {sectionImportantWords === false ? (
              <motion.div
                key="qa-card"
                initial={{ opacity: 0, rotateY: -90 }}
                animate={{ opacity: 1, rotateY: flipped ? 180 : 0 }}
                exit={{ opacity: 0, rotateY: -90 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <QuestionSection
                  title={card.question.title}
                  text={
                    language === false && card.question.textToSpanish
                      ? card.question.textToSpanish
                      : card.question.text
                  }
                  setFlipped={setFlipped}
                />
                <AnswerSection
                  title={card.answer.title}
                  text={
                    language === false && card.answer.textToSpanish
                      ? card.answer.textToSpanish
                      : card.answer.text
                  }
                  setFlipped={setFlipped}
                />
              </motion.div>
            ) : (
              <motion.div
                key="important-words"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <ImportantWords
                  questions={card.question.importantWords}
                  answers={card.answer.importantWords}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <NavigationButtons
          onPrev={handlePrev}
          onNext={handleNext}
          onToggleImportant={() => {
            setFlipped(!flipped);
            setSectionImportantWords(!sectionImportantWords);
          }}
        />
      </div>
      <span className="text-sm italic text-gray-400">
        Programmed and designed with ❤️
        <span className="ml-1">by</span>{" "}
        <a
          href="https://simongflores.pages.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-purple-100 hover:text-purple-300 transition-colors"
        >
          Simón G. Flores
        </a>
      </span>
    </div>
  );
}

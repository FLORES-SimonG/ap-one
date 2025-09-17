interface ImportantWord {
  german: string;
  spanish: string;
}

interface ImportantWordsParam {
  answers: ImportantWord[];
  questions: ImportantWord[];
}
export default function ImportantWords({
  questions,
  answers,
}: ImportantWordsParam) {
  return (
    <div
      className="flex flex-col items-center justify-center bg-yellow-100 dark:bg-yellow-900 p-6 rounded-xl shadow-lg h-full "
      
    >
      <h2 className="text-lg font-bold text-yellow-800 dark:text-yellow-200 mb-4">
        Palabras importantes
      </h2>
      <ul className="space-y-2">
        {questions?.map((word, i) => (
          <li key={i} className="text-gray-800 dark:text-gray-100">
            <span className="font-semibold">{word.german}</span> →{" "}
            {word.spanish}
          </li>
        ))}
        {answers?.map((word, i) => (
          <li key={i} className="text-gray-800 dark:text-gray-100">
            <span className="font-semibold">{word.german}</span> →{" "}
            {word.spanish}
          </li>
        ))}
      </ul>
    </div>
  );
}

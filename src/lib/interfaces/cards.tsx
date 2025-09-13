interface ImportantWord {
  german: string;
  spanish: string;
}

interface Question {
  title: string;
  text: string; 
  difficulty: number; 
  importantWords: ImportantWord[];
}

interface Answer {
  title: string; 
  text: string; 
  importantWords: ImportantWord[];
}



export interface Card {
  number: string; 
  section: string; 
  question: Question;
  answer: Answer;
}
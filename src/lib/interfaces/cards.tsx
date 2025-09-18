interface ImportantWord {
  german: string;
  spanish: string;
}

interface Question {
  title: string;
  textToSpanish:string
  text: string; 
  difficulty: number; 
  importantWords: ImportantWord[];
}

interface Answer {
  title: string; 
  textToSpanish:string
  text: string; 
  importantWords: ImportantWord[];
}


export interface Card {
  number: string; 
  withImage?:boolean;
  section: string; 
  question: Question;
  answer: Answer;
}
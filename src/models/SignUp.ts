export interface SignUpQuestion {
  id: number;
  question: string;
  type: string;
  answer: string;
  options: string[];
}
export interface SignUpAnswer {
  [key: number]: string;
}

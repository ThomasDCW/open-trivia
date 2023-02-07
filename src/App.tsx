import { useEffect, useState } from 'react';
import { Question } from './interfaces';
import axios from 'axios';
import './App.css';

export default function App() {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await axios.get(
        `https://the-trivia-api.com/api/questions?limit=5`
      );
      setQuestions(response.data);
    };
    fetchQuestions();
  }, []);
  return (
    <div className='App'>
      {questions
        ? questions.map((question, key) => {
            return <div key={key}>{question.question}</div>;
          })
        : null}
    </div>
  );
}

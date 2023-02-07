import { useEffect, useState } from 'react';
import { Question } from './interfaces';
import axios from 'axios';
import './App.css';

export default function App() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [correctAnswer, setCorrectAnswer] = useState<boolean>(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await axios.get(
        `https://the-trivia-api.com/api/questions?limit=1`
      );
      setQuestions(response.data);
    };
    fetchQuestions();
  }, [correctAnswer]);

  return (
    <div className='App'>
      {questions
        ? questions.map((question, key) => {
            return (
              <div key={key}>
                <h1>{question.category}</h1>

                <h2>{question.question}</h2>

                <ul>
                  <li>
                    <button onClick={() => setCorrectAnswer(!correctAnswer)}>
                      {question.correctAnswer}
                    </button>
                  </li>

                  {question.incorrectAnswers.map((incorrect, key) => {
                    return (
                      <li key={key}>
                        <button>{incorrect}</button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })
        : 'Loading...'}
    </div>
  );
}

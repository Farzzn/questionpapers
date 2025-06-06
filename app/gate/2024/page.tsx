
'use client';
import { useState } from 'react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What is the time complexity of Bubble Sort in the worst case?",
    options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
    correctIndex: 2,
  },
  {
    id: 2,
    question: "Which data structure uses FIFO order?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    correctIndex: 1,
  },
  {
    id: 3,
    question: "Which of the following is not a programming paradigm?",
    options: ["Object-Oriented", "Functional", "Procedural", "Multiprocessing"],
    correctIndex: 3,
  },
];

export default function Gate2024Page() {
  const [selected, setSelected] = useState<Record<number, number>>({});

  const handleOptionClick = (qid: number, idx: number) => {
    setSelected((prev) => ({ ...prev, [qid]: idx }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-blue-700">GATE 2024 - Quiz</h1>
      {questions.map((q) => (
        <div key={q.id} className="mb-8 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-3">{q.id}. {q.question}</h2>
          <ul className="space-y-2">
            {q.options.map((option, idx) => {
              const isSelected = selected[q.id] === idx;
              const isCorrect = idx === q.correctIndex;
              const showResult = q.id in selected;

              return (
                <li
                  key={idx}
                  className={`p-2 border rounded cursor-pointer transition-colors ${
                    isSelected ? (isCorrect ? "bg-green-200 border-green-500" : "bg-red-200 border-red-500") : "hover:bg-gray-100"
                  }`}
                  onClick={() => handleOptionClick(q.id, idx)}
                >
                  {option}
                  {showResult && isSelected && (
                    <span className="ml-2 font-medium">
                      {isCorrect ? "✅ Correct" : "❌ Wrong"}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
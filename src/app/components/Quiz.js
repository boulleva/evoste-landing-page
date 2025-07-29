"use client";
import { useState } from "react";

const questions = [
  {
    question: "Pilih suasana yang paling kamu suka:",
    options: ["Segar & Manis", "Misterius & Eksotis", "Hangat & Elegan"],
    recommendationKey: "vibe",
  },
  {
    question: "Kapan kamu biasanya memakai parfum?",
    options: ["Aktivitas Siang Hari", "Acara Malam Spesial", "Setiap Saat"],
    recommendationKey: "time",
  },
  {
    question: "Aroma mana yang paling menarik perhatianmu?",
    options: [
      "Buah-buahan (Fruity)",
      "Rempah & Kayu (Woody/Spicy)",
      "Bunga (Floral)",
    ],
    recommendationKey: "note",
  },
];

const recommendations = {
  "Segar & Manis": "Citrine Flame",
  "Misterius & Eksotis": "Oud Légendaire",
  "Hangat & Elegan": "Or Du Soir",
  "Aktivitas Siang Hari": "Ivory Bloom",
  "Acara Malam Spesial": "Midnight Cherry",
  "Setiap Saat": "Citrine Flame",
  "Buah-buahan (Fruity)": "Midnight Cherry",
  "Rempah & Kayu (Woody/Spicy)": "Oud Légendaire",
  "Bunga (Floral)": "Ivory Bloom",
};

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleAnswer = (option, key) => {
    const newAnswers = { ...answers, [key]: option };
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers) => {
    const recommendationCounts = {};
    Object.values(finalAnswers).forEach((answer) => {
      const perfume = recommendations[answer];
      if (perfume) {
        recommendationCounts[perfume] =
          (recommendationCounts[perfume] || 0) + 1;
      }
    });

    const finalRecommendation = Object.keys(recommendationCounts).reduce(
      (a, b) => (recommendationCounts[a] > recommendationCounts[b] ? a : b)
    );
    setResult(finalRecommendation);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setResult(null);
  };

  return (
    <section id="quiz" className="py-20 px-4 bg-gray-100">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Bingung Pilih Parfum?
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Jawab 3 pertanyaan singkat ini dan temukan aroma khasmu!
        </p>

        <div className="mt-8 bg-white p-8 rounded-xl shadow-lg min-h-[250px] flex flex-col justify-center">
          {!result ? (
            <div>
              <h3 className="text-xl font-semibold mb-6">
                {questions[currentQuestionIndex].question}
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {questions[currentQuestionIndex].options.map((option) => (
                  <button
                    key={option}
                    onClick={() =>
                      handleAnswer(
                        option,
                        questions[currentQuestionIndex].recommendationKey
                      )
                    }
                    className="w-full bg-purple-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-purple-700 transition duration-300"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <h3 className="text-xl font-semibold">
                Rekomendasi Terbaik Untukmu Adalah:
              </h3>
              <p className="text-4xl font-bold text-purple-700 my-4">
                {result}
              </p>
              <p className="text-gray-700">
                Aroma ini sangat cocok dengan kepribadian dan seleramu. Jelajahi
                produknya sekarang!
              </p>
              <button
                onClick={resetQuiz}
                className="mt-6 bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-700 transition duration-300"
              >
                Ulangi Kuis
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

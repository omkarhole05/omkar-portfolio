import React from "react";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    title: "10th",
    institute: "Shree Shahaji High School, Supe",
    year: "2019 - 2020",
    score: "96%",
    file: "ssc.pdf",
  },
  {
    title: "11th",
    institute: "Vidya Pratishthan College, Baramati",
    year: "2020 - 2021",
    score: "91%",
    file: "11th.pdf",
  },
  {
    title: "12th",
    institute: "Vidya Pratishthan College, Baramati",
    year: "2021 - 2022",
    score: "81%",
    file: "12th.pdf",
  },
  {
    title: "1st Year",
    institute: "Sinhgad Academy of Engineering, Kondhwa",
    year: "2022 - 2023",
    score: "8.7 CGPA",
    file: "1st.pdf",
  },
  {
    title: "2nd Year",
    institute: "Sinhgad Academy of Engineering, Kondhwa",
    year: "2023 - 2024",
    score: "8.7 CGPA",
    file: "2nd.pdf",
  },
  {
    title: "3rd Year",
    institute: "Sinhgad Academy of Engineering, Kondhwa",
    year: "2024 - 2025",
    score: "8.9 CGPA",
    file: "3rd.pdf",
  },
];

function Education() {
  return (
    <div className="h-screen flex flex-col items-center py-8 px-6">
      <h1 className="text-6xl font-bold text-gray-800 mb-12 flex items-center gap-3">
        <GraduationCap className="w-17 h-17 text-yellow-500" />
        Education
      </h1>

      {/* Grid with 2 columns on medium+ screens */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationData.map((edu, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-2xl p-3 flex flex-col justify-between transition hover:shadow-xl hover:scale-[1.01]"
          >
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">{edu.title}</h2>
              <p className="text-sm text-gray-500">{edu.institute}</p>
              <p className="text-sm text-gray-400">{edu.year}</p>
            </div>
            <div className="flex flex-col mt-4 md:items-end">
              <span className="text-lg font-bold text-gray-700">{edu.score}</span>
              <a
                href={edu.file}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 text-sm text-yellow-500 hover:text-yellow-600 underline"
              >
                View Result
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;

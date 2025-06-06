// app/components/Sidebar.tsx
'use client';
import Link from 'next/link';

const Sidebar = () => {
  const exams = [
    { name: "GATE", years: [2024, 2023, 2022] },
    { name: "JEE", years: [2024] },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4 h-full">
      <h2 className="text-lg font-semibold mb-4">Exams</h2>
      <ul className="space-y-2">
        {exams.map((exam) => (
          <li key={exam.name}>
            <details className="group">
              <summary className="cursor-pointer text-blue-700 hover:underline">
                {exam.name}
              </summary>
              <ul className="ml-4 mt-2 space-y-1">
                {exam.years.map((year) => (
                  <li key={year}>
                    <Link href={`/${exam.name.toLowerCase()}/${year}`} className="text-sm text-gray-700 hover:underline">
                      {year}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;




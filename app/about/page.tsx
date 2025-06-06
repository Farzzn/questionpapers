// app/about/page.tsx

export const metadata = {
  title: "About Us",
};


export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 bg-white shadow-md rounded-lg mt-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">About Us</h1>

      <p className="text-gray-700 mb-4">
        <strong>OldQuestionPaper.live</strong> is a student-driven initiative to make past exam papers accessible and engaging. Our platform transforms previous year papers into interactive quizzes—helping students practice more efficiently and in a modern, gamified way.
      </p>

      <p className="text-gray-700 mb-4">
        We currently support exams like <strong>GATE</strong>, <strong>KPSC</strong>, and <strong>ISRO Scientist/Engineer</strong>, and plan to expand to more exams soon.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Why This Website?</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Easy-to-use quiz format for previous year papers</li>
        <li>Absolutely free and open to all</li>
        <li>Created with love by students, for students</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Future Plans</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Support more exams and paper formats</li>
        <li>Bookmarking and result tracking features</li>
        <li>Mobile-friendly progressive web app</li>
      </ul>

      <p className="text-gray-600 mt-8 text-sm italic">
        Want to contribute or suggest improvements? Feel free to reach out through the contact form.
      </p>
    </div>
  );
}
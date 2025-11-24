// src/pages/ResumePage.jsx
import { Link } from 'react-router-dom';

export default function ResumePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <div className="mb-6">
        <Link to="/" className="text-green-500 hover:underline">&larr; Back to Home</Link>
      </div>

      <h2 className="text-3xl font-bold border-b-2 border-green-600  inline-block mb-6">Resume</h2>

      <div className="bg-gray-800 p-6 rounded mb-6">
        <a
          href="/assets/resume.pdf"
          download
          className="mt-4 inline-block bg-green-500 text-black px-4 py-2 rounded hover:bg-green-700"
        >
          Download Resume
        </a>
      </div>

      <div className="w-full h-[80vh] border border-gray-700">
        <iframe
          src="/assets/resume.pdf"
          title="Resume PDF"
          className="w-full h-full"
        ></iframe>
      </div>
    </main>
  );
}

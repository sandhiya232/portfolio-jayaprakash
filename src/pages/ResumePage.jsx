// src/pages/ResumePage.jsx
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function ResumePage() {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-slide-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <main className="max-w-6xl mx-auto px-4 py-10 font-mono bg-[#001219] text-white overflow-x-hidden">

      {/* Back Link */}
      <div className="mb-6 animate-on-scroll">
        <Link to="/" className="text-cyan-400 hover:underline">&larr; Back to Home</Link>
      </div>

      {/* Header */}
  <h2 className="text-6xl font-extrabold text-center mb-16 animate-fade-in">
    <span className="border-b-4 border-cyan-400 px-4">Resume</span>
  </h2>

      {/* Download Button */}
      <div className="bg-[#001f3f] p-6 rounded mb-6 animate-on-scroll">
        <a
          href="/assets/resume.pdf"
          download
          className="mt-4 inline-block bg-cyan-400 text-black px-4 py-2 rounded shadow-lg 
                     hover:scale-105 hover:shadow-cyan-300 transition-all duration-300"
        >
          Download Resume
        </a>
      </div>

      {/* PDF Viewer */}
      <div className="w-full h-[80vh] border border-cyan-400 rounded animate-on-scroll overflow-hidden shadow-lg">
        <iframe
          src="/assets/resume.pdf"
          title="Resume PDF"
          className="w-full h-full"
        ></iframe>
      </div>

      {/* ---------------- ANIMATIONS CSS ---------------- */}
      <style>{`
        .animate-on-scroll { opacity: 0; transform: translateY(30px); transition: all 0.8s ease-out; }
        .animate-fade-slide-up { opacity: 1; transform: translateY(0); }
      `}</style>
    </main>
  );
}

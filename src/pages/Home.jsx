
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useEffect } from "react";
export default function Home() {
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
    <main className="w-full bg-[#001219] text-white overflow-x-hidden font-mono">

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto px-4 py-20 gap-10">
        <div className="md:w-1/2 space-y-6 animate-fade-in">
          <p className="text-cyan-400 font-mono">Hello There! I am</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-cyan-200 tracking-tight">Jayaprakash</h1>
          <p className="text-cyan-100 text-lg max-w-md leading-relaxed">
            Senior Detailer with experience in Tekla Structures, Revit & AutoCAD. I produce precise fabrication & erection drawings, coordinate models and deliver client-ready documentation.
          </p>
          <Link
            to="/resume"
            className="inline-block px-8 py-3 bg-cyan-400 text-black font-semibold rounded shadow-lg hover:scale-110 hover:shadow-cyan-300 transition-all duration-300"
          >
            View Resume
          </Link>
        </div>

        <div className="md:w-1/2 flex justify-center animate-slide-up">
          <div className="w-[80%] md:w-full rounded-xl shadow-xl border border-cyan-400 transition duration-700 hover:rotate-y-12 hover:rotate-x-6 hover:scale-105 [transform-style:preserve-3d]">
            <img
              src="https://biblus.accasoftware.com/en/wp-content/uploads/sites/2/2022/10/artificial-intelligence-in-construction.jpg"
              alt="Civil Engineering Illustration"
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

 {/* ---------------- PROJECTS SECTION ---------------- */}
<section id="projects" className="py-24 bg-[#001f3f]">
  <h2 className="text-6xl font-extrabold text-center mb-16 animate-fade-in">
    <span className="border-b-4 border-cyan-400 px-4">Projects</span>
  </h2>

  <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4">
    {[
      {
        title: "Structural Steel Detailing – Industrial Projects",
        desc: `• Prepared full fabrication, assembly, and GA drawings for steel structures
• Modeled beams, columns, bracings, platforms & ladders in 3D Tekla
• Generated BOM, part lists, weld/bolt schedules with project accuracy
• Coordinated with engineers for revisions, RFI resolutions, and quality checks`,
        image: "https://astcad.com.au/wp-content/uploads/2022/08/structural-steel-detailing.jpeg",
      },
      {
        title: "BIM Coordination & Clash Detection (Structural vs MEP)",
        desc: `• Conducted coordination between structural and MEP models (Revit + Navisworks)
• Identified & resolved clashes involving ducts, pipes, beams & slabs
• Updated GA drawings and ensured all revisions matched model changes
• Provided clean model handover & coordination reports for site execution`,
        image: "https://enecagroup.com/upload/medialibrary/361/6pox4tq18p67zuv021vua3rwhns0xj83/bim_coordination.jpg",
      },
      {
        title: "Erection & General Arrangement (GA) Drawing Package",
        desc: `• Prepared erection plans, elevations, and detailed GA sections
• Created anchor bolt plans, part indexing, and material take-offs
• Delivered BOQ/BOM sheets with weight calculations and material standards
• Supported fabrication & site teams by providing accurate erection documents`,
        image: "https://paintingvalley.com/drawings/ga-drawing-3.jpg",
      },
    ].map((project, index) => (
      <div
        key={project.title}
        className="bg-[#002b36] border border-cyan-400 rounded-xl p-6 shadow-md hover:scale-105 hover:shadow-cyan-300 transition duration-500 animate-on-scroll"
        style={{ animationDelay: `${index * 0.3}s` }}
      >
        <div className="mb-4 cursor-pointer">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
            onClick={() => {
              const modal = document.getElementById("project-modal");
              const modalImg = document.getElementById("modal-img");
              modal.style.display = "flex";
              modalImg.src = project.image;
            }}
          />
        </div>

        <h3 className="text-cyan-400 text-xl font-bold mb-3 text-center">{project.title}</h3>
        <p className="text-cyan-100 text-sm text-center whitespace-pre-line">{project.desc}</p>
      </div>
    ))}
  </div>

  {/* Modal */}
  <div
    id="project-modal"
    className="fixed inset-0 bg-black bg-opacity-80 hidden justify-center items-center z-50"
    onClick={(e) => {
      if (e.target.id === "project-modal") e.currentTarget.style.display = "none";
    }}
  >
    <img id="modal-img" className="max-h-[90vh] max-w-[90vw] rounded shadow-lg" alt="Project Full" />
  </div>
</section>

      {/* ---------------- ABOUT SECTION ---------------- */}
      <section id="about" className="py-20">
        <h2 className="text-6xl font-extrabold text-center text-cyan-200 mb-12">
          <span className="border-b-4 border-cyan-400 px-4">About</span>
        </h2>
        <div className="max-w-4xl mx-auto space-y-6 text-cyan-100 text-lg leading-relaxed">
          {[
            "I’m Jayaprakash G, a Civil Engineering professional and Structural Detailer with hands-on experience in Tekla Structures, AutoCAD, and Revit. I specialize in creating accurate fabrication drawings, erection drawings, and detailed 3D steel structure models.",
            "I have strong expertise in model coordination, clash detection, GA drawings, and BOM preparation. I ensure high-quality, error-free project deliverables while maintaining effective collaboration with engineers and project teams.",
            "Over the years, I’ve contributed to projects that required strong attention to detail, problem-solving skills, and the ability to understand complex steel structure behavior.",
            "I am continuously improving my BIM and detailing skills while expanding my expertise to support evolving industry standards."
          ].map((paragraph, index) => (
            <p key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 0.3}s` }}>
              {paragraph.split(" ").map((word, i) => (
                <span key={i} className="inline-block mr-1">{word}</span>
              ))}
            </p>
          ))}
        </div>
      </section>

      {/* ---------------- CONTACT SECTION ---------------- */}
      <section id="contact" className="py-24 bg-[#001f3f]">
        <h2 className="text-6xl font-extrabold text-center mb-16 animate-fade-in">
          <span className="border-b-4 border-cyan-400 px-4">Contact</span>
        </h2>
        <div className="text-center space-y-6 text-cyan-100 text-lg">
          {[
            { icon: <FaEnvelope />, label: "Email", value: "jayaprakashcivil200@gmail.com", link: true },
            { icon: <FaPhone />, label: "Phone", value: "+91 9150630862" },
            { icon: <FaMapMarkerAlt />, label: "Location", value: "57/1, Vengattammpettai, Chinnasalem (T.K), Kallakurichi (D.T), Tamilnadu, Pin-606207, India" },
          ].map((item, index) => (
            <p key={index} className="flex justify-center items-center gap-3 animate-on-scroll" style={{ animationDelay: `${index * 0.3}s` }}>
              {item.icon}
              {item.link ? <a href={`mailto:${item.value}`} className="text-cyan-400 hover:underline">{item.value}</a> : item.value}
            </p>
          ))}
        </div>
      </section>

      {/* ---------------- ANIMATIONS CSS ---------------- */}
      <style>{`
        .animate-fade-in { opacity: 0; transform: translateY(20px); animation: fadeIn 1s forwards; }
        .animate-slide-up { opacity: 0; transform: translateY(40px); animation: slideUp 1s forwards; }
        .animate-fade-slide-up { opacity: 0; transform: translateY(40px); animation: fadeSlideUp 0.8s forwards; }
        @keyframes fadeIn { to { opacity: 1; transform: translateY(0); } }
        @keyframes slideUp { to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeSlideUp { to { opacity: 1; transform: translateY(0); } }
      `}</style>

    </main>
  );
}

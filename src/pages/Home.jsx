import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";

// import heroImage from '../assets/hero.png';
export default function Home() {
    return (
        <main className="w-full max-w-6xl mx-auto px-4 py-10">
            {/* Hero Section */}
            <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto py-10">
                {/* Left Text Content */}
                <div className="md:w-1/2 space-y-6">
                    <p className="text-green-400 font-mono">Hello There! I am</p>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white">Jayaprakash</h1>
                    <p className="text-gray-300 text-lg max-w-md">
                        Senior Detailer with experience in Tekla Structures, Revit & AutoCAD. I produce precise fabrication & erection drawings, coordinate models and deliver client-ready documentation.
                    </p>
                    <Link
                        to="/resume"
                        className="inline-block px-6 py-2 mt-4 bg-green-500 text-black font-semibold rounded shadow-lg hover:scale-105 transition-all"
                    >
                        View Resume
                    </Link>
                </div>

                {/* Right Hero Image */}
                <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
                    <img
                        src="https://vectorified.com/image/civil-engineering-vector-18.jpg"
                        alt="Civil Engineering Illustration"
                        className="w-[80%] md:w-full animate-fadeInUp rounded-xl shadow-lg"
                    />
                </div>
            </section>

{/* Projects Section */}
<section id="projects" className="py-20">
  <h2 className="text-7xl font-extrabold text-center text-white mb-12">
    <span className="border-b-4 border-green-400 px-4">Projects</span>
  </h2>

  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {[
      {
        title: 'Structural Steel Detailing – Industrial Projects',
        desc: `• Prepared full fabrication, assembly, and GA drawings for steel structures
• Modeled beams, columns, bracings, platforms & ladders in 3D Tekla
• Generated BOM, part lists, weld/bolt schedules with project accuracy
• Coordinated with engineers for revisions, RFI resolutions, and quality checks`,
        image: 'https://astcad.com.au/wp-content/uploads/2022/08/structural-steel-detailing.jpeg',
      },
      {
        title: 'BIM Coordination & Clash Detection (Structural vs MEP)',
        desc: `• Conducted coordination between structural and MEP models (Revit + Navisworks)
• Identified & resolved clashes involving ducts, pipes, beams & slabs
• Updated GA drawings and ensured all revisions matched model changes
• Provided clean model handover & coordination reports for site execution`,
        image: 'https://enecagroup.com/upload/medialibrary/361/6pox4tq18p67zuv021vua3rwhns0xj83/bim_coordination.jpg',
      },
      {
        title: 'Erection & General Arrangement (GA) Drawing Package',
        desc: `• Prepared erection plans, elevations, and detailed GA sections
• Created anchor bolt plans, part indexing, and material take-offs
• Delivered BOQ/BOM sheets with weight calculations and material standards
• Supported fabrication & site teams by providing accurate erection documents`,
        image: 'https://paintingvalley.com/drawings/ga-drawing-3.jpg',
      },
    ].map((project) => (
      <div
        key={project.title}
        className="bg-[#0f0f0f] border border-green-400 rounded-xl p-6 hover:shadow-green-400 shadow-md transition duration-300"
      >
        <div className="flex justify-center mb-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-32 h-32 object-cover rounded-full bg-green-500/10 p-2"
          />
        </div>
        <h3 className="text-green-400 text-xl font-bold mb-2 text-center">{project.title}</h3>
        <p className="text-gray-300 text-sm text-center whitespace-pre-line">{project.desc}</p>
      </div>
    ))}
  </div>
</section>


            {/* About Section */}
<section id="about" className="py-20">
  <h2 className="text-7xl font-extrabold text-center text-white mb-12">
    <span className="border-b-4 border-green-400 px-4">About</span>
  </h2>

  <div className="max-w-4xl mx-auto space-y-6 text-gray-300 text-lg leading-relaxed">
    <p>
      I’m <span className="text-green-400 font-semibold">Jayaprakash G</span>, a Civil Engineering professional and 
      <span className="text-green-400 font-semibold"> Structural Detailer</span> with hands-on experience in 
      <span className="text-green-400"> Tekla Structures (19i–23), AutoCAD, and Revit</span>. I specialize in creating 
      accurate fabrication drawings, erection drawings, and detailed 3D steel structure models for various industrial 
      and commercial projects.
    </p>

    <p>
      I have strong expertise in <span className="text-green-400">model coordination, clash detection, GA drawings, and BOM preparation</span>.
      I ensure high-quality, error-free project deliverables while maintaining effective collaboration with engineers 
      and project teams. My approach focuses on precision, structural integrity, and seamless project execution.
    </p>

    <p>
      Over the years, I’ve contributed to projects that required strong attention to detail, problem-solving skills, 
      and the ability to understand complex steel structure behavior. I enjoy optimizing detailing workflows and 
      delivering clear, comprehensive documentation for fabrication and construction teams.
    </p>

    <p>
      I am continuously improving my BIM and detailing skills, while expanding my expertise to support evolving 
      industry standards in structural engineering and modeling technologies.
    </p>
  </div>
</section>





            {/* Contact Section */}
             <section id="contact" className="py-20">
      <h2 className="text-7xl font-extrabold text-center text-white mb-12">
        <span className="border-b-4 border-green-400 px-4">Contact</span>
      </h2>

      <p className="text-gray-400 mb-2 text-center flex justify-center items-center gap-2">
        <FaEnvelope className="text-green-400" />
        Email:{" "}
        <a href="mailto:sandhiya070497@gmail.com" className="text-green-600 hover:underline">
          jayaprakashcivil200@gmail.com
        </a>
      </p>

      <p className="text-gray-400 mb-2 text-center flex justify-center items-center gap-2">
        <FaPhone className="text-green-400" />
        Phone: +91 9150630862
      </p>

      <p className="text-gray-400 mb-2 text-center flex justify-center items-center gap-2">
        <FaMapMarkerAlt className="text-green-400" />
        Location: 57/1,Vengattammpettai, Chinnasalem (T.K), Kallakurichi (D.t),Tamilnadu,Pin-606207,India
      </p>
    </section>
        </main>
    );
}

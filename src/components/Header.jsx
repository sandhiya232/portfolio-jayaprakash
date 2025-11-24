export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow z-50">
      <nav className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">Sandhiya R</h1>
        <div className="space-x-4 text-sm">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#skills" className="hover:text-blue-600">Skills</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#resume" className="hover:text-blue-600">Resume</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>
      </nav>
    </header>
  );
}
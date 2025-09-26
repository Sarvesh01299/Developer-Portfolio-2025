// src/components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-10 bg-black bg-opacity-30 backdrop-blur-lg">
      <div className="text-2xl font-bold text-white">
        <Link href="/">YourName</Link>
      </div>
      <div className="flex gap-8 text-lg text-gray-300 font-sans">
        <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
        <Link href="#skills" className="hover:text-white transition-colors">Skills</Link>
        <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
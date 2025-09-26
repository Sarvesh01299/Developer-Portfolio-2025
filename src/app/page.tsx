// src/app/page.tsx
import Signature from "@/components/Signature";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      {/* Signature Hero Section */}
      <main className="min-h-screen w-full flex items-center justify-center">
        <Signature />
      </main>

      {/* The rest of your portfolio sections */}
      <div className="font-sans px-4">
        <Projects />
        <Skills />
        <Contact />
      </div>
    </>
  );
}
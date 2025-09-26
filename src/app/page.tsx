// src/app/page.tsx
export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center text-center px-4 font-sans">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 pb-2">
          Your Name
        </h1>
        <p className="mt-4 text-lg md:text-xl text-neutral-300">
          A Full-Stack Developer building and designing the future of the web.
        </p>
        <a 
          href="#projects" 
          className="mt-8 inline-block bg-sky-500 text-white font-semibold py-3 px-8 rounded-lg hover:bg-sky-600 transition-colors shadow-lg shadow-sky-500/20"
        >
          Explore My Work
        </a>
      </div>
    </main>
  );
}
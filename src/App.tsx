// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//import BlogList from "./pages/BlogList";
//import BlogPost from "./pages/BlogPost";
import {
  //Briefcase,
  Gamepad2,
  PenTool,
  Star,
  ArrowUpRight,
  Cpu,
  Image as ImageIcon,
  Smile,
  FileText,
} from "lucide-react";

import "./App.css";

// --- Components ---

// 1. Navigation Bar
const Navbar = () => (
  <nav className="flex items-center justify-between py-6 px-4 max-w-7xl mx-auto">
    {/* Logo Area */}
    <div className="flex items-center gap-2">
      <div className="w-12 h-12 bg-white border-2 border-ink rounded-lg flex items-center justify-center sticker-shadow">
        {/* Placeholder for the Horse Logo */}
        <span className="text-2xl">🦄</span>
      </div>
    </div>

    {/* Links */}
    <div className="hidden md:flex gap-8 font-bold text-lg">
      <a
        href="#"
        className="relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-brand-cyan"
      >
        Work
      </a>
      <a href="#" className="hover:text-gray-600 transition-colors">
        Blog
      </a>
      <a href="#" className="hover:text-gray-600 transition-colors">
        Contact
      </a>
    </div>

    {/* Resume Button */}
    <button className="bg-brand-pink border-2 border-ink px-6 py-2 rounded-pill font-bold sticker-shadow active:sticker-shadow-hover transition-all cursor-pointer">
      Resume
    </button>
  </nav>
);

// 2. Hero Section
const Hero = () => (
  <section className="relative max-w-7xl mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-12 items-center">
    {/* Left Content */}
    <div className="space-y-6 relative z-10">
      <div className="relative inline-block">
        <h1 className="text-6xl md:text-8xl font-black leading-tight tracking-tight">
          Hello,
          <br />I am{" "}
          <span className="relative z-10 px-2">
            Kelium
            {/* Yellow Highlighter Effect */}
            <span className="absolute bottom-2 left-0 w-full h-6 bg-brand-yellow -z-10 -rotate-1"></span>
          </span>
        </h1>

        {/* Decorative Cyan highlight behind "Hello" */}
        <div className="absolute top-2 left-0 w-32 h-6 bg-brand-cyan -z-10 rotate-2"></div>
      </div>

      <div className="flex items-center gap-4 pt-4">
        <button className="flex items-center gap-2 bg-brand-cyan/20 border-2 border-ink px-6 py-3 rounded-full font-bold sticker-shadow hover:-translate-y-1 transition-transform">
          <span>Started Here!</span>
          <Gamepad2 size={20} />
        </button>
      </div>
    </div>

    {/* Right Content (Illustration) */}
    <div className="relative flex justify-center">
      {/* Background Decor Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-10 w-32 h-32 bg-brand-cyan/20 rounded-full blur-3xl -z-10"></div>

      {/* Geometric Shapes */}
      <div className="absolute top-10 right-10 text-brand-yellow animate-float">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 22h20L12 2z" />
        </svg>
      </div>
      <div className="absolute bottom-20 left-0 w-8 h-8 rounded-full border-4 border-brand-pink"></div>

      {/* Main Image Container */}
      <div className="bg-white border-2 border-ink rounded-3xl p-4 sticker-shadow w-full max-w-md aspect-square flex items-center justify-center relative overflow-hidden bg-mesh">
        {/* Striped Background Effect */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        ></div>

        <img
          src="https://api.dicebear.com/9.x/avataaars/svg?seed=Felix&clothing=hoodie&clothingColor=3c4f5c&hair=short&skinColor=ffdbb4"
          alt="Avatar"
          className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-xl"
        />
      </div>
    </div>
  </section>
);

// 3. Bento Grid Section
interface ProjectCardProps {
  title: string;
  type: "image" | "icon";
  content: string | React.ReactNode;
  bgClass: string;
  icon?: React.ReactNode;
}

const ProjectCard = ({
  title,
  type,
  content,
  bgClass,
  icon,
}: ProjectCardProps) => (
  <div className="bg-white border-2 border-ink rounded-bento p-3 flex flex-col gap-3 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group cursor-pointer h-full">
    {/* Visual Area */}
    <div
      className={`h-32 md:h-40 w-full rounded-xl border border-ink/10 flex items-center justify-center overflow-hidden relative ${bgClass}`}
    >
      {type === "icon" ? (
        <div className="transform group-hover:scale-110 transition-transform duration-300">
          {content}
        </div>
      ) : (
        <div className="text-6xl">{content}</div> // Placeholder for image
      )}

      {/* Shine effect */}
      <div className="absolute top-0 right-0 w-20 h-full bg-white/20 -skew-x-12 blur-sm"></div>
    </div>

    {/* Footer Area */}
    <div className="flex justify-between items-center px-1">
      <span className="font-bold text-ink">{title}</span>
      <div className="w-8 h-8 rounded-full border border-ink flex items-center justify-center bg-white group-hover:bg-brand-yellow transition-colors">
        {icon || <ArrowUpRight size={16} />}
      </div>
    </div>
  </div>
);

const BentoSection = () => (
  <section className="max-w-7xl mx-auto px-4 py-12">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
      {/* Left Column: Bento Grid (Span 8) */}
      <div className="md:col-span-7 lg:col-span-8">
        <h2 className="text-3xl font-black mb-6">Bento box</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <ProjectCard
            title="Project One"
            type="icon"
            content={
              <div className="w-16 h-16 bg-red-400 rounded-full border-2 border-ink shadow-sm"></div>
            }
            bgClass="bg-gradient-to-b from-yellow-100 to-pink-100"
            icon={<ArrowUpRight size={16} />}
          />

          <ProjectCard
            title="Anime UI Kit"
            type="icon"
            content={<Smile size={48} className="text-purple-500" />}
            bgClass="bg-purple-100"
            icon={<Star size={16} />}
          />

          <ProjectCard
            title="Game Assets"
            type="icon"
            content={<Gamepad2 size={48} className="text-blue-500" />}
            bgClass="bg-slate-200"
            icon={<Gamepad2 size={16} />}
          />

          <ProjectCard
            title="Project Two"
            type="icon"
            content={
              <div className="w-12 h-16 bg-white border-2 border-ink rounded mx-auto"></div>
            }
            bgClass="bg-brand-pink/50"
            icon={<Smile size={16} />}
          />

          <ProjectCard
            title="Naminn UI Kit"
            type="icon"
            content={<Cpu size={48} className="text-cyan-600" />}
            bgClass="bg-cyan-100"
            icon={<FileText size={16} />}
          />

          <ProjectCard
            title="Projects"
            type="icon"
            content={<ImageIcon size={48} className="text-pink-500" />}
            bgClass="bg-gradient-to-tr from-brand-blue to-brand-purple"
            icon={<PenTool size={16} />}
          />
        </div>
      </div>

      {/* Right Column: Blog (Span 4) */}
      <div className="md:col-span-5 lg:col-span-4 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-black mb-6">Blog</h2>

          <div className="space-y-6">
            <div className="group cursor-pointer">
              <p className="text-gray-500 text-sm font-bold mb-1">May 15</p>
              <h3 className="text-xl font-bold group-hover:text-brand-cyan transition-colors">
                My Creative Process
              </h3>
              <div className="h-0.5 w-full bg-gray-200 mt-4 group-hover:bg-brand-cyan transition-colors"></div>
            </div>

            <div className="group cursor-pointer">
              <p className="text-gray-500 text-sm font-bold mb-1">May 17</p>
              <h3 className="text-xl font-bold border-b-4 border-brand-pink inline-block pb-1">
                Creating Usizel Kit
              </h3>
            </div>

            <div className="group cursor-pointer">
              <p className="text-gray-500 text-sm font-bold mb-1">May 26</p>
              <h3 className="text-xl font-bold group-hover:decoration-wavy group-hover:underline">
                Game Garm Design
              </h3>
              <div className="h-0.5 w-full bg-gray-200 mt-4"></div>
            </div>

            <div className="group cursor-pointer">
              <p className="text-gray-500 text-sm font-bold mb-1">May 15</p>
              <h3 className="text-xl font-bold">
                What 11 - My Creative Process?
              </h3>
              <div className="h-0.5 w-full bg-brand-yellow mt-4"></div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button className="w-full flex items-center justify-between bg-brand-cyan/20 border-2 border-ink px-6 py-3 rounded-full font-bold sticker-shadow hover:translate-y-1 hover:shadow-none transition-all">
            <span>Capsule Gaming</span>
            <Gamepad2 size={20} />
          </button>
        </div>
      </div>
    </div>
  </section>
);

function App() {
  return (
    <div className="min-h-screen font-sans bg-mesh overflow-x-hidden relative">
      {/* Decorative Halftone Pattern (Bottom Left) */}
      <div className="fixed bottom-0 left-0 w-64 h-64 bg-halftone -z-10 rounded-tr-full"></div>

      {/* Decorative Blur (Top Right) */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/10 blur-[100px] -z-10"></div>

      <Navbar />
      <Hero />
      <BentoSection />
    </div>
  );
}

export default App;

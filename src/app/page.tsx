// 'use client';

// import React, { useState } from 'react';
// import { 
//   Cpu, 
//   Binary, 
//   Atom, 
//   Activity, 
//   Compass, 
//   Music, 
//   Layers, 
//   Terminal, 
//   Search, 
//   Lightbulb, 
//   GraduationCap, 
//   ChevronRight,
//   Menu,
//   X
// } from 'lucide-react';

// export default function Home() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   // Categorized Interests for cleaner presentation
//   const interestCategories = [
//     {
//       title: "Computer Science & AI",
//       icon: <Cpu className="w-5 h-5 text-indigo-400" />,
//       items: ["Artificial Intelligence", "Machine Learning & Deep Learning", "Data Science & Analytics", "Software Development", "Algorithms & Data Structures", "Cybersecurity & Ethical Hacking", "Cloud Computing", "Blockchain & Cryptography"]
//     },
//     {
//       title: "Quantum & Sciences",
//       icon: <Atom className="w-5 h-5 text-blue-400" />,
//       items: ["Quantum Computing", "Quantum Cryptography", "Computer Architecture", "Operating Systems", "Quantum Mechanics", "Classical Mechanics", "Calculus", "Number Theory", "Probability & Combinatorics"]
//     },
//     {
//       title: "Engineering & Biotechnology",
//       icon: <Activity className="w-5 h-5 text-emerald-400" />,
//       items: ["Rocket Science", "Cosmology", "Electrical Engineering", "Robotics", "Drone Technology", "Bioinformatics", "Biomedical Engineering", "Physiology", "Neurology", "Cardiology", "Virology", "Pharmacology"]
//     },
//     {
//       title: "Creative & Quantitative",
//       icon: <Music className="w-5 h-5 text-purple-400" />,
//       items: ["Unreal Engine & Unity", "Blender & Houdini", "Music Composition & Theory", "Financial Markets", "High Frequency Trading", "Forex & Stock Market Analysis"]
//     }
//   ];

//   const technicalSkills = [
//     { category: "Programming", skills: ["C++", "Python", "Java (Learning)", "Data Structures & Algorithms", "Object-Oriented Programming"] },
//     { category: "AI & Data", skills: ["Machine Learning", "Deep Learning", "Neural Networks", "Data Analysis", "Data Visualization", "Statistical Modeling"] },
//     { category: "Software & Tools", skills: ["Git & GitHub", "Blender", "Unreal Engine", "Unity", "Houdini"] },
//     { category: "Cybersecurity", skills: ["Network Security", "Ethical Hacking", "Cryptography", "Security Fundamentals"] },
//     { category: "Scientific Computing", skills: ["Mathematical Modeling", "Numerical Methods", "Computational Physics"] }
//   ];

//   const researchInterests = [
//     "Artificial General Intelligence (AGI)",
//     "Quantum Computing & Information Science",
//     "AI for Scientific Discovery",
//     "Robotics & Autonomous Systems",
//     "High-Performance Computing",
//     "Advanced Physics & Aerospace Systems",
//     "Computational Biology & Biomedical Technologies"
//   ];

//   const qualities = [
//     "Analytical Thinker", "Curious Learner", "Research-Oriented", 
//     "Logical Problem Solver", "Detail-Oriented", "Self-Motivated", 
//     "Continuous Learner", "Technology Enthusiast", "Adaptable", "Innovative Mindset"
//   ];

//   return (
//     <div className="min-h-screen bg-[#0b0f19] text-gray-100 flex flex-col justify-between">
//       {/* Navigation */}
//       <nav className="sticky top-0 z-50 bg-[#0b0f19]/95 backdrop-blur-md border-b border-gray-800">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex-shrink-0">
//               <span className="font-mono text-lg font-bold tracking-wider text-indigo-400">TARAN_WADHAWAN</span>
//             </div>
//             <div className="hidden md:block">
//               <div className="ml-10 flex items-baseline space-x-6 font-medium text-sm">
//                 <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
//                 <a href="#interests" className="text-gray-300 hover:text-white transition">Interests</a>
//                 <a href="#skills" className="text-gray-300 hover:text-white transition">Skills</a>
//                 <a href="#research" className="text-gray-300 hover:text-white transition">Research & Objectives</a>
//                 <a href="#contact" className="px-3 py-1.5 rounded-md bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-600/50 transition">Get in Touch</a>
//               </div>
//             </div>
//             <div className="md:hidden">
//               <button 
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                 className="text-gray-400 hover:text-white p-1"
//                 aria-label="Toggle Menu"
//               >
//                 {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         {mobileMenuOpen && (
//           <div className="md:hidden bg-[#0e1424] border-b border-gray-800 px-4 pt-2 pb-4 space-y-2 text-sm">
//             <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-300 hover:text-white">About</a>
//             <a href="#interests" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-300 hover:text-white">Interests</a>
//             <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-300 hover:text-white">Skills</a>
//             <a href="#research" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-300 hover:text-white">Research & Objectives</a>
//             <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-indigo-400">Contact</a>
//           </div>
//         )}
//       </nav>

//       <main className="flex-grow">
//         {/* Hero Section */}
//         <section className="relative py-20 lg:py-28 overflow-hidden border-b border-gray-900">
//           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent pointer-events-none"></div>
//           <div className="max-w-4xl mx-auto px-4 text-center">
//             <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-mono mb-6 border border-indigo-500/20">
//               <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
//               <span>CSE AIML Student</span>
//             </div>
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
//               Taran Wadhawan
//             </h1>
//             <p className="text-lg sm:text-xl text-gray-400 font-mono mb-4">
//               Shri Ramdeobaba College of Engineering and Management
//             </p>
//             <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
//               I am a multidisciplinary technology enthusiast passionate about artificial intelligence, computer science, physics, mathematics, cybersecurity, quantum computing, biotechnology, and software engineering.
//             </p>
//             <div className="flex flex-wrap justify-center gap-4">
//               <a href="#about" className="px-5 py-2.5 rounded bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition text-sm">
//                 Explore Portfolio
//               </a>
//               <a href="#contact" className="px-5 py-2.5 rounded bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 font-medium transition text-sm">
//                 Contact Info
//               </a>
//             </div>
//           </div>
//         </section>

//         {/* Professional Summary */}
//         <section id="about" className="py-16 max-w-5xl mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
//             <div className="md:col-span-2 space-y-6">
//               <div className="flex items-center space-x-2 text-indigo-400">
//                 <Terminal className="w-5 h-5" />
//                 <h2 className="text-xl font-bold uppercase tracking-wider font-mono">Professional Summary</h2>
//               </div>
//               <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
//                 I am a multidisciplinary technology and science enthusiast with a strong interest in solving complex problems across computer science, artificial intelligence, physics, mathematics, engineering, and biotechnology. My work focuses on combining analytical thinking with practical implementation to explore advanced technologies, build intelligent systems, and develop innovative solutions.
//               </p>
//               <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
//                 My interests span software engineering, machine learning, quantum computing, cybersecurity, data science, high-performance computing, game development, and scientific research. I continuously expand my knowledge by studying emerging technologies and applying them to real-world projects.
//               </p>
//             </div>
            
//             <div className="bg-[#0e1424] p-6 rounded-lg border border-gray-800 space-y-4">
//               <div className="flex items-center space-x-2 text-indigo-400">
//                 <GraduationCap className="w-5 h-5" />
//                 <h3 className="text-md font-semibold">Education</h3>
//               </div>
//               <div className="text-sm">
//                 <p className="font-medium text-white">Shri Ramdeobaba College of Engineering and Management</p>
//                 <p className="text-gray-400 mt-1">B.E. Computer Science and Engineering</p>
//                 <p className="text-gray-400">(Artificial Intelligence & Machine Learning)</p>
//               </div>
//               <div className="pt-4 border-t border-gray-800">
//                 <p className="text-xs text-gray-400 font-mono uppercase tracking-wider mb-2">Key Competencies</p>
//                 <div className="flex flex-wrap gap-1.5">
//                   {qualities.slice(0, 5).map((q, i) => (
//                     <span key={i} className="text-xs bg-gray-800 text-gray-300 px-2 py-0.5 rounded border border-gray-700/50">
//                       {q}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Areas of Interest */}
//         <section id="interests" className="py-16 bg-[#080c14] border-t border-b border-gray-900">
//           <div className="max-w-5xl mx-auto px-4">
//             <div className="flex items-center space-x-2 text-indigo-400 mb-8">
//               <Compass className="w-5 h-5" />
//               <h2 className="text-xl font-bold uppercase tracking-wider font-mono">Areas of Interest</h2>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {interestCategories.map((cat, idx) => (
//                 <div key={idx} className="bg-[#0e1424] p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition">
//                   <div className="flex items-center space-x-3 mb-4">
//                     {cat.icon}
//                     <h3 className="text-md font-bold text-white">{cat.title}</h3>
//                   </div>
//                   <div className="flex flex-wrap gap-2">
//                     {cat.items.map((item, keyIdx) => (
//                       <span key={keyIdx} className="text-xs font-mono bg-gray-900/60 text-gray-400 px-2.5 py-1 rounded border border-gray-800">
//                         {item}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Technical Skills */}
//         <section id="skills" className="py-16 max-w-5xl mx-auto px-4">
//           <div className="flex items-center space-x-2 text-indigo-400 mb-8">
//             <Binary className="w-5 h-5" />
//             <h2 className="text-xl font-bold uppercase tracking-wider font-mono">Technical Skills</h2>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {technicalSkills.map((section, idx) => (
//               <div key={idx} className="p-5 rounded-lg border border-gray-800 bg-[#0e1424]/40">
//                 <h3 className="text-sm font-semibold text-white tracking-wide border-b border-gray-800 pb-2 mb-3 uppercase font-mono">
//                   {section.category}
//                 </h3>
//                 <ul className="space-y-1.5">
//                   {section.skills.map((skill, sIdx) => (
//                     <li key={sIdx} className="text-sm text-gray-300 flex items-center">
//                       <ChevronRight className="w-3.5 h-3.5 text-indigo-500 mr-1.5 flex-shrink-0" />
//                       <span>{skill}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Research Interests & Career Objective */}
//         <section id="research" className="py-16 bg-[#080c14] border-t border-gray-900">
//           <div className="max-w-5xl mx-auto px-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
//               {/* Research Focus */}
//               <div className="space-y-6">
//                 <div className="flex items-center space-x-2 text-indigo-400">
//                   <Search className="w-5 h-5" />
//                   <h2 className="text-xl font-bold uppercase tracking-wider font-mono">Research Interests</h2>
//                 </div>
//                 <div className="bg-[#0e1424] p-6 rounded-lg border border-gray-800">
//                   <ul className="space-y-3">
//                     {researchInterests.map((interest, idx) => (
//                       <li key={idx} className="flex items-start">
//                         <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
//                         <span className="text-sm text-gray-300 leading-relaxed">{interest}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>

//               {/* Career Objective */}
//               <div className="space-y-6">
//                 <div className="flex items-center space-x-2 text-indigo-400">
//                   <Lightbulb className="w-5 h-5" />
//                   <h2 className="text-xl font-bold uppercase tracking-wider font-mono">Career Objective</h2>
//                 </div>
//                 <div className="bg-[#0e1424] p-6 rounded-lg border border-indigo-900/30 bg-gradient-to-br from-[#0e1424] to-indigo-950/20">
//                   <p className="text-sm text-gray-300 leading-relaxed mb-6">
//                     To contribute to cutting-edge research and technology by developing intelligent systems, solving challenging engineering problems, and advancing innovations in artificial intelligence, quantum technologies, scientific computing, and interdisciplinary engineering.
//                   </p>
                  
//                   <h4 className="text-xs uppercase tracking-wider font-mono text-indigo-400 mb-3">Attributes & Character</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {qualities.map((item, idx) => (
//                       <span key={idx} className="text-xs bg-gray-900 text-gray-400 px-2 py-1 rounded border border-gray-850">
//                         {item}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </section>

//         {/* Contact section */}
//         <section id="contact" className="py-16 max-w-4xl mx-auto px-4 border-t border-gray-900 text-center">
//           <div className="inline-flex items-center space-x-2 text-indigo-400 mb-4">
//             <Layers className="w-5 h-5" />
//             <h2 className="text-xl font-bold uppercase tracking-wider font-mono">Connect</h2>
//           </div>
//           <p className="text-sm text-gray-400 max-w-md mx-auto mb-6">
//             If you are interested in discussing research, artificial intelligence, quantum computing, or engineering collaboration, feel free to reach out.
//           </p>
//           <div className="flex flex-wrap justify-center gap-4 text-sm font-mono">
//             <span className="px-4 py-2 rounded bg-[#0e1424] border border-gray-850 text-gray-300">
//               Shri Ramdeobaba College of Engineering and Management, Nagpur
//             </span>
//             <a 
//               href="https://github.com" 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className="px-4 py-2 rounded bg-indigo-600/20 border border-indigo-500/30 hover:bg-indigo-600/45 text-indigo-300 transition"
//             >
//               GitHub Profile
//             </a>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-[#080c14] border-t border-gray-900 py-8">
//         <div className="max-w-5xl mx-auto px-4 text-center text-xs text-gray-500 space-y-2">
//           <p>© {new Date().getFullYear()} Taran Wadhawan. All rights reserved.</p>
//           <p className="font-mono">Built with Next.js & Tailwind CSS • Exported for GitHub Pages</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

'use client';

import React, { useState } from 'react';
import { 
  Cpu, 
  Binary, 
  Atom, 
  Activity, 
  Terminal, 
  Search, 
  Lightbulb, 
  GraduationCap, 
  ChevronRight,
  Menu,
  X,
  Code,
  Globe,
  Database,
  Layers,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'ai' | 'science' | 'engineering' | 'creative'>('all');
  const [terminalCommand, setTerminalCommand] = useState('');
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    "System initialized.",
    "User: Taran Wadhawan",
    "Affiliation: Shri Ramdeobaba College of Engineering and Management (CSE AIML)",
    "Ready to explore..."
  ]);

  // Terminal interaction simulation
  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalCommand.trim().toLowerCase();
    let response = "";

    if (cmd === 'help') {
      response = "Available commands: clear, about, skills, research, contact";
    } else if (cmd === 'about') {
      response = "Taran Wadhawan - CSE AIML student. Exploring AI, Quantum Computing, and Advanced Physics.";
    } else if (cmd === 'skills') {
      response = "Core skills: C++, Python, ML, Neural Networks, Mathematical Modeling.";
    } else if (cmd === 'research') {
      response = "Focus areas: AGI, Quantum Information Science, AI for Scientific Discovery.";
    } else if (cmd === 'contact') {
      response = "Location: Nagpur, India. Deployable via GitHub Pages.";
    } else if (cmd === 'clear') {
      setTerminalOutput([]);
      setTerminalCommand('');
      return;
    } else if (cmd !== '') {
      response = `Command not recognized: '${cmd}'. Type 'help' for options.`;
    }

    if (cmd !== '') {
      setTerminalOutput(prev => [...prev, `> ${terminalCommand}`, response]);
    }
    setTerminalCommand('');
  };

  const interestCategories = [
    {
      id: "ai",
      title: "Computer Science & AI",
      icon: <Cpu className="w-5 h-5 text-indigo-400" />,
      items: ["Artificial Intelligence", "Machine Learning & Deep Learning", "Data Science & Analytics", "Software Development", "Algorithms & Data Structures", "Cybersecurity & Ethical Hacking", "Cloud Computing", "Blockchain & Cryptography"]
    },
    {
      id: "science",
      title: "Quantum & Sciences",
      icon: <Atom className="w-5 h-5 text-sky-400" />,
      items: ["Quantum Computing", "Quantum Cryptography", "Computer Architecture", "Operating Systems", "Quantum Mechanics", "Classical Mechanics", "Calculus", "Number Theory", "Probability & Combinatorics"]
    },
    {
      id: "engineering",
      title: "Engineering & Biotech",
      icon: <Activity className="w-5 h-5 text-emerald-400" />,
      items: ["Rocket Science", "Cosmology", "Electrical Engineering", "Robotics", "Drone Technology", "Bioinformatics", "Biomedical Engineering", "Physiology", "Neurology", "Cardiology", "Virology", "Pharmacology"]
    },
    {
      id: "creative",
      title: "Creative & Markets",
      icon: <Sparkles className="w-5 h-5 text-purple-400" />,
      items: ["Unreal Engine", "Unity", "Blender", "Houdini", "Music Composition", "Music Theory", "Financial Markets", "High Frequency Trading", "Forex", "Stock Market Analysis"]
    }
  ];

  const technicalSkills = [
    { category: "Programming", icon: <Code className="w-4 h-4 text-indigo-400" />, skills: ["C++", "Python", "Java (Learning)", "Data Structures & Algorithms", "Object-Oriented Programming"] },
    { category: "AI & Data", icon: <Database className="w-4 h-4 text-sky-400" />, skills: ["Machine Learning", "Deep Learning", "Neural Networks", "Data Analysis", "Data Visualization", "Statistical Modeling"] },
    { category: "Software & Tools", icon: <Layers className="w-4 h-4 text-purple-400" />, skills: ["Git & GitHub", "Blender", "Unreal Engine", "Unity", "Houdini"] },
    { category: "Cybersecurity", icon: <Terminal className="w-4 h-4 text-emerald-400" />, skills: ["Network Security", "Ethical Hacking", "Cryptography", "Security Fundamentals"] },
    { category: "Scientific Computing", icon: <Atom className="w-4 h-4 text-pink-400" />, skills: ["Mathematical Modeling", "Numerical Methods", "Computational Physics"] }
  ];

  const researchInterests = [
    "Artificial General Intelligence (AGI)",
    "Quantum Computing & Information Science",
    "AI for Scientific Discovery",
    "Robotics & Autonomous Systems",
    "High-Performance Computing",
    "Advanced Physics & Aerospace Systems",
    "Computational Biology & Biomedical Technologies"
  ];

  const filteredInterests = activeTab === 'all' 
    ? interestCategories 
    : interestCategories.filter(cat => cat.id === activeTab);

  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 flex flex-col justify-between selection:bg-indigo-500/30 selection:text-indigo-200">
      
      {/* Dynamic Header */}
      <nav className="sticky top-0 z-50 bg-[#030712]/80 backdrop-blur-md border-b border-gray-900 transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-indigo-500 animate-ping absolute"></div>
              <div className="w-3 h-3 rounded-full bg-indigo-500 relative"></div>
              <span className="font-mono text-sm font-bold tracking-wider text-white">TARAN.WADHAWAN</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
              <a href="#about" className="text-gray-400 hover:text-white transition">About</a>
              <a href="#interests" className="text-gray-400 hover:text-white transition">Interests</a>
              <a href="#skills" className="text-gray-400 hover:text-white transition">Skills</a>
              <a href="#research" className="text-gray-400 hover:text-white transition">Research</a>
              <a href="#contact" className="px-4 py-2 rounded-md bg-indigo-600/10 hover:bg-indigo-600/20 border border-indigo-500/20 text-indigo-300 transition-all">Connect</a>
            </div>

            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-400 hover:text-white p-2"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#070b19] border-b border-gray-900 px-4 py-4 space-y-3 text-sm">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-300 hover:text-white">About</a>
            <a href="#interests" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-300 hover:text-white">Interests</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-300 hover:text-white">Skills</a>
            <a href="#research" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-300 hover:text-white">Research</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-indigo-400">Connect</a>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        
        {/* Interactive Hero Grid */}
        <section className="relative py-12 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.05),transparent)] pointer-events-none"></div>
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Title Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-950/40 text-indigo-300 text-xs font-mono border border-indigo-500/20">
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                <span>CSE AIML student</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Taran Wadhawan
              </h1>
              
              <p className="text-md sm:text-lg text-gray-400 leading-relaxed font-mono">
                Shri Ramdeobaba College of Engineering and Management
              </p>
              
              <p className="text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed">
                I am a multidisciplinary technology and science enthusiast passionate about solving complex problems across artificial intelligence, advanced physics, mathematics, and biotechnology.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a href="#interests" className="px-5 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all transform hover:-translate-y-0.5 text-sm flex items-center shadow-lg shadow-indigo-600/10">
                  Explore Specialties <ChevronRight className="w-4 h-4 ml-1" />
                </a>
                <a href="#about" className="px-5 py-3 rounded-lg bg-gray-900 hover:bg-gray-800 border border-gray-800 text-gray-300 font-medium transition-all transform hover:-translate-y-0.5 text-sm">
                  Professional Bio
                </a>
              </div>
            </div>

            {/* Interactive Terminal Column */}
            <div className="lg:col-span-5">
              <div className="w-full rounded-xl bg-[#090d1a] border border-gray-800 shadow-2xl overflow-hidden font-mono text-xs">
                <div className="bg-[#0f152b] px-4 py-3 border-b border-gray-800/80 flex items-center justify-between">
                  <div className="flex space-x-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>
                  <span className="text-gray-500 text-[10px]">taran_shell.sh</span>
                </div>
                
                <div className="p-4 h-64 overflow-y-auto space-y-2 text-gray-300">
                  {terminalOutput.map((out, idx) => (
                    <div key={idx} className={out.startsWith('>') ? "text-indigo-400" : "text-gray-400"}>
                      {out}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleTerminalSubmit} className="border-t border-gray-800/80 bg-[#060a15] px-4 py-2.5 flex items-center">
                  <span className="text-indigo-400 mr-2 font-bold">$</span>
                  <input 
                    type="text" 
                    value={terminalCommand}
                    onChange={(e) => setTerminalCommand(e.target.value)}
                    placeholder="Type 'help', 'skills' or 'about'..."
                    className="bg-transparent border-none outline-none flex-grow text-gray-200 focus:ring-0 placeholder-gray-600"
                  />
                  <button type="submit" className="text-gray-500 hover:text-indigo-400 transition">
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>

          </div>
        </section>

        {/* Dynamic Navigation Cards / About Section */}
        <section id="about" className="py-20 max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Statement */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-2 text-indigo-400">
                <Terminal className="w-5 h-5 animate-pulse" />
                <h2 className="text-sm font-bold uppercase tracking-wider font-mono">About Me</h2>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Bridging analytical engineering with scientific exploration.
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                I am passionate about understanding how systems work—from the smallest quantum particles to large-scale computing infrastructures. I enjoy learning difficult concepts, building technical projects, and researching cutting-edge technologies.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                My goal is to become an expert capable of contributing to advanced research and developing innovative products that combine artificial intelligence, scientific computing, and engineering.
              </p>
            </div>

            {/* Quick Metrics / Sidebar */}
            <div className="glass-panel p-6 rounded-xl space-y-6 transition-all duration-300">
              <div className="flex items-center space-x-2 text-sky-400">
                <GraduationCap className="w-5 h-5" />
                <h3 className="text-xs uppercase font-mono tracking-wider font-bold">Academic Base</h3>
              </div>
              <div>
                <p className="font-bold text-white text-md">Shri Ramdeobaba College of Engineering and Management</p>
                <p className="text-gray-400 text-xs mt-1">Specializing in Computer Science and Engineering (Artificial Intelligence & Machine Learning)</p>
              </div>
              <div className="pt-4 border-t border-gray-800">
                <p className="text-[10px] text-indigo-400 font-mono uppercase tracking-wider mb-2">My Qualities</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Analytical", "Curious", "Research-Oriented", "Logical Solver", "Adaptable"].map((quality, idx) => (
                    <span key={idx} className="text-xs bg-indigo-950/30 text-indigo-300 px-2.5 py-1 rounded-md border border-indigo-500/10">
                      {quality}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Tabbed Interactive Interests Showcase */}
        <section id="interests" className="py-20 bg-[#01040a] border-t border-b border-gray-900">
          <div className="max-w-6xl mx-auto px-4">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <div className="flex items-center space-x-2 text-sky-400 mb-2">
                  <Search className="w-5 h-5" />
                  <h2 className="text-xs font-bold uppercase tracking-wider font-mono">Disciplines</h2>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Areas of Focus</h3>
              </div>
              
              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-1.5 bg-[#090d1a] p-1.5 rounded-lg border border-gray-800 text-xs font-mono">
                {['all', 'ai', 'science', 'engineering', 'creative'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={`px-3 py-1.5 rounded-md transition-all ${
                      activeTab === tab 
                        ? 'bg-indigo-600 text-white shadow-md' 
                        : 'text-gray-400 hover:text-white hover:bg-gray-900/50'
                    }`}
                  >
                    {tab.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-300">
              {filteredInterests.map((category) => (
                <div key={category.id} className="glass-panel p-6 rounded-xl transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 rounded-lg bg-gray-950/80 border border-gray-850">
                      {category.icon}
                    </div>
                    <h4 className="text-md font-bold text-white font-mono">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs font-mono bg-gray-950/60 text-gray-400 px-3 py-1.5 rounded-md border border-gray-850 hover:border-gray-700 hover:text-indigo-300 transition-colors cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Visual Skills Inventory */}
        <section id="skills" className="py-20 max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center space-x-2 text-indigo-400 font-mono text-xs uppercase tracking-wider">
              <Binary className="w-4 h-4 animate-spin-slow" />
              <span>Technical Infrastructure</span>
            </div>
            <h3 className="text-3xl font-extrabold text-white">Skills Directory</h3>
            <p className="text-sm text-gray-400">Technical toolkits, software packages, and scientific methodologies I study and employ.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((section, idx) => (
              <div 
                key={idx} 
                className="glass-panel p-5 rounded-xl transition-all duration-300 bg-gradient-to-br from-[#0c1020] to-[#030712] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-2 border-b border-gray-800 pb-3 mb-4">
                    {section.icon}
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">{section.category}</h4>
                  </div>
                  <ul className="space-y-2.5">
                    {section.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="text-xs text-gray-300 flex items-center">
                        <ChevronRight className="w-3.5 h-3.5 text-indigo-400 mr-2 flex-shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Research Interests & Career Objectives */}
        <section id="research" className="py-20 bg-[#01040a] border-t border-gray-900">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Research Focus */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2 text-sky-400">
                  <Search className="w-5 h-5" />
                  <h2 className="text-xs font-bold uppercase tracking-wider font-mono">Future Horizons</h2>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Research Focus</h3>
                
                <div className="space-y-4">
                  {researchInterests.map((interest, idx) => (
                    <div 
                      key={idx} 
                      className="p-4 rounded-lg bg-[#060a14] border border-gray-800/60 flex items-start hover:border-indigo-500/20 transition-all duration-300 group"
                    >
                      <span className="text-xs font-mono text-indigo-500 mr-3 mt-0.5 group-hover:text-indigo-400 transition-colors">[0{idx + 1}]</span>
                      <p className="text-sm text-gray-300 group-hover:text-white transition-colors">{interest}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Objectives & Call to Action */}
              <div className="space-y-6 lg:pl-6">
                <div className="flex items-center space-x-2 text-indigo-400">
                  <Lightbulb className="w-5 h-5" />
                  <h2 className="text-xs font-bold uppercase tracking-wider font-mono">Career Objective</h2>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Next Milestones</h3>
                
                <div className="glass-panel p-6 rounded-xl bg-gradient-to-br from-[#0c1020] to-transparent space-y-6">
                  <p className="text-sm text-gray-300 leading-relaxed">
                    To contribute to cutting-edge research and technology by developing intelligent systems, solving challenging engineering problems, and advancing innovations in artificial intelligence, quantum technologies, scientific computing, and interdisciplinary engineering.
                  </p>
                  
                  <div className="border-t border-gray-800/80 pt-6">
                    <h4 className="text-xs uppercase tracking-wider font-mono text-indigo-400 mb-3">Continuous Growth Mindset</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Self-Motivated", "Logical Thinker", "Continuous Learner", "Technology Enthusiast", "Detail-Oriented"].map((item, idx) => (
                        <span key={idx} className="text-xs bg-gray-950/60 text-gray-400 px-3 py-1.5 rounded-md border border-gray-850">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Clean Minimalist Contact Panel */}
        <section id="contact" className="py-24 max-w-4xl mx-auto px-4 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 text-indigo-400 font-mono text-xs uppercase tracking-wider">
            <Globe className="w-4 h-4 animate-pulse" />
            <span>Communication Protocol</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Get in Touch</h3>
          <p className="text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
            Interested in discussing artificial intelligence, computational science, quantum engineering, or research opportunities?
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4 text-xs font-mono">
            <span className="px-4 py-2.5 rounded-lg bg-[#060a14] border border-gray-850 text-gray-300">
              Nagpur, Maharashtra, India
            </span>
            <a 
              href="https://github.com/TaranWadhawan" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-5 py-2.5 rounded-lg bg-indigo-600/10 hover:bg-indigo-600/20 border border-indigo-500/20 text-indigo-300 transition-all font-medium"
            >
              GitHub Connection
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-[#01040a] border-t border-gray-900 py-10">
        <div className="max-w-6xl mx-auto px-4 text-center text-xs text-gray-500 space-y-2">
          <p>© {new Date().getFullYear()} Taran Wadhawan. All rights reserved.</p>
          <p className="font-mono">Shri Ramdeobaba College of Engineering and Management • CSE AIML</p>
        </div>
      </footer>
    </div>
  );
}
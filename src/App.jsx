import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Download,
  ExternalLink,
  ChevronRight,
  Award,
  BookOpen,
  Briefcase,
  Layers,
  Cpu,
  User,
  FileText,
  Printer,
  CheckCircle2,
  Zap,
  PenTool,
  MousePointer2,
  Settings,
  Database,
  Scroll,
  Moon,
  Sun,
  X,
  ArrowUp,
  Send,
  MessageSquare
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('summary');
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Resume Data
  const profile = {
    name: "Akhand Pratap Chaurasiya",
    title: "Mechanical Design Engineer",
    location: "Gorakhpur, Uttar Pradesh",
    email: "ap2462872@gmail.com",
    phone: "+91 93609 91887",
    linkedin: "https://www.linkedin.com/in/akhand-pratap-chaurasiya-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    summary: "Mechanical Design Engineer with a specialized focus on combining CAD proficiency with IoT systems. Proven track record in developing smart electromechanical devices, including AI-powered orthopedic solutions and wireless robotics. Seeking to leverage expertise in SolidWorks, Fusion 360, and Embedded C to drive product innovation.",
    education: [
      {
        degree: "B.Tech (Mechanical Engineering)",
        institution: "Rajkiya Engineering College Mainpuri",
        location: "Mainpuri, UP",
        duration: "2022 - 2026",
        details: "Focus: Machine Design, SOM, FEA & CAD Modeling."
      }
    ],
    experience: [
      {
        role: "Mechanical Workshop Intern",
        company: "N.E. Railway",
        location: "Gorakhpur, U.P.",
        duration: "Jun 2025 - Jul 2025",
        desc: [
          "Executed precise machining operations (Lathe, Drilling, Grinding) for rolling stock components.",
          "Analyzed manufacturing tolerances and adhered to strict Indian Railways safety protocols.",
          "Collaborated with senior engineers on maintenance schedules for mechanical sub-assemblies."
        ]
      },
      {
        role: "Space Science & Technology Trainee",
        company: "ISRO (IIRS) - Online",
        location: "Remote",
        duration: "Jan 2025",
        desc: [
          "Certified in Space Technology Awareness; studied satellite system architecture and payload integration.",
          "Analyzed remote sensing data applications for engineering infrastructure development."
        ]
      }
    ],
    trainings: [
      {
        title: "Entrepreneurship & Skill Development (SolidWorks)",
        issuer: "Ministry of MSME, Govt. of India",
        date: "Dec 2024 - Feb 2025",
        desc: "Completed rigorous E-SDP training focused on advanced SolidWorks CAD modeling and industrial design principles."
      },
      {
        title: "Industrial Training on Internet of Things (IoT)",
        issuer: "A.R.S. Technologies / REC Mainpuri",
        date: "Dec 2024",
        desc: "One-week intensive workshop on IoT architecture, sensor integration, and real-time data monitoring."
      },
      {
        title: "Arduino Training Certification",
        issuer: "Spoken Tutorial, IIT Bombay",
        date: "Oct 2024",
        desc: "Successfully passed the certification exam for Embedded Systems and Microcontroller programming."
      }
    ],
    projects: [
      {
        id: "PRJ-01",
        title: "CastiCare: An AI-Powered Orthopedic Cast Healing Ecosystem",
        tech: ["IoT", "ESP32", "SolidWorks", "3D Printing"],
        date: "Nov 2025",
        impact: "Designed a system for real-time infection monitoring, aimed at early identification of risks and potential reduction in complications.",
        desc: "Designed a multi-modal smart cast with integrated pressure and temperature sensors to detect Acute Compartment Syndrome (ACS). Developed a React-based clinician dashboard for real-time patient data visualization.",
        link: "#",
        type: "Medical Device",
        blueprintDetails: "Integrated strain gauge array mapped to 3D printed Voronoi lattice structure. Microcontroller housed in IP54 rated casing."
      },
      {
        id: "PRJ-02",
        title: "Wi-Fi Controlled Robot",
        tech: ["NodeMCU", "Arduino", "Embedded C", "Robotics"],
        date: "Jan 2025",
        impact: "Achieved <50ms latency in remote control maneuvers via optimized Wi-Fi protocols.",
        desc: "Engineered a wireless robotic vehicle utilizing L298N motor drivers and NodeMCU (ESP8266). Implemented a custom web interface for low-latency directional control and telemetry.",
        link: "#",
        type: "Robotics",
        blueprintDetails: "Dual H-Bridge Driver configuration with independent PWM channels. Custom PCB layout for minimized interference."
      }
    ],
    skills: {
      technical: [
        { name: "SolidWorks", level: 90 },
        { name: "Fusion 360", level: 85 },
        { name: "AutoCAD", level: 80 },
        { name: "ANSYS (FEA)", level: 70 },
        { name: "Rapid Prototyping", level: 85 }
      ],
      programming: [
        { name: "Python", level: 75 },
        { name: "C / Embedded C", level: 80 },
        { name: "HTML/CSS", level: 70 },
        { name: "React.js", level: 60 }
      ],
      hardware: [
        { name: "Arduino/ESP32", level: 90 },
        { name: "IoT Sensors", level: 85 },
        { name: "PCB Design", level: 65 },
        { name: "3D Printing", level: 85 }
      ]
    },
    publications: [
      {
        title: "CastiCare: An AI-Powered Orthopedic Cast Healing Ecosystem",
        conference: "IC4M 2025",
        publisher: "CRC Press (Taylor & Francis Group)",
        status: "Accepted"
      }
    ]
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrint = () => {
    window.print();
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // --- Visual Components ---

  const BlueprintGrid = () => (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden print:hidden">
      {/* Major Grid */}
      <div className="absolute inset-0" style={{
        backgroundImage: darkMode
          ? 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)'
          : 'linear-gradient(rgba(30, 58, 138, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 58, 138, 0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>
      {/* Minor Grid */}
      <div className="absolute inset-0" style={{
        backgroundImage: darkMode
          ? 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)'
          : 'linear-gradient(rgba(30, 58, 138, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 58, 138, 0.02) 1px, transparent 1px)',
        backgroundSize: '10px 10px'
      }}></div>
    </div>
  );

  const SectionTitle = ({ title, icon: Icon }) => (
    <div className="flex items-center gap-4 mb-8 group">
      <div className={`p-2.5 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} border shadow-sm rounded-lg group-hover:scale-105 transition-transform duration-300 print:border-none print:shadow-none`}>
        <Icon size={22} className={`${darkMode ? 'text-blue-400' : 'text-blue-900'}`} />
      </div>
      <div>
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'} uppercase tracking-tight font-display`}>{title}</h2>
        <div className="h-0.5 w-12 bg-blue-600 mt-1 group-hover:w-full transition-all duration-500 ease-out print:hidden"></div>
      </div>
    </div>
  );

  const Modal = ({ project, onClose }) => {
    if (!project) return null;
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
        <div className="bg-slate-900 border border-blue-500/30 w-full max-w-2xl rounded-lg shadow-2xl relative overflow-hidden chamfer-lg">
          <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
          <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors">
            <X size={24} />
          </button>

          <div className="p-8">
            <div className="flex items-center gap-2 text-blue-400 font-mono text-xs mb-2">
              <Settings size={14} className="animate-spin-slow" />
              BLUEPRINT VIEW: {project.id}
            </div>
            <h2 className="text-2xl font-display font-bold text-white mb-4">{project.title}</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 bg-slate-950/50 rounded border border-slate-800">
                <h4 className="text-slate-400 text-xs uppercase tracking-wider mb-2">Technical Specs</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{project.blueprintDetails}</p>
              </div>
              <div className="p-4 bg-slate-950/50 rounded border border-slate-800">
                <h4 className="text-slate-400 text-xs uppercase tracking-wider mb-2">Impact Analysis</h4>
                <p className="text-green-400 text-sm font-medium">{project.impact}</p>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <button onClick={onClose} className="px-4 py-2 text-slate-400 hover:text-white text-sm">Close View</button>
              <a href={project.link} className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-sm flex items-center gap-2 transition-colors">
                FULL DOCUMENTATION <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Blueprint Grid Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 to-transparent"></div>
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 ${darkMode ? 'bg-slate-950 text-slate-300' : 'bg-slate-50 text-slate-600'} print:bg-white print:text-slate-900`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Oswald:wght@400;500;600&display=swap');
        
        body { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        .font-display { font-family: 'Oswald', sans-serif; }
        .chamfer-lg { clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px); }
        .chamfer-sm { clip-path: polygon(5px 0, 100% 0, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%, 0 5px); }
        
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 10s linear infinite; }

        @media print {
          @page { margin: 0.5cm; }
          .no-print { display: none !important; }
          .chamfer-lg, .chamfer-sm { clip-path: none; border-radius: 4px; }
        }
      `}</style>

      {/* --- FLOATING ELEMENTS --- */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-3 bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all rounded-full print:hidden animate-bounce"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {selectedProject && <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />}

      {/* --- NAV BAR --- */}
      <nav className={`sticky top-0 z-40 transition-all duration-300 border-b no-print ${scrolled ? (darkMode ? 'bg-slate-950/90 border-slate-800' : 'bg-white/90 border-slate-200') : 'bg-transparent border-transparent'} backdrop-blur-md`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className={`p-1.5 chamfer-sm font-display font-bold text-lg tracking-widest border-2 ${darkMode ? 'bg-white text-slate-950 border-white' : 'bg-slate-900 text-white border-slate-900'}`}>
              APC
            </div>
            <div className="hidden sm:block leading-tight">
              <div className={`font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>CHAURASIYA</div>
              <div className="text-[10px] font-mono text-blue-500 uppercase tracking-widest">Design Engineer</div>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <button onClick={toggleTheme} className={`p-2 rounded-full transition-colors ${darkMode ? 'text-yellow-400 hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-100'}`}>
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={handlePrint}
              className={`hidden md:flex items-center gap-2 px-4 py-2 border hover:text-blue-500 transition-colors text-sm font-medium chamfer-sm group 
  ${darkMode ? 'border-slate-700 text-slate-300' : 'border-slate-300 text-slate-700'}`}
            >
              <Printer size={16} />
              <span className="group-hover:translate-x-0.5 transition-transform">
                Print
              </span>
            </button>

            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 bg-blue-800 hover:bg-blue-300 text-white
  px-9 py-2 shadow-lg shadow-blue-600/20 text-sm font-bold tracking-wide
  transition-all hover:-translate-y-0.5 chamfer-sm relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></span>
              <Download size={16} />
              <span>HIRE ME</span>
            </a>


          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 print:p-0">
        <BlueprintGrid />

        {/* --- HERO SECTION --- */}
        <section className="relative mb-12 print:mb-6">
          <div className={`${darkMode ? 'bg-slate-900 border-slate-700 shadow-slate-900' : 'bg-white border-slate-100 shadow-slate-200/50'} border-2 shadow-xl p-8 md:p-12 relative overflow-hidden chamfer-lg print:border-none print:shadow-none print:p-0 transition-colors duration-500`}>

            <div className={`absolute top-0 right-0 w-32 h-32 border-t-[20px] border-r-[20px] opacity-50 chamfer-lg print:hidden ${darkMode ? 'border-slate-800' : 'border-slate-50'}`}></div>
            <div className={`absolute bottom-6 right-12 text-[120px] font-display font-bold -z-10 select-none print:hidden ${darkMode ? 'text-slate-800' : 'text-slate-100'}`}>ENG</div>

            <div className="grid md:grid-cols-3 gap-8 items-center relative z-10">
              <div className="md:col-span-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 text-green-600 border border-green-500/20 text-xs font-bold uppercase tracking-wider mb-4 rounded-sm print:hidden">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Open to Work
                </div>

                <h1 className={`text-4xl md:text-6xl font-display font-bold mb-2 uppercase tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Akhand Pratap <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Chaurasiya</span>
                </h1>
                <p className={`text-xl font-medium mb-6 max-w-lg ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  <span className={`${darkMode ? 'text-white' : 'text-slate-900'} font-semibold`}>Mechanical Design Engineer</span> specializing in IoT Integration, CAD Modeling & Product Development.
                </p>

                <div className="flex flex-wrap gap-4 text-sm font-medium">
                  <a href={`mailto:${profile.email}`} className={`flex items-center gap-2 hover:text-blue-500 transition-colors px-3 py-2 rounded-sm border ${darkMode ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-600'} print:bg-transparent print:border-none print:p-0`}>
                    <Mail size={16} className="text-blue-500" /> {profile.email}
                  </a>
                  <a href={`https://wa.me/919360991887`} target="_blank" rel="noreferrer" className={`flex items-center gap-2 hover:text-blue-500 transition-colors px-3 py-2 rounded-sm border ${darkMode ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-600'} print:bg-transparent print:border-none print:p-0`}>
                    <Phone size={16} className="text-blue-500" /> {profile.phone}
                  </a>
                  <div className={`flex items-center gap-2 px-3 py-2 rounded-sm border ${darkMode ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-600'} print:bg-transparent print:border-none print:p-0`}>
                    <MapPin size={16} className="text-blue-500" /> {profile.location}
                  </div>
                </div>
              </div>

              {/* Stats / Quick Glance - FRESHER ORIENTED */}
              <div className="md:col-span-1 print:hidden">
                <div className={`${darkMode ? 'bg-slate-800' : 'bg-slate-900'} text-white p-6 chamfer-sm relative overflow-hidden group shadow-lg`}>
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Settings size={64} className="animate-[spin_10s_linear_infinite]" />
                  </div>
                  <h3 className="text-slate-400 text-xs font-mono uppercase tracking-widest mb-4">Candidate Highlights</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-3xl font-display font-bold text-blue-400">5+</div>
                      <div className="text-xs text-slate-400">Internships & Trainings</div>
                    </div>
                    <div>
                      <div className="text-3xl font-display font-bold text-orange-400">1</div>
                      <div className="text-xs text-slate-400">Research Publication</div>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-slate-700 flex gap-3">
                    <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid md:grid-cols-12 gap-8 print:block">

          {/* --- LEFT COLUMN --- */}
          <div className="md:col-span-4 space-y-8 print:w-full print:mb-8">

            <section className={`${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'} p-6 border shadow-sm chamfer-sm print:border-none print:shadow-none print:p-0 transition-colors`}>
              <div className="flex items-center gap-3 mb-6">
                <Cpu size={20} className="text-blue-600" />
                <h3 className={`font-display font-bold text-lg ${darkMode ? 'text-white' : 'text-slate-800'} uppercase`}>Technical Arsenal</h3>
              </div>

              <div className="space-y-6">
                {[
                  { cat: "Design & CAD", items: profile.skills.technical, color: "bg-blue-500" },
                  { cat: "Software & Web", items: profile.skills.programming, color: "bg-emerald-500" },
                  { cat: "IoT & Hardware", items: profile.skills.hardware, color: "bg-orange-500" }
                ].map((category, idx) => (
                  <div key={idx}>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">{category.cat}</h4>
                    <div className="space-y-3">
                      {category.items.map(skill => (
                        <div key={skill.name}>
                          <div className="flex justify-between text-xs mb-1">
                            <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{skill.name}</span>
                          </div>
                          <div className={`h-1.5 w-full ${darkMode ? 'bg-slate-800' : 'bg-slate-100'} rounded-full overflow-hidden`}>
                            <div className={`h-full ${category.color} rounded-full`} style={{ width: `${skill.level}%` }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className={`${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'} p-6 border shadow-sm chamfer-sm print:border-none print:shadow-none print:p-0 transition-colors`}>
              <div className="flex items-center gap-3 mb-6">
                <BookOpen size={20} className="text-blue-600" />
                <h3 className={`font-display font-bold text-lg ${darkMode ? 'text-white' : 'text-slate-800'} uppercase`}>Education</h3>
              </div>
              {profile.education.map((edu, index) => (
                <div key={index} className={`relative pl-4 border-l-2 ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}>
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 bg-blue-600 rounded-full"></div>
                  <h4 className={`font-bold leading-tight ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>{edu.degree}</h4>
                  <p className="text-sm text-blue-500 font-medium mt-1">{edu.institution}</p>
                  <p className="text-xs font-mono text-slate-500 mt-1">{edu.duration} • {edu.location}</p>
                </div>
              ))}
            </section>

            <section className={`${darkMode ? 'bg-slate-800' : 'bg-slate-900'} p-6 text-white chamfer-sm print:hidden shadow-md`}>
              <div className="flex items-center gap-3 mb-4">
                <Award size={20} className="text-orange-400" />
                <h3 className="font-display font-bold text-lg uppercase">Publications</h3>
              </div>
              {profile.publications.map((pub, idx) => (
                <div key={idx} className="text-sm">
                  <p className="font-medium leading-relaxed mb-2">"{pub.title}"</p>
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                    <span>IC4M 2025</span>
                    <span>•</span>
                    <span className="text-green-400">{pub.status}</span>
                  </div>
                </div>
              ))}
            </section>
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="md:col-span-8 space-y-10 print:w-full">

            <section id="experience">
              <SectionTitle title="Professional Trajectory" icon={Briefcase} />

              <div className="space-y-8">
                {profile.experience.map((exp, index) => (
                  <div key={index} className="relative group">
                    <div className={`absolute left-0 top-0 bottom-0 w-px ${darkMode ? 'bg-slate-800 group-hover:bg-blue-800' : 'bg-slate-200 group-hover:bg-blue-200'} transition-colors print:hidden`}></div>

                    <div className="pl-6 md:pl-8">
                      <div className="absolute left-[-6px] top-0 w-3 h-3 bg-blue-600 border-2 border-white rounded-full group-hover:scale-125 transition-transform print:hidden shadow-sm"></div>

                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                        <div>
                          <h3 className={`text-xl font-bold ${darkMode ? 'text-white group-hover:text-blue-400' : 'text-slate-900 group-hover:text-blue-700'} transition-colors`}>{exp.role}</h3>
                          <div className="text-blue-500 font-medium flex items-center gap-2">
                            {exp.company}
                          </div>
                        </div>
                        <span className={`text-xs font-mono ${darkMode ? 'text-slate-400 bg-slate-800 border-slate-700' : 'text-slate-500 bg-slate-100 border-slate-200'} px-2 py-1 rounded mt-2 sm:mt-0 self-start border`}>
                          {exp.duration}
                        </span>
                      </div>

                      <ul className="space-y-2 mt-4">
                        {exp.desc.map((item, i) => (
                          <li key={i} className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'} flex items-start gap-3`}>
                            <ChevronRight size={14} className="mt-1 text-slate-500 shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="trainings" className="print:break-inside-avoid">
              <SectionTitle title="Certifications & Technical Training" icon={Scroll} />

              <div className="grid md:grid-cols-2 gap-4">
                {profile.trainings.map((train, index) => (
                  <div key={index} className={`${darkMode ? 'bg-slate-900 border-slate-700 hover:bg-slate-800' : 'bg-slate-50 border-slate-200 hover:bg-white'} border p-5 rounded hover:border-blue-400 hover:shadow-md transition-all group chamfer-sm`}>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-mono text-blue-600 bg-blue-500/10 px-2 py-0.5 rounded uppercase tracking-wide">
                        {train.date}
                      </span>
                    </div>
                    <h3 className={`font-bold leading-snug ${darkMode ? 'text-slate-200 group-hover:text-blue-400' : 'text-slate-800 group-hover:text-blue-700'} transition-colors mb-1`}>
                      {train.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">
                      {train.issuer}
                    </p>
                    <p className={`text-xs leading-relaxed border-t pt-2 ${darkMode ? 'text-slate-400 border-slate-800' : 'text-slate-600 border-slate-200'}`}>
                      {train.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section id="projects" className="print:break-inside-avoid">
              <SectionTitle title="Engineering Projects" icon={Layers} />

              <div className="grid gap-6">
                {profile.projects.map((project, index) => (
                  <div key={index} className={`${darkMode ? 'bg-slate-900 border-slate-700 hover:border-blue-500' : 'bg-white border-slate-200 hover:border-blue-400'} border p-6 hover:shadow-lg transition-all duration-300 group chamfer-sm print:border-slate-300 print:shadow-none print:break-inside-avoid`}>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-[10px] font-mono font-bold ${darkMode ? 'text-slate-500 border-slate-700' : 'text-slate-400 border-slate-200'} border px-1.5 py-0.5 rounded uppercase tracking-wider`}>
                            {project.id}
                          </span>
                          <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider bg-blue-500/10 px-2 py-0.5 rounded">
                            {project.type}
                          </span>
                        </div>
                        <h3 className={`text-xl font-bold ${darkMode ? 'text-white group-hover:text-blue-400' : 'text-slate-900 group-hover:text-blue-700'} transition-colors`}>
                          {project.title}
                        </h3>
                      </div>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className={`text-xs font-bold flex items-center gap-1 ${darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-400 hover:text-blue-600'} transition-colors print:hidden`}
                      >
                        <Settings size={14} /> SPECS
                      </button>
                    </div>

                    <div className={`${darkMode ? 'bg-slate-950 border-blue-900' : 'bg-slate-50 border-blue-200'} border-l-4 p-4 mb-5 print:bg-white print:border-slate-700`}>
                      <div className="flex items-start gap-3">
                        <Zap size={18} className="text-blue-500 mt-0.5 shrink-0 print:text-slate-900" />
                        <div>
                          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Key Engineering Outcome</span>
                          <p className={`text-sm font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-800'} leading-snug`}>
                            {project.impact}
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className={`${darkMode ? 'text-slate-400' : 'text-slate-600'} text-sm leading-relaxed mb-6`}>
                      {project.desc}
                    </p>

                    <div className={`flex items-center justify-between pt-4 border-t ${darkMode ? 'border-slate-800' : 'border-slate-100'}`}>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map(t => (
                          <span key={t} className={`text-xs font-mono ${darkMode ? 'text-slate-500' : 'text-slate-500'} cursor-default`}>
                            {t}
                          </span>
                        ))}
                      </div>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-blue-600 text-xs font-bold flex items-center gap-1 hover:underline print:hidden"
                      >
                        VIEW SCHEMATICS <ChevronRight size={12} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* --- REDESIGNED FOOTER --- */}
      <footer className={`${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-900 border-slate-800'} text-slate-300 py-12 mt-12 print:hidden border-t`}>
        <div className="max-w-4xl mx-auto px-6 text-center">

          <div className="inline-block p-1.5 mb-6 chamfer-sm font-display font-bold text-xl tracking-widest border-2 bg-white text-slate-950 border-white">
            APC
          </div>

          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 uppercase tracking-wide">
            Ready to Engineer the Future?
          </h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Currently seeking full-time opportunities in Mechanical Design and Product Development, with a strong focus on innovation and quality engineering.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 bg-slate-800 text-white px-6 py-3 rounded-sm font-bold transition-all hover:-translate-y-1 w-full sm:w-auto justify-center">
              <Mail size={18} /> Send Email
            </a>
            <a href={`https://wa.me/919360991887`} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-slate-800 hover:bg-green-600 text-white px-6 py-3 rounded-sm font-bold transition-all hover:-translate-y-1 w-full sm:w-auto justify-center border border-slate-700">
              <MessageSquare size={18} /> WhatsApp
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-slate-800 hover:bg-blue-800 text-white px-6 py-3 rounded-sm font-bold transition-all hover:-translate-y-1 w-full sm:w-auto justify-center border border-slate-700">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-mono">
            <div>
              &copy; 2026 Akhand Pratap Chaurasiya. All rights reserved.
            </div>
            <div className="mt-2 md:mt-0 flex gap-4">
              <span>Mechanical Design</span>
              <span>•</span>
              <span>IoT Systems</span>
              <span>•</span>
              <span>Prototyping</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
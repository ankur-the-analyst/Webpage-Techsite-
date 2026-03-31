import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Treemap
} from 'recharts';
import { 
  Terminal, LayoutDashboard, BarChart2, Layers, Briefcase, 
  Linkedin, Mail, Phone, ChevronRight, Play, Cpu, Database,
  Code, Layout, Zap, Activity, MessageSquare, Link, Smartphone, Send, Columns,
  GraduationCap, Award
} from 'lucide-react';
import { motion } from 'motion/react';

// --- Data ---
const techSkillsData = [
  { subject: 'JIRA', A: 90, fullMark: 100 },
  { subject: 'Azure DevOps', A: 85, fullMark: 100 },
  { subject: 'Figma (Prototyping)', A: 85, fullMark: 100 },
  { subject: 'Salesforce (Admin)', A: 75, fullMark: 100 },
  { subject: 'Power BI', A: 85, fullMark: 100 },
  { subject: 'Tableau', A: 80, fullMark: 100 },
  { subject: 'SOQL', A: 80, fullMark: 100 },
  { subject: 'Advanced Excel', A: 95, fullMark: 100 },
  { subject: 'Vibe-Coding', A: 90, fullMark: 100 },
  { subject: 'Make.com', A: 85, fullMark: 100 },
];

const coreCompetenciesData = [
  { name: 'Documentation – PRD, FRD', size: 25 },
  { name: 'Requirement Gathering', size: 22 },
  { name: 'Product Management', size: 20 },
  { name: 'Agile/Scrum', size: 18 },
  { name: 'Gap Analysis', size: 15 },
  { name: 'User Stories', size: 15 },
  { name: 'Process Mapping', size: 12 },
  { name: 'UAT', size: 12 },
  { name: 'Data Integration', size: 10 },
];

const COLORS = ['#ffffff', '#f4f4f5', '#e4e4e7', '#d4d4d8', '#a1a1aa', '#71717a', '#52525b', '#3f3f46', '#27272a'];

const TreemapCustomContent = (props: any) => {
  const { root, depth, x, y, width, height, index, payload, colors, rank, name } = props;
  
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: `var(--color-cyber-accent)`,
          fillOpacity: 0.1 + (index / 10),
          stroke: 'var(--color-cyber-bg)',
          strokeWidth: 2,
        }}
      />
      {width > 30 && height > 20 && (
        <foreignObject x={x} y={y} width={width} height={height}>
          <div 
            style={{ 
              width: '100%', 
              height: '100%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              padding: '6px',
              boxSizing: 'border-box'
            }}
          >
            <span 
              style={{ 
                color: 'var(--color-cyber-text)',
                fontSize: width > 70 ? '10px' : '8px',
                fontFamily: 'var(--font-mono)',
                textAlign: 'center',
                lineHeight: '1.3',
                display: '-webkit-box',
                WebkitLineClamp: 4,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              {name}
            </span>
          </div>
        </foreignObject>
      )}
    </g>
  );
};

const experienceData = [
  {
    id: 1,
    company: 'Effred Technologies',
    role: 'Project Manager',
    focus: 'PRDs, Agile sprints, MVP prototyping, BRDs/FRDs',
    status: 'Active Sprint',
    startMonth: 'Sep',
    startYear: 2025,
    endMonth: 'Present',
    endYear: 2026,
    progress: 100,
  },
  {
    id: 2,
    company: 'G.L. Bajaj Institute of Management & Research',
    role: 'Trainer - Data Analytics',
    focus: 'Excel, AI for Managers, Power BI, workshops',
    status: 'Active Sprint',
    startMonth: 'Jun',
    startYear: 2024,
    endMonth: 'Present',
    endYear: 2026,
    progress: 100,
  },
  {
    id: 3,
    company: 'E-Solutions International (Contract)',
    role: 'Software Project Manager (Contract)',
    focus: 'Scrum calls, timeline management, Agile with Azure DevOps',
    status: 'Deployed',
    startMonth: 'Aug',
    startYear: 2024,
    endMonth: 'Oct',
    endYear: 2024,
    progress: 100,
  },
  {
    id: 4,
    company: 'PcsInfinity',
    role: 'Business Analyst Trainee',
    focus: 'APAC client engagements, requirements gathering, user stories',
    status: 'Deployed',
    startMonth: 'Mar',
    startYear: 2024,
    endMonth: 'Jun',
    endYear: 2024,
    progress: 100,
  },
  {
    id: 5,
    company: '360 Degree Cloud (Contract)',
    role: 'Consultant',
    focus: 'Salesforce org admin, data cleaning, ETL, automated workflows',
    status: 'Archived',
    startMonth: 'Aug',
    startYear: 2023,
    endMonth: 'Nov',
    endYear: 2023,
    progress: 100,
  },
  {
    id: 6,
    company: 'Antahin Abha',
    role: 'Junior Business Analyst',
    focus: 'Interactive dashboards, data collection workflows, data-driven analysis',
    status: 'Archived',
    startMonth: 'Feb',
    startYear: 2023,
    endMonth: 'Aug',
    endYear: 2023,
    progress: 100,
  },
  {
    id: 7,
    company: 'GrowthPal',
    role: 'Data Analyst Intern',
    focus: 'Data sources integration, data cleaning, client mandates',
    status: 'Archived',
    startMonth: 'Aug',
    startYear: 2022,
    endMonth: 'Jan',
    endYear: 2023,
    progress: 100,
  }
];

const projectsData = [
  {
    name: 'HRMS',
    icon: LayoutDashboard,
    tags: ['BRD', 'PRD', 'FIGMA FLOWS', 'PLC'],
    graphicType: 'dashboard'
  },
  {
    name: 'Setu',
    icon: Columns,
    tags: ['PROJECT MGMT', 'APIS', 'SUPABASE'],
    graphicType: 'kanban'
  },
  {
    name: 'DeepSync',
    icon: MessageSquare,
    tags: ['PRD', 'CLIENT MGMT', 'TEAM MGMT'],
    graphicType: 'chat'
  },
  {
    name: 'CRM Integrations',
    icon: Link,
    tags: ['SALESFORCE', 'APOLLO', 'BI'],
    graphicType: 'pipeline'
  },
  {
    name: 'PayNGo',
    icon: Smartphone,
    tags: ['AZURE DEVOPS', 'SCRUM'],
    graphicType: 'mobile'
  },
  {
    name: 'Campaign Auto',
    icon: Send,
    tags: ['BREVO', 'SENDGRID'],
    graphicType: 'flowchart'
  }
];

// --- Components ---

const Sidebar = ({ activeTab, setActiveTab }: { 
  activeTab: string, 
  setActiveTab: (t: string) => void
}) => {
  const navItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'analytics', label: 'Analytics & Skills', icon: BarChart2 },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'architecture', label: 'Product Architecture', icon: Layers },
    { id: 'ai-mockup', label: 'Live Build Mockup', icon: Terminal },
  ];

  return (
    <div className="w-full md:w-64 glass-panel border-b md:border-b-0 md:border-r border-cyber-border flex flex-col shrink-0 z-20 md:sticky md:top-0 md:h-screen">
      <div className="p-4 md:p-5 border-b border-cyber-border flex flex-row md:flex-col items-center md:items-center justify-between md:justify-start shrink-0">
        <div className="flex items-center space-x-4 md:space-x-0 md:flex-col">
          <div className="w-12 h-12 md:w-24 md:h-24 rounded-full bg-cyber-panel border-2 border-cyber-accent flex items-center justify-center md:mb-4 overflow-hidden relative group shrink-0">
            <div className="absolute inset-0 bg-cyber-accent/20 group-hover:bg-cyber-accent/40 transition-colors z-10"></div>
            <img src="https://raw.githubusercontent.com/ankur-the-analyst/Webpage-Techsite-/main/pic.jpeg" alt="Ankur Madan" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div>
            <h1 className="text-base md:text-lg font-bold text-cyber-text md:text-center tracking-tight">Ankur Madan</h1>
            <p className="text-[10px] md:text-xs font-mono text-cyber-accent mt-0.5 md:mt-1 uppercase tracking-wider">Product Manager</p>
          </div>
        </div>
        <div className="hidden md:block">
          <p className="text-xs font-mono text-cyber-muted mt-1 text-center">Delhi, India</p>
        </div>
      </div>

      <div className="flex-1 py-2 md:py-6 overflow-y-auto overflow-x-auto md:overflow-x-hidden">
        <nav className="flex md:flex-col space-x-2 md:space-x-0 md:space-y-1 px-3 min-w-max md:min-w-0 pb-2 md:pb-0">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center space-x-2 md:space-x-3 px-3 md:px-4 py-2 md:py-3 rounded-md transition-all duration-200 whitespace-nowrap ${
                activeTab === item.id 
                  ? 'bg-cyber-accent/10 text-cyber-accent' 
                  : 'text-cyber-muted hover:bg-cyber-panel hover:text-cyber-text'
              }`}
            >
              <item.icon size={16} className={activeTab === item.id ? 'text-cyber-accent' : ''} />
              <span className="text-xs md:text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="hidden md:block p-6 border-t border-cyber-border space-y-4">
        <a href="mailto:talkwithankurmadan@gmail.com" className="flex items-center space-x-3 text-cyber-muted hover:text-cyber-accent transition-colors text-xs font-mono">
          <Mail size={14} className="shrink-0" />
          <span className="truncate">talkwithankurmadan@gmail.com</span>
        </a>
        <a href="tel:+919711445542" className="flex items-center space-x-3 text-cyber-muted hover:text-cyber-accent transition-colors text-xs font-mono">
          <Phone size={14} className="shrink-0" />
          <span>+91-9711445542</span>
        </a>
        <a href="https://linkedin.com/in/ankur-madan" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-cyber-muted hover:text-cyber-accent transition-colors text-xs font-mono">
          <Linkedin size={14} className="shrink-0" />
          <span className="truncate">linkedin.com/in/ankur-madan</span>
        </a>
      </div>
    </div>
  );
};

const KPICard = ({ title, value, icon: Icon, delay }: { title: string, value: string, icon: any, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="glass-panel py-3 px-3 md:py-4 md:px-5 rounded-lg flex items-center space-x-3 md:space-x-4 hover:border-cyber-accent/50 transition-colors group"
  >
    <div className="p-2 md:p-3 bg-cyber-panel rounded-md text-cyber-accent group-hover:glow-accent transition-all">
      <Icon className="w-4 h-4 md:w-5 md:h-5" />
    </div>
    <div>
      <p className="text-[9px] md:text-[10px] text-cyber-muted font-medium uppercase tracking-wider">{title}</p>
      <p className="text-lg md:text-2xl font-mono font-bold text-cyber-text mt-0.5">{value}</p>
    </div>
  </motion.div>
);

const SectionTitle = ({ title, icon: Icon }: { title: string, icon: any }) => (
  <div className="flex items-center space-x-2 mb-4 border-b border-cyber-border pb-1.5">
    <Icon size={18} className="text-cyber-accent" />
    <h2 className="text-base font-bold tracking-tight text-cyber-text uppercase">{title}</h2>
  </div>
);

const OverviewWidget = () => (
  <motion.div 
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
    className="col-span-1 lg:col-span-2 h-full flex flex-col gap-4 md:gap-6"
  >
    {/* Summary Box */}
    <div className="glass-panel p-5 md:p-6 rounded-xl flex-shrink-0 max-h-[40%] flex flex-col">
      <SectionTitle title="Professional Summary" icon={Activity} />
      <div className="space-y-3 text-sm leading-relaxed text-cyber-muted overflow-y-auto custom-scrollbar pr-2">
        <p>
          <span className="text-cyber-accent font-mono">{'>'}</span> Versatile Product Manager and Business Intelligence professional with over 3 years of collective experience driving product lifecycles, optimizing processes, and leading cross-functional teams.
        </p>
        <p>
          <span className="text-cyber-accent font-mono">{'>'}</span> Proven track record in building comprehensive PRDs, managing Agile sprints on Jira, and designing high-fidelity MVPs.
        </p>
        <p>
          <span className="text-cyber-accent font-mono">{'>'}</span> Seeking to leverage expertise in product strategy, requirement gathering (BRD/FRD), and data-driven decision-making to deliver impactful solutions.
        </p>
      </div>
    </div>
    
    {/* Education & Certifications Container */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 min-h-0">
      {/* Education Box */}
      <div className="glass-panel p-4 md:p-5 rounded-xl flex flex-col min-h-0">
        <SectionTitle title="Education" icon={GraduationCap} />
        <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
          <ul className="space-y-2.5 text-xs text-cyber-text">
            <li className="flex flex-col">
              <div className="flex justify-between items-start">
                <span className="font-bold text-sm">MBA in Business Analytics</span>
                <span className="font-mono text-cyber-muted text-[10px] shrink-0 ml-2">CGPA: 8.21</span>
              </div>
              <span className="text-[11px] text-cyber-muted mt-0.5">Dr. APJ Abdul Kalam Tech. Univ.</span>
            </li>
            <li className="flex flex-col">
              <div className="flex justify-between items-start">
                <span className="font-bold text-sm">Bachelor of Commerce</span>
                <span className="font-mono text-cyber-muted text-[10px] shrink-0 ml-2">CGPA: 8.33</span>
              </div>
              <span className="text-[11px] text-cyber-muted mt-0.5">University of Delhi</span>
            </li>
            <li className="flex flex-col">
              <div className="flex justify-between items-start">
                <span className="font-bold text-sm">Class XII</span>
                <span className="font-mono text-cyber-muted text-[10px] shrink-0 ml-2">84.6%</span>
              </div>
              <span className="text-[11px] text-cyber-muted mt-0.5">CBSE Board</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Certifications Box */}
      <div className="glass-panel p-4 md:p-5 rounded-xl flex flex-col min-h-0">
        <SectionTitle title="Certifications" icon={Award} />
        <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
          <ul className="space-y-1.5 text-[11px] text-cyber-text flex flex-wrap gap-1.5">
            {[
              'Atlassian Agile Project Management Professional Certificate (Atlassian)', 
              'Aha! Product Management Professional Certificate (Aha!)', 
              'PMP (Infosys Springboard)', 
              'Lean Six Sigma Yellow Belt', 
              'Business Analytics (Excel)',
              'BI Fundamentals (Simplilearn)',
              'Excel Crash Course (CFI)'
            ].map(cert => (
              <li key={cert} className="bg-cyber-bg px-2 py-1.5 rounded-md text-[10px] border border-cyber-border leading-tight hover:border-cyber-accent/50 transition-colors">{cert}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </motion.div>
);

const AnalyticsWidget = () => {
  const [step, setStep] = useState(0); // 0: idle, 1: typing in input, 2: user sent/ai thinking, 3: ai typing, 4: complete
  const [inputText, setInputText] = useState('');
  const [userText, setUserText] = useState('');
  const [aiText, setAiText] = useState('');
  
  const userMessage = "Analyze the profile and provide me with the technical skills";
  const aiMessage = "Scanning profile data...\nIdentified 10 core technical competencies.\nGenerating interactive visualization:";

  useEffect(() => {
    if (step === 0) {
      const timer = setTimeout(() => setStep(1), 800);
      return () => clearTimeout(timer);
    } else if (step === 1) {
      const words = userMessage.split(' ');
      let wordIndex = 0;
      const interval = setInterval(() => {
        const currentText = words.slice(0, wordIndex + 1).join(' ');
        setInputText(currentText);
        wordIndex++;
        if (wordIndex >= words.length) {
          clearInterval(interval);
          setTimeout(() => {
            setUserText(userMessage);
            setInputText('');
            setStep(2);
          }, 800);
        }
      }, 180);
      return () => clearInterval(interval);
    } else if (step === 2) {
      const timer = setTimeout(() => setStep(3), 1500);
      return () => clearTimeout(timer);
    } else if (step === 3) {
      const words = aiMessage.split(' ');
      let wordIndex = 0;
      const interval = setInterval(() => {
        const currentText = words.slice(0, wordIndex + 1).join(' ');
        setAiText(currentText);
        wordIndex++;
        if (wordIndex >= words.length) {
          clearInterval(interval);
          setTimeout(() => setStep(4), 600);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [step]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 min-h-0">
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
        className="flex flex-col glass-panel rounded-lg overflow-hidden relative h-full"
      >
        {/* Chat Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-cyber-border bg-cyber-panel/40 backdrop-blur-sm z-10">
          <div className="flex items-center space-x-3">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyber-accent"></span>
            </div>
            <span className="text-xs font-mono font-bold text-cyber-text tracking-widest uppercase">Technical Skills</span>
          </div>
          {step > 0 && (
            <button 
              onClick={() => { setStep(0); setInputText(''); setUserText(''); setAiText(''); }} 
              className="text-[10px] font-mono text-cyber-muted hover:text-cyber-accent uppercase tracking-wider transition-colors"
            >
              Reset Session
            </button>
          )}
        </div>
        
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6 flex flex-col scrollbar-hide">
          {step <= 1 && (
            <div className="flex-1 flex flex-col items-center justify-center text-cyber-muted opacity-60">
              <MessageSquare size={32} className="mb-3" />
              <span className="text-xs font-mono tracking-wider">SYSTEM READY. AWAITING INPUT.</span>
            </div>
          )}
          
          {step >= 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="self-end max-w-[85%]">
              <div className="bg-cyber-accent/10 border border-cyber-accent/30 text-cyber-text text-sm font-mono p-3 rounded-lg rounded-tr-none shadow-sm">
                {userText}
              </div>
            </motion.div>
          )}
          
          {step >= 2 && (
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="self-start w-full">
              <div className="flex space-x-3">
                <div className="w-7 h-7 rounded bg-cyber-panel border border-cyber-border flex items-center justify-center shrink-0 mt-1 shadow-sm">
                  <Terminal size={14} className="text-cyber-accent" />
                </div>
                <div className="flex-1 space-y-3">
                  <div className="bg-cyber-panel/60 border border-cyber-border text-cyber-text text-sm font-mono p-3 rounded-lg rounded-tl-none shadow-sm inline-block">
                    {step === 2 ? (
                       <div className="flex space-x-1.5 items-center h-5 px-1">
                         <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.2 }} className="w-1.5 h-1.5 bg-cyber-accent rounded-full"></motion.div>
                         <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }} className="w-1.5 h-1.5 bg-cyber-accent rounded-full"></motion.div>
                         <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.4 }} className="w-1.5 h-1.5 bg-cyber-accent rounded-full"></motion.div>
                       </div>
                    ) : (
                      <div className="whitespace-pre-line leading-relaxed">
                        {aiText}
                        {step === 3 && <span className="inline-block w-1.5 h-3.5 bg-cyber-accent ml-1 animate-pulse align-middle"></span>}
                      </div>
                    )}
                  </div>
                  
                  {step === 4 && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                      className="relative w-full p-5 rounded-xl bg-gradient-to-br from-cyber-panel/80 to-cyber-bg border border-cyber-border/50 overflow-hidden shadow-inner"
                    >
                      {/* Subtle grid background */}
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] opacity-50"></div>
                      
                      <div className="relative z-10 flex flex-wrap justify-center items-center content-center gap-x-4 gap-y-3">
                        {techSkillsData.map((skill, idx) => {
                          const minFontSize = 0.85;
                          const maxFontSize = 1.8;
                          const minA = 70;
                          const maxA = 95;
                          
                          const fontSize = minFontSize + ((skill.A - minA) / (maxA - minA)) * (maxFontSize - minFontSize);
                          const opacity = 0.6 + ((skill.A - minA) / (maxA - minA)) * 0.4;
                          const isTopSkill = skill.A >= 90;
                          
                          return (
                            <motion.div
                              key={skill.subject}
                              initial={{ opacity: 0, y: 15 }}
                              animate={{ opacity, y: 0 }}
                              whileHover={{ scale: 1.1, opacity: 1, textShadow: isTopSkill ? "0px 0px 12px rgba(255,255,255,0.8)" : "0px 0px 8px var(--color-cyber-accent)", zIndex: 10 }}
                              transition={{ 
                                type: "spring", stiffness: 200, damping: 15, delay: idx * 0.05 
                              }}
                              style={{ fontSize: `${fontSize}rem`, lineHeight: 1.2 }}
                              className={`font-mono font-bold cursor-default select-none text-center transition-colors px-1 ${isTopSkill ? 'text-white' : 'text-cyber-text hover:text-cyber-accent'}`}
                            >
                              {skill.subject}
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </div>
        
        {/* Chat Input Area */}
        <div className="p-3 border-t border-cyber-border bg-cyber-panel/30 backdrop-blur-sm z-10">
          <div className="relative flex items-center">
            <input 
              type="text" 
              readOnly 
              value={inputText}
              placeholder={step === 0 ? "Initializing..." : step === 1 ? "" : "Processing..."}
              className="w-full bg-cyber-bg/80 border border-cyber-border rounded-md px-4 py-2.5 text-sm font-mono text-cyber-text placeholder-cyber-muted focus:outline-none shadow-inner overflow-x-auto whitespace-nowrap scrollbar-hide"
              ref={(input) => {
                if (input && step === 1) {
                  input.scrollLeft = input.scrollWidth;
                }
              }}
            />
            {step === 1 && (
              <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none flex items-center">
                <span className="text-sm font-mono text-transparent whitespace-pre select-none" aria-hidden="true">
                  {inputText}
                </span>
                {inputText.length < userMessage.length && (
                  <span className="inline-block w-1.5 h-4 bg-cyber-accent animate-pulse ml-0.5"></span>
                )}
              </div>
            )}
            <div className="absolute right-3 text-cyber-muted bg-cyber-bg/80 pl-2">
              <Send size={14} className={step === 1 && inputText.length === userMessage.length ? "text-cyber-accent" : "opacity-50"} />
            </div>
          </div>
        </div>
      </motion.div>

    <div className="glass-panel p-6 rounded-lg flex flex-col h-full">
      <SectionTitle title="Core Competencies" icon={PieChart} />
      <div className="flex-1 w-full relative mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <Treemap
            data={coreCompetenciesData}
            dataKey="size"
            aspectRatio={4 / 3}
            stroke="var(--color-cyber-bg)"
            content={<TreemapCustomContent />}
            isAnimationActive={false}
          >
            <Tooltip 
              contentStyle={{ backgroundColor: 'var(--color-cyber-panel)', borderColor: 'var(--color-cyber-border)', color: 'var(--color-cyber-text)', fontFamily: 'var(--font-mono)', fontSize: '12px' }}
              itemStyle={{ color: 'var(--color-cyber-text)' }}
            />
          </Treemap>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
  );
};

const ExperienceWidget = () => {
  const minYear = 2022;
  const maxYear = new Date().getFullYear();
  const totalYears = maxYear - minYear;

  const getMonthIndex = (month: string) => {
    const months: Record<string, number> = { 'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5, 'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11, 'Present': new Date().getMonth() };
    return months[month] || 0;
  };

  const getDuration = (startMonth: string, startYear: number, endMonth: string, endYear: number) => {
    const m1 = getMonthIndex(startMonth);
    const y1 = startYear;
    const m2 = endMonth === 'Present' ? new Date().getMonth() : getMonthIndex(endMonth);
    const y2 = endMonth === 'Present' ? new Date().getFullYear() : endYear;
    
    let totalMonths = (y2 - y1) * 12 + (m2 - m1) + 1;
    if (totalMonths < 0) totalMonths = 0;
    
    const yrs = Math.floor(totalMonths / 12);
    const mos = totalMonths % 12;
    
    if (yrs === 0) return `${mos} mos`;
    if (mos === 0) return `${yrs} yr${yrs > 1 ? 's' : ''}`;
    return `${yrs} yr${yrs > 1 ? 's' : ''} ${mos} mo${mos > 1 ? 's' : ''}`;
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
      className="glass-panel p-6 rounded-lg col-span-1 lg:col-span-2 flex flex-col overflow-hidden"
    >
      <SectionTitle title="Project Tracker" icon={Layout} />
      
      <div className="flex-1 overflow-x-auto overflow-y-auto mt-4 pr-2">
        <div className="min-w-[800px]">
          {/* Header */}
        <div className="grid grid-cols-12 gap-4 border-b border-cyber-border pb-3 mb-4 text-xs font-mono text-cyber-muted uppercase tracking-wider">
          <div className="col-span-3">Organization</div>
          <div className="col-span-3">Role & Focus</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-4 flex flex-col">
            <div className="flex justify-between w-full mb-1">
              <span>Timeline</span>
            </div>
            <div className="flex justify-between w-full text-[9px] text-cyber-muted/50">
              {Array.from({ length: totalYears + 1 }).map((_, i) => (
                <span key={i}>{minYear + i}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Rows */}
        <div className="space-y-3">
          {experienceData.map((exp, idx) => {
            const startDecimal = exp.startYear + (getMonthIndex(exp.startMonth) / 12);
            const endDecimal = exp.endMonth === 'Present' ? maxYear + (getMonthIndex('Present') / 12) : exp.endYear + (getMonthIndex(exp.endMonth) / 12);
            
            const startOffset = ((startDecimal - minYear) / totalYears) * 100;
            const width = ((endDecimal - startDecimal) / totalYears) * 100;
            
            return (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="grid grid-cols-12 gap-4 items-center bg-cyber-panel/30 p-3 rounded border border-cyber-border hover:border-cyber-accent/50 transition-colors group"
              >
                {/* Organization */}
                <div className="col-span-3 pr-2">
                  <h4 className="text-sm font-bold text-cyber-text group-hover:text-cyber-accent transition-colors truncate">{exp.company}</h4>
                  <p className="text-[10px] font-mono text-cyber-muted mt-1">
                    {exp.startMonth}, {exp.startYear} - {exp.endMonth === 'Present' ? 'Present' : `${exp.endMonth}, ${exp.endYear}`}
                    <span className="text-cyber-muted/50 ml-1">({getDuration(exp.startMonth, exp.startYear, exp.endMonth, exp.endYear)})</span>
                  </p>
                </div>

                {/* Role & Focus */}
                <div className="col-span-3 pr-2">
                  <p className="text-xs text-cyber-text truncate">{exp.role}</p>
                  <p className="text-[10px] font-mono text-cyber-muted truncate mt-0.5">{exp.focus}</p>
                </div>

                {/* Status */}
                <div className="col-span-2">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-[10px] font-mono border ${
                    exp.status === 'Active Sprint' 
                      ? 'bg-green-500/10 text-green-600 border-green-500/30' 
                      : exp.status === 'Deployed'
                      ? 'bg-cyber-accent/10 text-cyber-accent border-cyber-accent/30'
                      : 'bg-cyber-bg text-cyber-muted border-cyber-border'
                  }`}>
                    {exp.status === 'Active Sprint' && <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5 animate-pulse"></span>}
                    {exp.status}
                  </span>
                </div>

                {/* Timeline */}
                <div className="col-span-4 relative h-6 bg-cyber-bg rounded border border-cyber-border overflow-hidden flex items-center">
                  {/* Grid lines for years */}
                  <div className="absolute inset-0 flex pointer-events-none opacity-20">
                    {Array.from({ length: totalYears }).map((_, i) => (
                      <div key={i} className="flex-1 border-r border-cyber-muted h-full"></div>
                    ))}
                  </div>
                  
                  {/* Timeline Bar */}
                  <div 
                    className={`absolute h-4 rounded-sm ${
                      exp.status === 'Active Sprint' ? 'bg-green-500' : exp.status === 'Deployed' ? 'bg-cyber-accent' : 'bg-cyber-muted'
                    } opacity-80 group-hover:opacity-100 transition-opacity`}
                    style={{ 
                      left: `${startOffset}%`, 
                      width: `${Math.max(width, 1)}%`
                    }}
                  >
                    <div 
                      className="h-full bg-white/20"
                      style={{ width: `${exp.progress}%` }}
                    ></div>
                  </div>
                  
                  {/* Static Year labels */}
                  <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
                    <span className="text-[9px] font-mono text-cyber-muted/50">{exp.startMonth}, {exp.startYear}</span>
                    <span className="text-[9px] font-mono text-cyber-muted/50">{exp.endMonth === 'Present' ? 'Present' : `${exp.endMonth}, ${exp.endYear}`}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      </div>
    </motion.div>
  );
};

const renderGraphic = (type: string) => {
  switch (type) {
    case 'dashboard':
      return (
        <div className="w-full h-full flex flex-col gap-2">
          <div className="w-full h-3 bg-cyber-border rounded-sm"></div>
          <div className="flex gap-2 flex-1">
            <div className="w-1/4 flex flex-col gap-2">
              <div className="w-full h-2 bg-cyber-border rounded-sm"></div>
              <div className="w-3/4 h-2 bg-cyber-border rounded-sm"></div>
              <div className="w-1/2 h-2 bg-cyber-border rounded-sm"></div>
            </div>
            <div className="flex-1 bg-cyber-border/40 rounded-sm flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border-2 border-cyber-border"></div>
            </div>
          </div>
        </div>
      );
    case 'kanban':
      return (
        <div className="w-full h-full flex gap-2">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex-1 bg-cyber-border/40 rounded-sm p-1.5 flex flex-col gap-1.5">
              <div className="w-1/2 h-1.5 bg-cyber-border rounded-sm mb-1"></div>
              <div className="w-full h-4 bg-cyber-border rounded-sm"></div>
              {i !== 3 && <div className="w-full h-4 bg-cyber-border rounded-sm"></div>}
            </div>
          ))}
        </div>
      );
    case 'chat':
      return (
        <div className="w-full flex flex-col gap-3 px-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-cyber-border shrink-0"></div>
            <div className="h-4 w-2/3 bg-cyber-border rounded-full"></div>
          </div>
          <div className="flex items-center gap-2 justify-end">
            <div className="h-4 w-1/2 bg-blue-100 rounded-full"></div>
            <div className="w-4 h-4 rounded-full bg-blue-200 shrink-0"></div>
          </div>
        </div>
      );
    case 'pipeline':
      return (
        <div className="w-full relative flex items-center justify-between px-4">
          <div className="absolute left-4 right-4 h-0.5 bg-cyber-border top-1/2 -translate-y-1/2"></div>
          <div className="w-6 h-6 rounded bg-cyber-panel border border-cyber-border z-10 flex items-center justify-center">
            <Database size={10} className="text-cyber-muted" />
          </div>
          <div className="w-6 h-6 rounded-full bg-blue-50 border border-blue-100 z-10 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-blue-400/50"></div>
          </div>
          <div className="w-6 h-6 rounded bg-cyber-panel border border-cyber-border z-10 flex items-center justify-center">
            <BarChart2 size={10} className="text-cyber-muted" />
          </div>
        </div>
      );
    case 'mobile':
      return (
        <div className="w-12 h-24 border-2 border-cyber-border rounded-xl flex flex-col items-center p-1 gap-1">
          <div className="w-4 h-0.5 bg-cyber-border rounded-full mt-1"></div>
          <div className="w-full flex-1 bg-cyber-panel rounded-sm mt-1 flex items-center justify-center">
            <div className="w-6 h-8 border border-cyber-border rounded-sm"></div>
          </div>
        </div>
      );
    case 'flowchart':
      return (
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-6 bg-cyber-panel border border-cyber-border rounded-sm"></div>
          <div className="flex flex-col items-center">
            <div className="w-0.5 h-3 bg-cyber-border"></div>
            <div className="w-16 h-0.5 bg-cyber-border"></div>
            <div className="flex justify-between w-16">
              <div className="w-0.5 h-3 bg-cyber-border"></div>
              <div className="w-0.5 h-3 bg-cyber-border"></div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-6 bg-cyber-panel border border-cyber-border rounded-sm"></div>
            <div className="w-10 h-6 bg-cyber-panel border border-cyber-border rounded-sm"></div>
          </div>
        </div>
      );
    default:
      return null;
  }
};

const ArchitectureWidget = () => (
  <motion.div 
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
    className="col-span-1 lg:col-span-2 h-full flex flex-col"
  >
    <SectionTitle title="Project Architecture" icon={LayoutDashboard} />
    <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-4">
        {projectsData.map((project, idx) => (
          <motion.div 
            key={project.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-cyber-panel rounded-xl border border-cyber-border p-4 flex flex-col gap-4 hover:border-cyber-muted transition-colors min-h-[220px]"
          >
            {/* Header */}
            <div className="flex items-center space-x-2">
              <project.icon size={16} className="text-blue-400" />
              <h3 className="text-sm font-semibold text-cyber-text">{project.name}</h3>
            </div>
            
            {/* Graphic Area */}
            <div className="h-32 bg-cyber-bg rounded-lg border border-cyber-border p-3 flex items-center justify-center relative overflow-hidden">
               {renderGraphic(project.graphicType)}
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map(tag => (
                <span key={tag} className="text-[9px] font-mono text-cyber-muted bg-cyber-panel border border-cyber-border px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

const AILiveWidget = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [showMockup, setShowMockup] = useState(false);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const runScript = () => {
    if (isRunning) return;
    setIsRunning(true);
    setLogs([]);
    setShowMockup(false);

    const scriptSteps = [
      "> npm install",
      "> resolving dependencies...",
      "> npm run build",
      "> compiling components...",
      "> building layout grid...",
      "> DEPLOYMENT SUCCESSFUL."
    ];

    let currentStep = 0;
    intervalRef.current = setInterval(() => {
      if (currentStep < scriptSteps.length) {
        const step = scriptSteps[currentStep];
        if (step) {
          setLogs(prev => [...prev, step]);
        }
        currentStep++;
      } else {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        setIsRunning(false);
        setTimeout(() => setShowMockup(true), 500);
      }
    }, 600);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
      className="glass-panel p-6 rounded-lg col-span-1 lg:col-span-2 h-full flex flex-col"
    >
      <SectionTitle title="Deployment & Automation" icon={Zap} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 min-h-0">
        {/* Terminal */}
        <div className="bg-cyber-bg border border-cyber-border rounded-lg overflow-hidden flex flex-col h-full">
          <div className="bg-cyber-panel px-4 py-2 border-b border-cyber-border flex items-center justify-between">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <span className="text-[10px] font-mono text-cyber-muted">ankur@dev-machine:~</span>
          </div>
          <div className="p-4 font-mono text-xs text-cyber-muted flex-1 overflow-y-auto space-y-2">
            <p className="text-cyber-text">Welcome to the deployment interface.</p>
            <p>Type a command or click execute to build the dashboard.</p>
            <div className="mt-4">
              <span className="text-cyber-accent">ankur@admin:~$</span> ./build-dashboard.sh
            </div>
            {logs.map((log, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
                <span className={log?.includes("SUCCESSFUL") ? "text-cyber-accent" : "text-cyber-muted"}>{log}</span>
              </motion.div>
            ))}
            {isRunning && (
              <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }}>
                <span className="inline-block w-2 h-4 bg-cyber-accent ml-1 align-middle"></span>
              </motion.div>
            )}
          </div>
          <div className="p-4 border-t border-cyber-border bg-cyber-panel">
            <button 
              onClick={runScript}
              disabled={isRunning}
              className={`w-full py-2 rounded font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2 ${
                isRunning 
                  ? 'bg-cyber-border text-cyber-muted cursor-not-allowed' 
                  : 'bg-cyber-accent/10 text-cyber-accent border border-cyber-accent hover:bg-cyber-accent hover:text-cyber-bg glow-accent'
              }`}
            >
              <Play size={14} />
              <span>{isRunning ? 'Executing...' : 'Run Build Script'}</span>
            </button>
          </div>
        </div>

        {/* Generated Mockup Area */}
        <div className="bg-cyber-panel border border-cyber-border rounded-lg p-4 flex items-center justify-center h-full relative overflow-hidden">
          {!showMockup ? (
            <div className="text-center text-cyber-muted font-mono text-xs flex flex-col items-center">
              <Layers size={32} className="mb-3 opacity-20" />
              <p>AWAITING GENERATION...</p>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              className="w-full h-full bg-cyber-bg border border-cyber-accent/30 rounded p-3 flex flex-col space-y-3 relative"
            >
              <div className="absolute top-0 right-0 bg-cyber-accent text-cyber-bg text-[8px] font-mono px-2 py-0.5 rounded-bl font-bold">WIREFRAME</div>
              {/* Header */}
              <div className="w-full h-8 border border-dashed border-cyber-muted/40 rounded flex items-center px-2 space-x-2">
                <div className="w-4 h-4 rounded-full bg-cyber-muted/20"></div>
                <div className="w-24 h-2 bg-cyber-muted/20 rounded"></div>
              </div>
              {/* Content */}
              <div className="flex-1 flex space-x-3">
                <div className="w-1/4 h-full border border-dashed border-cyber-muted/40 rounded"></div>
                <div className="w-3/4 h-full flex flex-col space-y-3">
                  <div className="flex space-x-3 h-1/3">
                    <div className="flex-1 border border-dashed border-cyber-accent/40 bg-cyber-accent/5 rounded"></div>
                    <div className="flex-1 border border-dashed border-cyber-muted/40 rounded"></div>
                    <div className="flex-1 border border-dashed border-cyber-muted/40 rounded"></div>
                  </div>
                  <div className="flex-1 border border-dashed border-cyber-muted/40 rounded"></div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');

  // Add custom animation keyframes to document
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes scan {
        0% { top: 0; }
        50% { top: 100%; }
        100% { top: 0; }
      }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewWidget />;
      case 'analytics':
        return <AnalyticsWidget />;
      case 'architecture':
        return <ArchitectureWidget />;
      case 'experience':
        return <ExperienceWidget />;
      case 'ai-mockup':
        return <AILiveWidget />;
      default:
        return <OverviewWidget />;
    }
  };

  return (
    <div className="h-screen overflow-hidden bg-cyber-bg text-cyber-text flex flex-col md:flex-row font-sans selection:bg-cyber-accent selection:text-cyber-bg">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 flex flex-col relative overflow-hidden">
        {/* Top Header KPIs */}
        <header className="p-3 md:p-4 border-b border-cyber-border bg-cyber-bg/80 backdrop-blur-md z-10 shrink-0">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <KPICard title="Total Experience" value="3+ Yrs" icon={Briefcase} delay={0.1} />
            <KPICard title="Projects Delivered" value="8+" icon={Layers} delay={0.2} />
            <KPICard title="Core Focus" value="PM/BI" icon={Cpu} delay={0.3} />
            <KPICard title="Students Trained" value="1000+" icon={Terminal} delay={0.4} />
          </div>
        </div>
      </header>

        {/* Main Content Area */}
        <div className="flex-1 p-4 md:p-6 overflow-hidden">
          <div className="w-full h-full max-w-7xl mx-auto flex flex-col">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
}

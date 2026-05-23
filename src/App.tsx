import { useState, useEffect } from 'react';

import CalcomSchedule from './components/CalcomSchedule';
import Darkmode from './components/Darkmode';
import ChatIcons from './components/ChatIcons';
import ChatSession from './components/ChatSession';
import { certificates, type Certificate } from './Files/Certificates';
import { projectdetails, type ProjectDetails } from './Files/ProjectDetails';
import CertificateModal from './components/CertificateModal';
import ProjectModal from './components/ProjectDetails';

import { Mail, Calendar, MapPin, FolderOpen } from 'lucide-react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import myphoto from './assets/rbhjr.png';
import faithlogo from './assets/faithlogooo.jpg';
import fidelislogo from './assets/fedelislogo.png'
import rjrlogo from './assets/rjrlogo.jpg';
import ionicslogo from './assets/ionicslogo.webp';
import jcologo from './assets/jcologo.png';
import jollibeelogo from './assets/jollibeelogo.png';
import helloworldlogo from './assets/helloworldlogo.png';
import techacademylogo from "./assets/techacademylogo.png";

const jobRoles = ["Software Engineer", "Full Stack Developer", "Data Science", "Data Analyst"];

function App() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 60; // milliseconds per character
  const deletingSpeed = 100; // milliseconds per character
  const pauseBeforeDelete = 1500; // milliseconds to pause after typing
  const pauseBeforeType = 500; // milliseconds to pause after deleting

  const [showSchedule, setShowSchedule] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [themeMode, setThemeMode] = useState(() => {
    if (typeof window === 'undefined') return 'system';

    const savedThemeMode = localStorage.getItem('portfolio-theme-mode');
    if (savedThemeMode === 'light' || savedThemeMode === 'dark' || savedThemeMode === 'system') {
      return savedThemeMode;
    }

    const legacyTheme = localStorage.getItem('portfolio-theme');
    if (legacyTheme === 'light' || legacyTheme === 'dark') {
      return legacyTheme;
    }

    return 'system';
  });
  const [systemPrefersDark, setSystemPrefersDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);

  const timelineRailClass = "mt-5 relative border-l-0 max-[767px]:ml-8 max-[767px]:border-l-4 min-[960px]:ml-0 min-[960px]:border-l-4 border-gray-700 pl-0 max-[767px]:pl-4 min-[960px]:pl-4";
  const timelineIconClass = "flex justify-center items-center w-12 h-12 mb-3 bg-white rounded-full border border-gray-700";
  const timelineIconPosition = "max-[767px]:mb-0 max-[767px]:absolute max-[767px]:-left-[2.75rem] max-[767px]:top-0 min-[960px]:mb-0 min-[960px]:absolute min-[960px]:-left-[2.75rem] min-[960px]:top-0";
  const timelineContentClass = "pl-0 max-[767px]:pl-5 min-[960px]:pl-5";
  const timelineDateClass = "max-[767px]:ml-10 max-[767px]:w-[calc(100%-3.25rem)]";
  const isDarkMode = themeMode === 'dark' || (themeMode === 'system' && systemPrefersDark);
  const getExperienceBadgeClass = (lightClass: string) =>
    `${isDarkMode ? 'bg-gray-600' : lightClass} text-white`;

  // Define Right Container content once to reuse in different positions
  const RightSideContent = (
    <>
      {/* Services */}
      <div className="w-full max-w-xs h-auto mt-8">
        <h2 className="text-black font-bold text-lg">Services</h2>
        <div className="text-black mt-2">
          <h3 className="mb-1">Web Design</h3>
          <h3 className="mb-1">Web Development</h3>
          <h3 className="mb-1">SaaS Development</h3>
        </div>
      </div>
      {/* Recent Certificates */}
      <div className="w-full max-w-xs mt-8">
        <h2 className="text-black font-bold text-lg">Recent Certificates</h2>
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="mb-8 mt-5 relative cursor-pointer group"
            onClick={() => setSelectedCert(cert)}
          >
            <div className="absolute flex justify-center items-center w-12 h-12 bg-white rounded-full -left-0 border border-gray-700 group-hover:border-4 group-hover:border-black transition-all shadow-sm">
              <img src={techacademylogo} alt={cert.issuer} className="w-8 h-8 rounded-full" />
            </div>
            <div className='flex flex-row items-center ml-10'>
              <div className='w-full'>
                <h1 className="text-md text-black pl-5 group-hover:text-gray-400 transition-colors font-medium">{cert.title}</h1>
                <h3 className="text-sm text-gray-400 pl-5">{cert.issuer}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Social Media */}
      <div className="w-full max-w-xs mt-3">
        <h2 className="text-black font-bold text-lg">Social Media</h2>
        <div className='h-12 flex items-center gap-2'>
          <a href="https://github.com/RolandoJr23/RolandoJr23.git" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHubIcon style={{ fontSize: 30 }} className="cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/invites/contact/?igsh=1rgwwp3xtfjif&utm_content=107jhdm4" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <InstagramIcon style={{ fontSize: 30 }} className="cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/rolando-jr-hernandez-1a3772330?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BNIMedTBfQguj8c9NXI6uZw%3D%3D" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <LinkedInIcon style={{ fontSize: 30 }} className="cursor-pointer" />
          </a>
        </div>
      </div>
      <h3 className='text-center mt-14 mb-10'>&copy; 2026 Rolando Jr Hernandez. All rights reserved.</h3>
    </>
  );

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = jobRoles[roleIndex % jobRoles.length];

      if (isDeleting) {
        if (charIndex > 0) {
          setDisplayedText(currentRole.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex(roleIndex + 1);
        }
      } else {
        if (charIndex < currentRole.length) {
          setDisplayedText(currentRole.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setIsDeleting(true);
        }
      }
    };

    let timer;
    if (isDeleting) {
      timer = setTimeout(handleTyping, charIndex === 0 ? pauseBeforeType : deletingSpeed);
    } else {
      timer = setTimeout(handleTyping, charIndex === jobRoles[roleIndex % jobRoles.length].length ? pauseBeforeDelete : typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, jobRoles]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    localStorage.setItem('portfolio-theme-mode', themeMode);
    localStorage.setItem('portfolio-theme', isDarkMode ? 'dark' : 'light');
  }, [themeMode, isDarkMode]);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event: MediaQueryListEvent) => {
      setSystemPrefersDark(event.matches);
    };

    setSystemPrefersDark(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const handleThemeToggle = () => {
    setThemeMode((currentMode) => {
      if (currentMode === 'light') return 'dark';
      if (currentMode === 'dark') return 'system';
      return 'light';
    });
  };

  return (
    <>
      <style>
        {`
          .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .reveal-active {
            opacity: 1;
            transform: translateY(0);
          }
          .reveal-left {
            transform: translateX(30px);
          }
          .reveal-active.reveal-left {
            transform: translateX(0);
          }
          .reveal-bottom {
            transform: translateY(-30px);
          }
          .reveal-active.reveal-bottom {
            transform: translateY(0);
          }

          .portfolio-dark {
            background: #212838;
            color: #e5e7eb;
          }
          .portfolio-dark .bg-gray-50 {
            background-color: #0f172a !important;
          }
          .portfolio-dark .bg-white {
            background-color: #111827 !important;
          }
          .portfolio-dark .bg-gray-700 {
            background-color: #1f2937 !important;
          }
          .portfolio-dark .bg-gray-900 {
            background-color: #030712 !important;
          }
          .portfolio-dark .text-black {
            color: #f9fafb !important;
          }
          .portfolio-dark .text-gray-400 {
            color: #9ca3af !important;
          }
          .portfolio-dark .text-gray-500 {
            color: #9ca3af !important;
          }
          .portfolio-dark .text-gray-700 {
            color: #d1d5db !important;
          }
          .portfolio-dark .text-gray-900 {
            color: #f9fafb !important;
          }
          .portfolio-dark .border-gray-100 {
            border-color: #1f2937 !important;
          }
          .portfolio-dark .border-gray-200 {
            border-color: #374151 !important;
          }
          .portfolio-dark .border-gray-700 {
            border-color: #4b5563 !important;
          }
          .portfolio-dark .shadow-sm,
          .portfolio-dark .shadow-md,
          .portfolio-dark .shadow-lg,
          .portfolio-dark .shadow-xl,
          .portfolio-dark .shadow-2xl {
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3) !important;
          }
          .portfolio-dark input,
          .portfolio-dark button:not([class*='bg-black']) {
            color: inherit;
          }
        `}
      </style>
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 overflow-hidden">
        {/* Left Side Container */}
        <div className="w-full md:w-96 lg:w-120 h-auto md:h-screen bg-gray-700 flex flex-col justify-baseline items-center pt-10 px-4 gap-2 overflow-y-auto overflow-x-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ">
          <div className="text-white w-full max-w-xs h-fit flex flex-col gap-3 items-center mb-10 reveal reveal-bottom" >
            {/* My Image */}
            <img src={myphoto} alt="Rolando Badillo Hernandez Jr." className="w-48 h-48 rounded-full border-4 border-white" /> {/* Added descriptive alt text for accessibility. */}
            {/* My Name */}
            <h2 className="text-xl text-center">Rolando Badillo Hernandez Jr.</h2>
            {/* My location */}
            <div className='w-full flex flex-row justify-center items-center gap-1 hover:text-red-500'>
              <MapPin className='w-3 h-3' />
              <h3 className='text-xs'><a href="https://maps.app.goo.gl/9PzyRR8uTxhctFDb9" target="_blank">San Antonio Santo Tomas, Batangas</a></h3>
            </div>
            {/* My Professions */}
            <div className="text-2xl w-full h-8 mt-5 pl-14">
              <h3>{displayedText}</h3>
            </div>
            {/* Buttons Schedule and Send Email */}
            <div className="w-full max-w-xs flex flex-col sm:flex-row gap-2 justify-center items-center mt-3">
              <button
                onClick={() => setShowSchedule(true)}
                className="w-full p-2 text-sm flex flex-row justify-center items-center gap-2 text-black bg-white rounded-md hover:text-white hover:bg-black duration-300 cursor-pointer"><Calendar className="w-5 h-5" />Schedule a Call</button>
              <button className="w-full p-2 text-sm flex flex-row justify-center items-center gap-2 text-white border-2 border-white rounded-md hover:text-black hover:bg-white cursor-pointer"><Mail className="w-5 h-5" /><a href="mailto:rolandojrhernandez0623200@gmail.com" target="_blank">Send Email</a></button>
            </div>
          </div>
          {/* About */}
          <div className="w-full h-auto pb-10 font-sans reveal reveal-top">
            <h2 className="text-white font-bold text-lg px-4">About Me</h2>
            <div className="text-white flex flex-col justify-normal mt-2 text-justify px-4"> {/* Changed indent-8 to px-4 for better mobile responsiveness */}
              <h3 className='indent-12'>I am a Full Stack Software Engineer with the goal of developing solutions and solving real world problems through applications that have the concreteness of an efficient and high quality tools and development with user-centric mindset and focusing in creating significant features in software development that will bring solution in the real world problems. </h3> <br />
              <h3 className='indent-12'>After graduating in Computer Science, I struggled to find my path in the tech industry especially as a Software Engineer, but those challenges motivated me to grow, learn and now to build software solutions. </h3> <br />
              <h3 className='indent-12'>Now, I'm focused and actively on building modern applications that integrate AI-powered tools to create smarter, more efficient, and innovative digital solutions.</h3>
            </div>
          </div>

        </div>
        {/* Wrapper to stack Middle and Right below 1500px while keeping Left as a sidebar */}
        <div className={`flex-1 h-auto md:h-screen overflow-y-auto min-[1500px]:overflow-hidden flex flex-col min-[1500px]:flex-row [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${isDarkMode ? 'portfolio-dark' : ''}`}>
          {/* Main Content Area (Middle Container) */}
          <div className="relative w-full min-[1500px]:flex-1 h-auto min-[1500px]:h-full overflow-y-auto overflow-x-hidden scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {/* Education */}
            <div className="max-w-3xl w-full h-fit my-10 px-6 md:pl-20 reveal">
              {/* Timelime Education */}
              <div className="w-full">
                <h2 className="text-2xl font-bold text-black">Education</h2>
                <div className={timelineRailClass}>
                  {/*Faith */}
                  <div className="mb-8 last:mb-0 relative">
                    <div className={`${timelineIconClass} hover:border-4 hover:border-blue-800 ${timelineIconPosition}`}><img src={faithlogo} alt="" className="w-8 h-8 rounded-full" /></div>
                    <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-2'>
                      <div className={timelineContentClass}>
                        <h1 className="text-base text-black pl-0 max-[767px]:pl-5 min-[1200px]:pl-5">Bachelor of Science in Computer
                          Science</h1>
                        <h3 className="text-sm text-gray-400 pl-0 max-[767px]:pl-5 min-[1200px]:pl-5">Faith College: First Asia Institute of
                          Technology and Humanities</h3>
                      </div>
                      <div className={`w-full sm:w-16 h-6 text-xs text-white rounded-md flex justify-center items-center ${getExperienceBadgeClass('bg-gray-700')} ${timelineDateClass}`}>
                        <h1>2019-2023</h1>
                      </div>
                    </div>
                  </div>
                  {/* Fidelis */}
                  <div className="mb-8 last:mb-0 relative">
                    <div className={`${timelineIconClass} hover:border-4 hover:border-green-600 ${timelineIconPosition}`}><img src={fidelislogo} alt="" className="w-8 h-8 rounded-full" /></div>
                    <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-2'>
                      <div className={timelineContentClass}>
                        <h1 className="text-base text-black pl-0 max-[767px]:pl-5 min-[1200px]:pl-5">TVL - Information Communication and
                          Technology</h1>
                        <h3 className="text-sm text-gray-400 pl-0 max-[767px]:pl-5 min-[1200px]:pl-5">Faith College: Fidelis Senior High School</h3>
                      </div>
                      <div className={`w-full sm:w-16 h-6 text-xs text-white rounded-md flex justify-center items-center ${getExperienceBadgeClass('bg-gray-700')} ${timelineDateClass}`}>
                        <h1>2017-2019</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-3xl w-full h-fit px-6 md:pl-20 mb-10 reveal">
              {/* Timelime Experience */}
              <div className="w-full">
                <h2 className="text-2xl font-bold text-black">Experiences</h2>
                <div className={timelineRailClass}>
                  {/*Software Engineer Self Employed*/}
                  <div className="mb-8 last:mb-0 relative">
                    <div className={`${timelineIconClass} hover:border-4 hover:border-green-900 ${timelineIconPosition}`}><img src={rjrlogo} alt="" className="w-8 h-8 rounded-full" /></div>
                    <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-2'>
                      <div className={timelineContentClass}>
                        <h1 className="text-xl text-black pl-0 max-[767px]:pl-5 min-[1200px]:pl-5">Software Engineer</h1>
                        <h3 className="text-sm text-gray-400 pl-0 max-[767px]:pl-5 min-[1200px]:pl-5">Self Employed</h3>
                      </div>
                      <div className={`w-full sm:w-48 h-6 text-xs rounded-md flex justify-center items-center ${getExperienceBadgeClass('bg-green-900')} ${timelineDateClass}`}>
                        <h1>Present</h1>
                      </div>
                    </div>
                  </div>
                  {/*Experience in Ionics */}
                  <div className="mb-8 last:mb-0 relative">
                    <div className={`${timelineIconClass} hover:border-4 hover:border-blue-900 ${timelineIconPosition}`}><img src={ionicslogo} alt="" className="w-8 h-8 rounded-full" /></div>
                    <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-2'>
                      <div className={timelineContentClass}>
                        <h1 className="text-xl text-black pl-0 max-[767px]:pl-5 min-[1200px]:pl-5">Demand & Material Planner</h1>
                        <h3 className="text-sm text-gray-400 pl-0 max-[767px]:pl-5 min-[1200px]:pl-5">IONICS Electronics Manufacturing Services, Inc.</h3>
                      </div>
                      <div className={`w-full sm:w-48 h-6 text-xs rounded-md flex justify-center items-center ${getExperienceBadgeClass('bg-blue-900')} ${timelineDateClass}`}>
                        <h1>May 2025 - August 2025</h1>
                      </div>
                    </div>
                  </div>
                  {/* Experience in Jco */}
                  <div className="mb-8 last:mb-0 relative">
                    <div className={`${timelineIconClass} hover:border-4 hover:border-orange-500 ${timelineIconPosition}`}><img src={jcologo} alt="" className="w-8 h-8 rounded-full" /></div>
                    <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-2'>
                      <div className={timelineContentClass}>
                        <h1 className="text-xl text-black pl-0 max-[767px]:pl-5 min-[1200px]:pl-5">Inventory Controller</h1>
                        <h3 className="text-sm text-gray-400 pl-0 max-[767px]:pl-5 min-[1200px]:pl-5">J.CO Donuts & Coffee</h3>
                      </div>
                      <div className={`w-full sm:w-48 h-6 text-xs rounded-md flex justify-center items-center ${getExperienceBadgeClass('bg-orange-400')} ${timelineDateClass}`}>
                        <h1>October 2023 - August 2024</h1>
                      </div>
                    </div>
                  </div>
                  {/* Experience in Jollibee */}
                  <div className="mb-8 last:mb-0 relative">
                    <div className={`${timelineIconClass} hover:border-4 hover:border-red-600 ${timelineIconPosition}`}><img src={jollibeelogo} alt="" className="w-8 h-8 rounded-full" /></div>
                    <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-2'>
                      <div className={timelineContentClass}>
                        <h1 className="text-xl text-black pl-0 max-[767px]:pl-5 min-[1200px]:pl-5">StockMan</h1>
                        <h3 className="text-sm text-gray-400 pl-0 max-[767px]:pl-5 min-[1200px]:pl-5">Jollibee - Part Time</h3>
                      </div>
                      <div className={`w-full sm:w-48 h-6 text-xs rounded-md flex justify-center items-center ${getExperienceBadgeClass('bg-red-600')} ${timelineDateClass}`}>
                        <h1>November 2022 - February 2023</h1>
                      </div>
                    </div>
                  </div>
                  {/* First wrote of Hello World */}
                  <div className="mb-8 last:mb-0 relative">
                    <div className={`${timelineIconClass} hover:border-4 hover:border-yellow-500 ${timelineIconPosition}`}><img src={helloworldlogo} alt="" className="w-8 h-8 rounded-full" /></div>
                    <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-2'>
                      <div className={timelineContentClass}>
                        <h1 className="text-xl text-black pl-0 max-[767px]:pl-5 min-[1200px]:pl-5">Hello World</h1>
                        <h3 className="text-sm text-gray-400 pl-0 max-[767px]:pl-5 min-[1200px]:pl-5">Wrote my 1st “Hello World” program.</h3>
                      </div>
                      <div className={`w-full sm:w-48 h-6 text-xs rounded-md flex justify-center items-center ${getExperienceBadgeClass('bg-yellow-500')} ${timelineDateClass}`}>
                        <h1>Senior High - 2017</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Tech Stack  */}
            <div className='max-w-3xl w-full h-fit px-6 md:pl-20 mb-10 reveal'>
              <h1 className='text-2xl font-bold text-black'>Tech Stack</h1>
              <div className='mt-3'>
                <h1 className='text-md text-black pl-5'>Frontend</h1>
                <div className='flex flex-wrap mt-3'>
                  <h2 className='text-sm text-gray-400 pl-5'>HTML / CSS</h2>
                  <h2 className='text-sm text-gray-400 pl-5'>JavaScript</h2>
                  <h2 className='text-sm text-gray-400 pl-5'>TypeScript</h2>
                </div>
              </div>
              <div className='mt-3'>
                <h1 className='text-md text-black pl-5'>Framework</h1>
                <div className='flex flex-wrap mt-3'>
                  <h2 className='text-sm text-gray-400 pl-5'>React</h2>
                  <h2 className='text-sm text-gray-400 pl-5'>Express.js</h2>
                  <h2 className='text-sm text-gray-400 pl-5'>.Net</h2>
                </div>
              </div>
              <div className='mt-3'>
                <h1 className='text-md text-black pl-5'>Backend</h1>
                <div className='flex flex-wrap mt-3'>
                  <h2 className='text-sm text-gray-400 pl-5'>Node.js</h2>
                  <h2 className='text-sm text-gray-400 pl-5'>PHP</h2>
                  <h2 className='text-sm text-gray-400 pl-5'>Python</h2>
                  <h2 className='text-sm text-gray-400 pl-5'>C#</h2>
                  <h2 className='text-sm text-gray-400 pl-5'>REST API</h2>
                </div>
              </div>
              <div className='mt-3'>
                <h1 className='text-md text-black pl-5'>Database</h1>
                <div className='flex flex-wrap mt-3'>
                  <h2 className='text-sm text-gray-400 pl-5'>MySQL</h2>
                  <h2 className='text-sm text-gray-400 pl-5'>MSSQL</h2>
                  <h2 className='text-sm text-gray-400 pl-5'>MongoDB</h2>
                  <h2 className='text-sm text-gray-400 pl-5'>PostgreSQL</h2>
                  <h2 className='text-sm text-gray-400 pl-5'>Supabase</h2>
                </div>
              </div>
              <div className='mt-3'>
                <h1 className='text-md text-black pl-5'>Development Tools</h1>
                <div className='flex flex-wrap mt-3'>
                  <h2 className='text-sm text-gray-400 pl-5'>VS Code</h2>
                  <h2 className='text-sm text-gray-400 pl-5'>Visual Studio 2022</h2>
                  <h2 className='text-sm text-gray-400 pl-5'>Github</h2>
                  <h2 className='text-sm text-gray-400 pl-5'>npm/yarn</h2>
                  <h2 className='text-sm text-gray-400 pl-5'>Postman</h2>
                </div>
              </div>
            </div>
            {/* Recent Projects */}
            <div className='max-w-3xl w-full h-fit px-6 md:pl-20 pb-10 reveal'>
              <h1 className='text-2xl font-bold text-black mb-6'>Recent Projects</h1>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {/* Project 1 */}
                <div className={`group  p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between ${isDarkMode ? "bg-none" : "bg-white"}`}>
                  <div>
                    <h1 className='text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors'>TD: Vehicle Detection & Counting System</h1>
                    <p className='text-sm text-gray-500 mt-2 leading-relaxed'>An AI-powered traffic monitoring system using YOLOv8 for real-time vehicle detection, counting, and traffic flow analysis in Tanauan City.</p>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(projectdetails[0])}
                      className={`inline-flex items-center gap-2 border-0 bg-transparent p-0 text-left text-sm font-bold cursor-pointer transition-colors ${isDarkMode ? "text-white hover:text-gray-500" : "text-blue-600 hover:text-blue-800"}`}
                    >
                      <FolderOpen className="w-4 h-4" />
                      Open Folder
                    </button>
                    <a className={`text-sm font-bold cursor-pointer transition-colors ${isDarkMode ? "text-white hover:text-gray-500" : "text-blue-600 hover:text-blue-800"}`} href="#" target="_blank" rel="noopener noreferrer">View Demo →</a>
                  </div>
                </div>

                {/* Project 2 */}
                <div className={`group  p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between ${isDarkMode ? "bg-none" : "bg-white"}`}>
                  <div>
                    <h1 className='text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors'>Point of Sales</h1>
                    <p className='text-sm text-gray-500 mt-2 leading-relaxed'>Point of Sales (POS) System in Modern UI/UX using Dynamic User Control for efficiency and
                      reliable experience for improving accuracy, reduce error and improvise sales products.</p>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(projectdetails[1])}
                      className={`inline-flex items-center gap-2 border-0 bg-transparent p-0 text-left text-sm font-bold cursor-pointer transition-colors ${isDarkMode ? "text-white hover:text-gray-500" : "text-blue-600 hover:text-blue-800"}`}
                    >
                      <FolderOpen className="w-4 h-4" />
                      Open Folder
                    </button>
                    <a className={`text-sm font-bold cursor-pointer transition-colors ${isDarkMode ? "text-white hover:text-gray-500" : "text-blue-600 hover:text-blue-800"}`} href="#" target="_blank" rel="noopener noreferrer">View Demo →</a>
                  </div>
                </div>

                {/* Project 3 */}
                <div className={`group p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between ${isDarkMode ? "bg-none" : "bg-white"}`}>
                  <div>
                    <h1 className='text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors'>FINDSup</h1>
                    <p className='text-sm text-gray-500 mt-2 leading-relaxed'>Web-based application that connects local businesses with nearby suppliers and service providers.</p>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(projectdetails[2])}
                      className={`inline-flex items-center gap-2 border-0 bg-transparent p-0 text-left text-sm font-bold cursor-pointer transition-colors ${isDarkMode ? "text-white hover:text-gray-500" : "text-blue-600 hover:text-blue-800"}`}
                    >
                      <FolderOpen className="w-4 h-4" />
                      Open Folder
                    </button>
                    <a className={`text-sm font-bold cursor-pointer transition-colors ${isDarkMode ? "text-white hover:text-gray-500" : "text-blue-600 hover:text-blue-800"}`} href="#" target="_blank" rel="noopener noreferrer">View Demo →</a>
                  </div>
                </div>

                {/* Project 4 */}
                <div className={`group  p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between ${isDarkMode ? "bg-none" : "bg-white"}`}>
                  <div>
                    <h1 className='text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors'>BlockAIStudy</h1>
                    <p className='text-sm text-gray-500 mt-2 leading-relaxed'>Productivity and learning platform with AI assistance, collaboration tools, focus management, and secure study support.</p>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(projectdetails[3])}
                      className={`inline-flex items-center gap-2 border-0 bg-transparent p-0 text-left text-sm font-bold cursor-pointer transition-colors ${isDarkMode ? "text-white hover:text-gray-500" : "text-blue-600 hover:text-blue-800"}`}
                    >
                      <FolderOpen className="w-4 h-4" />
                      Open Folder
                    </button>
                    <a className={`text-sm font-bold cursor-pointer transition-colors ${isDarkMode ? "text-white hover:text-gray-500" : "text-blue-600 hover:text-blue-800"}`} href="https://block-ai-study-4aj8.vercel.app/" target="_blank" rel="noopener noreferrer">Live →</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Content - Visible only below 1500px in the scroll flow */}
            <div className='min-[1500px]:hidden max-w-3xl w-full px-6 md:pl-20 pb-10 reveal'>
              {RightSideContent}
            </div>
          </div>

          {/* Right Side Container - Sidebar for screens >= 1500px */}
          <div className='hidden min-[1500px]:block w-96 min-[1600px]:w-130 pl-5 pt-4 h-full overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden reveal reveal-left'>
            {RightSideContent}
          </div>
        </div>
      </div>
      <div className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3">
        {showChat && <ChatSession onClose={() => setShowChat(false)} isDarkMode={isDarkMode} />}
        <div className="flex items-center p-2 gap-3 rounded-3xl bg-gray-700 shadow-lg">
          <Darkmode themeMode={themeMode} isDarkMode={isDarkMode} onToggle={handleThemeToggle} />
          <ChatIcons isOpen={showChat} onClick={() => setShowChat((prev) => !prev)} />
        </div>
      </div>
      {showSchedule && <CalcomSchedule onClose={() => setShowSchedule(false)} />}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
      {selectedCert && (<CertificateModal certificate={selectedCert} onClose={() => setSelectedCert(null)} />
      )}
    </>
  );
}

export default App;

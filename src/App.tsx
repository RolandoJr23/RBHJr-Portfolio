import { Mail, Calendar, ChevronDown, MapPin } from 'lucide-react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

import { useState, useEffect } from 'react';

import myphoto from './assets/rbhjr.jpg';
import faithlogo from './assets/faithlogooo.jpg';
import fidelislogo from './assets/fedelislogo.png'
import ionicslogo from './assets/ionicslogo.webp';
import jcologo from './assets/jcologo.png';

function App() {
  const jobRoles = ["Software Engineer", "Full Stack Developer", "Data Science", "Data Analyst"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 60; // milliseconds per character
  const deletingSpeed = 100; // milliseconds per character
  const pauseBeforeDelete = 1500; // milliseconds to pause after typing
  const pauseBeforeType = 500; // milliseconds to pause after deleting

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
        `}
      </style>
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
        {/* Left Side Container */}
        <div className="w-full md:w-2xl h-auto md:h-lvh bg-gray-700 flex flex-col justify-baseline items-center pt-10 gap-2 "> {/* On mobile, take full width and auto height. On medium screens and up, revert to original width and full viewport height. */}
          <div className="text-white w-80 h-fit flex flex-col gap-3 items-center mb-10" >
            {/* My Image */}
            <img src={myphoto} alt="Rolando Badillo Hernandez Jr." className="w-48 h-48 rounded-full border-4 border-white" /> {/* Added descriptive alt text for accessibility. */}
            {/* My Name */}
            <h2 className="text-xl">Rolando Badillo Hernandez Jr.</h2>
            {/* My location */}
            <div className='w-full flex flex-row justify-center items-center gap-1'>
              <MapPin className='w-3 h-3' />
              <h3 className='text-xs'>San Antonio Santo Tomas, Batangas</h3>
            </div>
            {/* My Professions */}
            <div className="text-2xl w-80 h-8 pl-13 flex items-center mt-5">
              <h3>{displayedText}</h3>
            </div>
            {/* Buttons Schedule and Send Email */}
            <div className="w-80 h-10 gap-2 flex justify-center item-center">
              <button className="p-2 text-sm flex flex-row gap-2 text-white bg-black rounded-md hover:text-black hover:bg-white duration-300 cursor-pointer"><Calendar className="w-5 h-5" />Schedule a Call</button>
              <button className="p-2 text-sm flex flex-row gap-2 text-white border-2 border-white rounded-md hover:text-black hover:bg-white cursor-pointer"><Mail className="w-5 h-5" />Send Email</button>
            </div>
          </div>
          {/* About */}
          <div className="max-w-100 word-spacing-[0.5em] h-72 pb-5 font-sans border-b-2 border-white">
            <h2 className="text-white font-bold text-lg">About</h2>
            <div className="text-white flex flex-col justify-normal mt-2 text-justify indent-8">
              <h3>I am a Software Engineer with the goal of developing solutions and solving real world problems through applications that have the concreteness of an efficient and high quality tools for our specific task and to grow ourselves and for a better future and tomorrow.</h3> <br />
              <h3>Now I'm focusing building applications with integration of AI-powered tools into a modern applications.</h3>
            </div>
          </div>

        </div>
        {/* Main Content Area (Middle Container) */}
        <div className="w-full md:w-5xl h-auto md:h-lvh overflow-y-auto overflow-x-hidden scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {/* Education */}
          <div className="w-3xl h-fit m-10 ml-20 reveal">
            {/* Timelime Education */}
            <div className="w-full">
              <h2 className="text-2xl font-bold text-black">Education</h2>
              <div className="mt-5 relative border-l-4 border-gray-700 pl-4">
                {/*Faith */}
                <div className="mb-5 relative">
                  <div className="absolute flex justify-center items-center w-12 h-12 bg-white rounded-full -left-10.5 border border-blue-800  hover:border-4"><img src={faithlogo} alt="" className="w-8 h-8 rounded-full" /></div>
                  <div className='w-xl flex flex-row items-center gap-10'>
                    <div className=''>
                      <h1 className="text-base text-black pl-5">Bachelor of Science in Computer
                        Science</h1>
                      <h3 className="text-sm text-gray-400 pl-5">Faith College: First Asia Institute of
                        Technology and Humanities</h3>
                    </div>
                    <div className='w-16 h-6 text-xs text-white rounded-md flex justify-center items-center bg-gray-700'>
                      <h1>2019-2023</h1>
                    </div>
                  </div>
                </div>
                {/* Fidelis */}
                <div className="mb-8 relative">
                  <div className="absolute flex justify-center items-center w-12 h-12 bg-white rounded-full -left-10.5 border border-green-600 hover:border-4"><img src={fidelislogo} alt="" className="w-8 h-8 rounded-full" /></div>
                  <div className='w-2xl flex flex-row items-center gap-5'>
                    <div className='w-1xl'>
                      <h1 className="text-base text-black pl-5">Technical Vocational Livelihood
                        Information Communication and
                        Technology</h1>
                      <h3 className="text-sm text-gray-400 pl-5">Technology
                        Faith College: Fidelis Senior High School</h3>
                    </div>
                    <div className='w-16 h-6 text-xs text-white rounded-md flex justify-center items-center bg-gray-700'>
                      <h1>2017-2019</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-fit h-60 ml-20 reveal">
            {/* Timelime Experience */}
            <div className="w-full">
              <h2 className="text-2xl font-bold text-black">Experiences</h2>
              <div className="mt-5 relative border-l-4 border-gray-700 pl-4">
                {/*Experience in Ionics */}
                <div className="mb-8 relative">
                  <div className="absolute flex justify-center items-center w-12 h-12 bg-white rounded-full -left-10.5 border border-blue-900 hover:border-4"><img src={ionicslogo} alt="" className="w-8 h-8 rounded-full" /></div>
                  <div className='w-xl flex flex-row items-center gap-7'>
                    <div className=''>
                      <h1 className="text-xl text-black pl-5">Demand & Material Planner</h1>
                      <h3 className="text-sm text-gray-400 pl-5">IONICS Electronics Manufacturing Services, Inc.</h3>
                    </div>
                    <div className='w-48 h-6 text-xs text-white rounded-md flex justify-center items-center bg-blue-900'>
                      <h1>May 2025 - August 2025</h1>
                    </div>
                  </div>
                </div>
                {/* Experience in Jco */}
                <div className="mb-8 relative">
                  <div className="absolute flex justify-center items-center w-12 h-12 bg-white rounded-full -left-10.5 border border-orange-500 hover:border-4"><img src={jcologo} alt="" className="w-8 h-8 rounded-full" /></div>
                  <div className='w-xl flex flex-row items-center gap-25'>
                    <div className='w-60'>
                      <h1 className="text-xl text-black pl-5">Inventory Controller</h1>
                      <h3 className="text-sm text-gray-400 pl-5">J.CO Donuts & Coffee</h3>
                    </div>
                    <div className='w-48 h-6 text-xs text-white rounded-md flex justify-center items-center bg-orange-400'>
                      <h1>October 2023 - August 2024</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Tech Stack  */}
          <div className='w-3xl h-fit ml-20 mb-10 reveal'>
            <h1 className='text-2xl font-bold text-black'>Tech Stack</h1>
            <div className='mt-3'>
              <h1 className='text-md text-black pl-5'>Frontend</h1>
              <div className='flex flex-row mt-3'>
                <h2 className='text-sm text-gray-400 pl-5'>HTML / CSS</h2>
                <h2 className='text-sm text-gray-400 pl-5'>JavaScript</h2>
                <h2 className='text-sm text-gray-400 pl-5'>TypeScript</h2>
              </div>
            </div>
            <div className='mt-3'>
              <h1 className='text-md text-black pl-5'>Framework</h1>
              <div className='flex flex-row mt-3'>
                <h2 className='text-sm text-gray-400 pl-5'>React</h2>
                <h2 className='text-sm text-gray-400 pl-5'>Express.js</h2>
                <h2 className='text-sm text-gray-400 pl-5'>.Net</h2>
              </div>
            </div>
            <div className='mt-3'>
              <h1 className='text-md text-black pl-5'>Backend</h1>
              <div className='flex flex-ro mt-3'>
                <h2 className='text-sm text-gray-400 pl-5'>Node.js</h2>
                <h2 className='text-sm text-gray-400 pl-5'>PHP</h2>
                <h2 className='text-sm text-gray-400 pl-5'>Python</h2>
                <h2 className='text-sm text-gray-400 pl-5'>C#</h2>
                <h2 className='text-sm text-gray-400 pl-5'>REST API</h2>
              </div>
            </div>
            <div className='mt-3'>
              <h1 className='text-md text-black pl-5'>Database</h1>
              <div className='flex flex-row mt-3'>
                <h2 className='text-sm text-gray-400 pl-5'>MySQL</h2>
                <h2 className='text-sm text-gray-400 pl-5'>MSSQL</h2>
                <h2 className='text-sm text-gray-400 pl-5'>MongoDB</h2>
                <h2 className='text-sm text-gray-400 pl-5'>PostgreSQL</h2>
                <h2 className='text-sm text-gray-400 pl-5'>Supabase</h2>
              </div>
            </div>
            <div className='mt-3'>
              <h1 className='text-md text-black pl-5'>Development Tools</h1>
              <div className='flex flex-row mt-3'>
                <h2 className='text-sm text-gray-400 pl-5'>VS Code</h2>
                <h2 className='text-sm text-gray-400 pl-5'>Visual Studio 2022</h2>
                <h2 className='text-sm text-gray-400 pl-5'>Github</h2>
                <h2 className='text-sm text-gray-400 pl-5'>npm/yarn</h2>
                <h2 className='text-sm text-gray-400 pl-5'>Postman</h2>
              </div>
            </div>
          </div>
          {/* Recent Projects */}
          <div className='w-3xl h-fit ml-20 pb-20 reveal'>
            <h1 className='text-2xl font-bold text-black mb-6'>Recent Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {/* Project 1 */}
              <div className='group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between'>
                <div>
                  <h1 className='text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors'>My Thesis Project</h1>
                  <p className='text-sm text-gray-500 mt-2 leading-relaxed'>Traffic Detect: Vehicle Detection and Counting System for Traffic Flow Monitoring Along Two Main Roads in Tanauan City, Batangas Build in Python and Yolov8 Algorithm</p>
                </div>
                <button className='mt-4 text-sm text-blue-600 hover:text-blue-800 font-bold self-start cursor-pointer transition-colors'>View Demo →</button>
              </div>

              {/* Project 2 */}
              <div className='group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between'>
                <div>
                  <h1 className='text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors'>Point of Sales</h1>
                  <p className='text-sm text-gray-500 mt-2 leading-relaxed'>Point of Sales (POS) System in Modern UI/UX using Dynamic User Control for efficiency and
                    reliable experience for improving accuracy, reduce error and improvise sales products.</p>
                </div>
                <button className='mt-4 text-sm text-blue-600 hover:text-blue-800 font-bold self-start cursor-pointer transition-colors'>View Demo →</button>
              </div>

              {/* Project 3 */}
              <div className='group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between'>
                <div>
                  <h1 className='text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors'>FINDSup</h1>
                  <p className='text-sm text-gray-500 mt-2 leading-relaxed'>Web-based application that connects local businesses with nearby suppliers and service providers.</p>
                </div>
                <a href="https://block-ai-study-4aj8.vercel.app/" target="_blank" rel="noopener noreferrer" className="mt-4 text-sm text-blue-600 hover:text-blue-800 font-bold self-start transition-colors">View Project →</a>
              </div>

              {/* Project 4 */}
              <div className='group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between'>
                <div>
                  <h1 className='text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors'>BlockAIStudy</h1>
                  <p className='text-sm text-gray-500 mt-2 leading-relaxed'>Productivity and learning platform with AI assistance, collaboration tools, focus management, and secure study support.</p>
                </div>
                <a href="https://block-ai-study-4aj8.vercel.app/" target="_blank" rel="noopener noreferrer" className="mt-4 text-sm text-blue-600 hover:text-blue-800 font-bold self-start transition-colors">View Project →</a>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side Container (currently empty) */}
        <div className='w-full md:w-md pl-5 pt-4'> {/* On mobile, take full width and auto height. On medium screens and up, revert to original width. */}
          {/* Services */}
          <div className="w-80 h-40 mt-5">
            <h2 className="text-black font-bold text-lg">Services</h2>
            <div className="text-black mt-2">
              <h3 className="mb-1">- Custom Software Application</h3>
              <h3 className="mb-1">- Web Development</h3>
              <h3 className="mb-1">- Mobile Development</h3>
              <h3 className="mb-1">- SaaS Development</h3>
            </div>
          </div>
          {/* Contacts */}
          <div className="w-80 h-40 mt-5">
            <h2 className="text-black font-bold text-lg">Contacts</h2>
            <h1 className='text-md text-black pl-5 mt-3'>Phone</h1>
            <div className='flex flex-row'>
              <h2 className='text-sm text-gray-400 pl-5'>0968-2196-318</h2>
            </div>
            <h1 className='text-md text-black pl-5 mt-3'>Email</h1>
            <div className='flex flex-row'>
              <h2 className='text-sm text-gray-400 pl-5'>rolandojrhernandez0623200@gmail.com</h2>
            </div>
          </div>
          {/* Social Media */}
          <div className="w-80 h-30 mt-3">
            <h2 className="text-black font-bold text-lg">Social Media</h2>
            <div className='h-12 flex items-center'>
              <GitHubIcon className='w-5 h-5 cursor-pointer'/>
              <InstagramIcon className='w-20 h-5 cursor-pointer'/>
              <LinkedInIcon className='w-5 h-5 cursor-pointer'/>            
              <FacebookIcon className='w-5 h-5 cursor-pointer'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;

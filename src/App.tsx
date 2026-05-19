import { Mail, Calendar } from 'lucide-react';
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

  return (
    <>
      <div className="flex flex-row">
        {/* Left Side Container */}
        <div className="w-130 h-lvh bg-gray-700 flex flex-col justify-baseline items-center pt-10 gap-2 ">
          <div className="text-white w-80 h-96 flex flex-col gap-3 items-center" >
            {/* My Image */}
            <img src={myphoto} alt="" className="w-48 h-48 rounded-full border-4 border-white" />
            {/* My Name */}
            <h2 className="text-xl">Rolando Badillo Hernandez Jr.</h2>
            {/* My Professions */}
            <div className="text-2xl w-80 h-8 pl-13 flex items-center">
              <h3>{displayedText}</h3>
            </div>
            {/* Buttons Schedule and Send Email */}
            <div className="w-80 h-10 gap-2 flex justify-center item-center">
              <button className="p-2 text-sm flex flex-row gap-2 text-white bg-black rounded-md hover:text-black hover:bg-white duration-300 cursor-pointer"><Calendar className="w-5 h-5" />Schedule a Call</button>
              <button className="p-2 text-sm flex flex-row gap-2 text-white border-2 border-white rounded-md hover:text-black hover:bg-white cursor-pointer"><Mail className="w-5 h-5" />Send Email</button>
            </div>
          </div>
          {/* About */}
          <div className="w-80 h-60 border-b-2 border-white">
            <h2 className="text-white font-bold text-lg">About</h2>
            <div className="text-white flex justify-normal mt-2 text-justify">
              <h3>I'm a Passionate in Computer Science with focus in Build Software Solution and solve the Real World Problems. For Better Future and Tomorrow.</h3>
            </div>
          </div>
          {/* Services */}
          <div className="w-80 h-60 mt-5">
            <h2 className="text-white font-bold text-lg">Services</h2>
            <div className="text-white mt-2">
              <h3 className="mb-1">- Custom Software Application</h3>
              <h3 className="mb-1">- Web Development</h3>
              <h3 className="mb-1">- Mobile Development</h3>
              <h3 className="mb-1">- SaaS Development</h3>
            </div>
          </div>
        </div>
        {/* Middle Container */}
        <div className="w-5xl h-lvh overflow-y-auto overflow-x-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {/* Education */}
          <div className="w-3xl h-fit m-20">
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
          <div className="w-fit h-60 ml-20 ">
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
          <div className='w-3xl h-fit ml-20 mb-10'>
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
          {/* Recent Porjects */}
          <div className='w-3xl h-fit ml-20'>
            <h1 className='text-2xl font-bold text-black'>Recent Projects</h1>
            <div className='mt-3'>
              <h1 className='text-md text-black pl-5'>My Thesis Project</h1>
              <h2 className='text-sm text-gray-400 pl-5'>Traffic Detect: Vehicle Detection and Counting System for Traffic Flow Monitoring Along Two
                Main Roads in Tanauan City, Batangas Build in Python and Yolov8 Algorithm</h2>
              <button className='text-sm text-blue-600 hover:underline font-semibold p-1 ml-5 cursor-pointer'>View Demo</button>
            </div>
            <div className='mt-3'>
              <h1 className='text-md text-black pl-5'>Point of Sales</h1>
              <h2 className='text-sm text-gray-400 pl-5'>Pointing Sales, Reduce error and Improvise sales products.</h2>
              <button className='text-sm text-blue-600 hover:underline font-semibold p-1 ml-5 cursor-pointer'>View Demo</button>
            </div>
            <div className='mt-3'>
              <h1 className='text-md text-black pl-5'>FINDSup</h1>
              <h2 className='text-sm text-gray-400 pl-5'>is web-based application that connects local businesses with nearby suppliers and service providers.</h2>
              <button className='p-1 ml-5'><a href="https://block-ai-study-4aj8.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline font-semibold">View Project</a></button>
            </div>
            <div className='mt-3'>
              <h1 className='text-md text-black pl-5'>BlockAIStudy</h1>
              <h2 className='text-sm text-gray-400 pl-5'>is a web-based application productivity and learning platform with AI assistance, collaboration tools, focus management, and secure study support.</h2>
              <button className='p-1 ml-5'><a href="https://block-ai-study-4aj8.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline font-semibold">View Project</a></button>
            </div>
          </div>
        </div>
        {/* Right Side Container */}
        <div className='w-2xl border border-blue-500'>

        </div>
      </div>
    </>
  )
}

export default App;

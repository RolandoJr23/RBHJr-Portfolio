import imagepos from '../assets/projects/image/pos.png'
import imagefindsup from '../assets/projects/image/findsup.png'
import imageblockaistudy from '../assets/projects/image/blockaistudy.png';


export interface ProjectDetails {
    id: string | number;
    title: string;
    description: string;
    overview: string;
    date: string;
    image: string;
    techstack: string;
    projectURL: string;
}

export const projectdetails: ProjectDetails[] = [
    {
        id: 1,
        title: "PointOfSales",
        description: "A robust POS system for canteen stores, streamlining sales, reducing errors, and delivering a modern user-friendly interface with dynamic controls.",
        overview: "A robust Point of Sales (POS) solution built with C# and Windows Forms (WinForms). Designed specifically for a canteen store environment, this system focuses on streamlining sales, reducing human error, and providing a modern, user-friendly interface through the implementation of Dynamic User Controls.",
        date: "October2025-November2025",
        image: imagepos,
        techstack: "C#, WinForms, Crystal Reports / RDLC, Visual Studio",
        projectURL: "none",
    },{
        id: 2,
        title: "PointOfSales",
        description: "A robust POS system for canteen stores, streamlining sales, reducing errors, and delivering a modern user-friendly interface with dynamic controls.",
        overview: "A robust Point of Sales (POS) solution built with C# and Windows Forms (WinForms). Designed specifically for a canteen store environment, this system focuses on streamlining sales, reducing human error, and providing a modern, user-friendly interface through the implementation of Dynamic User Controls.",
        date: "October2025-November2025",
        image: imagepos,
        techstack: "C#, WinForms, Crystal Reports / RDLC, Visual Studio",
        projectURL: "none",
    },{
        id: 3,
        title: "FINDSup",
        description: "A web-based SaaS platform connecting local businesses, suppliers, and consumers through a faster, transparent, and reliable B2B and B2C ecosystem.",
        overview: "FINDSup is a web-based SaaS platform designed to revolutionize the way local businesses and consumers interact. It provides a bridge between local suppliers and consumers, enabling a faster, more transparent, and reliable business-to-consumer (B2C) and business-to-business (B2B) ecosystem.",
        date: "January2026-March2026",
        image: imagefindsup,
        techstack: "React(v19) + Vite, CSS, Material UI, Node.js, Express.js, MongoDB, Python, Flask, PyTorch, Escrow, Twilio",
        projectURL: "Not Yet",
    },{
        id: 4,
        title: "BlockAIStudy",
        description: "Productivity and learning platform with AI assistance, collaboration tools, focus management, and secure study support.",
        overview: "BlockAIStudy is a modern web-based productivity and learning platform that combines focus management, AI-powered assistance, collaboration tools, and academic utilities into a single streamlined experience. The platform is designed to support students, educators, teams, and interview sessions through secure study environments, distraction prevention, real-time collaboration, and intelligent learning support.",
        date: "April2026-May2026",
        image: imageblockaistudy,
        techstack: 'React(v19) + Vite, Tailwind CSS, Lucide-react, Node.js, Express.js, WebSocket, WebRTC, PostgreSQL, Qwen3-Next',
        projectURL: "https://block-ai-study-4aj8.vercel.app/",
    }
]
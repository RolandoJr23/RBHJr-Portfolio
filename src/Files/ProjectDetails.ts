import imagetrafficdetect from '../assets/projects/image/trafficdetect.png';
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
    featureinclude: string[];
    projectURL: string;
}

export const projectdetails: ProjectDetails[] = [
    {
        id: 1,
        title: "TD: Vehicle Detection & Counting System",
        description: "An AI-powered traffic monitoring system using YOLOv8 for real-time vehicle detection, counting, and traffic flow analysis in Tanauan City.",
        overview: "The increased developments in road, housing, and commercial infrastructures like the case of Tanauan City, Batangas resulted in an increased rate of traffic congestion along its two major roads like the Pres. J.P. Laurel Highway and A. Mabini Avenue which were recorded to have severe and heavy traffic flows as per the data gathered from the City TMO. Utilizing Operational Research and Artificial Intelligence using Ultralytics (YoloV8) Algorithm, the researcher conducted a study that will provide a real time vehicle detection and counting process that would provide information related to vehicle counting and traffic flow monitoring along these 2 major roads. The information that will be gathered will be used by the City Traffic Management Office as their planning criteria in monitoring and regulating the traffic flow along the major roads in Tanauan City.",
        date: "May2023",
        image: imagetrafficdetect,
        techstack: "Flask API, Python, OpenCV, Ultralytics (YoloV8), PyTorch, Pandas, Numpy, Matplotlib",
        featureinclude: ['Real-time vehicle detection and counting using AI-powered Ultralytics YOLOv8 algorithm' , 'Traffic flow monitoring for major roads in Tanauan City', 'Automated vehicle data collection and analysis', 'Monitoring of congestion levels on Pres. J.P. Laurel Highway and A. Mabini Avenue', 'AI-assisted traffic management support for the City Traffic Management Office (TMO)', 'Data-driven planning and traffic regulation insights', 'Operational Research integration for traffic analysis and optimization', 'Live monitoring dashboard for vehicle movement and traffic conditions', 'Improved accuracy and reduced manual traffic counting errors', 'Scalable system for future smart city traffic management implementations'],
        projectURL: "none",
    },{
        id: 2,
        title: "PointOfSales",
        description: "A robust POS system for canteen stores, streamlining sales, reducing errors, and delivering a modern user-friendly interface with dynamic controls.",
        overview: "A robust Point of Sales (POS) solution built with C# and Windows Forms (WinForms). Designed specifically for a canteen store environment, this system focuses on streamlining sales, reducing human error, and providing a modern, user-friendly interface through the implementation of Dynamic User Controls.",
        date: "October2025-November2025",
        image: imagepos,
        techstack: "C#, WinForms, Crystal Reports / RDLC, Visual Studio",
        featureinclude: ['Dynamic User Controls: Implements a modular UI architecture for improved navigation.', 'Account Management: Supports user logins, staff information management, and account updates.' , 'Order Management: Comprehensive bill listing, order tracking, and checkout procedures.', 'Inventory Control: Dedicated modules for managing dishes, drinks, and canteen-specific products.', 'Receipt Generation: Built-in printing capabilities for transaction receipts.', 'Reporting: Integrated reporting tools (RDLC) for sales tracking'],
        projectURL: "none",
    },{
        id: 3,
        title: "FINDSup",
        description: "A web-based SaaS platform connecting local businesses, suppliers, and consumers through a faster, transparent, and reliable B2B and B2C ecosystem.",
        overview: "FINDSup is a web-based SaaS platform designed to revolutionize the way local businesses and consumers interact. It provides a bridge between local suppliers and consumers, enabling a faster, more transparent, and reliable business-to-consumer (B2C) and business-to-business (B2B) ecosystem.",
        date: "January2026-March2026",
        image: imagefindsup,
        techstack: "React(v19) + Vite, CSS, Material UI, Node.js, Express.js, MongoDB, Python, Flask, PyTorch, Escrow, Twilio",
        featureinclude: ['Supplier Marketplace: Browse local businesses by category, location, and product availability.', 'Real-time Messaging: Direct communication between buyers and suppliers using socket.io.' , 'AI Admin Support: Integrated chatbot using a PyTorch intent-classifier to assist users with common queries.', 'Cart & Ordering: Simplified purchasing workflow with wholesale pricing support.', 'Auto Complete & Auto Suggestion (Product Recommendation): Smart auto-complete and suggests products instantly as users type, reducing search time and improving discovery.', 'Secure Payment Gateway (Escrow): Escrow payment gateway ensures secure transactions by holding funds until services or products are successfully delivered and approved.', 'SMS Verification (Twilio): SMS verification ensures recipient numbers are validated using one-time passcodes, enhancing account security and preventing unauthorized access.', 'Order Tracking: Track your order in real-time from confirmation to delivery. Stay updated with status changes, shipping progress, and estimated arrival.', 'Refund Items : Request refunds easily for eligible items. Submit a return, track approval, and receive your refund through your original payment method.', 'Supplier Console: Dedicated dashboard for business owners to manage products, pricing tiers, and orders.', 'Secure Auth: JWT-based authentication for user and business accounts.'],
        projectURL: "Not Yet",
    },{
        id: 4,
        title: "BlockAIStudy",
        description: "Productivity and learning platform with AI assistance, collaboration tools, focus management, and secure study support.",
        overview: "BlockAIStudy is a modern web-based productivity and learning platform that combines focus management, AI-powered assistance, collaboration tools, and academic utilities into a single streamlined experience. The platform is designed to support students, educators, teams, and interview sessions through secure study environments, distraction prevention, real-time collaboration, and intelligent learning support.",
        date: "April2026-May2026",
        image: imageblockaistudy,
        techstack: 'React(v19) + Vite, Tailwind CSS, Lucide-react, Node.js, Express.js, WebSocket, WebRTC, PostgreSQL, Qwen3-Next',
        featureinclude: ['Smart Dashboard: productivity insights, analytics, session tracking, and performance overview.', 'Academy Hub: centralized space for learning resources and academic tools.' , 'Focus System: distraction detection, app/website monitoring, and focus session tracking.', 'AI Learning Tools: AI tutor, smart notes, quiz/flashcard generator, practice tests, and interview coaching.', 'Meet System: collaboration mode for group study, planning and teamwork + interview mode for secure 1:1 sessions.', 'Real-Time System: WebSocket + WebRTC powered communication for live collaboration.'],
        projectURL: "https://block-ai-study-4aj8.vercel.app/",
    }
]
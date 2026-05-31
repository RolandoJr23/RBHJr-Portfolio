import React, { useEffect, useMemo, useRef, useState } from 'react';
import { X, Send, Sparkles } from 'lucide-react';
import myphoto from '../assets/rbhjr.png';

const quickPrompts = [
  'Tell me about your projects',
  'What is your experience?',
  'How can I contact you?',
];

const createAssistantReply = (rawMessage) => {
  const message = rawMessage.toLowerCase();

  if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    return 'Hello! I am Rolando’s portfolio assistant. Ask me about projects, experience, skills, or contact details.';
  }

  if (message.includes('what is your preferred framework?') || (message.includes('framework'))) {
    return 'My preferred framework as a Full Stack Developer is React framework or library.';
  }

  if (message.includes('what is your preferred backend?') || (message.includes('backend'))) {
    return 'My preferred backend as a Full Stack Developer is Node.js or Python.';
  }

  if (message.includes('what is your preferred database?') || (message.includes('database'))) {
    return 'My preferred database are both SQL NoSQL (MongoDB) and SQL (PostgreSQL).';
  }

  if (message.includes('what is your preferred development tools?') || (message.includes('tools'))) {
    return 'My preferred development tool is VSCode.';
  }

  if (message.includes('when did you create Traffic Detect?') || (message.includes('create') && (message.includes('traffic detect') || message.includes('TD: Vehicle Detection & Counting System')))) {
    return 'May2023';
  }

  if (message.includes('what are the features the of Traffic Detect?') || (message.includes('features') && (message.includes('traffic detect') || message.includes('TD: Vehicle Detection & Counting System')))) {
    return 'These are the features in Traffic Detect (Real-time vehicle detection and counting using AI-powered Ultralytics YOLOv8 algorithm., Traffic flow monitoring for major roads in Tanauan City., Automated vehicle data collection and analysis., Monitoring of congestion levels on Pres. J.P. Laurel Highway and A. Mabini Avenue., AI-assisted traffic management support for the City Traffic Management Office (TMO), Data-driven planning and traffic regulation insights., Operational Research integration for traffic analysis and optimization., Live monitoring dashboard for vehicle movement and traffic conditions., Improved accuracy and reduced manual traffic counting errors., Scalable system for future smart city traffic management implementations.)';
  }

  if (message.includes('what are the tech stacks of Traffic Detect?') || ((message.includes('techstack') || message.includes('tech stack')) && (message.includes('traffic detect') || message.includes('TD: Vehicle Detection & Counting System')))) {
    return 'These are the tech stacks used in Traffic Detect (HTML, CSS, Javascript, Python, Flask API, Gunicorn, OpenCV, Ultralytics (YoloV8), PyTorch, Numpy)';
  }

  if (message.includes('what is your Thesis Project?') || (message.includes('thesis') && message.includes('project'))) {
    return 'My Thesis Project is the Title Traffic Detect: Vehicle Detection and Counting System for Traffic Flow Monitoring Along Two Main Roads in Tanauan City, Batangas. It is built in Python and uses the YOLOv8 algorithm.';
  }

  if (message.includes('when did you create point of sales?') || (message.includes('create') && (message.includes('pos') || message.includes('point of sales')))) {
    return 'From October2025 to November2025';
  }

  if (message.includes('what are the features the of point of sales?') || (message.includes('features') && (message.includes('pos') || message.includes('point of sales')))) {
    return 'These are the features in Point of Sales (Dynamic User Controls: Implements a modular UI architecture for improved navigation., Account Management: Supports user logins, staff information management, and account updates., Order Management: Comprehensive bill listing, order tracking, and checkout procedures., Inventory Control: Dedicated modules for managing dishes, drinks, and canteen-specific products., Receipt Generation: Built-in printing capabilities for transaction receipts., Reporting: Integrated reporting tools (RDLC) for sales tracking)';
  }

  if (message.includes('what are the tech stacks of point of sales?') || ((message.includes('techstack') || message.includes('tech stack')) && (message.includes('pos') || message.includes('point of sales')))) {
    return 'These are the tech stacks used in Point of Sales (C#, WinForms, Crystal Reports RDLC, Visual Studio)';
  }

  if (message.includes('what is point of sales?') || message.includes('point of sales') || message.includes('pos')) {
    return 'Point of Sales is a modern UI/UX POS system with dynamic user control designed for efficiency and a reliable experience, helping improve accuracy, reduce errors, and improve sales product handling.';
  }

  if (message.includes('when did you create findsup?') || (message.includes('create') && message.includes('findsup'))) {
    return 'From January2026 to March2026';
  }

  if (message.includes('what are the features the of findsup?') || (message.includes('features') && message.includes('findsup'))) {
    return 'These are the features in Findsup (Supplier Marketplace: Browse local businesses by category, location, and product availability., Real-time Messaging: Direct communication between buyers and suppliers using socket.io., AI Admin Support: Integrated chatbot using a PyTorch intent-classifier to assist users with common queries., Cart & Ordering: Simplified purchasing workflow with wholesale pricing support., Auto Complete & Auto Suggestion (Product Recommendation): Smart auto-complete and suggests products instantly as users type, reducing search time and improving discovery., Secure Payment Gateway (Escrow): Escrow payment gateway ensures secure transactions by holding funds until services or products are successfully delivered and approved., SMS Verification (Twilio): SMS verification ensures recipient numbers are validated using one-time passcodes, enhancing account security and preventing unauthorized access., Order Tracking: Track your order in real-time from confirmation to delivery. Stay updated with status changes, shipping progress, and estimated arrival., Refund Items : Request refunds easily for eligible items. Submit a return, track approval, and receive your refund through your original payment method., Supplier Console: Dedicated dashboard for business owners to manage products, pricing tiers, and orders., Secure Auth: JWT-based authentication for user and business accounts.)';
  }

  if (message.includes('what are the tech stacks of findsup?') || ((message.includes('techstack') || message.includes('tech stack')) && message.includes('findsup'))) {
    return 'These are the tech stacks used in Findsup (React(v19) + Vite, CSS, Material UI, Node.js, Express.js, MongoDB, Python, Flask, PyTorch, Escrow, Twilio)';
  }

  if (message.includes('what is findsup?') || message.includes('findsup')) {
    return 'FINDSup is a web-based application that connects local businesses with nearby suppliers and service providers.';
  }

  if (message.includes('when did you create blockaistudy?') || (message.includes('create') && message.includes('blockaistudy'))) {
    return 'From April2026 to May2026';
  }

  if (message.includes('what are the features the of blockaistudy?') || (message.includes('features') && message.includes('blockaistudy'))) {
    return 'These are the features in Blockaistudy (Smart Dashboard: productivity insights, analytics, session tracking, and performance overview., Academy Hub: centralized space for learning resources and academic tools., Focus System: distraction detection, app/website monitoring, and focus session tracking., AI Learning Tools: AI tutor, smart notes, quiz/flashcard generator, practice tests, and interview coaching., Meet System: collaboration mode for group study, planning and teamwork + interview mode for secure 1:1 sessions., Real-Time System: WebSocket + WebRTC powered communication for live collaboration.)';
  }

  if (message.includes('what are the tech stacks of blockaistudy?') || ((message.includes('techstack') || message.includes('tech stack')) && message.includes('blockaistudy'))) {
    return 'These are the tech stacks used in Blockaistudy (React(v19) + Vite, Tailwind CSS, Lucide-react, Node.js, Express.js, WebSocket, WebRTC, PostgreSQL, Qwen3-Next)';
  }

  if (message.includes('what is blockaistudy') || message.includes('blockaistudy')) {
    return 'BlockAIStudy is a productivity and learning platform with AI assistance, collaboration tools, focus management, and secure study support.';
  }

  if (message.includes('project') || message.includes('portfolio') || message.includes('work')) {
    return 'I can tell you that my Recent Projects are My thesis project, Point of Sales, FINDSup, and BlockAIStudy.';
  }

  if (message.includes('experience') || message.includes('job') || message.includes('work history')) {
    return `My previous work experience includes roles as a Demand & Material Planner, Inventory Controller, and Stockman. I am now focused on further developing my software development skills and pursuing my long-term career goals in the tech industry.`;
  }

  if (message.includes('skill') || message.includes('tech') || message.includes('stack')) {
    return 'My skills in the tech stack are React, TypeScript, JavaScript, Node.js, Express.js, PHP, Python, C#, MySQL, MSSQL, MongoDB, PostgreSQL, and Supabase.';
  }

  if (message.includes('contact') || message.includes('email') || message.includes('reach')) {
    return 'You can send an email to rolandojrhernandez0623200@gmail.com, or use the Schedule a Call button on the portfolio.';
  }

  if (message.includes('schedule') || message.includes('meeting') || message.includes('call')) {
    return 'Yes, you can book a call using the Schedule a Call button. It opens the Cal.com schedule flow.';
  }

  if (message.includes('who are you?') || (message.includes('about') && !message.includes('how'))) {
    return `My name is Rolando I'm a Full Stack Software Engineer focused on building software solutions, development with user-centric mindset, building modern software with integrated AI-powered tools.`;
  }

  if (message.includes('how are you?') || (message.includes('about') && message.includes('how'))) {
    return `I’m doing great and focusing on building new projects.`;
  }

  if (message.includes('how old are you?') || (message.includes('about') && message.includes('how')) || (message.includes('old'))) {
    return `I’m 25 years old.`;
  }

  if (message.includes('where are you from?') || (message.includes('about') && message.includes('from'))) {
    return `I’m from San Antonio Santo Tomas, Batangas, Philippines`;
  }

  if (message.includes('what is your height?') || (message.includes('about') && message.includes('height'))) {
    return `My height is 5 feet 10 inches.`;
  }

  if (message.includes('what is your weight?') || (message.includes('about') && message.includes('weight'))) {
    return `My weight is around 100 kg.`;
  }

  if (message.includes('what is your bloodtype?') || (message.includes('about') && message.includes('bloodtype'))) {
    return `My blood type is O positive.`;
  }

  if (message.includes('What project are you working on?') || message.includes('you working on')) {
    return `An application that provides solutions to specific problems.`;
  }

  if (message.includes('did you eat') || message.includes('eat')) {
    return `Yep 😄`;
  }

  if (message.includes('are you sleeping?') || message.includes('sleeping')) {
    return `I haven’t slept yet because I’m focused on my goals.`;
  }

  if (message.includes('well go to sleep')) {
    return `Later on, when I’ve accomplished something in what I’m doing.`;
  }

  if (message.includes('certificate') || message.includes('cert')) {
    return 'My portfolio includes recent certificates I have received, which you can explore in the timeline section.';
  }

  if (message.includes('github') || message.includes('source')) {
    return 'You can check the social links section for GitHub and other platforms.';
  }

  return 'Thanks for the message. Try asking about projects, experience, skill on tech stack, contact details, or scheduling a call.';
};

const ChatSession = ({ onClose, isDarkMode = false }) => {
  const shellClass = isDarkMode
    ? 'border-gray-700 bg-slate-900 text-slate-100 shadow-2xl shadow-black/40'
    : 'border-gray-200 bg-white text-gray-900 shadow-2xl shadow-black/20';

  const headerClass = isDarkMode
    ? 'border-gray-700 bg-slate-950 text-white'
    : 'border-gray-100 bg-gray-700 text-white';

  const bodyClass = isDarkMode ? 'bg-slate-900' : 'bg-gray-50';
  const footerClass = isDarkMode ? 'border-gray-700 bg-slate-900' : 'border-gray-100 bg-white';
  const quickPromptClass = isDarkMode
    ? 'border-gray-600 bg-slate-800 text-slate-200 hover:border-white hover:text-white'
    : 'border-gray-200 bg-gray-50 text-gray-700 hover:border-black hover:text-black';
  const inputClass = isDarkMode
    ? 'border-gray-600 bg-slate-800 text-white placeholder:text-slate-400 focus:border-white focus:bg-slate-900'
    : 'border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-black focus:bg-white';
  const assistantBubbleClass = isDarkMode
    ? 'rounded-tl-sm bg-slate-800 text-slate-100'
    : 'rounded-tl-sm bg-white text-gray-700';
  const typingClass = isDarkMode
    ? 'rounded-tl-sm bg-slate-800 text-slate-300'
    : 'rounded-tl-sm bg-white text-gray-500';
  const closeClass = isDarkMode
    ? 'text-slate-300 hover:bg-white/10 hover:text-white'
    : 'text-gray-200 hover:bg-white/10 hover:text-white';
  const sendClass = isDarkMode
    ? 'bg-white text-slate-900 hover:bg-slate-200 disabled:bg-slate-600'
    : 'bg-black text-white hover:bg-gray-800 disabled:bg-gray-300';

  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'assistant',
      text: `Hi! I'm Jr. How can I help you today? If you'd like to learn more about my projects, experience, skills, or contact information, feel free to ask. I'm happy to answer your questions and provide any information you need.`,
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const replyTimerRef = useRef(null);

  const canSend = useMemo(() => inputValue.trim().length > 0 && !isTyping, [inputValue, isTyping]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    return () => {
      if (replyTimerRef.current) {
        clearTimeout(replyTimerRef.current);
      }
    };
  }, []);

  const sendMessage = () => {
    const text = inputValue.trim();
    if (!text || isTyping) return;

    const userMessage = {
      id: Date.now(),
      role: 'user',
      text,
    };

    setMessages((current) => [...current, userMessage]);
    setInputValue('');
    setIsTyping(true);

    if (replyTimerRef.current) {
      clearTimeout(replyTimerRef.current);
    }

    replyTimerRef.current = setTimeout(() => {
      const reply = createAssistantReply(text);
      setMessages((current) => [
        ...current,
        {
          id: Date.now() + 1,
          role: 'assistant',
          text: reply,
        },
      ]);
      setIsTyping(false);
    }, 900);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      sendMessage();
    }
  };

  const handleQuickPrompt = (prompt) => {
    setInputValue(prompt);
  };

  return (
    <div className={`w-[min(92vw,22rem)] overflow-hidden rounded-3xl border ${shellClass}`}>
      <div className={`flex items-center justify-between border-b px-4 py-3 ${headerClass}`}>
        <div className="flex items-center gap-3">
          <img
            src={myphoto}
            alt="Rolando Jr Hernandez"
            className="h-11 w-11 rounded-full border-2 border-white object-cover shadow-md"
          />
          <div>
            <h3 className="text-sm font-semibold">Rolando Jr Hernandez</h3>
            <p className="text-xs text-gray-300">Online - Instant portfolio-based replies.</p>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close chat"
          className={`rounded-full p-2 transition-colors ${closeClass}`}
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className={`max-h-80 space-y-3 overflow-y-auto px-4 py-4 ${bodyClass}`}>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm shadow-sm ${
              message.role === 'user'
                ? 'ml-auto rounded-tr-sm bg-black text-white'
                : assistantBubbleClass
            }`}
          >
            {message.text}
          </div>
        ))}

        {isTyping && (
          <div className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm shadow-sm ${typingClass}`}>
            Typing...
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className={`border-t px-3 py-3 ${footerClass}`}>
        <div className="mb-3 flex flex-wrap gap-2">
          {quickPrompts.map((prompt) => (
            <button
              key={prompt}
              type="button"
              onClick={() => handleQuickPrompt(prompt)}
              className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs transition-colors ${quickPromptClass}`}
            >
              <Sparkles className="h-3 w-3" />
              {prompt}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            className={`min-w-0 flex-1 rounded-full border px-4 py-2 text-sm outline-none transition-colors ${inputClass}`}
          />
          <button
            type="button"
            onClick={sendMessage}
            disabled={!canSend}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors disabled:cursor-not-allowed ${sendClass}`}
            aria-label="Send message"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatSession;

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

  if (message.includes('what is your thesis project') || (message.includes('thesis') && message.includes('project'))) {
    return 'My Thesis Project is the Title Traffic Detect: Vehicle Detection and Counting System for Traffic Flow Monitoring Along Two Main Roads in Tanauan City, Batangas. It is built in Python and uses the YOLOv8 algorithm.';
  }

  if (message.includes('what is point of sales') || (message.includes('point of sales') || message.includes('pos'))) {
    return 'Point of Sales is a modern UI/UX POS system with dynamic user control designed for efficiency and a reliable experience, helping improve accuracy, reduce errors, and improve sales product handling.';
  }

  if (message.includes('what is findsup') || message.includes('findsup')) {
    return 'FINDSup is a web-based application that connects local businesses with nearby suppliers and service providers.';
  }

  if (message.includes('what is blockaistudy') || message.includes('blockaistudy')) {
    return 'BlockAIStudy is a productivity and learning platform with AI assistance, collaboration tools, focus management, and secure study support.';
  }

  if (message.includes('project') || message.includes('portfolio') || message.includes('work')) {
    return 'I can tell you that my Recent Projects are My thesis project, Point of Sales, FINDSup, and BlockAIStudy.';
  }

  if (message.includes('experience') || message.includes('job') || message.includes('work history')) {
    return `My previous job experiences are Demand & Material Planner, Inventory Controller, and StockMan. Now I've continued developing software and pushing my dream.`;
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

  if (message.includes('about') || message.includes('who are you')) {
    return `My name is Rolando I'm a Full Stack Software Engineer focused on building software solutions, development with user-centric mindset, building modern software with integrated AI-powered tools.`;
  }

  if (message.includes('about') || message.includes('how are you')) {
    return `I’m doing great and focusing on building new projects.`;
  }

  if (message.includes('what project is that')) {
    return `An application that provides solutions to specific problems.`;
  }

  if (message.includes('did you eat') || message.includes('eat')) {
    return `Yep 😄`;
  }

  if (message.includes('are you sleeping') || message.includes('sleeping')) {
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
      text: 'Hi! I’m Jr, What can I do for you? Is there anything you want to know about my projects, experiences or my contact details? Tell me what you need or what you have to ask.',
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

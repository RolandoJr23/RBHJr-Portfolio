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
    return 'I can tell you about the Recent Projects section, including Thesis Project, Point of Sales, FINDSup, and BlockAIStudy.';
  }

  if (message.includes('experience') || message.includes('job') || message.includes('work history')) {
    return 'Rolando has experience as a Software Engineer, Demand & Material Planner, Inventory Controller, and StockMan, with a strong focus on full-stack development.';
  }

  if (message.includes('skill') || message.includes('tech') || message.includes('stack')) {
    return 'His tech stack includes React, TypeScript, JavaScript, Node.js, Express.js, PHP, Python, C#, MySQL, MSSQL, MongoDB, PostgreSQL, and Supabase.';
  }

  if (message.includes('contact') || message.includes('email') || message.includes('reach')) {
    return 'You can send an email to rolandojrhernandez0623200@gmail.com, or use the Schedule a Call button on the portfolio.';
  }

  if (message.includes('schedule') || message.includes('meeting') || message.includes('call')) {
    return 'Yes, you can book a call using the Schedule a Call button. It opens the Cal.com schedule flow.';
  }

  if (message.includes('about') || message.includes('who are you')) {
    return 'Rolando is a Full Stack Software Engineer focused on building practical, user-centric software and AI-powered tools.';
  }

  if (message.includes('certificate') || message.includes('cert')) {
    return 'The portfolio also includes recent certificates, which you can explore in the timeline section.';
  }

  if (message.includes('github') || message.includes('source')) {
    return 'You can check the social links section for GitHub and other platforms.';
  }

  return 'Thanks for the message. Try asking about projects, experience, tech stack, contact details, or scheduling a call.';
};

const ChatSession = ({ onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'assistant',
      text: 'Hi! I’m Rolando Jr Hernandez. Is there anything you want to know about my projects, experiences or my contact details? Tell me what you need or what you have to ask.',
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
    <div className="w-[min(92vw,22rem)] overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl shadow-black/20">
      <div className="flex items-center justify-between border-b border-gray-100 bg-gray-700 px-4 py-3 text-white">
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
          className="rounded-full p-2 text-gray-200 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="max-h-80 space-y-3 overflow-y-auto bg-gray-50 px-4 py-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm shadow-sm ${
              message.role === 'user'
                ? 'ml-auto rounded-tr-sm bg-black text-white'
                : 'rounded-tl-sm bg-white text-gray-700'
            }`}
          >
            {message.text}
          </div>
        ))}

        {isTyping && (
          <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-sm text-gray-500 shadow-sm">
            Typing...
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="border-t border-gray-100 bg-white px-3 py-3">
        <div className="mb-3 flex flex-wrap gap-2">
          {quickPrompts.map((prompt) => (
            <button
              key={prompt}
              type="button"
              onClick={() => handleQuickPrompt(prompt)}
              className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-700 transition-colors hover:border-black hover:text-black"
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
            className="min-w-0 flex-1 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-black focus:bg-white"
          />
          <button
            type="button"
            onClick={sendMessage}
            disabled={!canSend}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-300"
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

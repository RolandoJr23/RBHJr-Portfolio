import React from 'react';
import { MessageCircleMore } from 'lucide-react';


const ChatIcons = ({ isOpen, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isOpen ? 'Close chat' : 'Open chat'}
      className="relative flex h-12 w-12 items-center justify-center rounded-full border bg-gray-700 text-white shadow-black/20 transition-all duration-300 hover:scale-105 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-black/20"
    >
      <MessageCircleMore className="h-7 w-7" />
      <span className="absolute right-0 top-0 h-3 w-3 rounded-full  bg-green-500 shadow-sm" />
    </button>
  );
};

export default ChatIcons;

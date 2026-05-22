import React from 'react';
import { MessageCircleMore } from 'lucide-react';

const ChatIcons = ({ isOpen, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isOpen ? 'Close chat' : 'Open chat'}
      className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gray-700 text-white shadow-lg shadow-black/20 transition-all duration-300 hover:scale-105 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-black/20"
    >
      <MessageCircleMore className="h-7 w-7" />
      <span className="absolute right-0 top-0 h-4 w-4 rounded-full border-2 border-white bg-green-500 shadow-sm" />
    </button>
  );
};

export default ChatIcons;

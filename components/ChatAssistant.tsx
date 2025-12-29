
import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Send, X, Bot, User, Loader2 } from 'lucide-react';
import { getGeminiChat, sendMessageToAI } from '../services/geminiService';
import type { Chat } from '@google/genai';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: "Hey! I'm ForgeAI. Ready to crush your fitness goals? How can I help you today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<Chat | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chatRef.current) {
      chatRef.current = getGeminiChat();
    }
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = input;
    setInput("");
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    if (chatRef.current) {
      const response = await sendMessageToAI(chatRef.current, userMsg);
      setMessages(prev => [...prev, { role: 'ai', text: response }]);
    }
    setIsLoading(false);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 bg-accent p-4 rounded-full shadow-lg shadow-blue-500/20 hover:scale-110 transition-transform flex items-center justify-center"
      >
        {isOpen ? <X className="text-white h-8 w-8" /> : <MessageSquare className="text-white h-8 w-8" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-8 z-50 w-[350px] sm:w-[400px] h-[500px] bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up">
          <div className="bg-zinc-800 p-4 flex items-center gap-3 border-b border-zinc-700">
            <div className="bg-accent p-2 rounded-lg">
              <Bot className="text-white h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold">ForgeAI Assistant</h4>
              <p className="text-xs text-green-400">Online & Motivated</p>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`p-1 rounded-full h-8 w-8 flex-shrink-0 flex items-center justify-center ${msg.role === 'user' ? 'bg-zinc-700' : 'bg-accent'}`}>
                    {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={`p-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-accent text-white rounded-tr-none' : 'bg-zinc-800 text-gray-200 rounded-tl-none'}`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 p-3 rounded-2xl flex gap-2 items-center">
                  <Loader2 className="h-4 w-4 animate-spin text-accent" />
                  <span className="text-xs text-gray-400">Forging response...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-zinc-800/50 border-t border-zinc-700 flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask for training tips..."
              className="flex-1 bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-accent"
            />
            <button 
              onClick={handleSend}
              className="bg-accent p-2 rounded-xl hover:bg-blue-600 transition-colors"
            >
              <Send className="text-white h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatAssistant;

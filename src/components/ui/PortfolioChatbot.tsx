"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, ArrowRight, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale, useContent } from "@/components/providers/LocaleProvider";
import { chatbotKnowledge } from "@/content/chatbot-knowledge";
import { matchChatbotQuery } from "@/lib/chatbot-matcher";
import Link from "next/link";

type ChatMessage = {
  id: string;
  sender: "user" | "bot";
  text: string;
  category?: string;
  isFallback?: boolean;
  relatedProjects?: string[];
  timestamp: Date;
};

export function PortfolioChatbot() {
  const { locale } = useLocale();
  const content = useContent();
  const chatbotConfig = chatbotKnowledge[locale] || chatbotKnowledge.es;

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize with welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: "welcome",
          sender: "bot",
          text: chatbotConfig.welcomeMessage,
          timestamp: new Date(),
        },
      ]);
    }
  }, [chatbotConfig.welcomeMessage, messages.length]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: ChatMessage = {
      id: Math.random().toString(),
      sender: "user",
      text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate thinking/typing effect
    setTimeout(() => {
      const match = matchChatbotQuery(text, locale);
      const botMessage: ChatMessage = {
        id: Math.random().toString(),
        sender: "bot",
        text: match.answer,
        category: match.category,
        isFallback: match.isFallback,
        relatedProjects: match.relatedProjects,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 850);
  };

  const handleQuickReply = (query: string) => {
    handleSendMessage(query);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (hasUnread) {
      setHasUnread(false);
    }
  };

  // Find project details from main content
  const getProjectDetails = (slug: string) => {
    return content.projects?.items?.find((p) => p.slug === slug);
  };

  return (
    <>
      {/* Floating launcher button */}
      <div className="fixed bottom-6 right-6 z-[9999]">
        <button
          onClick={toggleChat}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 text-white shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 border border-sky-400/30"
          aria-label="Chat with AI Assistant"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageSquare className="h-6 w-6" />
          )}

          {/* Unread indicator pulse */}
          {!isOpen && hasUnread && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
            </span>
          )}
        </button>
      </div>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-[9998] w-[385px] max-w-[calc(100vw-2rem)] h-[580px] max-h-[80vh] flex flex-col rounded-2xl glass overflow-hidden shadow-2xl border border-sky-500/20"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-sky-500/15 bg-gradient-to-r from-sky-950/40 to-indigo-950/40">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10 border border-sky-500/30">
                    <span className="text-xs font-mono font-bold text-sky-400">AI</span>
                  </div>
                  <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-emerald-500 border-2 border-[#060913]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Saulo AI Assistant</h3>
                  <p className="text-[10px] font-mono text-sky-400/80">Offline • Free Response</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
              {messages.map((msg) => {
                const isBot = msg.sender === "bot";
                return (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${isBot ? "items-start" : "items-end"} space-y-1`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        isBot
                          ? "bg-slate-900/60 border border-sky-500/10 text-slate-200 rounded-tl-xs"
                          : "bg-sky-500 text-white rounded-tr-xs"
                      }`}
                    >
                      {/* Render line breaks correctly */}
                      <div className="whitespace-pre-line">
                        {msg.text}
                      </div>

                      {/* WhatsApp fallback button */}
                      {isBot && msg.isFallback && (
                        <div className="mt-4 pt-2">
                          <Link
                            href={chatbotConfig.whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-600 transition-colors shadow-md shadow-emerald-500/20"
                          >
                            <MessageCircle className="h-4.5 w-4.5" />
                            {chatbotConfig.whatsappButtonLabel}
                          </Link>
                        </div>
                      )}

                      {/* Contact / Schedule buttons */}
                      {isBot && msg.category === "contact" && (
                        <div className="mt-4 pt-2 flex flex-col gap-2">
                          <Link
                            href={chatbotConfig.whatsappScheduleLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-xs font-semibold text-white hover:bg-emerald-600 transition-colors shadow-md shadow-emerald-500/20"
                          >
                            <MessageCircle className="h-4.5 w-4.5" />
                            {locale === "es" ? "Agendar por WhatsApp" : "Schedule via WhatsApp"}
                          </Link>
                          <Link
                            href={chatbotConfig.emailScheduleLink}
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-4 py-2.5 text-xs font-semibold text-white hover:bg-sky-600 transition-colors shadow-md shadow-sky-500/20"
                          >
                            <Send className="h-4 w-4" />
                            {locale === "es" ? "Agendar por Email" : "Schedule via Email"}
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Related Projects Carousel/Cards inside the chat */}
                    {isBot && msg.relatedProjects && msg.relatedProjects.length > 0 && (
                      <div className="w-full mt-2 pl-2 grid grid-cols-2 gap-2">
                        {msg.relatedProjects.map((slug) => {
                          const project = getProjectDetails(slug);
                          if (!project) return null;
                          return (
                            <div
                              key={slug}
                              className="rounded-xl border border-sky-500/15 bg-sky-950/20 p-2.5 hover:border-sky-500/30 transition-all flex flex-col justify-between"
                            >
                              <div>
                                <div className="flex flex-col gap-1 items-start justify-between">
                                  <h4 className="text-[11px] font-bold text-sky-300 leading-tight">{project.title}</h4>
                                  <span className="text-[9px] px-1.5 py-0.5 rounded-full border border-sky-500/20 bg-sky-500/10 text-sky-400 font-semibold font-mono">
                                    {project.tags?.[0]}
                                  </span>
                                </div>
                                <p className="mt-1.5 text-[10px] text-slate-400 line-clamp-3 leading-relaxed">
                                  {project.solution}
                                </p>
                              </div>
                              <div className="mt-2 pt-1 border-t border-sky-500/10 flex gap-2 justify-between">
                                <Link
                                  href={`#projects`}
                                  onClick={() => setIsOpen(false)}
                                  className="text-[9px] font-semibold text-white hover:text-sky-300 flex items-center gap-0.5 transition-colors"
                                >
                                  Detalles
                                  <ArrowRight className="h-2.5 w-2.5" />
                                </Link>
                                {project.liveUrl && project.liveUrl !== "#" && (
                                  <Link
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[9px] font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                                  >
                                    Live
                                  </Link>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-center space-x-2 bg-slate-900/60 border border-sky-500/10 rounded-2xl px-4 py-3 w-20">
                  <div className="flex space-x-1">
                    <div className="h-1.5 w-1.5 bg-sky-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="h-1.5 w-1.5 bg-sky-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="h-1.5 w-1.5 bg-sky-400 rounded-full animate-bounce"></div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick replies & Input */}
            <div className="p-3 border-t border-sky-500/15 bg-slate-950/60 space-y-3">
              {/* Quick reply chips */}
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none snap-x mask-fade-edges">
                {chatbotConfig.quickReplies.map((reply) => (
                  <button
                    key={reply.label}
                    onClick={() => handleQuickReply(reply.query)}
                    className="shrink-0 snap-center rounded-full border border-sky-500/20 bg-sky-950/20 px-3 py-1.5 text-xs font-medium text-sky-300 hover:bg-sky-500/10 hover:border-sky-500/40 active:scale-95 transition-all duration-200"
                  >
                    {reply.label}
                  </button>
                ))}
              </div>

              {/* Chat Input form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(inputValue);
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={chatbotConfig.inputPlaceholder}
                  className="flex-1 rounded-xl border border-sky-500/15 bg-[#070b16] px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-sky-500/40 focus:outline-none transition-all"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-500 text-white hover:bg-sky-600 disabled:opacity-50 disabled:hover:bg-sky-500 transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

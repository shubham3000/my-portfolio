"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

interface Message {
  role: "user" | "bot";
  content: string;
}

const responseMapping: [RegExp, string][] = [
  [/about me|about|professional|summary|describe yourself|introduction|introduce|introduce yourself|professional summary|How many years of experience/i,"professional_summary"],
  [/experience|work|work history|professional experience|what is your experience|work experience|what is your experience/i,"experience"],
  [/projects|your project|my project|project/i, "projects"],
  [/education|qualification|degree|college|school|high|highest|highest qualification|what is your qualification|what is your highest qualification/i, "education"],
  [/certification|certifications|courses/i, "certifications"],
  [/contact|email|phone|linkedin|github|portfolio/i, "contact"],
  [/hello|helloo|heloo/i, "hello"],
  [/hi|hii|hiii/i, "hi"],
  [/who are you|who/i, "who_are_you"],
  [/bye|goodbye|see you|exit|quit|byee/i, "bye"],
  [/skills|skill|tech Skills|tech|technology|programming|language|programming language|python|slenium|React|reactJs/i, "skills"],
];

export default function Page() {
  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window !== "undefined") {
      const stored = sessionStorage.getItem("chatMessages");
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [customResponses, setCustomResponses] = useState<Record<string, any>>(
    {}
  );
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    fetch("/data/prompt.json")
      .then((res) => res.json())
      .then((data) => setCustomResponses(data));
  }, []);

  useEffect(() => {
    sessionStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  const formatArray = (arr: any[]) =>
    arr
      .map((item) =>
        typeof item === "string"
          ? `• ${item}`
          : typeof item === "object"
            ? Object.entries(item)
                .map(
                  ([k, v]) =>
                    `<b style='text-transform: capitalize;'>${k}:</b> ${Array.isArray(v) ? v.join(", ") : v}`
                )
                .join("<br/>")
            : item
      )
      .join("<br/>");

  const formatMessage = (content: string, role?: string) => {
    let formatted = content
      .replace(/```([\s\S]*?)```/g, "<pre><code>$1</code></pre>")
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")
      .replace(/\*(.*?)\*/g, "<i>$1</i>");

    const codeBlockRegex = /<pre><code>([\s\S]*?)<\/code><\/pre>/g;
    const parts = formatted.split(codeBlockRegex);

    return parts.map((part, index) => {
      if (role === "bot" && index % 2 === 1) {
        return (
          <SyntaxHighlighter
            key={index}
            language={(() => {
              const match = part.match(/^\s*([a-zA-Z0-9+#-]+)\n/);
              if (match) return match[1].toLowerCase();
              if (
                part.includes("import") ||
                part.includes("const") ||
                part.includes("let")
              )
                return "javascript";
              if (
                part.includes("def ") ||
                part.includes("import ") ||
                part.includes("print(")
              )
                return "python";
              if (part.includes("#include") || part.includes("int main"))
                return "cpp";
              return "javascript";
            })()}
            style={materialDark}
            wrapLines
          >
            {part.trim()}
          </SyntaxHighlighter>
        );
      }

      return (
        <span
          key={index}
          dangerouslySetInnerHTML={{ __html: part.replace(/\n/g, "<br/>") }}
        />
      );
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);

    if (!value.trim()) {
      setSuggestions([]);
      return;
    }

    const lowerValue = value.toLowerCase();
    const matchedKeys = responseMapping
      .filter(([regex]) => regex.test(lowerValue))
      .map(([, key]) => key)
      .filter((key) => customResponses[key]);

    setSuggestions(matchedKeys.length > 0 ? matchedKeys : []);
  };

  const handleSuggestionClick = (key: string) => {
    const content = customResponses[key];
    let formattedContent = "";

    if (Array.isArray(content)) formattedContent = formatArray(content);
    else if (typeof content === "object")
      formattedContent = Object.entries(content)
        .map(
          ([k, v]) => `<b style='text-transform: capitalize;'>${k}:</b> ${v}`
        )
        .join("<br/>");
    else formattedContent = content;

    setMessages((prev) => [
      ...prev,
      { role: "user", content: key.replace(/_/g, " ") },
    ]);

    setMessages((prev) => [
      ...prev,
      { role: "bot", content: formattedContent },
    ]);

    setSuggestions([]);
    setInput("");
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (suggestions.length > 0) {
        handleSuggestionClick(suggestions[0]);
      } else {
        sendMessage();
      }
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    setSuggestions([]);

    const lowerInput = input.toLowerCase().trim();

    try {
      for (const [regex, key] of responseMapping) {
        if (regex.test(lowerInput) && customResponses[key]) {
          let content: any = customResponses[key];

          if (Array.isArray(content)) content = formatArray(content);
          else if (typeof content === "object")
            content = Object.entries(content)
              .map(([k, v]) => `<b>${k}:</b> ${v}`)
              .join("<br/>");

          setMessages((prev) => [...prev, { role: "bot", content }]);
          setLoading(false);
          return;
        }
      }

      if (customResponses[lowerInput]) {
        setMessages((prev) => [
          ...prev,
          { role: "bot", content: customResponses[lowerInput] },
        ]);
        setLoading(false);
        return;
      }

      const res = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: input }] }],
        }),
      });

      const data = await res.json();
      const botReply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I could not generate a response.";

      setMessages((prev) => [...prev, { role: "bot", content: botReply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "Error contacting Gemini API." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full font-sans md:px-10">
      <div className="flex flex-col">
        <div className="max-w-7xl pt-14 md:pt-0 py-10 px-4 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-5xl h-14 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-bold"
          >
            Sam AI Chatbot
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-lg text-white mt-4"
          >
            This chatbot is built with{" "}
            <Link
              href="https://aistudio.google.com/"
              className="text-blue-400 underline"
              target="_blank"
            >
              Gemini API
            </Link>{" "}
            and connected directly to my portfolio. It demonstrates my ability
            to work with advanced AI models, integrate APIs, and create smooth
            user experiences.
          </motion.p>

          <div className="space-y-6 p-6 mt-10 rounded-xl bg-white/5 backdrop-blur-md border border-white/20 shadow-md animate-fade-in">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} my-2`}
              >
                <div
                  className={`inline-block max-w-[70%] break-words p-3 rounded-lg ${
                    msg.role === "user"
                      ? "bg-gray-800 text-white"
                      : "bg-gray-200 text-gray-900 normal-case"
                  }`}
                >
                  {formatMessage(msg.content, msg.role)}
                </div>
              </div>
            ))}
            {loading && <div className="text-gray-400">Sam is typing...</div>}
          </div>

          <div className="flex gap-2 mt-4 relative border border-white/30 rounded-md p-2 bg-white/5 backdrop-blur-md">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
              placeholder="Type your message..."
              className="w-full rounded-md p-3 bg-transparent text-white placeholder-gray-400 focus:outline-none transition"
              disabled={loading}
            />
            {suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 bg-gray-800 text-white rounded-md mt-1 max-h-40 overflow-y-auto z-50 shadow-lg">
                {suggestions.map((key, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleSuggestionClick(key)}
                    className="px-3 py-2 hover:bg-gray-700 cursor-pointer capitalize"
                  >
                    {key.replace(/_/g, " ")}
                  </div>
                ))}
              </div>
            )}
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className={`px-5 rounded-md bg-gray-800 text-white text-base font-medium transition-colors ${
                loading || !input.trim()
                  ? "opacity-60 cursor-not-allowed"
                  : "hover:bg-gray-600 cursor-pointer"
              }`}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

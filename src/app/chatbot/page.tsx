"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

interface Message {
  role: "user" | "bot";
  content: string;
}

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
  const [customResponses, setCustomResponses] = useState<
    Record<string, string>
  >({});

  // 🔹 Load custom responses from JSON
  useEffect(() => {
    fetch("/data/prompt.json")
      .then((res) => res.json())
      .then((data) => setCustomResponses(data));
  }, []);

  useEffect(() => {
    sessionStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    const lowerInput = input.toLowerCase().trim();

    switch (true) {
      //Respond to About Me questions
      case /about me|who are you|Describe yourself|your projects|your project|my projects|my project|experience/i.test(
        lowerInput
      ):
        setMessages((prev) => [
          ...prev,
          { role: "bot", content: customResponses["about_me"] },
        ]);
        setLoading(false);
        break;

      //Respond from custom JSON responses
      case !!customResponses[lowerInput]:
        setMessages((prev) => [
          ...prev,
          { role: "bot", content: customResponses[lowerInput] },
        ]);
        setLoading(false);
        break;

      //Otherwise, call Gemini API
      default:
        try {
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
        break;
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  const formatMessage = (content: string, role?: string) => {
    const codeBlockRegex = /```([\s\S]*?)```/g;
    const parts = content.split(codeBlockRegex);

    return parts.map((part, index) => {
      if (role === "bot" && index % 2 === 1) {
        const cleaned = part
          .trim()
          .replace(
            /^(py|python|js|javascript|ts|tsx|java|c|cpp|html|css)\n/i,
            ""
          );

        return (
          <pre
            key={index}
            className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto my-2 text-sm"
          >
            <code>{cleaned}</code>
          </pre>
        );
      }

      if (role === "bot") {
        return (
          <span key={index}>
            {part
              .split("\n")
              .filter((line) => line.trim() !== "")
              .map((line, i) => {
                if (line.trim().startsWith("- ")) {
                  return (
                    <li key={i} className="list-disc list-inside">
                      {line.replace("- ", "")}
                    </li>
                  );
                }

                const formattedLine = line
                  .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                  .replace(/\*(.*?)\*/g, "<em>$1</em>");

                return (
                  <p
                    key={i}
                    className="mb-1"
                    dangerouslySetInnerHTML={{ __html: formattedLine }}
                  />
                );
              })}
          </span>
        );
      }

      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="w-full font-sans md:px-10">
      <div className="flex flex-col">
        <div className="max-w-7xl pt-14 md:pt-0 py-10 px-4 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-5xl h-14 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  font-sans font-bold"
          >
            Sam AI Chatbot
          </motion.h2>
          <div className="w-full">
            <motion.p
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-lg text-white"
            >
              This chatbot is built with{" "}
              <Link
                href={
                  "https://aistudio.google.com/welcome?utm_source=google&utm_medium=cpc&utm_campaign=FY25-global-DR-gsem-BKWS-1710442&utm_content=text-ad-none-any-DEV_c-CRE_726176536028-ADGP_Hybrid%20%7C%20BKWS%20-%20EXA%20%7C%20Txt-Gemini-Gemini%20API-KWID_43700081658540311-kwd-927524447508&utm_term=KW_gemini%20api-ST_gemini%20api&gclsrc=aw.ds&gad_source=1&gad_campaignid=20860602951&gbraid=0AAAAACn9t65pEKDSbHex5z5-5CLKV50sw&gclid=CjwKCAjw2brFBhBOEiwAVJX5GIqfr1af3psNRKq8Zx1xQxUXP7TsNQCnJYdWRzmeokfNcoXoVnK2wRoCzasQAvD_BwE"
                }
                className="text-blue-400 underline"
                target="_blank"
              >
                Gemini API
              </Link> and connected directly to my portfolio. It demonstrates my ability
              to work with advanced AI models, integrate APIs, and create smooth
              user experiences where visitors can chat, explore, and learn
              interactively.
            </motion.p>
            <div className="space-y-6 p-6 mt-10 rounded-xl bg-white/5 backdrop-blur-md border border-white/20 shadow-md animate-fade-in">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  } my-2`}
                >
                  <div
                    className={`inline-block max-w-[70%] break-words p-3 rounded-lg ${
                      msg.role === "user"
                        ? "bg-gray-800 text-white"
                        : "bg-gray-200 text-gray-900"
                    }`}
                  >
                    {formatMessage(msg.content, msg.role)}
                  </div>
                </div>
              ))}
              {loading && <div className="text-gray-400">Sam is typing...</div>}
            </div>
            <div className="flex gap-2 mt-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleInputKeyDown}
                placeholder="Type your message..."
                className="w-full border border-white/30 rounded-md p-3 bg-transparent text-white placeholder-gray-400 transition focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-blue-400"
                disabled={loading}
              />
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
    </div>
  );
}

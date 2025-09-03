"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { IconX } from "@tabler/icons-react";

const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

interface Message {
  role: "user" | "bot";
  content: string;
}

const responseMapping: [RegExp, string][] = [
  [
    /\babout me\b|\babout you\b|\babout\b|\bprofessional\b|\bsummary\b|\bdescribe yourself\b|\bintroduction\b|\bintroduce\b|\bintroduce yourself\b|\bprofessional summary\b|\byears\b/i,
    "professional_summary",
  ],
  [
    /\bexperience\b|\bwork\b|\bwork history\b|\bprofessional experience\b|\bwhat is your experience\b|\bwork experience\b/i,
    "experience",
  ],
  [/\bprojects?\b|\byour project\b|\bmy project\b/i, "projects"],
  [
    /\beducation\b|\bqualification\b|\bqualifications\b|\bdegree\b|\bcollege\b|\bschool\b|\bhighest qualification\b|\bwhat is your qualification\b|\bwhat is your highest qualification\b/i,
    "education",
  ],
  [/\bcertification\b|\bcertifications\b|\bcourses\b/i, "certifications"],
  [
    /\bcontact\b|\bcontacts\b|\bemail\b|\bphone\b|\blinkedin\b|\bgithub\b|\bportfolio\b/i,
    "contact",
  ],
  [/\bhello+\b|\bhi+\b|\bhey+\b/i, "hello"],
  [/\bwho are you\b|\bwho\b/i, "who_are_you"],
  [/\bbye+\b|\bgoodbye\b|\bsee you\b|\bexit\b|\bquit\b/i, "bye"],
  [
    /\bskills?\b|\btech skills?\b|\btech\b|\btechnology\b|\bprogramming\b|\blanguage\b|\bprogramming language\b/i,
    "skills",
  ],
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
  const [resumeData, setResumeData] = useState<any>(null); // Store resume data
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [customResponses, setCustomResponses] = useState<{
    [key: string]: any;
  }>({});

  useEffect(() => {
    // Load resume data from the public folder
    fetch("/resume/Shubham_Sadhu_Resume.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch resume data");
        }
        return res.json();
      })
      .then((data) => setResumeData(data))
      .catch((err) => console.error("Failed to load resume data:", err));
  }, []);

  useEffect(() => {
    fetch("/data/prompt.json")
      .then((res) => res.json())
      .then((data) => setCustomResponses(data));
  }, []);

  useEffect(() => {
    sessionStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    if (resumeData) {
      console.log("Resume data loaded:", resumeData);
    }
  }, [resumeData]);

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
    const words = lowerValue.split(/\s+/); // 👈 split input into words

    const matchedKeys = responseMapping
      .filter(([regex]) => words.some((w) => regex.test(w))) // ✅ check full word only
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
      // 1️⃣ Check if the query matches resume data
      if (resumeData) {
        // Check for skills
        const matchedSkills = resumeData.technical_skills.filter((skill: string) =>
          lowerInput.includes(skill.toLowerCase())
        );

        if (matchedSkills.length > 0) {
          const skillsList = matchedSkills.join(", ");
          setMessages((prev) => [
            ...prev,
            {
              role: "bot",
              content: `Yes, I have experience in ${skillsList}.<br/>You can check my skills here <a href='/skills' style='color:blue;'>My Skills</a>. Thank you.`,
            },
          ]);
          setLoading(false);
          return;
        } else if (lowerInput.includes("skills") || lowerInput.includes("know")) {
          setMessages((prev) => [
            ...prev,
            {
              role: "bot",
              content:
                "No, I don't have experience. But I am interested to learn new technologies if I get a chance.<br/>You can check my skills here <a href='/skills' style='color:blue;'>My Skills</a>. Thank you.",
            },
          ]);
          setLoading(false);
          return;
        }

        // Check for experience
        if (lowerInput.includes("experience") || lowerInput.includes("work")) {
          const experience = resumeData.work_experience
            .map(
              (exp: any) =>
                `<b>${exp.role}</b> at <b>${exp.company}</b> (${exp.duration}):<br/>${exp.projects
                  .map(
                    (proj: any) =>
                      `- ${proj.name}: ${proj.achievements.join(", ")}`
                  )
                  .join("<br/>")}`
            )
            .join("<br/><br/>");
          setMessages((prev) => [
            ...prev,
            {
              role: "bot",
              content: `Here is my work experience:<br/><br/>${experience}`,
            },
          ]);
          setLoading(false);
          return;
        }

        // Check for education
        if (lowerInput.includes("education") || lowerInput.includes("degree")) {
          const education = `<b>${resumeData.education.degree}</b> from <b>${resumeData.education.institution}</b> (${resumeData.education.duration}) with a CGPA of ${resumeData.education.cgpa}`;
          setMessages((prev) => [
            ...prev,
            {
              role: "bot",
              content: `Here is my educational background:<br/><br/>${education}`,
            },
          ]);
          setLoading(false);
          return;
        }
      }

      // 2️⃣ If no match, use Gemini API
      const res = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            ...messages.map((m) => ({
              role: m.role === "user" ? "user" : "model",
              parts: [{ text: m.content }],
            })),
            {
              role: "user",
              parts: [{ text: input }],
            },
          ],
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
                  <div key={idx} className="flex justify-between px-3 py-2 hover:bg-gray-700 cursor-pointer">
                  <div
                    onClick={() => handleSuggestionClick(key)}
                    className="capitalize"
                  >
                    {key.replace(/_/g, " ")}
                  </div>
                  <div
                    onClick={(e) => {
                    e.stopPropagation();
                    setSuggestions((prev) => prev.filter((k) => k !== key));
                    }}
                    className="px-3 py-2 text-red-900 hover:bg-red-300 cursor-pointer"
                  >
                    <IconX />
                  </div>
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

"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { IconSend2 } from "@tabler/icons-react";

export default function Page() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        console.error("Failed to send email");
      }
    } catch (err) {
      console.error("Error sending email:", err);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="pt-14 md:pt-0 pb-0 md:pb-10 px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-5xl h-14 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  font-sans font-bold"
        >
          Contact Me
        </motion.h2>
      </div>

      {submitted && (
        <div className="mb-4 text-green-600 text-center">
          Thank you! To Reach Me.
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-6 p-6 md:w-96 rounded-xl bg-white/5 backdrop-blur-md border border-white/20 shadow-md animate-fade-in"
      >
        {/* Name Input */}
        <div className="group">
          <label className="block mb-1 text-white text-sm font-medium group-hover:text-gray-300 transition">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full border border-white/30 rounded-md p-3 bg-transparent text-white placeholder-gray-400 transition focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-blue-400"
          />
        </div>

        {/* Email Input */}
        <div className="group">
          <label className="block mb-1 text-white text-sm font-medium group-hover:text-gray-300 transition">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full border border-white/30 rounded-md p-3 bg-transparent text-white placeholder-gray-400 transition focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-blue-400"
          />
        </div>

        {/* Message */}
        <div className="group">
          <label className="block mb-1 text-white text-sm font-medium group-hover:text-gray-300 transition">
            Message
          </label>
          <textarea
            name="message"
            required
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message..."
            className="w-full border border-white/30 rounded-md p-3 bg-transparent resize-none text-white placeholder-gray-400 transition focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-blue-400"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full border border-white bg-transparent text-white py-6 rounded-lg overflow-hidden relative group transition-all duration-300 hover:bg-gray-800"
        >
          <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-full">
            Send Message
          </span>
          <span className="absolute inset-0 flex items-center justify-center translate-x-[-50%] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
            <IconSend2 className="w-6 h-6" />
          </span>
        </button>
      </form>
    </div>
  );
}

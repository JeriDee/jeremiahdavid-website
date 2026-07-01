"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:hello@jeremiahdavid.co?subject=Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nType: ${formData.type}\n\n${formData.message}`)}`;
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-center">
          Let&apos;s Talk
        </h1>
        <p className="mt-4 text-base text-[#F5F5F5]/60 text-center leading-relaxed">
          Whether you&apos;re hiring or looking &mdash; reach out and
          I&apos;ll respond within 24 hours.
        </p>
        <form onSubmit={handleSubmit} className="mt-12 space-y-6">
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#141414] border border-white/10 rounded-sm text-[#F5F5F5] placeholder-[#F5F5F5]/30 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors duration-200"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#141414] border border-white/10 rounded-sm text-[#F5F5F5] placeholder-[#F5F5F5]/30 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors duration-200"
            />
          </div>
          <div>
            <label htmlFor="phone" className="sr-only">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#141414] border border-white/10 rounded-sm text-[#F5F5F5] placeholder-[#F5F5F5]/30 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors duration-200"
            />
          </div>
          <div>
            <label htmlFor="type" className="sr-only">I am a...</label>
            <select
              id="type"
              name="type"
              required
              value={formData.type}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#141414] border border-white/10 rounded-sm text-[#F5F5F5] placeholder-[#F5F5F5]/30 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors duration-200 appearance-none"
            >
              <option value="" disabled>I am a...</option>
              <option value="Company">Company</option>
              <option value="Candidate">Candidate</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#141414] border border-white/10 rounded-sm text-[#F5F5F5] placeholder-[#F5F5F5]/30 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors duration-200 resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#C9A84C] text-[#0A0A0A] font-medium rounded-sm transition-all duration-200 hover:bg-[#C9A84C]/90"
          >
            Send Message
          </button>
        </form>
        <div className="mt-12 flex flex-col items-center gap-4 text-sm text-[#F5F5F5]/60">
          <a
            href="mailto:hello@jeremiahdavid.co"
            className="hover:text-[#C9A84C] transition-colors duration-200"
          >
            hello@jeremiahdavid.co
          </a>
          <a
            href="https://linkedin.com/in/jeremiahdavid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C9A84C] transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

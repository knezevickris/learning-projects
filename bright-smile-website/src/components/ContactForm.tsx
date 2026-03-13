"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "General Dentistry",
    time: "Morning (8am - 12pm)",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "General Dentistry",
        time: "Morning (8am - 12pm)",
        message: ""
      });
    }, 1500);
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-6">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-dental-700 dark:text-white mb-2">Message Sent!</h3>
        <p className="text-foreground/60 mb-8">
          Thank you for reaching out. A member of our team will contact you shortly to confirm your appointment.
        </p>
        <Button onClick={() => setStatus("idle")} variant="outline">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-dental-700 dark:text-white uppercase tracking-wider">Full Name</label>
          <input 
            required
            type="text" 
            placeholder="John Doe" 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-dental-100 dark:border-dental-800 focus:outline-none focus:ring-2 focus:ring-accent-400 transition-all font-light" 
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-dental-700 dark:text-white uppercase tracking-wider">Email Address</label>
          <input 
            required
            type="email" 
            placeholder="john@example.com" 
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-dental-100 dark:border-dental-800 focus:outline-none focus:ring-2 focus:ring-accent-400 transition-all font-light" 
          />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-dental-700 dark:text-white uppercase tracking-wider">Phone Number</label>
          <input 
            required
            type="tel" 
            placeholder="(555) 000-0000" 
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-dental-100 dark:border-dental-800 focus:outline-none focus:ring-2 focus:ring-accent-400 transition-all font-light" 
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-dental-700 dark:text-white uppercase tracking-wider">Service Interested In</label>
          <select 
            value={formData.service}
            onChange={(e) => setFormData({...formData, service: e.target.value})}
            className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-dental-100 dark:border-dental-800 focus:outline-none focus:ring-2 focus:ring-accent-400 transition-all font-light appearance-none"
          >
            <option>General Dentistry</option>
            <option>Cosmetic Dentistry</option>
            <option>Orthodontics</option>
            <option>Emergency Care</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-dental-700 dark:text-white uppercase tracking-wider">Preferred Appointment Time</label>
        <select 
          value={formData.time}
          onChange={(e) => setFormData({...formData, time: e.target.value})}
          className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-dental-100 dark:border-dental-800 focus:outline-none focus:ring-2 focus:ring-accent-400 transition-all font-light appearance-none"
        >
          <option>Morning (8am - 12pm)</option>
          <option>Afternoon (12pm - 4pm)</option>
          <option>Late Afternoon (4pm - 6pm)</option>
          <option>No Preference</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-dental-700 dark:text-white uppercase tracking-wider">Your Message</label>
        <textarea 
          rows={4} 
          placeholder="How can we help you?" 
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-dental-100 dark:border-dental-800 focus:outline-none focus:ring-2 focus:ring-accent-400 transition-all font-light resize-none" 
        />
      </div>

      <Button type="submit" className="w-full py-5 text-lg font-bold shadow-xl" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send Appointment Request"}
      </Button>
    </form>
  );
}

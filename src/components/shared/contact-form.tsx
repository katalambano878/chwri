"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  variant?: "default" | "compact";
  className?: string;
}

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm({ variant = "default", className }: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      firstName: String(formData.get("firstName") ?? ""),
      lastName: String(formData.get("lastName") ?? ""),
      email: String(formData.get("email") ?? ""),
      organisation: String(formData.get("organisation") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
      company: String(formData.get("company") ?? ""),
    };

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(
          data?.error || "We couldn't send your message. Please try again."
        );
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-400 transition-all";

  const isSubmitting = status === "submitting";

  if (status === "success") {
    return (
      <div
        className={cn(
          "rounded-2xl border border-teal-100 bg-teal-50/60 p-8 text-center",
          className
        )}
        role="status"
      >
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-teal-100">
          <CheckCircle2 className="h-7 w-7 text-teal-700" />
        </div>
        <h3 className="font-heading text-lg font-semibold text-slate-900">
          Message sent — thank you!
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          We&apos;ve received your enquiry and will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-teal-200 px-5 py-2.5 text-sm font-semibold text-teal-700 transition-colors hover:bg-teal-50"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-4", className)}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1.5">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Your first name"
            className={inputClasses}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1.5">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Your last name"
            className={inputClasses}
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          className={inputClasses}
          required
        />
      </div>
      {variant === "default" && (
        <div>
          <label htmlFor="organisation" className="block text-sm font-medium text-slate-700 mb-1.5">
            Organisation (Optional)
          </label>
          <input
            id="organisation"
            name="organisation"
            type="text"
            placeholder="Your organisation"
            className={inputClasses}
          />
        </div>
      )}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1.5">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          className={inputClasses}
          defaultValue=""
          required
        >
          <option value="" disabled>
            Select a topic
          </option>
          <option value="partnership">Partnership Inquiry</option>
          <option value="research">Research Collaboration</option>
          <option value="volunteer">Volunteering</option>
          <option value="media">Media Inquiry</option>
          <option value="general">General Inquiry</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={variant === "compact" ? 3 : 5}
          placeholder="Tell us how we can help..."
          className={cn(inputClasses, "resize-none")}
          required
        />
      </div>

      {/* Honeypot field — hidden from users, catches bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && (
        <div
          className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          role="alert"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center gap-2 px-6 py-3 bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm rounded-full shadow-md hover:shadow-lg disabled:opacity-50 transition-all"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}

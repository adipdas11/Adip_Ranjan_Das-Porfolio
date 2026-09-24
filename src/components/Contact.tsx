import { useState, type FormEvent } from "react";
import { ArrowUpRight, ArrowRight, Mail } from "lucide-react";
import { links } from "../data/profile";
import { ExternalLink } from "./ui/shared";
export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const response = await fetch("https://formspree.io/f/xwvnjavk", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
        signal: AbortSignal.timeout(15000),
      });
      if (!response.ok) throw new Error("Message not accepted");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }
  return (
    <section id="contact" className="contact-section">
      <div className="shell contact-grid">
        <div>
          <p className="eyebrow mb-6">05 / GET IN TOUCH</p>
          <h2>
            Let’s make
            <br />
            robots do <span className="text-accent">more.</span>
          </h2>
          <p className="text-muted mt-6 max-w-md leading-relaxed">
            Have a research question, a collaboration in mind, or a robotics
            challenge? I’d love to hear from you.
          </p>
          <a href={links.email} className="contact-email">
            <Mail size={19} /> adipdas11@gmail.com <ArrowUpRight size={20} />
          </a>
          <div className="flex flex-wrap gap-6 mt-8 text-sm">
            <ExternalLink href={links.github}>GitHub</ExternalLink>
            <ExternalLink href={links.linkedin}>LinkedIn</ExternalLink>
            <ExternalLink href={links.scholar}>Scholar</ExternalLink>
          </div>
        </div>
        <form onSubmit={submit} className="contact-form">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="contact-name">Your name</label>
              <input
                id="contact-name"
                name="name"
                autoComplete="name"
                required
                placeholder="Alex Smith"
                maxLength={150}
              />
            </div>
            <div>
              <label htmlFor="contact-email">Email address</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                autoComplete="email"
                required
                placeholder="alex@university.edu"
                maxLength={254}
              />
            </div>
          </div>
          <label htmlFor="contact-message">What are you working on?</label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            placeholder="Tell me a little about your idea…"
            maxLength={5000}
          />
          <button
            type="submit"
            className="primary-button mt-5 w-full"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Send message"}
            <ArrowRight size={18} />
          </button>
          <p
            aria-live="polite"
            className={`form-status ${status === "error" ? "text-error" : "text-muted"}`}
          >
            {status === "success"
              ? "Thanks — your message has been sent."
              : status === "error"
                ? "Your message could not be sent. Please try again or email me directly."
                : "Messages are sent through Formspree."}
          </p>
        </form>
      </div>
    </section>
  );
}

import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { SendIcon, MailIcon, PhoneIcon } from "@/components/icons";

const initialValues = {
  name: "",
  phone: "",
  email: "",
  company: "",
  subject: "",
  message: "",
};

const fieldClass =
  "w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/25";

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const update =
    (field) =>
    (event) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  function validate() {
    const next = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.phone.trim()) next.phone = "Please enter your phone number.";
    if (!values.email.trim()) {
      next.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!values.subject.trim()) next.subject = "Please enter a subject.";
    if (!values.message.trim()) next.message = "Please enter a message.";
    return next;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const endpoint = siteConfig.contact.formEndpoint;

    // If a real form service has been configured, POST to it.
    if (endpoint) {
      setStatus("sending");
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(values),
        });
        if (!response.ok) throw new Error("Request failed");
        setStatus("success");
        setValues(initialValues);
      } catch {
        setStatus("error");
      }
      return;
    }

    // No form service configured yet — show a message with contact alternatives.
    setStatus("no-service");
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-stone-800">
            Name <span className="text-brand-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={update("name")}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClass}
            placeholder="Your full name"
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs font-medium text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-stone-800">
            Phone <span className="text-brand-600">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={update("phone")}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={fieldClass}
            placeholder="Your phone number"
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1.5 text-xs font-medium text-red-600">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-stone-800">
            Email <span className="text-brand-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={update("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClass}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs font-medium text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-semibold text-stone-800">
            Company <span className="font-normal text-stone-400">(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={update("company")}
            className={fieldClass}
            placeholder="Your company name"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-semibold text-stone-800">
          Subject <span className="text-brand-600">*</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={values.subject}
          onChange={update("subject")}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          className={fieldClass}
          placeholder="What is your enquiry about?"
        />
        {errors.subject && (
          <p id="subject-error" className="mt-1.5 text-xs font-medium text-red-600">
            {errors.subject}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-stone-800">
          Message <span className="text-brand-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={update("message")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${fieldClass} resize-y`}
          placeholder="Tell us about your requirement — product, quantity, timeline, etc."
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs font-medium text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-[15px] font-semibold text-white shadow-sm shadow-brand-900/20 transition-colors hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:opacity-60 sm:w-auto"
      >
        <SendIcon className="h-4 w-4" />
        {status === "sending" ? "Sending…" : "Send Enquiry"}
      </button>

      <div aria-live="polite" role="status">
        {status === "success" && (
          <p className="rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
            Thank you! Your enquiry has been sent. We'll get back to you shortly.
          </p>
        )}
        {status === "error" && (
          <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            Something went wrong. Please try again, or reach us directly by phone or email.
          </p>
        )}
        {status === "no-service" && (
          <div className="rounded-xl border border-brand-200 bg-brand-50 px-5 py-4">
            <p className="text-sm font-semibold text-brand-800">
              We'd love to hear from you!
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-stone-600">
              The online form is not connected to a messaging service yet. In the
              meantime, please reach us directly:
            </p>
            <div className="mt-3 flex flex-col gap-2 sm:flex-row">
              {siteConfig.contact.phoneHref && (
                <a
                  href={siteConfig.contact.phoneHref}
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-stone-800 shadow-sm transition-colors hover:shadow-md"
                >
                  <PhoneIcon className="h-4 w-4 text-brand-600" />
                  {siteConfig.contact.phoneDisplay}
                </a>
              )}
              {siteConfig.contact.email && (
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-stone-800 shadow-sm transition-colors hover:shadow-md"
                >
                  <MailIcon className="h-4 w-4 text-brand-600" />
                  {siteConfig.contact.email}
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </form>
  );
}

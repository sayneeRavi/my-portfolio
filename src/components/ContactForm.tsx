'use client';

import { useState, type FormEvent } from 'react';

type Errors = Partial<Record<'name' | 'email' | 'message', string>>;

const inputClasses =
  'w-full rounded-[6px] border border-hairline bg-surface px-4 py-3 text-sm text-ink placeholder:text-muted/60 transition-colors focus:border-teal focus:outline-none';

/**
 * Phase 2 shell: fields + inline validation. Phase 3 wires the submit to
 * Web3Forms (honeypot, loading state, success/error toast).
 */
export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [notice, setNotice] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    const nextErrors: Errors = {};
    if (!name) nextErrors.name = 'Please tell me your name.';
    if (!email) nextErrors.email = 'An email lets me reply.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      nextErrors.email = "That email doesn't look right.";
    if (!message) nextErrors.message = 'A message would help!';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // Submission goes live in Phase 3 (Web3Forms)
    setNotice(
      'The form goes live shortly — for now, reach me at athmisaynee@gmail.com',
    );
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4 text-left">
      <div>
        <label htmlFor="contact-name" className="mb-1.5 block font-mono text-xs text-muted">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          className={inputClasses}
          placeholder="Your name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'contact-name-error' : undefined}
        />
        {errors.name && (
          <p id="contact-name-error" className="mt-1.5 text-xs text-teal">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-1.5 block font-mono text-xs text-muted">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          className={inputClasses}
          placeholder="you@example.com"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'contact-email-error' : undefined}
        />
        {errors.email && (
          <p id="contact-email-error" className="mt-1.5 text-xs text-teal">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1.5 block font-mono text-xs text-muted">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          className={inputClasses}
          placeholder="What are we building?"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
        />
        {errors.message && (
          <p id="contact-message-error" className="mt-1.5 text-xs text-teal">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full rounded-[6px] bg-teal px-6 py-3 font-mono text-sm font-semibold text-on-teal transition-colors hover:bg-teal-hover"
      >
        Send message
      </button>

      {notice && (
        <p role="status" className="text-center text-sm text-muted">
          {notice}
        </p>
      )}
    </form>
  );
}

"use client";

import { useState } from "react";

import { ContactCard } from "@/components/ContactCard";
import { Button } from "@/components/ui/button";
import { AtSignIcon } from "@/components/ui/at-sign";
import { GithubIcon } from "@/components/ui/github";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LinkedinIcon } from "@/components/ui/linkedin";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const CONTACT_INFO = [
  {
    icon: AtSignIcon,
    label: "Email",
    href: "mailto:contact@khalidhasananik.com",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    href: "https://github.com/khalidhasananik",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/khalidhasananik/",
  },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+()\d\s-]{7,20}$/;

type FieldErrors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

function validate(values: { name: string; email: string; phone: string; message: string }): FieldErrors {
  const errors: FieldErrors = {};

  if (!values.name.trim()) errors.name = "Please enter your name.";

  if (!values.email.trim()) errors.email = "Please enter your email.";
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = "Please enter a valid email address.";

  if (values.phone.trim() && !PHONE_RE.test(values.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!values.message.trim()) errors.message = "Please enter a message.";

  return errors;
}

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const values = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    const errors = validate(values);
    setFieldErrors(errors);
    setError("");

    if (Object.keys(errors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Failed to send message.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Failed to send message.");
    }
  }

  return (
    <section id="contact" className="px-[5%] py-[5%]">
      <div className="mx-auto max-w-5xl">
        <ContactCard
          title="Get in touch"
          description="Have a project in mind or just want to say hi? Fill out the form and I'll get back to you as soon as I can."
          contactInfo={CONTACT_INFO}
        >
          <form onSubmit={handleSubmit} noValidate className="w-full space-y-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="contact-name">Name</Label>
              <Input
                id="contact-name"
                name="name"
                type="text"
                aria-invalid={!!fieldErrors.name}
                className={cn(fieldErrors.name && "border-red-500")}
              />
              {fieldErrors.name && <p className="text-xs text-red-600">{fieldErrors.name}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="contact-email">Email</Label>
              <Input
                id="contact-email"
                name="email"
                type="email"
                aria-invalid={!!fieldErrors.email}
                className={cn(fieldErrors.email && "border-red-500")}
              />
              {fieldErrors.email && <p className="text-xs text-red-600">{fieldErrors.email}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="contact-phone">Phone (optional)</Label>
              <Input
                id="contact-phone"
                name="phone"
                type="tel"
                aria-invalid={!!fieldErrors.phone}
                className={cn(fieldErrors.phone && "border-red-500")}
              />
              {fieldErrors.phone && <p className="text-xs text-red-600">{fieldErrors.phone}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="contact-message">Message</Label>
              <Textarea
                id="contact-message"
                name="message"
                aria-invalid={!!fieldErrors.message}
                className={cn(fieldErrors.message && "border-red-500")}
              />
              {fieldErrors.message && <p className="text-xs text-red-600">{fieldErrors.message}</p>}
            </div>
            <Button className="w-full" type="submit" disabled={status === "submitting"}>
              {status === "submitting" ? "Sending…" : "Submit"}
            </Button>
            {status === "success" && (
              <p className="text-sm text-green-600">Message sent — thanks for reaching out!</p>
            )}
            {status === "error" && error && <p className="text-sm text-red-600">{error}</p>}
          </form>
        </ContactCard>
      </div>
    </section>
  );
}

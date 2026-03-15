"use client";

import { FormEvent, useMemo, useState } from "react";
import type { ChangeEvent } from "react";

import type { FormFieldConfig } from "@/lib/types";
import { cn } from "@/lib/utils";

type ContactFormCardProps = {
  title: string;
  subtitle: string;
  ctaLabel: string;
  fields: FormFieldConfig[];
};

type FieldMap = Record<string, string>;

const baseFieldClass =
  "w-full rounded-2xl border border-white/75 bg-white/75 px-4 py-3 text-sm text-navy outline-none transition focus:border-sapphire/45 focus:ring-2 focus:ring-sapphire/20";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactFormCard({ title, subtitle, ctaLabel, fields }: ContactFormCardProps) {
  const initialValues = useMemo(() => Object.fromEntries(fields.map((field) => [field.id, ""])) as FieldMap, [fields]);
  const [values, setValues] = useState<FieldMap>(initialValues);
  const [errors, setErrors] = useState<FieldMap>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: FieldMap = {};

    for (const field of fields) {
      const value = values[field.id]?.trim();
      if (field.required && !value) {
        nextErrors[field.id] = "This field is required.";
      }
      if (field.type === "email" && value && !emailPattern.test(value)) {
        nextErrors[field.id] = "Enter a valid email.";
      }
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("success");
    setValues(initialValues);
  };

  return (
    <div className="glass-card rounded-premium p-6 sm:p-8">
      <h3 className="text-2xl font-semibold text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-text-secondary">{subtitle}</p>

      <form className="mt-6 grid gap-4" noValidate onSubmit={handleSubmit}>
        {fields.map((field) => {
          const commonProps = {
            id: field.id,
            name: field.id,
            required: field.required,
            value: values[field.id] ?? "",
            onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
              setValues((prev) => ({ ...prev, [field.id]: event.target.value })),
            placeholder: field.placeholder,
            className: cn(baseFieldClass, errors[field.id] && "border-coral/70 ring-2 ring-coral/20")
          };

          return (
            <label key={field.id} htmlFor={field.id} className="grid gap-2 text-sm font-medium text-navy">
              {field.label}
              {field.type === "textarea" ? (
                <textarea {...commonProps} rows={4} />
              ) : field.type === "select" ? (
                <select {...commonProps}>
                  <option value="">Choose one</option>
                  {field.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input {...commonProps} type={field.type} />
              )}
              {errors[field.id] ? <span className="text-xs font-normal text-coral">{errors[field.id]}</span> : null}
            </label>
          );
        })}

        <button
          type="submit"
          className="cta-heavy mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-coral via-gold to-mint px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_42px_rgba(255,95,108,0.34)] transition duration-500 hover:-translate-y-0.5 hover:brightness-110"
        >
          {ctaLabel}
        </button>

        <p aria-live="polite" className="text-sm text-mint">
          {status === "success"
            ? "Thanks. Your request has been captured. We will follow up shortly."
            : ""}
        </p>
      </form>
    </div>
  );
}

"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { Button, Input, Select, Textarea } from "@/components/ui";

const quoteSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),
  propertyType: z.string().min(1, "Please select a property type"),
  serviceNeeded: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

export function QuoteForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const t = useTranslations("contact.form");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    try {
      // Submit to Netlify Forms
      const formData = new FormData();
      formData.append("form-name", "quote-request");
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("propertyType", data.propertyType);
      formData.append("serviceNeeded", data.serviceNeeded);
      formData.append("message", data.message || "");

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setSubmitError(false);
        reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError(true);
      setTimeout(() => setSubmitError(false), 5000);
    }
  };

  const propertyTypes = [
    { value: "hoa", label: t("propertyTypes.hoa") },
    { value: "commercial", label: t("propertyTypes.commercial") },
    { value: "residential", label: t("propertyTypes.residential") },
    { value: "apartment", label: t("propertyTypes.apartment") },
  ];

  const serviceTypes = [
    { value: "maintenance", label: t("serviceTypes.maintenance") },
    { value: "irrigation", label: t("serviceTypes.irrigation") },
    { value: "construction", label: t("serviceTypes.construction") },
    { value: "fence", label: t("serviceTypes.fence") },
    { value: "cleanup", label: t("serviceTypes.cleanup") },
    { value: "emergency", label: t("serviceTypes.emergency") },
  ];

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-grass-green/10 rounded-xl p-8 text-center"
      >
        <CheckCircle className="w-16 h-16 text-grass-green mx-auto mb-4" />
        <h3 className="font-heading text-2xl font-bold text-forest-green mb-2">
          Thank You!
        </h3>
        <p className="text-gray-600">
          We&apos;ve received your request and will contact you shortly.
        </p>
      </motion.div>
    );
  }

  if (submitError) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-red-50 rounded-xl p-8 text-center"
      >
        <h3 className="font-heading text-2xl font-bold text-red-600 mb-2">
          Oops! Something went wrong.
        </h3>
        <p className="text-gray-600 mb-4">
          Please try again or call us directly at 713-502-8435
        </p>
        <Button onClick={() => setSubmitError(false)}>Try Again</Button>
      </motion.div>
    );
  }

  return (
    <form
      name="quote-request"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      {/* Hidden fields for Netlify */}
      <input type="hidden" name="form-name" value="quote-request" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
        </label>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Input
          label={t("name")}
          id="name"
          placeholder="John Doe"
          error={errors.name?.message}
          {...register("name")}
        />
        <Input
          label={t("email")}
          id="email"
          type="email"
          placeholder="john@example.com"
          error={errors.email?.message}
          {...register("email")}
        />
      </div>

      <Input
        label={t("phone")}
        id="phone"
        type="tel"
        placeholder="(713) 555-0123"
        error={errors.phone?.message}
        {...register("phone")}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Select
          label={t("propertyType")}
          id="propertyType"
          options={propertyTypes}
          placeholder="Select type..."
          error={errors.propertyType?.message}
          {...register("propertyType")}
        />
        <Select
          label={t("serviceNeeded")}
          id="serviceNeeded"
          options={serviceTypes}
          placeholder="Select service..."
          error={errors.serviceNeeded?.message}
          {...register("serviceNeeded")}
        />
      </div>

      <Textarea
        label={t("message")}
        id="message"
        placeholder="Tell us about your project or questions..."
        {...register("message")}
      />

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
            />
            Sending...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Send className="w-5 h-5" />
            {t("submit")}
          </span>
        )}
      </Button>
    </form>
  );
}

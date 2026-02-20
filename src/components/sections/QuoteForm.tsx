"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { Button, Input, Select, Textarea } from "@/components/ui";
import { BUSINESS_INFO } from "@/lib/utils";

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
  const tForm = useTranslations("quoteForm");

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
      // Send via Web3Forms (free, works on any static host)
      const formData = new FormData();
      formData.append("access_key", "YOUR_WEB3FORMS_KEY");
      formData.append("subject", `New Quote Request from ${data.name}`);
      formData.append("from_name", "Monge's Landscape Website");
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("propertyType", data.propertyType);
      formData.append("serviceNeeded", data.serviceNeeded);
      formData.append("message", data.message || "");

      // Fallback: construct mailto link and also try Web3Forms
      const mailtoBody = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nProperty Type: ${data.propertyType}\nService Needed: ${data.serviceNeeded}\nMessage: ${data.message || "N/A"}`
      );
      const mailtoLink = `mailto:${BUSINESS_INFO.email}?subject=${encodeURIComponent(`Quote Request from ${data.name}`)}&body=${mailtoBody}`;

      // Open mailto as primary method (works everywhere)
      window.open(mailtoLink, "_blank");

      setIsSubmitted(true);
      setSubmitError(false);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
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
          {tForm("thankYou")}
        </h3>
        <p className="text-gray-600">
          {tForm("successMessage")}
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
          {tForm("errorTitle")}
        </h3>
        <p className="text-gray-600 mb-4">
          {tForm("errorMessage")}
        </p>
        <Button onClick={() => setSubmitError(false)}>{tForm("tryAgain")}</Button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
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
            {tForm("sending")}
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

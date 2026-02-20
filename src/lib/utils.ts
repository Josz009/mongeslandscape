import { type ClassValue, clsx } from "clsx";

// Simple class name merger without tailwind-merge (lighter weight)
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Format phone number for display
export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, "");
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  return phone;
}

// Format phone number for tel: link
export function formatPhoneLink(phone: string): string {
  return `tel:+1${phone.replace(/\D/g, "")}`;
}

// Business contact info
export const BUSINESS_INFO = {
  phone: "713-502-8435",
  email: "mongescompany@gmail.com",
  name: "Monge's Landscape",
  location: "Houston, Texas",
  instagram: "monges_landscape",
  facebook: "https://www.facebook.com/people/Monges-Landscape-LLC/100091080172139/",
  hours: {
    weekdays: "7:00 AM - 6:00 PM",
    saturday: "8:00 AM - 4:00 PM",
    sunday: "Closed",
  },
} as const;

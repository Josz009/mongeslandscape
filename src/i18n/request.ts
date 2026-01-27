import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  // For static export, we return a default locale
  // The actual locale is determined by the [locale] segment
  // and messages are loaded directly in the layout
  return {
    locale: "en",
    messages: {},
  };
});

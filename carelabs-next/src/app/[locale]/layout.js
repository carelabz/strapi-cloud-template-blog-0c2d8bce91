import { GET_PAGE_SEO } from "@/lib/api-Collection";
import client from "@/lib/appollo-client";

export async function generateMetadata({ params }) {
  // params might be a ReactPromise
  if (typeof params.then === "function") {
    params = await params;
  }

  let locale = params?.locale;

  // fallback
  if (!locale) locale = "en";

  try {
    const res = await client.query({
      query: GET_PAGE_SEO,
      variables: { locale },
      fetchPolicy: "no-cache",
    });

    const data = res.data?.homePage?.homeseo;

    if (data) {
      return {
        title: data.metaTitle,
        description: data.metaDescription,
        keywords: data.keywords || undefined,
        lang: locale,
      };
    }
  } catch (err) {
    console.error("SEO fetch error:", err);
  }

  return {
    title: "Carelabs",
    description: "",
    lang: locale,
  };
}

export default async function LocaleLayout({ children, params }) {
  // Await in case params is a ReactPromise
  if (typeof params.then === "function") {
    params = await params;
  }

  // Extract locale with fallback
  const locale = params?.locale || "en";
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}

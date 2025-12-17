import HomeBanner from '@/components/Home/HomeBanner';
import HomeBlog from '@/components/Home/HomeBlog';
import HomeServices from '@/components/Home/HomeServices';
import HomeTestimonials from '@/components/Home/HomeTestimonials';
import HomeClient from '@/components/Home/RegionBase/HomeClient';
import HomeCompliance from '@/components/Home/RegionBase/HomeCompliance';
import HomeIndustry from '@/components/Home/RegionBase/HomeIndustry';
import { GET_HOMEPAGE_DATA } from '@/lib/api-Collection';
import client from '@/lib/appollo-client';


// cache at module scope
let homeDataCache = {};

async function getHomePageData(locale) {
  if (!locale) return null;

  // return cached data if available
  if (homeDataCache[locale]) return homeDataCache[locale];

  try {
    const res = await client.query({
      query: GET_HOMEPAGE_DATA,
      variables: { locale },
      fetchPolicy: "no-cache",
    });

    // store in cache
    console.log("HHAHAH", res?.data?.homePage);
    
    homeDataCache[locale] = res?.data?.homePage;
    return homeDataCache[locale];
  } catch (err) {
    console.error("Homepage fetch failed:", err);
    return null;
  }
}




export async function generateViewport() {
  const homeData = await getHomePageData();
  const seo = homeData?.homeseo;

  return {
    width: "device-width",
    initialScale: 1,
  };
}


export async function generateMetadata({ params }) {
  try {
  
    const { locale } = await params;

    const homeData = await getHomePageData(locale);
    const seo = homeData?.homeseo;

    if (!seo) {
      return {
        title: "Carelabz",
        description: "Default SEO",
        robots: "index, follow",
      };
    }

    return {
      title: seo.metaTitle || "Carelabz",
      description: seo.metaDescription || "",
      keywords: seo.keywords || "",
      robots: seo.metaRobots || "index, follow",

      alternates: {
        canonical: seo.canonicalURL || "",
      },

      openGraph: {
        title: seo.openGraph?.ogTitle || seo.metaTitle,
        description: seo.openGraph?.ogDescription || seo.metaDescription,
        url: seo.openGraph?.ogUrl || "",
        type: seo.openGraph?.ogType || "website",
        images: seo.openGraph?.ogImage?.url
          ? [{ url: seo.openGraph?.ogImage?.url }]
          : [],
      },
    };

  } catch (error) {
    console.error(" SEO METADATA ERROR:", error);

  }
}

export default async function Page({params}) {

    var { locale } = await params;
    console.log("Locale in Home",locale);
      const localeMap = {
        ca: "en-CA",
        ar: "ar",
        en: "en",
        fr: "fr-FR",   // example additional
        es: "es-ES",   // example additional
        };
        locale = localeMap[locale] || "en";
    const homeData = await getHomePageData(locale);
    console.log("Home Data:", homeData);
     

  return (
   <main role="main">
      <section className=''>
        <HomeBanner data={homeData?.homebanner} />
      </section>

      <section>
        <HomeServices data={homeData?.home_service} />
      </section>

      <section>
        <HomeIndustry data={homeData?.home_industry} />
      </section>

       <section>
        <HomeClient data={homeData?.home_our_client} />
      </section>


       <section>
        <HomeCompliance data={homeData?.home_compliance} />
      </section>

      <section>
        <HomeTestimonials data={homeData?.testimonials_section} />
      </section>

      <section>
        <HomeBlog data={homeData?.home_insights} />
      </section>
    </main>
  );
}
import GlobalReach from '@/components/Home/GlobalReach';
import HomeBanner from '@/components/Home/HomeBanner';
import HomeBlog from '@/components/Home/HomeBlog';
import HomeServices from '@/components/Home/HomeServices';
import HomeTestimonials from '@/components/Home/HomeTestimonials';
import { GET_HOMEPAGE_DATA } from '@/lib/api-Collection';
import client from '@/lib/appollo-client';


async function getHomePageData() {
  try {
    const res = await client.query({
      query: GET_HOMEPAGE_DATA,
      fetchPolicy: "no-cache",
    });

    return res?.data?.homePage;
  } catch (err) {
    console.error("Homepage fetch failed:", err);
    return null;
  }
}


export async function generateViewport() {
  const homeData = await getHomePageData();
  const seo = homeData?.homeseo;

  // If metaViewport = null → fallback recommended value
  return {
    width: "device-width",
    initialScale: 1,
  };
}


export async function generateMetadata() {
  try {
    const homeData = await getHomePageData();
    const seo = homeData?.homeseo;

    console.log("SEO:", seo);

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

    // return {
    //   title: "Carelabz",
    //   description: "Default SEO description",
    //   robots: "index, follow",
    // };
  }
}

export default async function Page() {
  const homeData = await getHomePageData();

  return (
   <main role="main">
      <section className=''>
        <HomeBanner data={homeData?.homebanner} />
      </section>

      <section>
        <HomeServices data={homeData?.home_service} />
      </section>

      <section>
        <GlobalReach data={homeData?.worldwideimpact_section} />
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

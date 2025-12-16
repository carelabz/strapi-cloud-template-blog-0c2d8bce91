import client from "@/lib/appollo-client";
import { GET_INSIGHTS_BY_SLUG_By_LOCALE } from "@/lib/api-Collection";
import { Globe } from "lucide-react";
import Image from "next/image";
import carlabz from "@/assets/carlabz.jpg";
import React from "react";

export default function Page(props) {
  const params = React.use(props.params);
  
  const slug = params?.slug;
  var locale=params?.locale;



  if(locale=="CA" || locale=="ca"){
    locale="en-CA";
  }


  if (!slug) {
    return (
      <div className="p-20 text-center">
        <h1 className="text-3xl font-bold">Slug Missing</h1>
      </div>
    );
  }

  async function loadBlog() {
    const response = await client.query({
      query: GET_INSIGHTS_BY_SLUG_By_LOCALE,
      variables: { slug,locale },
      fetchPolicy: "no-cache",
    });
    return response?.data?.insightblogs?.[0] || null;
  }

  const blog = React.use(loadBlog());

  if (!blog) {
    return (
      <div className="p-20 text-center">
        <h1 className="text-3xl font-bold">Blog Not Found</h1>
        <p className="text-gray-500 mt-2">Slug: {slug}</p>
      </div>
    );
  }

  return (
    <div className="relative w-full flex flex-col items-center justify-center gap-5 overflow-y-auto">
      {/* Breadcrumbs */}
      <div className="w-full md:w-[80%] xl:w-[70%] mt-20 md:mt-24 lg:mt-40 px-4 md:px-0">
        <p className="text-para text-[14px] poppins-font">
          Home / Insights / {blog.mainheading}
        </p>
      </div>

      {/* HERO SECTION */}
      <div className="w-full md:w-[80%] xl:w-[70%] bg-red flex flex-col md:flex-row items-center gap-6 p-4 md:p-10 glass-panel rounded-2xl">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="flex items-center gap-2 bg-amber-100 rounded-full py-1 px-2 w-max">
            <Globe size={14} />
            <p className="montserrat-font text-sm">{blog.badge}</p>
          </div>

          <h1 className="text-[28px] lg:text-[36px] 2xl:text-[48px] font-semibold montserrat-font leading-snug">
            {blog.mainheading}
          </h1>

          <p className="text-[16px] xl:text-[18px] poppins-font">{blog.description}</p>

          <hr className="w-full border-gray-300 my-4" />

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-sm poppins-font">
            <div className="flex items-center gap-2">
              <Globe size={14} /> {blog.author}
            </div>
            <div className="flex items-center gap-2">
              <Globe size={14} /> {blog.publishedOn}
            </div>
            <div className="flex items-center gap-2">
              <Globe size={14} /> {blog.time}
            </div>
          </div>
        </div>

        <div
          className="w-full md:w-1/2 h-64 md:h-[400px] rounded-2xl bg-white"
          style={{
            backgroundImage: `url(${blog.sections?.[1]?.image?.url || carlabz.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      {/* MAIN CONTENT WRAPPER */}
      <div className="w-full flex items-center justify-center mb-5">
        <div className="w-full md:w-[80%] xl:w-[70%] flex flex-col items-center justify-center lg:items-start lg:flex-row gap-3">
          
          {/* SIDEBAR */}
          <div className="w-[90%] md:w-full lg:w-[25%] flex flex-col gap-5">
            {/* Table of Contents */}
            {blog.articleSection && (
              <div className="glass-panel rounded-2xl">
                <h2 className="p-5 text-[14px] font-semibold montserrat-font">
                  {blog.articleSection.title || "IN THIS ARTICLE"}
                </h2>
                <ul>
                  {blog.articleSection.articleItems?.map((item, index) => (
                    <li key={index} className="px-10 py-3 poppins-font text-[14px]">
                      <a href={`#${item.slug}`}>{item.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Newsletter Signup */}
            <div className="glass-panel rounded-2xl p-5">
              <h2 className="text-[14px] font-semibold montserrat-font">
                {blog.Weeklytitle || "Weekly Insights"}
              </h2>
              <p className="py-2 poppins-font text-[14px]">
                {blog.Weeklydesc || "Get the latest insights delivered to your inbox."}
              </p>
              <input
                placeholder={blog.emailplaceholder || "Your email"}
                className="w-full border border-black h-10 rounded-lg p-2"
              />
              <button className="bg-[#2575b6] w-full p-2 mt-3 rounded-lg text-white">
                <a href={blog.subscribebuttonlink || "#"}>
                  {blog.subscribebutton || "Subscribe"}
                </a>
              </button>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="w-[90%] md:w-full lg:w-[75%] flex flex-col gap-5">
            {/* INTRO SECTION */}
            {blog.introtitle && blog.IntroductionContent && (
              <div className="glass-panel rounded-2xl p-10">
                <h1 className="mb-5 text-[30px] font-semibold montserrat-font">
                  {blog.introtitle}
                </h1>
                <div
                  className="poppins-font text-[16px]"
                  dangerouslySetInnerHTML={{ __html: blog.IntroductionContent }}
                />
              </div>
            )}

            {/* DYNAMIC SECTIONS */}
            {blog.sections?.map((section, index) => {
              // Why Traditional Maintenance Section
              if (section.__typename === "ComponentInsightsWhyTraditionalMaintenance") {
                return (
                  <div key={index} id={section.slug} className="glass-panel rounded-2xl p-10">
                    <h1 className="mb-5 text-[30px] font-semibold montserrat-font">
                      {section.title}
                    </h1>
                    {section.introduction && (
                      <p className="poppins-font text-[16px] mb-5">{section.introduction}</p>
                    )}
                    {section.WhyTraditionalItems && (
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                        {section.WhyTraditionalItems.map((item, idx) => (
                          <div key={idx} className="p-3 border rounded-2xl">
                            <h2 className="font-semibold text-[16px] montserrat-font py-2">
                              {item.title}
                            </h2>
                            <p className="text-[14px] poppins-font">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              // What AI Powered Predictive Section
              if (section.__typename === "ComponentInsightsWhatAiPoweredPredictive") {
                return (
                  <React.Fragment key={index}>
                    <div id={section.slug} className="glass-panel rounded-2xl p-10">
                      <h2 className="mb-5 text-[30px] font-semibold montserrat-font">
                        {section.title}
                      </h2>
                      <div
                        className="poppins-font text-[16px]"
                        dangerouslySetInnerHTML={{ __html: section.content }}
                      />
                    </div>
                    {section.image?.url && (
                      <div className="glass-panel rounded-2xl">
                        <div
                          className="h-[350px] rounded-t-2xl w-full"
                          style={{
                            backgroundImage: `url(${section.image.url})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        />
                        {section.imagetext && (
                          <p className="p-4 poppins-font italic">{section.imagetext}</p>
                        )}
                      </div>
                    )}
                  </React.Fragment>
                );
              }

              // Key Building Blocks Section
              if (section.__typename === "ComponentInsightsKeyBuildingBlocks") {
                return (
                  <React.Fragment key={index}>
                    <div id={section.slug} className="glass-panel rounded-2xl p-10">
                      <h1 className="mb-5 text-[30px] font-semibold montserrat-font">
                        {section.title}
                      </h1>
                      {section.KeyBuildingBlocksItems?.map((item, idx) => (
                        <div key={idx} className="mb-8">
                          <h2 className="mb-2 text-[#2575b6] montserrat-font text-[24px] font-semibold">
                            {item.order}. {item.title}
                          </h2>
                          <div
                            className="poppins-font"
                            dangerouslySetInnerHTML={{ __html: item.content }}
                          />
                        </div>
                      ))}
                    </div>
                    {section.image?.url && (
                      <div className="glass-panel rounded-2xl">
                        <div
                          className="h-[350px] rounded-t-2xl w-full"
                          style={{
                            backgroundImage: `url(${section.image.url})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        />
                        {section.imagetext && (
                          <p className="p-4 poppins-font italic">{section.imagetext}</p>
                        )}
                      </div>
                    )}
                  </React.Fragment>
                );
              }

              // Real World Use Cases Section
              if (section.__typename === "ComponentInsightsRealWorld") {
                return (
                  <div key={index} id={section.slug} className="glass-panel rounded-2xl p-10">
                    <h2 className="mb-5 text-[30px] font-semibold montserrat-font">
                      {section.title}
                    </h2>
                    {section.RealWorldItems?.map((item, idx) => (
                      <div key={idx} className="mb-6">
                        <h3 className="text-[24px] montserrat-font mb-2 font-semibold">
                          {item.title}
                        </h3>
                        <div
                          className="poppins-font"
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        />
                        {item.result && (
                          <p className="mb-3 secondary-color poppins-font">{item.result}</p>
                        )}
                      </div>
                    ))}
                  </div>
                );
              }

              // How to Get Started Section
              if (section.__typename === "ComponentInsightsHowtoGetStarted") {
                return (
                  <React.Fragment key={index}>
                    <div id={section.slug} className="glass-panel rounded-2xl p-10">
                      <h2 className="mb-5 text-[30px] font-semibold montserrat-font">
                        {section.title}
                      </h2>
                      <div
                        className="poppins-font"
                        dangerouslySetInnerHTML={{ __html: section.content }}
                      />
                    </div>
                    {section.image?.url && (
                      <div className="glass-panel rounded-2xl">
                        <div
                          className="h-[350px] rounded-t-2xl w-full"
                          style={{
                            backgroundImage: `url(${section.image.url})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        />
                        {section.imagetext && (
                          <p className="p-4 poppins-font">{section.imagetext}</p>
                        )}
                      </div>
                    )}
                  </React.Fragment>
                );
              }

              // Challenges Section
              if (section.__typename === "ComponentInsightsChallenges") {
                return (
                  <div key={index} id={section.slug} className="glass-panel rounded-2xl p-10">
                    <h1 className="mb-5 text-[30px] font-semibold montserrat-font">
                      {section.title}
                    </h1>
                    {section.introduction && (
                      <p className="poppins-font mb-5">{section.introduction}</p>
                    )}
                    {section.ChallengesItems && (
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 py-5">
                        {section.ChallengesItems.map((item, idx) => (
                          <div key={idx} className="p-3 border rounded-2xl">
                            <h2 className="font-semibold montserrat-font">{item.title}</h2>
                            <p className="poppins-font">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {section.conclusion && (
                      <p className="poppins-font para-text">{section.conclusion}</p>
                    )}
                  </div>
                );
              }

              // The Road Ahead Section
              if (section.__typename === "ComponentInsightsTheRoadAhead") {
                return (
                  <div key={index} id={section.slug} className="glass-panel rounded-2xl p-10">
                    <h1 className="mb-5 text-[30px] font-semibold montserrat-font">
                      {section.title}
                    </h1>
                    <div
                      className="poppins-font"
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                    {section.conclusion && (
                      <h4 className="montserrat-font font-semibold mt-5">
                        {section.conclusion}
                      </h4>
                    )}
                  </div>
                );
              }

              return null;
            })}

            {/* EXPLORE CTA SECTION */}
            {blog.exploretitle && (
              <div className="glass-panel rounded-2xl p-10 text-center">
                <h2 className="text-[36px] font-semibold montserrat-font">
                  {blog.exploretitle}
                </h2>
                {blog.exploresubtitle && (
                  <p className="poppins-font py-10">{blog.exploresubtitle}</p>
                )}
                <div className="flex flex-col lg:flex-row items-center gap-4 justify-center poppins-font">
                  {blog.button1text && (
                    <button className="bg-[#2575b6] py-2 px-6 rounded-lg text-white">
                      <a href={blog.button1link || "#"}>{blog.button1text}</a>
                    </button>
                  )}
                  {blog.button2text && (
                    <button className="border border-[#2575b6] py-2 px-6 bg-white text-black rounded-lg">
                      <a href={blog.button2link || "#"}>{blog.button2text}</a>
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* RELATED ARTICLES */}
            {blog.RelatedArticleItems && blog.RelatedArticleItems.length > 0 && (
              <div className="rounded-2xl p-3 py-10">
                <h1 className="mb-5 text-[24px] font-semibold">
                  {blog.RelatedArticlesText || "Related Articles"}
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                  {blog.RelatedArticleItems.map((article, idx) => (
                    <div key={idx} className="p-5 glass-panel rounded-2xl">
                      <p className="mb-3">{article.category}</p>
                      <p className="font-semibold mb-3">{article.title}</p>
                      <a href={article.link || "#"} className="text-[#2575b6]">
                        {article.readtext || "Read more"}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
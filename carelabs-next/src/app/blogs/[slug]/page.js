
import client from "@/lib/appollo-client";
import { GET_INSIGHTS_BY_SLUG } from "@/lib/api-Collection";
import { Calendar,Clock,ArrowRight,Tag } from "lucide-react";
import { clientIcons } from "@/lib/clientIcons";
import carlabz from "@/assets/carlabz.jpg";


export default async function Page({ params }) {
    const { slug } = await params;
    console.log("Blog_Slug",slug);

    if (!slug) {
      return (
        <div className="p-20 text-center">
          <h1 className="text-3xl font-bold">Slug Missing</h1>
        </div>
      );
    }
    let blog = null;
    try{
      const response = await client.query({
        query: GET_INSIGHTS_BY_SLUG,
        variables: { slug },
      
      });
      console.log("Blogs:", response.data.insightblogs[0]);
      
       blog=response.data.insightblogs[0];   
    }catch(err){
      console.log("Error at Fetching Blog By Slug",err);
    }
  
    const BrainIcon =blog?.badgeicon && clientIcons[blog.badgeicon.trim()]? clientIcons[blog.badgeicon.trim()]: null;
    const AuthorIcon =blog?.authoricon && clientIcons[blog.authoricon.trim()]? clientIcons[blog.authoricon.trim()]: null;
    const PublishedIcon =blog?.publishedicon && clientIcons[blog.publishedicon.trim()]? clientIcons[blog.publishedicon.trim()]: null;
    const TimeIcon =blog?.timeicon && clientIcons[blog.timeicon.trim()]? clientIcons[blog.timeicon.trim()]: null;



    if (!blog) {
      return (
          <div className="w-full h-screen flex flex-col items-center justify-center gap-6 p-4">

            {/* Skeleton for main card / hero section */}
            <div className="w-[80%]  h-[90%] flex items-center justify-center bg-gray-200 rounded-2xl p-4 animate-pulse flex-col gap-4">
              
              {/* Large placeholder for main heading */}
              <div className="w-full h-full bg-gray-300 rounded-lg"></div>

              {/* Placeholder for subheading */}
              <div className="w-3/4 h-8 bg-gray-300 rounded-lg"></div>

              {/* Inner content / stats placeholders */}
              <div className="w-full flex flex-col sm:flex-row items-center  justify-between gap-4 mt-4">
                <div className="w-full sm:w-[30%] h-24 bg-gray-300 rounded-lg"></div>
                <div className="w-full sm:w-[30%] h-24 bg-gray-300 rounded-lg"></div>
                <div className="w-full sm:w-[30%] h-24 bg-gray-300 rounded-lg"></div>
              </div>

            </div>
          </div>
      );
    }
  
 
  return (
    <div className="relative w-full flex flex-col items-center justify-center gap-5 overflow-y-auto">
      {/* Breadcrumbs */}
      <div className="w-full md:w-[80%] xl:w-[70%] mt-20 md:mt-24 lg:mt-30 px-4 md:px-0">
        <p className="text-para text-[14px] poppins-font">
          {/* Home / Insights / {blog.slug} */}
           <span className="text-slate-500">Home</span> /
           <span className="text-slate-500"> Insights </span> /{blog.slug}
        </p>
      </div>

      {/* HERO SECTION */}
      <div className="w-full md:w-[80%] xl:w-[70%] bg-red flex flex-col md:flex-row items-center gap-6 p-8 md:p-10 shadow-2xl rounded-[24px] blog-panel">
        <div className="w-full md:w-1/2 flex flex-col gap-4 ">
          {(BrainIcon || blog?.badge) && (
            <div className="flex items-center gap-2 gradient-bg-badge rounded-full py-2 px-4 w-max">
              {BrainIcon && <BrainIcon size={18} color="#2575b6" />}
              {blog?.badge && (
                <p className="montserrat-font primary-color font-medium text-sm">
                  {blog.badge}
                </p>
              )}
            </div>
          )}
          {/* <h1 className="text-[28px] lg:text-[36px] 2xl:text-[48px] font-bold montserrat-font leading-12">
            {blog.mainheading}
          </h1> */}
          <h1 className="text-[28px] lg:text-[36px] 2xl:text-[48px] font-bold montserrat-font leading-12"
            dangerouslySetInnerHTML={{ __html: blog.mainheading }}>
          </h1>

          <p className="text-[16px] xl:text-[18px] montserrat-font para-text">{blog.description}</p>

          <hr className="w-full border-gray-300 my-4" />

        <div className="flex flex-col sm:flex-row items-start gap-2 sm:items-center text-sm poppins-font para-text">
            

            {blog?.author && (
              <div className="flex items-center gap-1 ">
                {/* Show custom icon if exists, otherwise default User icon */}
                {AuthorIcon ? <AuthorIcon size={14} /> : <User size={14} />}
                <span className="text-[12px]">{blog.author}</span>
              </div>
            )}

            {blog?.publishedOn&& (
              <div className="flex items-center gap-1">
                {PublishedIcon? <PublishedIcon size={14} />: <Calendar/>}
                 <span className="text-[12px]">{blog.publishedOn}</span>
              </div>
            )}

        {blog?.time && (
          <div className="flex items-center gap-1">
            {/* Show custom icon if exists, otherwise default Clock icon */}
            {TimeIcon ? <TimeIcon size={14} /> : <Clock size={14} />}
            <span className="text-[12px]">{blog.time}</span>
          </div>
        )}
          </div>

          <div className="flex flex-wrap gap-3 mt-2">
            {blog.category?.map((item, index) => (
              <span
                key={index}
                className="flex items-center gap-2 
                          px-4 py-1 rounded-full 
                          bg-[#eaf3ff] 
                          text-[#1f7fdb] 
                          text-sm font-medium 
                          border border-[#cfe3ff]"
              >
                <Tag size={14} />
                {item.title}
              </span>
            ))}
          </div>
        </div>
 
           
        <div
          className="w-full md:w-1/2 h-64 md:min-h-[440px] rounded-2xl"
          style={{
            backgroundImage: `url(${blog.mainimage?.url || carlabz.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      {/* MAIN CONTENT WRAPPER */}
      <div className="w-full flex items-center justify-center mt-10">
        <div className="w-full md:w-[80%] xl:w-[70%] flex flex-col items-center justify-center lg:items-start lg:flex-row gap-8">
          
          {/* SIDEBAR */}
          <div className="w-[90%] md:w-full lg:w-[25%] flex flex-col gap-5  ">
            {/* Table of Contents */}
            {blog.articleSection && (
              <div className="shadow-lg rounded-[16px] py-5 blog-panel">
                <h2 className="p-5 text-[14px] font-bold montserrat-font uppercase">
                  {blog.articleSection.title || "IN THIS ARTICLE"}
                </h2>
                <ul>
                  {blog.articleSection.articleItems?.map((item, index) => (
                    <li key={index} className="px-10 py-3 poppins-font text-[14px] para-text">
                      <a href={`#${item.slug}`}>{item.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Newsletter Signup */}
            <div className="shadow-lg rounded-[16px] p-5 blog-panel">
              <h2 className="text-[15px] font-bold montserrat-font">
                {blog.Weeklytitle || "Weekly Insights"}
              </h2>
              <p className="py-2 poppins-font text-[14px] para-text">
                {blog.Weeklydesc || "Get the latest insights delivered to your inbox."}
              </p>
              {/* <input
                placeholder={blog.emailplaceholder || "Your email"}
                className="w-full border border-black h-10 rounded-lg p-2"
              /> */}
              <input
  placeholder={blog.emailplaceholder || "Your email"}
className="w-full border border-black h-10 rounded-lg p-2
             focus:outline-none focus:ring-2 focus:ring-[#157DE5]" />
              {/* <button className="bg-[#157de5] w-full p-2 mt-3 rounded-lg text-white text-[14px] font-medium">
                <a href={blog.subscribebuttonlink || "#"}>
                  {blog.subscribebutton || "Subscribe"}
                </a>
              </button> */}
              <button className="bg-[#157de5] w-full p-2 mt-3 rounded-lg text-white text-[14px] font-medium hover:bg-[#3B94EB] transition-colors duration-300">
                <a href={blog.subscribebuttonlink || '#'}>{blog.subscribebutton || 'Subscribe'}</a>
              </button>         
   </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="w-[90%] md:w-full lg:w-[75%] flex flex-col gap-5">
          

      {blog.introtitle && blog.IntroductionContent && (
        <div className="shadow-lg rounded-2xl p-10 blog-panel">
          <h1 className="mb-5 text-[30px] font-bold montserrat-font">
            {blog.introtitle}
          </h1>

    <div
      className="poppins-font text-[16px] para-text leading-[1.7]"
      dangerouslySetInnerHTML={{
        __html: blog.IntroductionContent.includes("<")
          ? blog.IntroductionContent
          : blog.IntroductionContent
              // Convert literal \n\n to paragraph breaks
              .replace(/\\n\\n/g, "</p><p class='mb-5'>")
              // Convert remaining \n to <br/>
              .replace(/\\n/g, "<br/>")
              // Convert literal tabs \t to indentation
              .replace(/\\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;")
              // Wrap everything in <p> if not already
              .replace(/^/, "<p class='mb-5'>")
              .concat("</p>")
      }}
    />
  </div>
)}



            {/* DYNAMIC SECTIONS */}
            {blog.sections?.map((section, index) => {
              // Why Traditional Maintenance Section
              if (section.__typename === "ComponentInsightsWhyTraditionalMaintenance") {
                return (
                  <div key={index} id={section.slug} className="shadow-lg rounded-2xl p-10 blog-panel">
                {section.title.includes("<") ? (
                    <h1
                      className="mb-5 text-[30px] font-bold montserrat-font"
                      dangerouslySetInnerHTML={{ __html: section.title }}
                    />
                  ) : (
                    <h1 className="mb-5 text-[30px] font-bold montserrat-font">
                      {section.title}
                    </h1>
                  )}


                    {/* {section.introduction && (
                      <p className="poppins-font text-[16px] mb-5">{section.introduction}</p>
                    )} */}

              {section.introduction && (() => {
              const lines = section.introduction.split("\n").map(l => l.trim()).filter(l => l !== "");

              const firstParagraph = lines[0];

              const bulletItems = lines.slice(1, -1);
              const lastParagraph = lines[lines.length - 1];

    return (
      <div className="poppins-font text-[16px] para-text leading-relaxed mb-5">
        
        <p className="mb-4">{firstParagraph}</p>

        <ul className="list-disc ml-6 space-y-1 mb-4">
          {bulletItems.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <p>{lastParagraph}</p>
      </div>
    );
  })()}



                    {section.WhyTraditionalItems && (
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                        {section.WhyTraditionalItems.map((item, idx) => (
                          <div key={idx} className="p-3 border rounded-2xl">
                            <h2 className="font-semibold text-[16px] montserrat-font py-2" >
                              {item.title}
                            </h2>
                            <p className="text-[14px] poppins-font para-text">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              // What AI Powered Predictive Section
              // if (section.__typename === "ComponentInsightsWhatAiPoweredPredictive") {
              //   return (
              //     <React.Fragment key={index}>
              //       <div id={section.slug} className="glass-panel rounded-2xl p-10">
              //         <h2 className="mb-5 text-[30px] font-semibold montserrat-font">
              //           {section.title}
              //         </h2>
              //         <div
              //           className="poppins-font text-[16px]"
              //           dangerouslySetInnerHTML={{ __html: section.content }}
              //         />
              //       </div>
              //       {section.image?.url && (
              //         <div className="glass-panel rounded-2xl">
              //           <div
              //             className="h-[350px] rounded-t-2xl w-full"
              //             style={{
              //               backgroundImage: `url(${section.image.url})`,
              //               backgroundSize: "cover",
              //               backgroundPosition: "center",
              //             }}
              //           />
              //           {section.imagetext && (
              //             <p className="p-4 poppins-font italic">{section.imagetext}</p>
              //           )}
              //         </div>
              //       )}
              //     </React.Fragment>
              //   );
              // }

              if (section.__typename === "ComponentInsightsWhatAiPoweredPredictive") {
  return (
    <>
      <div id={section.slug} className="shadow-lg rounded-2xl p-10 blog-panel">
        
        {/* Title */}
       {section.title.includes("<") ? (
          <h1
            className="mb-5 text-[30px] font-bold montserrat-font"
            dangerouslySetInnerHTML={{ __html: section.title }}
          />
          ) : (
            <h1 className="mb-5 text-[30px] font-bold montserrat-font">
              {section.title}
            </h1>
          )}


        {/* Content Parsing (paragraph → list → paragraph) */}
        {section.content && (() => {
          const lines = section.content
            .split("\n")
            .map((t) => t.trim())
            .filter((t) => t !== "");

          if (lines.length === 1) {
            return (
              <p className="poppins-font text-[16px] para-text leading-relaxed">
                {lines[0]}
              </p>
            );
          }

          const firstParagraph = lines[0];
          const bulletItems = lines.slice(1, -1);
          const lastParagraph = lines[lines.length - 1];

          return (
            <div className="poppins-font para-text text-[16px] leading-relaxed">
              {/* First paragraph */}
              <p className="mb-4">{firstParagraph}</p>

              {/* Bullet list */}
              {bulletItems.length > 0 && (
                <ul className="list-disc ml-6 space-y-1 mb-4">
                  {bulletItems.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}

              {/* Last paragraph */}
              <p>{lastParagraph}</p>
            </div>
          );
        })()}

      </div>

      {/* Image Block */}
      {section.image?.url && (
        <div className="shadow-lg rounded-2xl blog-panel">
          <div
            className="h-[350px] rounded-t-2xl w-full"
            style={{
              backgroundImage: `url(${section.image.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {section.imagetext && (
            <p className="p-4 poppins-font para-text italic text-[13px]">{section.imagetext}</p>
          )}
        </div>
      )}
    </>
  );
}


              // Key Building Blocks Section
              if (section.__typename === "ComponentInsightsKeyBuildingBlocks") {
                return (
                  < >
                    <div id={section.slug} className="shadow-lg rounded-2xl p-10 blog-panel">
                      {section.title.includes("<") ? (
                          <h2
                            className="mb-5 text-[30px] font-bold montserrat-font"
                            dangerouslySetInnerHTML={{ __html: section.title }}
                          />
                        ) : (
                          <h2 className="mb-5 text-[30px] font-bold montserrat-font">
                            {section.title}
                          </h2>
                        )}

                      {section.KeyBuildingBlocksItems?.map((item, idx) => (
                        <div key={idx} className="mb-8">
                          <h2 className="mb-2 text-[#157de5] montserrat-font text-[20px] font-bold">
                            {item.order}. {item.title}
                          </h2>
                          <div
                            className="poppins-font para-text"
                            dangerouslySetInnerHTML={{ __html: item.content }}
                          />
                        </div>
                      ))}
                    </div>
                    {section.image?.url && (
                      <div className="shadow-lg rounded-2xl blog-panel">
                        <div
                          className="h-[350px] rounded-t-2xl w-full"
                          style={{
                            backgroundImage: `url(${section.image.url})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        />
                        {section.imagetext && (
                          <p className="p-4 poppins-font para-text italic text-[13px]">{section.imagetext}</p>
                        )}
                      </div>
                    )}
                  </>
                );
              }

              // Real World Use Cases Section
              if (section.__typename === "ComponentInsightsRealWorld") {
                return (
                  <div key={index} id={section.slug} className="shadow-lg rounded-2xl p-10 blog-panel">
                       {section.title.includes("<") ? (
                          <h2
                            className="mb-5 text-[30px] font-bold montserrat-font"
                            dangerouslySetInnerHTML={{ __html: section.title }}
                          />
                        ) : (
                          <h2 className="mb-5 text-[30px] font-bold montserrat-font">
                            {section.title}
                          </h2>
                        )}
                    {section.RealWorldItems?.map((item, idx) => (
                      <div key={idx} className="mb-6">
                        <h3 className="text-[20px] montserrat-font mb-2 font-bold text-[#157de5]">
                          {item.title}
                        </h3>
                        <div
                          className="poppins-font"
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        />
                        {item.result && (
                          <p className="mb-3 poppins-font text-[13px] font-semibold text-[#FF7038] mt-[1.15rem]">{item.result}</p>
                        )}
                      </div>
                    ))}
                  </div>
                );
              }

              // How to Get Started Section
              if (section.__typename === "ComponentInsightsHowtoGetStarted") {
                return (
                  <>
                    <div id={section.slug} className="shadow-lg rounded-2xl p-10 blog-panel">
                        {section.title.includes("<") ? (
                          <h2
                            className="mb-5 text-[30px] font-bold montserrat-font"
                            dangerouslySetInnerHTML={{ __html: section.title }}
                          />
                        ) : (
                          <h2 className="mb-5 text-[30px] font-bold montserrat-font">
                            {section.title}
                          </h2>
                        )}
                      <div
                        className="poppins-font para-text"
                        dangerouslySetInnerHTML={{ __html: section.content }}
                      />
                    </div>
                    {section.image?.url && (
                      <div className="shadow-lg rounded-2xl blog-panel">
                        <div
                          className="h-[350px] rounded-t-2xl w-full"
                          style={{
                            backgroundImage: `url(${section.image.url})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        />
                        {section.imagetext && (
                          <p className="p-4 poppins-font para-text">{section.imagetext}</p>
                        )}
                      </div>
                    )}
                  </>
                );
              }

              // Challenges Section
              if (section.__typename === "ComponentInsightsChallenges") {
                return (
                  <div key={index} id={section.slug} className="shadow-lg rounded-2xl p-10 blog-panel">
                     {section.title.includes("<") ? (
                          <h2
                            className="mb-5 text-[30px] font-bold montserrat-font"
                            dangerouslySetInnerHTML={{ __html: section.title }}
                          />
                        ) : (
                          <h2 className="mb-5 text-[30px] font-bold montserrat-font">
                            {section.title}
                          </h2>
                        )}
                    {section.introduction && (
                      <p className="poppins-font para-text mb-5">{section.introduction}</p>
                    )}
                    {section.ChallengesItems && (
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 py-5">
                        {section.ChallengesItems.map((item, idx) => (
                          <div key={idx} className="p-3 border rounded-2xl">
                            <h2 className="font-semibold montserrat-font">{item.title}</h2>
                            <p className="poppins-font para-text">{item.description}</p>
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
                  <div key={index} id={section.slug} className="shadow-lg rounded-2xl p-10 blog-panel">
                    {section.title.includes("<") ? (
                          <h2
                            className="mb-5 text-[30px] font-bold montserrat-font"
                            dangerouslySetInnerHTML={{ __html: section.title }}
                          />
                        ) : (
                          <h2 className="mb-5 text-[30px] font-bold montserrat-font">
                            {section.title}
                          </h2>
                        )}
                    <div
                      className="poppins-font para-text"
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
              <div className="shadow-lg rounded-2xl p-10 text-center bg-gradient-to-br 
                  from-[rgba(31,127,219,0.08)] 
                  to-[rgba(255,122,60,0.08)]">
                <h2 className="text-[36px] font-bold montserrat-font"
                 dangerouslySetInnerHTML={{ __html: blog.exploretitle }}
                >
                  
                </h2>
                {blog.exploresubtitle && (
                  <p className="poppins-font para-text py-10">{blog.exploresubtitle}</p>
                )}
                <div className="flex flex-col lg:flex-row items-center gap-4 justify-center para-text poppins-font">
                  {blog.button1text && (
                    <button className="bg-[#157de5] py-3 px-6 rounded-md text-white text-[14px] font-medium hover:bg-[#3B94EB] transition-colors duration-300">
                      <a href={blog.button1link || "#"} className="flex items-center gap-2">
                        {blog.button1text}
                        <ArrowRight size={18} />
                      </a>
                    </button>
                  )}
                  {blog.button2text && (
                    <button className="border-2 border-[#157de54d] py-3 px-6 bg-white text-black rounded-md text-[14px] font-medium hover:bg-[#cad6e7] hover:text-white 
                     transition-colors duration-300">
                      <a href={blog.button2link || "#"}>{blog.button2text}</a>
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* RELATED ARTICLES */}
            {blog.RelatedArticleItems && blog.RelatedArticleItems.length > 0 && (
              <div className="rounded-2xl p-3 py-10">
                <h1 className="mb-5 text-[24px] font-bold">
                  {blog.RelatedArticlesText || "Related Articles"}
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                  {blog.RelatedArticleItems.map((article, idx) => (
                    <div key={idx} className="p-5 shadow-lg rounded-2xl blog-panel transition-all duration-300 hover:-translate-y-2">
                      <p className="mb-3 text-[#157de5] font-semibold">{article.category}</p>
                      <p className="font-bold mb-3 text-lg hover:text-[#157de5] transition-colors duration-300 cursor-pointer">{article.title}</p>
                      {/* <a href={article.link || "#"} className="text-[#157de5] flex items-center gap-2 font-semibold" >
                        {article.readtext || "Read more"}
                        <ArrowRight size={18} />
                      </a> */}

                      <a
                        href={article.link || "#"}
                        className="text-[#157de5] flex items-center gap-2 font-semibold group"
                      >
                        {article.readtext || "Read more"}
                        <ArrowRight
                          size={18}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
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
"use client";

import React, { useEffect, useState } from "react";
import client from "@/lib/appollo-client";
import { GET_ALL_INSIGHTBLOGS } from "@/lib/api-Collection";
import carlabz from "@/assets/carlabz.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const PAGE_SIZE = 9; 
const DESCRIPTION_LENGTH = 100;

const Page = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await client.query({
          query: GET_ALL_INSIGHTBLOGS,
        });

        const filteredBlogs = data?.insightblogs?.filter((blog) =>
          blog.blog_categories?.some((cat) => cat.category === "Blog")
        );

        console.log("insightblogs::::::::::::",filteredBlogs);

        setBlogs(filteredBlogs || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center gap-6 p-4">
        <div className="w-[80%]  h-[90%] flex items-center justify-center bg-gray-200 rounded-2xl p-4 animate-pulse flex-col gap-4">
          <div className="w-full h-full bg-gray-300 rounded-lg"></div>
          <div className="w-3/4 h-8 bg-gray-300 rounded-lg"></div>
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
            <div className="w-full sm:w-[30%] h-24 bg-gray-300 rounded-lg"></div>
            <div className="w-full sm:w-[30%] h-24 bg-gray-300 rounded-lg"></div>
            <div className="w-full sm:w-[30%] h-24 bg-gray-300 rounded-lg"></div>
          </div>
        </div>
      </div>
    );
  }

  // Calculate pagination
  const totalPages = Math.ceil(blogs.length / PAGE_SIZE);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const currentBlogs = blogs.slice(startIndex, startIndex + PAGE_SIZE);

  // Helper to truncate description
  const truncate = (text, length) =>
    text.length > length ? text.substring(0, length) + "..." : text;

  return (
    <div className="w-full px-5 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center mt-20">All Blogs</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {currentBlogs.map((blog, index) => {
          const imageUrl = blog.mainimage?.url || carlabz.src;

          return (
            <Link key={index} href={`/blogs/${blog.slug}`} passHref>
              <div
                className="group bg-white rounded-xl shadow-md overflow-hidden cursor-pointer
                          transform transition-all duration-300 hover:-translate-y-3 hover:shadow-xl"
              >
                <div className="w-full h-60 overflow-hidden relative">
                  <img
                    src={imageUrl}
                    alt={blog.mainheading}
                    className="w-full h-full object-cover transform transition-all duration-500 ease-in-out group-hover:scale-115"
                  />
                </div>

                <div className="p-5">
                  <h2 className="text-xl font-semibold mb-2">{blog.mainheading}</h2>
                  <p className="text-gray-600 mb-4">{truncate(blog.description, DESCRIPTION_LENGTH)}</p>

                  <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
                    <span className="flex items-center gap-1">
                      {blog.publishedicon && (
                        <img
                          src={blog.publishedicon}
                          alt="Published Icon"
                          className="w-4 h-4"
                        />
                      )}
                      {blog.publishedOn}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          className={`p-2 rounded hover:bg-gray-200 transition ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <ChevronLeft size={20} />
        </button>

        <span className="px-4 py-2">{currentPage} / {totalPages}</span>

        <button
          className={`p-2 rounded hover:bg-gray-200 transition ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Page;
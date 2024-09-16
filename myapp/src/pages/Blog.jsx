import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Blog = () => {
  const [blog, setBlog] = useState({});
  const { id } = useParams();

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/blog/${id}`);
      console.log(response.data);
      setBlog(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [id]); // The effect will run only when `id` changes

  return (
    <div className="w-full h-auto block mt-10 sm:px-20 px-4">
      <h1 className="mt-4 w-full px-4 font-bold text-lg text-[#ff1d7b]">
        {blog.title}
      </h1>
      <h2 className="mt-1 w-full px-4 font-bold text-sm text-[#606060] italic">
        Written by {blog.author}
      </h2>
      <p className="mt-5 px-4">{blog.body}</p>
      <button className="bg-[#ff1d7b] px-4 py-2 font-semibold rounded-[16px] mt-8 mx-4 text-white">
        delete
      </button>
    </div>
  );
};

export default Blog;

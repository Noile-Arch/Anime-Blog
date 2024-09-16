import { useEffect, useState } from "react";
import axios from "axios";
import BlogList from "../components/BlogList";
const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchBlogs = async () => {
    setTimeout(async () => {
      try {
        const response = await axios.get("http://localhost:3000/blogs");
        console.log(response.data);
        setBlogs(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }, 500);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <main className="text-black h-auto block md:py-20 py-10 md:mx-0 mx-5">
      {loading ? (
        <div className="font-semibold text-2xl w-[100%] md:text-start px-5 sm:px-20">Loading...</div>
      ) : (
        blogs.length > 0 ? (
          <BlogList blogs={blogs} title="All Blogs!" />
        ) : (
          <div className="font-semibold text-2xl w-[100%] md:text-start px-5 sm:px-20">No blogs available.</div>
        )
      )}
    </main>
  );
  
};

export default Home;

import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className=" w-full h-auto">
      <h1 className="font-semibold text-2xl w-[100%] md:text-start px-5 sm:px-20">
        {title}
      </h1>
      <div className="mt-4 w-full px-4 sm:px-20">
        {blogs.map((blog) => (
          <Link
            to={`/blog/${blog._id}`}
            className="w-full h-[120px] px-5 py-10 my-2 hover:shadow-lg block"
            key={blog._id}
          >
            <h1 className="font-bold text-xl text-[#ff1d7b]">{blog.title}</h1>
            <p className=" text-[16px]">Written by {blog.author}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogList;

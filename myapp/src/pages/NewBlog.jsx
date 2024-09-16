import axios from "axios";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
const NewBlog = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/blog/new", {
        title,
        body,
        author
      });
      console.log(response.data);
      navigate('/')
    } catch (error) {
      console.log(error);
    }

  };
  return (
    <div className="w-full h-auto mt-10 flex flex-col gap-[40px] justify-center items-center">
      <h1 className="text-3xl font-bold text-[#ff1d7b]">Add a new blog</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-start w-[70%] md:w-[40%] gap-4 md:gap-2"
      >
        <label htmlFor="title">Blog title:</label>
        <input
          type="text"
          name="title"
          id="title"
          required
          value={title}
          onChange={(e)=>{setTitle(e.target.value)}}
          className="text-sm px-4 py-2 outline-none bg-white border-2 w-full rounded-[8px]"
        />
        <label htmlFor="body">Blog body:</label>
        <textarea
          name="body"
          id="body"
          cols={1}
          rows={4}
          required
          value={body}
          onChange={(e)=>{setBody(e.target.value)}}
          className="bg-white text-sm px-4 py-2 border-2 w-full outline-none rounded-[8px]"
        ></textarea>
        <label htmlFor="author">Blog author:</label>
        <input
          type="text"
          name="author"
          id="author"
          required
          value={author}
          onChange={(e)=>{setAuthor(e.target.value)}}
          className="text-sm px-4 py-2 outline-none bg-white border-2 w-full rounded-[8px]"
        />
        <div className="w-full flex justify-center items-center">
          <button
            className="bg-[#ff1d7b] object-center px-6 py-2 font-semibold rounded-[16px] mt-8  text-white"
            type="submit"
          >
            Add blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewBlog;

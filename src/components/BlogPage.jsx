import React from "react";
import { useParams } from "react-router-dom";

const BlogPage = ({ posts ,handlePostDelete}) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id == id);
  return (
    <section className="flex flex-col  w-[100vw]">
      <div className="flex flex-col items-center justify-center w-[50vw] mt-10 ml-10 gap-3 bg-transparent shadow-2xl rounded-lg h-[50vh] p-4">
        <h1 className="font-poppins font-bold text-2xl gradient ">
          {post.title}
        </h1>
        <p className="font-lato text-xl">{post.body}</p>
        <span>{post.datetime}</span>
        
      </div>
      <button className="bg-violet-700 rounded-xl shadow-2xl font-bold font-poppins px-4 py-2 w-[120px] ml-20 mt-5"
      onClick={()=>handlePostDelete(post.id)}>
        Delete
      </button>
    </section>
  );
};

export default BlogPage;

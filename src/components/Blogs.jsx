import { Link } from "react-router-dom";

const Blogs = ({ posts }) => {
  return (
    <div className="flex flex-col items-center mt-10 gap-8">
      {posts.map((post) => (
        <>
          <div className="flex gap-2 flex-col">
            <h1 className="font-bold text-xl font-poppins gradient ">
              {post.title}
            </h1>
            <p className="font-lato text-lg text-blue-200">
              {post.body.slice(0, 100)}...
            </p>
          </div>
          <Link to={`/all-blogs/${post.id}`}>
            <button class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">Read More</span>
            </button>
          </Link>
        </>
      ))}
    </div>
  );
};

export default Blogs;

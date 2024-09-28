

const NewBlog = ({ blogFormData, setBlogFormData, handleSubmit }) => {
 
  return (
    <div className="ml-5 mr-5 mt-10">
      <form
        action="blog"
        className="flex flex-col w-full gap-7 items-center "
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-center gap-2">
          <label className="font-poppins font-bold text-xl" htmlFor="title">
            Title
          </label>
          <input
            value={blogFormData.title}
            onChange={(e) =>
              setBlogFormData({ ...blogFormData, title: e.target.value })
            }
            className="px-4 py-4 w-[50vw] outline-none rounded-lg text-black font-lato"
            type="text"
            id="title"
            placeholder="write your title..."
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <label className="font-poppins font-bold text-xl" htmlFor="desc">
            description
          </label>
          <textarea
            value={blogFormData.body}
            onChange={(e) =>
              setBlogFormData({ ...blogFormData, body: e.target.value })
            }
            className="px-4 py-6 w-[50vw] h-72 outline-none rounded-lg text-black"
            id="desc"
            placeholder="write your content..."
          ></textarea>
        </div>
        <button
          className="bg-violet-500 px-2 py-2 font-bold text-nowrap shadow-2xl rounded-lg"
          type="submit"
        >
          Add To Blog
        </button>
      </form>
    </div>
  );
};

export default NewBlog;

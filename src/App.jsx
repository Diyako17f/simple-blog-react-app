import Nav from "./components/Nav";
import Home from "./components/Home";
import NewBlog from "./components/NewBlog";
import Blogs from "./components/Blogs";
import BlogPage from "./components/BlogPage";
import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState(JSON.parse(localStorage.getItem('postslist')) || []);
  const [blogFormData, setBlogFormData] = useState({
    title: "",
    body: "",
  });

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState( []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const dateTime = new Date();
    const formattedDate = dateTime.toLocaleDateString("en-US"); // MM/DD/YYYY
    const newPost = {
      id,
      title: blogFormData.title,
      body: blogFormData.body,
      formattedDate,
    };
    const postList = [...posts, newPost];
    setPosts(postList);
    console.log(newPost);
    setBlogFormData({
      title: "",
      body: "",
    });
    navigate("/all-blogs");
  };

  const handlePostDelete = (id) => {
    const delettedPost = posts.filter((post) => post.id !== id);
    setPosts(delettedPost);
    navigate("/all-blogs");
  };

  useEffect(() => {
    const filteredResults = posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults);
  }, [search]);

  useEffect(()=>{
   localStorage.setItem('postslist',JSON.stringify(posts))
  },[posts])

  return (
    <>
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/new-blog"
          element={
            <NewBlog
              blogFormData={blogFormData}
              setBlogFormData={setBlogFormData}
              handleSubmit={handleSubmit}
            />
          }
        />
        <Route
          path="/all-blogs"
          element={<Blogs posts={posts || searchResults} />}
        />
        <Route
          path="/all-blogs/:id"
          element={
            <BlogPage posts={posts} handlePostDelete={handlePostDelete} />
          }
        />
      </Routes>
    </>
  );
}

export default App;

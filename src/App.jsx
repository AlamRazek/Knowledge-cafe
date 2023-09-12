import { useEffect, useState } from "react";
import "./App.css";
import Blogs from "./components/blogs/Blogs";
import Header from "./components/header/header";
import Bookmarks from "./components/bookmarks/Bookmarks";

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <>
      <Header></Header>
      <div className="md:flex">
        <Blogs className="w-2/3"></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Blogs.css";
import "../../reUsableStyle.css";
import "../../responsiveStyle.css";
import Blog from "./Blog/Blog";

export default function Blogs() {

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);




  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get("/Data/blogsData.json");
        setBlogs(response.data);
        setError(null);
      } catch (err) {
        setError("Failed to load blog articles");
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, []);

  if (loading) {
    return <div className="loading">Loading articles...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <>
      <div className="container">
        <div className="blog-box">
          <div className="blog-header">
            <h2>Check out our latest article</h2>
            <hr className="divider" />
          </div>
          <div className="blogs">
            {blogs.map((blog) => (
              <Blog
              key={blog.id}
              imgSrc={blog.imgSrc}
              title={blog.title}
              description={blog.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

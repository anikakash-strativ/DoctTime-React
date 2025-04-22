import React from "react";
import "./Blogs.css";
import "../../reUsableStyle.css";
import "../../responsiveStyle.css";
import Blog from "./Blog/Blog";

export default function Blogs() {

const blogData = [
  {
    imgSrc: '../src/assets/checkup.png',
    title: 'Disease detection, check up in the laboratory',
    description: 'In this case, the role of the health laboratory is very important to do a disease detection...',
  },
  {
    imgSrc: '../src/assets/research.png',
    title: 'Herbal medicines that are safe for consumption',
    description: 'Herbal medicine is very widely used at this time because of its very good for your health...',
  },
  {
    imgSrc: '../src/assets/nature.png',
    title: 'Natural care for healthy facial skin',
    description: 'A healthy lifestyle should start from now and also for your skin health. There are some...',
  },
];

  return (
    <>
      <div className="container">
        <div className="blog-box">
          <div className="blog-header">
            <h2>Check out our latest article</h2>
            <hr className="divider" />
          </div>
          <div className="blogs">
            {
              blogData.map((blog, index)=>(
                <Blog
                  key = {index}
                  imgSrc = {blog.imgSrc}
                  title = {blog.title}
                  description = {blog.description}
                />
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

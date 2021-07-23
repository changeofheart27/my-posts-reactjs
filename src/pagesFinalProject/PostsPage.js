import React from "react";

const PostsPage = () => {
  return (
    <div className="article-post">
      <article>
        <a href="#">
          <h2 class="article-title">Manage data in Docker</h2>
          <h3 class="article-info">
            How to use volumes and bind mounts in Docker.
          </h3>
        </a>
        <p class="article-metadata">
          Posted by Ocean Nguyen on May 20, 2019 · 8 mins read
        </p>
        <hr/>
      </article>

      <article>
        <a href="#">
          <h2 class="article-title">How to create a Docker image</h2>
          <h3 class="article-info">
            Easy steps to build a Docker image with Dockerfile.
          </h3>
        </a>
        <p class="article-metadata">
          Posted by Ocean Nguyen on May 11, 2019 · 8 mins read
        </p>
        <hr/>
      </article>

      <article>
        <a href="#">
          <h2 class="article-title">Implement MVC Servlet với Form</h2>
          <h3 class="article-info">Steps to create servlet with form</h3>
        </a>
        <p class="article-metadata">
          Posted by Hoang Nguyen on June 23, 2021 · 3 mins read
        </p>
        <hr/>
      </article>
      <article>
        <a href="#">
          <h2 class="article-title">Tạo trang web hoàn chỉnh với HTML và CSS thuần</h2>
          <h3 class="article-info">How to create a website when you don't know anything about HTML/CSS...</h3>
        </a>
        <p class="article-metadata">Posted by Hieu Duong on June 23, 2021 · 3 mins read</p>
        <hr/>
      </article>

      <button class="btn-post" type="submit">View All Posts →</button>
    </div>
  )
};

export default PostsPage;
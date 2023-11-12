import React from "react";

import { Header, SemiTransparentCard } from "..";

const articleInformation = (
  <p>
    Welcome to our fitness website! We are proud to offer a rich and diverse
    collection of articles in our
    <b> blog section</b>. Whether you're looking for workout tips, nutritional
    guidance, or insights into the latest fitness trends, our blog is a valuable
    resource to help you on your fitness journey. Explore a wide range of
    topics, from beginner-friendly advice to advanced training techniques. Stay
    informed and motivated with our regularly updated blog, where you'll find
    expert insights, practical tips, and inspiration for achieving your fitness
    goals.
  </p>
);

const BlogSection = () => {
  return (
    <section className="w-full overflow-hidden">
      <Header title="Our Articles" />
      <div className="w-full h-full bg-gradient-to-br from-gradient-starting-purple to-gradient-ending-pink">
        <div className="p-5 py-10 lg:py-24 lg:px-16 xl:mx-72">
          <SemiTransparentCard
            content={articleInformation}
            link="blog"
            linkContent="Let's visit our blog page"
            imageSrc="left-arrow"
            title=""
          />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

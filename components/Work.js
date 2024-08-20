import React from "react";
import WorkCard from "./WorkCard";

const Work = () => {
  return (
    <div className="container flex items-start justify-center w-screen m-10">
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold text-center my-4">Latest Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <WorkCard
            img="/image.jpg"
            alt="My Work Image"
            title="Project Title"
            description="UI/UX Design"
          />
          <WorkCard
            img="/image1.jpg"
            alt="My Work Image"
            title="Project Title"
            description="UI/UX Design"
          />
          <WorkCard
            img="/image2.jpg"
            alt="My Work Image"
            title="Project Title"
            description="UI/UX Design"
          />
          <WorkCard
            img="/image3.jpg"
            alt="My Work Image"
            title="Project Title"
            description="UI/UX Design"
          />
          <WorkCard
            img="/image4.jpg"
            alt="My Work Image"
            title="Project Title"
            description="UI/UX Design"
          />
          <WorkCard
            img="/image5.jpg"
            alt="My Work Image"
            title="Project Title"
            description="UI/UX Design"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;

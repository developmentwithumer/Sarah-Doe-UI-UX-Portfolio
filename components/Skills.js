import React from "react";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-screen">
      <SkillsCard
        icon="/icon2.svg"
        alt="Icon"
        title="User Interface (UI) Design"
        description="Expertise in crafting visually appealing and user-friendly interfaces, focusing on layout, color theory, typography, and visual hierarchy to enhance user interaction and satisfaction."
      />
      <SkillsCard
        icon="/icon1.svg"
        alt="Icon"
        title="User Experience (UX) Design"
        description="Proficient in conducting user research, creating user personas, and developing wireframes and prototypes to ensure a seamless and intuitive user experience tailored to specific needs and goals."
      />
      <SkillsCard
        icon="/icon.svg"
        alt="Icon"
        title="Graphic Design"
        description="Strong background in graphic design principles, including branding, logo creation, and visual communication, providing a solid foundation for creating cohesive and engaging design elements."
      />
      <SkillsCard
        icon="/icon3.svg"
        alt="Icon"
        title="Prototyping and Wireframing"
        description="Experienced in using tools like Sketch, Figma, and Adobe XD to create interactive prototypes and detailed wireframes, facilitating user testing and iterative design improvements."
      />
      <SkillsCard
        icon="/icon2.svg"
        alt="Icon"
        title="Design Systems and Style Guides"
        description="Experience in developing and maintaining design systems and style guides to ensure consistency and efficiency in design across multiple projects and platforms."
      />
      <SkillsCard
        icon="/icon1.svg"
        alt="Icon"
        title="Tools and Technologies"
        description="Proficient in industry-standard design tools such as Adobe Creative Suite, Figma, Sketch, and InVision, with a solid understanding of front-end technologies like HTML and CSS to bridge the gap between design and development."
      />
    </div>
  );
};

export default Skills;

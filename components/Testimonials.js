import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-screen">
      <TestimonialCard
        count="5"
        img="/client.png"
        alt="Client Image"
        text="I couldn’t be happier with the UI/UX design services provided by Sarah. Their expertise in creating user-friendly and aesthetically pleasing designs has transformed our mobile app into a favorite among our users. The feedback we’ve received has been overwhelmingly positive, and our app’s usability has reached new heights. Sarah is a true professional and an asset to any project."
        name="Emily Davis"
        company="Product Manager at AppMaster"
      />
      <TestimonialCard
        count="5"
        img="/client.png"
        alt="Client Image"
        text="Working with Sarah was an absolute pleasure. Their keen eye for design and user experience turned our outdated website into a modern, intuitive platform that our users love. The attention to detail and innovative solutions they brought to the table exceeded our expectations. Highly recommended for anyone looking to elevate their digital presence!"
        name="Jane Smith"
        company="CEO of Tech Innovators"
      />
      <TestimonialCard
        count="5"
        img="/client.png"
        alt="Client Image"
        text="From the initial consultation to the final delivery, Sarah demonstrated exceptional skill and creativity. They listened to our needs, understood our brand, and delivered a UI/UX design that perfectly captured our vision. The process was smooth, and the results speak for themselves. Our user engagement and satisfaction have significantly improved. Thank you for the fantastic work!"
        name="Michael Johnson"
        company="Marketing Director at Creative Solutions"
      />
    </div>
  );
};

export default Testimonials;

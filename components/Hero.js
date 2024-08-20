"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import Button from "./Button";
import Link from "next/link";

const Hero = () => {
  // Smooth scrolling function
  const scrollToSection = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleLinkClick = (event) => {
      const target = event.currentTarget.getAttribute("href").substring(1);
      if (target) {
        scrollToSection(target);
        event.preventDefault(); // Prevent default anchor behavior
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    // Cleanup event listeners on component unmount
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);

  return (
    <div className="container flex items-center justify-between md:flex-row flex-col p-10 gap-12 w-screen">
      <div className="flex flex-col gap-6 items-start text-wrap text-start">
        <span>Welcome</span>
        <div className="flex flex-col">
          <h1 className="text-5xl">I'm Sarah Doe</h1>
          <span className="font-medium text-end">UI/UX Designer</span>
        </div>
        <p className="text-balance">
          Creating seamless, user-centric designs that elevate your digital
          experience. Let's transform your ideas into innovative solutions.
        </p>
        <Link href="#contact">
          <Button title="Contact" type="button" />
        </Link>
      </div>
      <div className="flex">
        <Image src="/hero.png" alt="Hero Image" width={480} height={360} layout="responsive" />
      </div>
    </div>
  );
};

export default Hero;

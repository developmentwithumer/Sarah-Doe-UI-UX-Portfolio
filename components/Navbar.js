"use client";

import Link from "next/link";
import React, { useEffect } from "react";

const Navbar = () => {
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
    <header>
      <nav className="container flex justify-around items-center py-8 h-20 flex-wrap gap-2 mb-4">
        <div className="text-2xl">
          <Link href="#">Sarah Doe</Link>
        </div>
        <div className="text-lg">
          <ul className="flex gap-8 font-normal">
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#work">Work</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

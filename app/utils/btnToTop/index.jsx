"use client";

import React, { useEffect, useState } from "react";
import "./btnToTop.css";

function ButtonTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const showThreshold = 200;

      setIsVisible(scrollY > showThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }),
    [];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className={`to-top-button ${isVisible ? "visible" : ""}`}
        onClick={scrollToTop}
      >
        <i className="bi bi-chevron-up"></i>
      </div>
    </>
  );
}

export default ButtonTop;

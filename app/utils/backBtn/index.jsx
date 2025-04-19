"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./backBtn.module.css";

const BackButton = ({ href }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <Link
        href={href}
        className={`${styles.btnPrev} ${show ? styles.slideDown : ""}`}
      >
        <i className="bi bi-arrow-left-circle-fill"></i> Back
      </Link>
    </div>
  );
};

export default BackButton;

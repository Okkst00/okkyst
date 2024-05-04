"use client";
import Link from "next/link";
import React from "react";
import "./navbar.css";
import { usePathname } from "next/navigation";
import Image from "next/image";

function Navbar() {
  const router = usePathname();

  const isActive = (path) => {
    return router === path ? "active" : "";
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="/">
          <Image
            width={200}
            height={60}
            src="/images/mainIcon.webp"
            alt="img"
            className="img-fluid"
            style={{ width: "6em" }}
          />
        </a>
        <button
          className="navbar-toggler py-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="rounded-3">
            <i className="bi bi-chevron-down"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto py-lg-0 py-md-4 py-4">
            <li className="nav-item ms-3">
              <Link
                className={`nav-link ${isActive("/quotes")}`}
                href={"/quotes"}
              >
                Quotes
              </Link>
            </li>
            <li className="nav-item ms-3">
              <Link
                className={`nav-link ${isActive("/services")}`}
                href={"/services"}
              >
                Service
              </Link>
            </li>
            <li className="nav-item ms-3">
              <Link
                className={`nav-link ${isActive("/portfolio")}`}
                href={"/portfolio"}
              >
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

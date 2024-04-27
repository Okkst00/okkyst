import Link from "next/link";
import React from "react";
import "./header.css";
import Image from "next/image";

function Header() {
  return (
    <div className="header mt-5 pt-5 container">
      <div className="row justify-content-lg-start justify-content-md-start justify-content-center b-4">
        <div className="col col-lg-6 px-lg-5 px-md-2 px-0 col-md-6 col-11">
          <Image
            width={500}
            height={260}
            src="/images/imgHeader.webp"
            className=" img-fluid"
            alt="img"
          />
        </div>
        <div className="col col-lg-6 col-md-6 col-11 textHeader">
          <p className=" loc px-3 rounded-2 py-1">
            <i className="bi bi-geo-alt-fill"></i> Kota Malang, Indonesia
          </p>
          <h1 className=" name">Okky Septyanto</h1>
          <p className=" skills mt-2">
            <i className="bi bi-check-circle-fill"></i> Front End Developer & UI
            UX Designer
          </p>
          <div className="row justify-content-lg-start justify-content-md-start justify-content-center connect pt-3 mx-0">
            <div className="col text-center col-lg-1 col-md-2 col-2 p-0">
              <Link className="link px-2 py-1 rounded-3" href={"/"}>
                <i className="bi bi-github"></i>
              </Link>
            </div>
            <div className="col text-center col-lg-1 col-md-2 col-2 p-0">
              <Link className="link px-2 py-1 rounded-3" href={"/"}>
                <i className="bi bi-instagram"></i>
              </Link>
            </div>
            <div className="col text-center col-lg-1 col-md-2 col-2 p-0">
              <Link
                className="link px-2 py-1 rounded-3"
                href={"https://www.behance.net/okkst"}
              >
                <i className="bi bi-behance"></i>
              </Link>
            </div>
            <div className="col text-center col-lg-1 col-md-2 col-2 p-0">
              <Link className="link px-2 py-1 rounded-3" href={"/"}>
                <i className="bi bi-envelope-check-fill"></i>
              </Link>
            </div>
            <div className="col text-center col-lg-1 col-md-2 col-2 p-0">
              <Link className="link px-2 py-1 rounded-3" href={"/"}>
                <i className="bi bi-linkedin"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

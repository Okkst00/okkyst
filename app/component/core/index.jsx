import Link from "next/link";
import React from "react";
import "./core.css";
import Image from "next/image";

function Core() {
  return (
    <div className="container pb-4" id="about">
      <div className="row justify-content-center mb-3 mainTitle">
        <div className="col col-lg-12 col-md-12 col-11 text-center">
          <h4 className=" title px-3 py-1 rounded-3 mx-auto">Inside</h4>
          <p className=" secTitle pt-2 px-lg-4 px-md-2 px-0">
            <i className="bi bi-stars"></i> A dreamer who wants to continue
            pursuing any dream, because life is not always fair, and I Born in a
            beautiful city in East Java
          </p>
          <p className=" text-white secTitle">
            Front End Bisa, Fullstack Lumayan Bisa
          </p>
        </div>
      </div>
    </div>
  );
}

export default Core;

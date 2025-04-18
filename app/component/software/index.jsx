import Link from "next/link";
import React from "react";
import "./software.css";
import Image from "next/image";
import TechList from "../techList";

function Software() {
  return (
    <div className="container skills mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-12 col-md-12 col-11">
          <div className="row justify-content-center mb-1 mainTitle">
            <div className="col col-lg-12 col-md-12 col-11">
              <h4 className=" title px-3 py-1 rounded-3">Tools</h4>
              <p className=" secTitle pt-1">
                <i className="bi bi-bookmark-check-fill"></i> Helpful tool for
                me now
              </p>
            </div>
          </div>

          <TechList />
        </div>
      </div>
    </div>
  );
}

export default Software;

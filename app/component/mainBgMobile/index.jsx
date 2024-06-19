import Link from "next/link";
import React from "react";
import "./mainBgMobile.css";
import Image from "next/image";

function MainBgMobile() {
  return (
    <div
      className="container-fluid bg-main-mobile mx-0 p-0"
      style={{ overflow: "hidden" }}
    >
      <div className="row mb-5">
        <Image
          className="img-fluid images"
          src={"/images/bgOneMobile.png"}
          width={1920}
          height={260}
          alt="images"
        ></Image>
      </div>
    </div>
  );
}

export default MainBgMobile;

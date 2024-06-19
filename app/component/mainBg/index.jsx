import Link from "next/link";
import React from "react";
import "./mainBg.css";
import Image from "next/image";

function MainBg() {
  return (
    <div
      className="container-fluid bg-main-desktop mx-0 p-0"
      style={{ overflow: "hidden" }}
    >
      <div className="row mb-5">
        <Image
          className="img-fluid images"
          src={"/images/bgOne.png"}
          width={1920}
          height={470}
          alt="images"
        ></Image>
      </div>
    </div>
  );
}

export default MainBg;

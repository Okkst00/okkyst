import Link from "next/link";
import React from "react";
import "./footer.css";
import Image from "next/image";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row justify-content-lg-center justify-content-lg-start justify-content-center">
          <div className="col col-lg-5 col-md-5 col-12 fcols pt-5 text-center text-lg-start text-md-start">
            <Image
              width={200}
              height={70}
              className="pt-3"
              src="/images/mainIcon.png"
              style={{ width: "12rem" }}
              alt="img"
            />
          </div>
          <div className="col col-lg-2 col-md-2 col-12 scols mt-lg-0 mt-md-4 mt-5">
            <ul>
              <li className="pb-2 list-unstyled">
                <h5>Pages</h5>
              </li>
              <li className="pb-2 list-unstyled">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="pb-2 list-unstyled">
                <Link href={"/portfolio"}>Portfolio</Link>
              </li>
              <li className="pb-2 list-unstyled">
                <Link href={"/services"}>Service</Link>
              </li>
              <li className="pb-2 list-unstyled">
                <Link href={"/quotes"}>Quotes</Link>
              </li>
            </ul>
          </div>
          <div className="col col-lg-2 col-md-2 col-12 tcols">
            <ul>
              <li className="pb-2 list-unstyled">
                <h5>Find</h5>
              </li>
              <li className="pb-2 list-unstyled">
                <a href="">
                  <i className="bi bi-instagram"></i> _
                </a>
              </li>
              <li className="pb-2 list-unstyled">
                <a href="">
                  <i className="bi bi-github"></i> _
                </a>
              </li>
              <li className="pb-2 list-unstyled">
                <a href="https://www.behance.net/okkst">
                  <i className="bi bi-behance"></i> Okkst
                </a>
              </li>
              <li className="pb-2 list-unstyled">
                <a href="">
                  <i className="bi bi-linkedin"></i> _
                </a>
              </li>
            </ul>
          </div>
          <div className="col col-lg-3 col-md-3 col-12 frcols">
            <ul>
              <li className="pb-2 list-unstyled">
                <h5>Connect</h5>
              </li>
              <li className="pb-2 list-unstyled">
                <a href="">
                  <i className="bi bi-envelope-check-fill"></i> septyantookky19
                </a>
              </li>
              <li className="pb-2 list-unstyled">
                <a href="">
                  <i className="bi bi-geo-alt-fill"></i> Kota Malang, Indonesia
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row copyrights mt-3 pb-4 text-lg-start text-md-start text-center">
          <p>
            <i className="bi bi-c-circle"></i> Build by Okkst
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

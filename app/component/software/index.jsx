import Link from "next/link";
import React from "react";
import "./software.css";
import Image from "next/image";

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
          <div className="row">
            <div className="col col-lg-2 col-md-2 col-4 p-lg-4 p-md-3 p-3">
              <div className="imgWrap p-3">
                <Image
                  width={200}
                  height={200}
                  src="/images/js-icon.webp"
                  className="img-fluid"
                  alt="img"
                />
              </div>
            </div>
            <div className="col col-lg-2 col-md-2 col-4 p-lg-4 p-md-3 p-3">
              <div className="imgWrap p-3">
                <Image
                  width={200}
                  height={200}
                  src="/images/react-icon2.webp"
                  className="img-fluid"
                  alt="img"
                />
              </div>
            </div>
            <div className="col col-lg-2 col-md-2 col-4 p-lg-4 p-md-3 p-3">
              <div className="imgWrap p-3">
                <Image
                  width={200}
                  height={200}
                  src="/images/next-icon.webp"
                  className="img-fluid"
                  alt="img"
                />
              </div>
            </div>
            <div className="col col-lg-2 col-md-2 col-4 p-lg-4 p-md-3 p-3">
              <div className="imgWrap p-3">
                <Image
                  width={200}
                  height={200}
                  src="/images/vue-icon.webp"
                  className="img-fluid"
                  alt="img"
                />
              </div>
            </div>
            <div className="col col-lg-2 col-md-2 col-4 p-lg-4 p-md-3 p-3">
              <div className="imgWrap p-3">
                <Image
                  width={200}
                  height={200}
                  src="/images/bootstrap-icon.webp"
                  className="img-fluid"
                  alt="img"
                />
              </div>
            </div>
            <div className="col col-lg-2 col-md-2 col-4 p-lg-4 p-md-3 p-3">
              <div className="imgWrap p-3">
                <Image
                  width={200}
                  height={200}
                  src="/images/tw-icon.webp"
                  className="img-fluid"
                  alt="img"
                />
              </div>
            </div>
            <div className="col col-lg-2 col-md-2 col-4 p-lg-4 p-md-3 p-3">
              <div className="imgWrap p-3">
                <Image
                  width={200}
                  height={200}
                  src="/images/php-icon.webp"
                  className="img-fluid"
                  alt="img"
                />
              </div>
            </div>
            <div className="col col-lg-2 col-md-2 col-4 p-lg-4 p-md-3 p-3">
              <div className="imgWrap p-3">
                <Image
                  width={200}
                  height={200}
                  src="/images/laravel-icon2.webp"
                  className="img-fluid"
                  alt="img"
                />
              </div>
            </div>
            <div className="col col-lg-2 col-md-2 col-4 p-lg-4 p-md-3 p-3">
              <div className="imgWrap p-3">
                <Image
                  width={200}
                  height={200}
                  src="/images/mysql-icon.webp"
                  className="img-fluid"
                  alt="img"
                />
              </div>
            </div>
            <div className="col col-lg-2 col-md-2 col-4 p-lg-4 p-md-3 p-3">
              <div className="imgWrap p-3">
                <Image
                  width={200}
                  height={200}
                  src="/images/git-icon.webp"
                  className="img-fluid"
                  alt="img"
                />
              </div>
            </div>
            <div className="col col-lg-2 col-md-2 col-4 p-lg-4 p-md-3 p-3">
              <div className="imgWrap p-3">
                <Image
                  width={200}
                  height={200}
                  src="/images/github-icon.webp"
                  className="img-fluid"
                  alt="img"
                />
              </div>
            </div>
            <div className="col col-lg-2 col-md-2 col-4 p-lg-4 p-md-3 p-3">
              <div className="imgWrap p-3">
                <Image
                  width={200}
                  height={200}
                  src="/images/figma-icon2.webp"
                  className="img-fluid"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Software;

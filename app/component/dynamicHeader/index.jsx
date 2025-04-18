"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./dynamicHeader.module.css";
import Link from "next/link";

const DynamicHeader = () => {
  const [header, setHeader] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await fetch("/assets/data/header.json");
        if (!response.ok) {
          throw new Error("Failed to fetch portfolio data");
        }
        const data = await response.json();
        const header = data.find((item) => item.id === 1);
        if (header) {
          setHeader(header);
        } else {
          setError("Technology not found");
        }
      } catch (error) {
        console.error(error);
        setError("Failed to load data.");
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  const renderPreloadCart = () => {
    return (
      <div className="container header mt-5 pt-5">
        <div className="row justify-content-between">
          <div className="col col-lg-5 col-md-6 col-12 mb-lg-0 mb-md-3 mb-4 p-lg-4 p-md-3 p-3">
            <div className={`${styles.preloadTech}`}></div>
          </div>
          <div className="col col-lg-6 col-md-6 col-12 mb-lg-0 mb-md-3 mb-4 p-lg-4 p-md-3 p-3 mt-4">
            <div className={`rounded-5 ${styles.preloadTech2}`}></div>
            <div className={`rounded-5 ${styles.preloadTech3}`}></div>
            <div className={`rounded-5 ${styles.preloadTech4}`}></div>
            <div className={`rounded-5 ${styles.preloadTech5}`}></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="row">
        {loading ? (
          renderPreloadCart()
        ) : error ? (
          <div className=" text-center fw-semibold">{error}</div>
        ) : !header || header.length === 0 ? (
          <div className=" text-center fw-semibold">Tidak ada produk</div>
        ) : (
          <div className="header mt-5 pt-5 container position-relative">
            <div className="row justify-content-lg-start justify-content-md-start justify-content-center b-4">
              <div className="col col-lg-6 px-lg-5 px-md-2 px-0 col-md-6 col-11">
                <Image
                  width={500}
                  height={260}
                  src={header.image}
                  className=" img-fluid"
                  alt="img"
                />
              </div>
              <div className="col col-lg-6 col-md-6 col-11 textHeader">
                <p className=" loc px-3 rounded-2 py-1">
                  <i className="bi bi-geo-alt-fill"></i> {header.city}
                </p>
                <h1 className=" name">{header.name}</h1>
                <p className=" skills mt-2">
                  <i className="bi bi-check-circle-fill"></i> {header.role}
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
              <a
                href="https://okkyst-gallery.vercel.app/"
                className={`nav-link d-flex ${styles.togg}`}
              >
                <img
                  src="/images/react-icon2.webp"
                  className={`img-fluid toggIcon react ${styles.toggIconReact}`}
                  alt=""
                />
                <img
                  src="/images/vue-icon.webp"
                  className={`img-fluid toggIcon vue ${styles.toggIconVue}`}
                  alt=""
                />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DynamicHeader;

"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./portfolio.css";
import styles from "./portfolio.module.css";
import Image from "next/image";

function Portfolio() {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await fetch("/assets/data/portfolioFront.json");
        if (!response.ok) {
          throw new Error("Failed to fetch portfolio data");
        }
        const data = await response.json();
        const sortedData = data.sort((a, b) => b.id - a.id);
        setPortfolioItems(sortedData);
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
      <div className="container">
        <div className="row">
          <div className="col col-lg-4 col-md-6 col-12 mb-lg-0 mb-md-3 mb-4">
            <div className={`rounded-4 ${styles.preloadCart}`}></div>
            <div className={`rounded-3 mt-3 ${styles.preloadCart2}`}></div>
            <div className={`rounded-3 mt-1 ${styles.preloadCart3}`}></div>
            <div className={`rounded-3 mt-1 ${styles.preloadCart3}`}></div>
          </div>
          <div className="col col-lg-4 col-md-6 col-12 mb-lg-0 mb-md-3 mb-4">
            <div className={`rounded-4 ${styles.preloadCart}`}></div>
            <div className={`rounded-3 mt-3 ${styles.preloadCart2}`}></div>
            <div className={`rounded-3 mt-1 ${styles.preloadCart3}`}></div>
            <div className={`rounded-3 mt-1 ${styles.preloadCart3}`}></div>
          </div>
          <div className="col col-lg-4 col-md-6 col-12 mb-lg-0 mb-md-3 mb-4">
            <div className={`rounded-4 ${styles.preloadCart}`}></div>
            <div className={`rounded-3 mt-3 ${styles.preloadCart2}`}></div>
            <div className={`rounded-3 mt-1 ${styles.preloadCart3}`}></div>
            <div className={`rounded-3 mt-1 ${styles.preloadCart3}`}></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="blogsPage mt-5 pt-5">
      <div className="container">
        <div className="row justify-content-center mb-3 mainTitle">
          <div className="col col-lg-12 col-md-12 col-11">
            <h4 className=" title px-3 py-1 rounded-3">Portfolio</h4>
            <p className=" secTitle pt-1">
              <i className="bi bi-bookmark-check-fill"></i> The process of
              composing dreams
            </p>
          </div>
        </div>
        <div className="row contentBlog justify-content-center justify-content-lg-start justify-content-md-center">
          {loading ? (
            renderPreloadCart()
          ) : error ? (
            <div className=" text-center fw-semibold">{error}</div>
          ) : portfolioItems.length === 0 ? (
            <div className=" text-center fw-semibold">Tidak ada produk</div>
          ) : (
            portfolioItems.map((item) => (
              <div className="col col-lg-4 col-md-6 col-11" key={item.id}>
                <Link
                  href={`portfolio/${item.slug}`}
                  className="card border-0 shadow-lg rounded-4 mb-4 overflow-hidden text-decoration-none"
                >
                  <div className="imgWrap">
                    <Image
                      width={300}
                      height={160}
                      src={item.image}
                      alt={item.name}
                      className="img-fluid rounded-bottom-4 imgBlog"
                    />
                    <div className=" px-3 py-1 rounded-start-2 rounded-end-3 shadow fw-semibold labels">
                      <span>{item.type}</span>
                    </div>
                  </div>
                  <div className="card-body px-4 pt-3 pb-3">
                    <div className="type mb-2 px-3 py-1 rounded-2 fw-semibold">
                      {item.category}
                    </div>
                    <div className="text-decoration-none fw-bold title">
                      {item.name}
                    </div>
                    <div className="tools mt-3">
                      <div className="row">
                        {item.technology.map((tech) => (
                          <div
                            className="col col-lg-2 col-md-2 col-2 pe-0"
                            key={item.technology.id}
                          >
                            <Image
                              width={120}
                              height={120}
                              src={tech.image}
                              alt={tech.name}
                              className=" img-fluid p-1 rounded-4"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="row d-flex mt-3 align-items-center justify-content-center">
                      <div className="row d-flex align-items-center justify-content-center">
                        <div className="col px-0">
                          <div
                            className={`env fw-medium px-2 py-1 rounded-3 ${item.env.toLowerCase()}`}
                          >
                            • {item.env}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>
        <div className="row mt-4">
          <div className="col text-center">
            <Link
              className=" btn-show text-center px-5 py-3 rounded-5"
              href={"/portfolio"}
            >
              Show All <i className="bi bi-arrow-right-circle-fill"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

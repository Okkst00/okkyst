"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./techList.module.css";

const TechList = () => {
  const [techItems, setTechItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await fetch("/assets/data/tech.json");
        if (!response.ok) {
          throw new Error("Failed to fetch portfolio data");
        }
        const data = await response.json();
        setTechItems(data);
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
        <div className="row ">
          <div className="col col-lg-2 col-md-3 col-4 mb-lg-0 mb-md-3 mb-4 p-lg-4 p-md-3 p-3">
            <div className={`rounded-5 ${styles.preloadTech}`}></div>
          </div>
          <div className="col col-lg-2 col-md-3 col-4 mb-lg-0 mb-md-3 mb-4 p-lg-4 p-md-3 p-3">
            <div className={`rounded-5 ${styles.preloadTech}`}></div>
          </div>
          <div className="col col-lg-2 col-md-3 col-4 mb-lg-0 mb-md-3 mb-4 p-lg-4 p-md-3 p-3">
            <div className={`rounded-5 ${styles.preloadTech}`}></div>
          </div>
          <div className="col col-lg-2 col-md-3 col-4 mb-lg-0 mb-md-3 mb-4 p-lg-4 p-md-3 p-3">
            <div className={`rounded-5 ${styles.preloadTech}`}></div>
          </div>
          <div className="col col-lg-2 col-md-3 col-4 mb-lg-0 mb-md-3 mb-4 p-lg-4 p-md-3 p-3">
            <div className={`rounded-5 ${styles.preloadTech}`}></div>
          </div>
          <div className="col col-lg-2 col-md-3 col-4 mb-lg-0 mb-md-3 mb-4 p-lg-4 p-md-3 p-3">
            <div className={`rounded-5 ${styles.preloadTech}`}></div>
          </div>
          <div className="col col-lg-2 col-md-3 col-4 mb-lg-0 mb-md-3 mb-4 p-lg-4 p-md-3 p-3">
            <div className={`rounded-5 ${styles.preloadTech}`}></div>
          </div>
          <div className="col col-lg-2 col-md-3 col-4 mb-lg-0 mb-md-3 mb-4 p-lg-4 p-md-3 p-3">
            <div className={`rounded-5 ${styles.preloadTech}`}></div>
          </div>
          <div className="col col-lg-2 col-md-3 col-4 mb-lg-0 mb-md-3 mb-4 p-lg-4 p-md-3 p-3">
            <div className={`rounded-5 ${styles.preloadTech}`}></div>
          </div>
          <div className="col col-lg-2 col-md-3 col-4 mb-lg-0 mb-md-3 mb-4 p-lg-4 p-md-3 p-3">
            <div className={`rounded-5 ${styles.preloadTech}`}></div>
          </div>
          <div className="col col-lg-2 col-md-3 col-4 mb-lg-0 mb-md-3 mb-4 p-lg-4 p-md-3 p-3">
            <div className={`rounded-5 ${styles.preloadTech}`}></div>
          </div>
          <div className="col col-lg-2 col-md-3 col-4 mb-lg-0 mb-md-3 mb-4 p-lg-4 p-md-3 p-3">
            <div className={`rounded-5 ${styles.preloadTech}`}></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="row">
        {loading ? (
          renderPreloadCart()
        ) : error ? (
          <div className=" text-center fw-semibold">{error}</div>
        ) : techItems.length === 0 ? (
          <div className=" text-center fw-semibold">Tidak ada produk</div>
        ) : (
          techItems.map((item) => (
            <div
              className="col col-lg-2 col-md-2 col-4 p-lg-4 p-md-3 p-3"
              key={item.id}
            >
              <div className="imgWrap p-lg-4 p-md-3 p-3">
                <Image
                  width={200}
                  height={200}
                  src={item.image}
                  className="img-fluid"
                  alt={item.name}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TechList;

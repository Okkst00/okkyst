"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "../../component/navbar";
import Footer from "../../component/footer";
import Image from "next/image";
import styles from "./detail.module.css";
import Link from "next/link";
import BackButton from "../../utils/backBtn";

export default function DetailPage() {
  const { slug } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const frontImage = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/assets/data/portfolio.json");
        if (!res.ok) {
          throw new Error("Gagal mengambil data portfolio");
        }

        const data = await res.json();
        const found = data.find((d) => d.slug === slug);
        setItem(found);
      } catch (error) {
        console.error("Error saat fetch data:", error);
        setError("Failed to load data.");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchData();
    }
  }, [slug]);

  useEffect(() => {
    if (item) {
      document.title = `• ${item.name} - Gallery`;
      const metaDescription = item.name || "Portfolio";
      const metaTag = document.querySelector('meta[name="description"]');
      if (metaTag) {
        metaTag.setAttribute("content", metaDescription);
      } else {
        const newMetaTag = document.createElement("meta");
        newMetaTag.name = "description";
        newMetaTag.content = metaDescription;
        document.head.appendChild(newMetaTag);
      }
    } else {
      document.title = "• Portfolio";
      const metaTag = document.querySelector('meta[name="description"]');
      if (metaTag) {
        metaTag.setAttribute("content", "Portfolio not found.");
      } else {
        const newMetaTag = document.createElement("meta");
        newMetaTag.name = "description";
        newMetaTag.content = "Portfolio not found.";
        document.head.appendChild(newMetaTag);
      }
    }
  }, [item]);

  const renderPreload = () => {
    return (
      <div className="container mt-5 pt-5">
        <div className="row ">
          <div className="col ">
            <div className={`rounded-5 mb-3 ${styles.preload}`}></div>
            <div className={`rounded-5 mb-3 ${styles.preload2}`}></div>
            <div className={`rounded-5 ${styles.preload3}`}></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <BackButton href="/portfolio" />
      {loading ? (
        renderPreload()
      ) : error ? (
        <div className=" text-center fw-semibold">{error}</div>
      ) : !item || item.length === 0 ? (
        <div className=" text-center fw-semibold">Tidak ada produk</div>
      ) : (
        <>
          <div
            className={`container-fluid my-lg-5 my-md-5 my-5 ${styles.containerFluid}`}
          >
            <div
              className={styles.overlay}
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            ></div>

            <div className={`container ${styles.container}`}>
              <Image
                width={1300}
                height={600}
                src={item.image}
                alt="Image"
                className={`shadow ${styles.mainImg}`}
                ref={frontImage}
              />
            </div>
          </div>

          <div className={`container ${styles.content}`}>
            <div className={styles.type}>{item.category}</div>
            <h1 className={`mb-4 ${styles.name}`}>{item.name}</h1>
            <span className={`me-2 px-2 py-1 rounded-3 ${styles.labels}`}>
              {item.type}
            </span>
            <span
              className={`env fw-medium px-2 py-1 rounded-3 ${
                styles[item.env.toLowerCase()]
              } ${styles.env}`}
            >
              {item.env}
            </span>
            <div
              className={`row mx-0 mt-4 d-flex align-items-center ${styles.wrapTech}`}
            >
              {item.technology.map((tech) => (
                <div className={styles.tech} key={item.technology.id}>
                  <Image
                    width={120}
                    height={120}
                    src={tech.image}
                    alt={tech.name}
                    className={`img-fluid rounded-4 ${styles.techIcon}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  );
}

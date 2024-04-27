import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import "./style.css";
import Footer from "./component/footer";
import Portfolio from "./component/portfolio";
import Header from "./component/header";
import Software from "./component/software";

export default function Home() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">
            <Image
              width={200}
              height={60}
              src="/images/mainIcon.webp"
              alt="img"
              className="img-fluid"
              style={{ width: "6em" }}
            />
          </a>
          <button
            className="navbar-toggler py-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="rounded-3">
              <i className="bi bi-chevron-down"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto py-lg-0 py-md-4 py-4">
              <li className="nav-item ms-3">
                <Link className="nav-link" href={"/quotes"}>
                  Quotes
                </Link>
              </li>
              <li className="nav-item ms-3">
                <Link className="nav-link" href={"/services"}>
                  Service
                </Link>
              </li>
              <li className="nav-item ms-3">
                <Link className="nav-link" href={"/portfolio"}>
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Header />
      <div className="container pb-5" id="about">
        <div className="row justify-content-center mb-3 mainTitle">
          <div className="col col-lg-12 col-md-12 col-11 text-center">
            <h4 className=" title px-3 py-1 rounded-3 mx-auto">Inside</h4>
            <p className=" secTitle pt-2 px-lg-4 px-md-2 px-0">
              <i className="bi bi-stars"></i> A dreamer who wants to continue
              pursuing any dream, because life is not always fair, and I Born in
              a beautiful city in East Java
            </p>
          </div>
        </div>
      </div>
      <Software />
      <Portfolio />
      <Footer />
    </>
  );
}

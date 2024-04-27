import Link from "next/link";
import "./service.css";
import Footer from "../component/footer";
import Image from "next/image";

export const metadata = {
  title: "• Service - Okky Septyanto",
  description: "Portfolio Okky Septyanto",
};

export default function Services() {
  return (
    <div className="mt-5 pt-5 servicePage s">
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
                <Link className="nav-link active" href={"/services"}>
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
      <div className="container">
        <div className="row mt-4">
          <div className="col">
            <Link
              className=" btn-show text-center px-5 py-3 rounded-5"
              href={"/"}
            >
              <i className="bi bi-arrow-left-circle-fill"></i> Back
            </Link>
          </div>
        </div>
      </div>
      <div className="container my-5 services">
        <div className="row justify-content-lg-start justify-content-md-center justify-content-center">
          <div className="col col-lg-4 col-md-6 col-11 mb-4">
            <div className="extends rounded-4">
              <div className="card border-0 px-4 py-4 rounded-4">
                <h5 className="fw-bold">Company Profile</h5>
                <div className="status px-3 py-1 rounded-5 active mt-2">
                  Active
                </div>
              </div>
            </div>
          </div>
          <div className="col col-lg-4 col-md-6 col-11 mb-4">
            <div className="extends rounded-4">
              <div className="card border-0 px-4 py-4 rounded-4">
                <h5 className="fw-bold">Landing Page</h5>
                <div className="status px-3 py-1 rounded-5 active mt-2">
                  Active
                </div>
              </div>
            </div>
          </div>
          <div className="col col-lg-4 col-md-6 col-11 mb-4">
            <div className="extends rounded-4">
              <div className="card border-0 px-4 py-4 rounded-4">
                <h5 className="fw-bold">UI UX Design</h5>
                <div className="status px-3 py-1 rounded-5 active mt-2">
                  Active
                </div>
              </div>
            </div>
          </div>
          <div className="col col-lg-4 col-md-6 col-11 mb-4">
            <div className="extends rounded-4">
              <div className="card border-0 ps-4 pe-5 py-4 rounded-4">
                <div className="icon inactive">
                  <i className="bi bi-lock-fill"></i>
                </div>
                <h5 className="fw-bold inactive"> Front End Mobile App</h5>
                <div className="status px-3 py-1 rounded-5 inactive mt-2">
                  Inactive
                </div>
              </div>
            </div>
          </div>
          <div className="col col-lg-4 col-md-6 col-11 mb-4">
            <div className="extends rounded-4">
              <div className="card border-0 ps-4 pe-5 py-4 rounded-4">
                <div className="icon inactive">
                  <i className="bi bi-lock-fill"></i>
                </div>
                <h5 className="fw-bold inactive">Mobile Application</h5>
                <div className="status px-3 py-1 rounded-5 inactive mt-2">
                  Inactive
                </div>
              </div>
            </div>
          </div>
          <div className="col col-lg-4 col-md-6 col-11 mb-4">
            <div className="extends rounded-4">
              <div className="card border-0 ps-4 pe-5 py-4 rounded-4">
                <div className="icon inactive">
                  <i className="bi bi-lock-fill"></i>
                </div>
                <h5 className="fw-bold inactive"> Web Base Application</h5>
                <div className="status px-3 py-1 rounded-5 inactive mt-2">
                  Inactive
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-4">
          <div className="col text-center">
            <Link
              className=" btn-book text-center px-5 py-3 rounded-5"
              href={"mailto:septyantookky19@gmail.com"}
            >
              Booking Now <i className="bi bi-envelope-check-fill"></i>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

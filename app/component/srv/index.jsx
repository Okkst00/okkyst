"use client";
import Link from "next/link";
import React from "react";
import "./srv.css";
import BackButton from "../../utils/backBtn";

function SrvComp() {
  return (
    <>
      <BackButton href="/" />
      <div className="container my-5 mt-5 services">
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
    </>
  );
}

export default SrvComp;

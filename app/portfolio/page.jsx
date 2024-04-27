import Link from "next/link";
import "./portfolio.css";
import Footer from "../component/footer";
import Image from "next/image";

export const metadata = {
  title: "• Portfollio - Okky Septyanto",
  description: "Portfolio Okky Septyanto",
};

export default function Portfolio() {
  return (
    <div className="mt-5 pt-5 portfolioPage s">
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
                <Link className="nav-link" href={"/services"}>
                  Service
                </Link>
              </li>
              <li className="nav-item ms-3">
                <Link className="nav-link active" href={"/portfolio"}>
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
      <div className="blogsPage mt-5 pt-3">
        <div className="container">
          <div className="row justify-content-center mb-3 mainTitle">
            <div className="col col-lg-12 col-md-12 col-11">
              <p className=" secTitle pt-1">
                <i className="bi bi-bookmark-check-fill"></i> The process of
                composing dreams
              </p>
            </div>
          </div>
          <div className="row contentBlog justify-content-center justify-content-lg-start justify-content-md-center">
            <div className="col col-lg-4 col-md-6 col-11">
              <div className="card border-0 shadow-lg rounded-4 mb-4 overflow-hidden text-decoration-none">
                <div className="imgWrap">
                  <Image
                    width={300}
                    height={160}
                    src="/images/portImg1.webp"
                    className="img-fluid rounded-bottom-4 imgBlog"
                    alt="img"
                  />
                  <div className=" px-3 py-1 rounded-start-2 rounded-end-3 shadow fw-semibold labels">
                    <span>Self Project</span>
                  </div>
                </div>
                <div className="card-body px-4 pt-3 pb-3">
                  <div className="type mb-2 px-3 py-1 rounded-2 fw-semibold">
                    Front End
                  </div>
                  <div className="text-decoration-none fw-bold title">
                    Front End landing Page
                  </div>
                  <div className="tools mt-3">
                    <div className="row">
                      <div className="col col-lg-2 col-md-2 col-2 pe-0">
                        <Image
                          width={120}
                          height={120}
                          src="/images/next-icon.webp"
                          className=" img-fluid p-1 rounded-4"
                          alt="img"
                        />
                      </div>
                      <div className="col col-lg-2 col-md-2 col-2 pe-0">
                        <Image
                          width={120}
                          height={120}
                          src="/images/bootstrap-icon.webp"
                          className=" img-fluid p-1 rounded-4"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row d-flex mt-3 align-items-center justify-content-center">
                    <div className="row d-flex align-items-center justify-content-center">
                      <div className="col px-0">
                        <div className="env fw-medium px-2 py-1 rounded-3">
                          • Development
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-11">
              <div className="card border-0 shadow-lg rounded-4 mb-4 overflow-hidden text-decoration-none">
                <div className="imgWrap">
                  <Image
                    width={300}
                    height={160}
                    src="/images/portImg4.webp"
                    className="img-fluid rounded-bottom-4 imgBlog"
                    alt="img"
                  />
                  <div className=" px-3 py-1 rounded-start-2 rounded-end-3 shadow fw-semibold labels run">
                    <span>Self Project</span>
                  </div>
                </div>
                <div className="card-body px-4 pt-3 pb-3">
                  <div className="type mb-2 px-3 py-1 rounded-2 fw-semibold website">
                    Website
                  </div>
                  <div className="text-decoration-none fw-bold title">
                    Website Portfolio
                  </div>
                  <div className="tools mt-3">
                    <div className="row">
                      <div className="col col-lg-2 col-md-2 col-2 pe-0">
                        <Image
                          width={120}
                          height={120}
                          src="/images/next-icon.webp"
                          className=" img-fluid p-1 rounded-4"
                          alt="img"
                        />
                      </div>
                      <div className="col col-lg-2 col-md-2 col-2 pe-0">
                        <Image
                          width={120}
                          height={120}
                          src="/images/bootstrap-icon.webp"
                          className=" img-fluid p-1 rounded-4"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row d-flex mt-3 align-items-center justify-content-center">
                    <div className="row d-flex align-items-center justify-content-center">
                      <div className="col px-0">
                        <div className="env fw-medium px-2 py-1 rounded-3 live">
                          • Live
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-11">
              <div className="card border-0 shadow-lg rounded-4 mb-4 overflow-hidden text-decoration-none">
                <div className="imgWrap">
                  <Image
                    width={300}
                    height={160}
                    src="/images/portImg2.webp"
                    className="img-fluid rounded-bottom-4 imgBlog"
                    alt="img"
                  />
                  <div className=" px-3 py-1 rounded-start-2 rounded-end-3 shadow fw-semibold labels ">
                    <span>Self Project</span>
                  </div>
                </div>
                <div className="card-body px-4 pt-3 pb-3">
                  <div className="type mb-2 px-3 py-1 rounded-2 fw-semibold fe">
                    Front End
                  </div>
                  <div className="text-decoration-none fw-bold title">
                    Front End Landing Page
                  </div>
                  <div className="tools mt-3">
                    <div className="row">
                      <div className="col col-lg-2 col-md-2 col-2 pe-0">
                        <Image
                          width={120}
                          height={120}
                          src="/images/react-icon2.webp"
                          className=" img-fluid p-1 rounded-4"
                          alt="img"
                        />
                      </div>
                      <div className="col col-lg-2 col-md-2 col-2 pe-0">
                        <Image
                          width={120}
                          height={120}
                          src="/images/bootstrap-icon.webp"
                          className=" img-fluid p-1 rounded-4"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row d-flex mt-3 align-items-center justify-content-center">
                    <div className="row d-flex align-items-center justify-content-center">
                      <div className="col px-0">
                        <div className="env fw-medium px-2 py-1 rounded-3">
                          • Development
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-11">
              <div className="card border-0 shadow-lg rounded-4 mb-4 overflow-hidden text-decoration-none">
                <div className="imgWrap">
                  <Image
                    width={300}
                    height={160}
                    src="/images/villaWeb.webp"
                    className="img-fluid rounded-bottom-4 imgBlog"
                    alt="img"
                  />
                  <div className=" px-3 py-1 rounded-start-2 rounded-end-3 shadow fw-semibold labels ">
                    <span>Project</span>
                  </div>
                </div>
                <div className="card-body px-4 pt-3 pb-3">
                  <div className="type mb-2 px-3 py-1 rounded-2 fw-semibold fe">
                    Full Stack Website
                  </div>
                  <div className="text-decoration-none fw-bold title">
                    Website Profile Villa
                  </div>
                  <div className="tools mt-3">
                    <div className="row">
                      <div className="col col-lg-2 col-md-2 col-2 pe-0">
                        <Image
                          width={120}
                          height={120}
                          src="/images/laravel-icon2.webp"
                          className=" img-fluid p-1 rounded-4"
                          alt="img"
                        />
                      </div>
                      <div className="col col-lg-2 col-md-2 col-2 pe-0">
                        <Image
                          width={120}
                          height={120}
                          src="/images/bootstrap-icon.webp"
                          className=" img-fluid p-1 rounded-4"
                          alt="img"
                        />
                      </div>
                      <div className="col col-lg-2 col-md-2 col-2 pe-0">
                        <Image
                          width={120}
                          height={120}
                          src="/images/mysql-icon.webp"
                          className=" img-fluid p-1 rounded-4"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row d-flex mt-3 align-items-center justify-content-center">
                    <div className="row d-flex align-items-center justify-content-center">
                      <div className="col px-0">
                        <div className="env fw-medium px-2 py-1 rounded-3 end">
                          • End
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-11">
              <div className="card border-0 shadow-lg rounded-4 mb-4 overflow-hidden text-decoration-none">
                <div className="imgWrap">
                  <Image
                    width={300}
                    height={160}
                    src="/images/portImg3.webp"
                    className="img-fluid rounded-bottom-4 imgBlog"
                    alt="img"
                  />
                  <div className=" px-3 py-1 rounded-start-2 rounded-end-3 shadow fw-semibold labels ">
                    <span>Self Project</span>
                  </div>
                </div>
                <div className="card-body px-4 pt-3 pb-3">
                  <div className="type mb-2 px-3 py-1 rounded-2 fw-semibold fe">
                    UI UX
                  </div>
                  <div className="text-decoration-none fw-bold title">
                    UI UX Design Marketplace Food App
                  </div>
                  <div className="tools mt-3">
                    <div className="row">
                      <div className="col col-lg-2 col-md-2 col-2 pe-0">
                        <Image
                          width={120}
                          height={120}
                          src="/images/figma-icon2.webp"
                          className=" img-fluid p-1 rounded-4"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row d-flex mt-3 align-items-center justify-content-center">
                    <div className="row d-flex align-items-center justify-content-center">
                      <div className="col px-0">
                        <div className="env fw-medium px-2 py-1 rounded-3">
                          • Development
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-11">
              <div className="card border-0 shadow-lg rounded-4 mb-4 overflow-hidden text-decoration-none">
                <div className="imgWrap">
                  <Image
                    width={300}
                    height={160}
                    src="/images/mobelov1.webp"
                    className="img-fluid rounded-bottom-4 imgBlog"
                    alt="img"
                  />
                  <div className=" px-3 py-1 rounded-start-2 rounded-end-3 shadow fw-semibold labels ">
                    <span>Self Project</span>
                  </div>
                </div>
                <div className="card-body px-4 pt-3 pb-3">
                  <div className="type mb-2 px-3 py-1 rounded-2 fw-semibold fe">
                    UI UX
                  </div>
                  <div className="text-decoration-none fw-bold title">
                    UI UX Design Car Rents Web App
                  </div>
                  <div className="tools mt-3">
                    <div className="row">
                      <div className="col col-lg-2 col-md-2 col-2 pe-0">
                        <Image
                          width={120}
                          height={120}
                          src="/images/figma-icon2.webp"
                          className=" img-fluid p-1 rounded-4"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row d-flex mt-3 align-items-center justify-content-center">
                    <div className="row d-flex align-items-center justify-content-center">
                      <div className="col px-0">
                        <div className="env fw-medium px-2 py-1 rounded-3">
                          • Development
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-11">
              <div className="card border-0 shadow-lg rounded-4 mb-4 overflow-hidden text-decoration-none">
                <div className="imgWrap">
                  <Image
                    width={300}
                    height={160}
                    src="/images/absenAppBG1.webp"
                    className="img-fluid rounded-bottom-4 imgBlog"
                    alt="img"
                  />
                  <div className=" px-3 py-1 rounded-start-2 rounded-end-3 shadow fw-semibold labels ">
                    <span>Self Project</span>
                  </div>
                </div>
                <div className="card-body px-4 pt-3 pb-3">
                  <div className="type mb-2 px-3 py-1 rounded-2 fw-semibold fe">
                    UI UX
                  </div>
                  <div className="text-decoration-none fw-bold title">
                    U UX Design Attendance App
                  </div>
                  <div className="tools mt-3">
                    <div className="row">
                      <div className="col col-lg-2 col-md-2 col-2 pe-0">
                        <Image
                          width={120}
                          height={120}
                          src="/images/figma-icon2.webp"
                          className=" img-fluid p-1 rounded-4"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row d-flex mt-3 align-items-center justify-content-center">
                    <div className="row d-flex align-items-center justify-content-center">
                      <div className="col px-0">
                        <div className="env fw-medium px-2 py-1 rounded-3">
                          • Development
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-11">
              <div className="card border-0 shadow-lg rounded-4 mb-4 overflow-hidden text-decoration-none">
                <div className="imgWrap">
                  <Image
                    width={300}
                    height={160}
                    src="/images/trapelov1.webp"
                    className="img-fluid rounded-bottom-4 imgBlog"
                    alt="img"
                  />
                  <div className=" px-3 py-1 rounded-start-2 rounded-end-3 shadow fw-semibold labels ">
                    <span>Self Project</span>
                  </div>
                </div>
                <div className="card-body px-4 pt-3 pb-3">
                  <div className="type mb-2 px-3 py-1 rounded-2 fw-semibold fe">
                    UI UX
                  </div>
                  <div className="text-decoration-none fw-bold title">
                    UI UX Design Travel Website
                  </div>
                  <div className="tools mt-3">
                    <div className="row">
                      <div className="col col-lg-2 col-md-2 col-2 pe-0">
                        <Image
                          width={120}
                          height={120}
                          src="/images/figma-icon2.webp"
                          className=" img-fluid p-1 rounded-4"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row d-flex mt-3 align-items-center justify-content-center">
                    <div className="row d-flex align-items-center justify-content-center">
                      <div className="col px-0">
                        <div className="env fw-medium px-2 py-1 rounded-3">
                          • Development
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-11">
              <div className="card border-0 shadow-lg rounded-4 mb-4 overflow-hidden text-decoration-none">
                <div className="imgWrap">
                  <Image
                    width={300}
                    height={160}
                    src="/images/zonlearn1.webp"
                    className="img-fluid rounded-bottom-4 imgBlog"
                    alt="img"
                  />
                  <div className=" px-3 py-1 rounded-start-2 rounded-end-3 shadow fw-semibold labels ">
                    <span>Self Project</span>
                  </div>
                </div>
                <div className="card-body px-4 pt-3 pb-3">
                  <div className="type mb-2 px-3 py-1 rounded-2 fw-semibold fe">
                    UI UX
                  </div>
                  <div className="text-decoration-none fw-bold title">
                    UI UX Online Course Website
                  </div>
                  <div className="tools mt-3">
                    <div className="row">
                      <div className="col col-lg-2 col-md-2 col-2 pe-0">
                        <Image
                          width={120}
                          height={120}
                          src="/images/figma-icon2.webp"
                          className=" img-fluid p-1 rounded-4"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row d-flex mt-3 align-items-center justify-content-center">
                    <div className="row d-flex align-items-center justify-content-center">
                      <div className="col px-0">
                        <div className="env fw-medium px-2 py-1 rounded-3">
                          • Development
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

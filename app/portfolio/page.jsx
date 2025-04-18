import Link from "next/link";
import "./portfolio.css";
import Footer from "../component/footer";
import Image from "next/image";
import Navbar from "../component/navbar";
import PortfolioList from "../component/portfolioList";

export const metadata = {
  title: "• Portfollio",
  description: "Portfolio Okky Septyanto",
};

export default function Portfolio() {
  return (
    <div className="mt-5 pt-5 portfolioPage s">
      <Navbar />
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
          <PortfolioList />
        </div>
      </div>

      <Footer />
    </div>
  );
}

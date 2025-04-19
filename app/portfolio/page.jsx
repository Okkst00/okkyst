import Link from "next/link";
import "./portfolio.css";
import Footer from "../component/footer";
import Image from "next/image";
import Navbar from "../component/navbar";
import PortfolioList from "../component/portfolioList";
import BackButton from "../utils/backBtn";

export const metadata = {
  title: "• Portfollio",
  description: "Portfolio Okky Septyanto",
};

export default function Portfolio() {
  return (
    <div className="mt-5 pt-5 portfolioPage s">
      <Navbar />
      <BackButton href="/" />
      <div className="blogsPage mt-3 pt-3">
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

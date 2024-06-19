import "./style.css";
import Footer from "./component/footer";
import Portfolio from "./component/portfolio";
import Header from "./component/header";
import Software from "./component/software";
import Navbar from "./component/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
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
            <p className=" text-white secTitle">
              "Front End Bisa, Fullstack Lumayan Bisa"
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

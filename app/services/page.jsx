import "./service.css";
import Footer from "../component/footer";
import Navbar from "../component/navbar";
import SrvComp from "../component/srv";

export const metadata = {
  title: "• Service",
  description: "Portfolio Okky Septyanto",
};

export default function Services() {
  return (
    <div className="mt-5 pt-5 servicePage s">
      <Navbar />
      <SrvComp />
      <Footer />
    </div>
  );
}

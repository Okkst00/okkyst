import "./style.css";
import Footer from "./component/footer";
import Portfolio from "./component/portfolio";
import Header from "./component/header";
import Software from "./component/software";
import Navbar from "./component/navbar";
import MainBg from "./component/mainBg";
import MainBgMobile from "./component/mainBgMobile";
import Core from "./component/core";
import DynamicHeader from "./component/dynamicHeader";

export default function Home() {
  return (
    <>
      <Navbar />
      <DynamicHeader />
      <Core />
      <MainBg />
      <MainBgMobile />
      <Software />
      <Portfolio />
      <Footer />
    </>
  );
}

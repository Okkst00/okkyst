import Link from "next/link";
import "./quotes.css";
import Image from "next/image";

export const metadata = {
  title: "• Coming Soon !",
  description: "Coming Soon",
};

export default function Quotes() {
  return (
    <div className="container comingSoon">
      <div
        className="row d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="col text-center align-items-center">
          <Image
            width={300}
            height={300}
            className="mb-2 images"
            src="/images/comingSoon2.webp"
            alt="img"
          />
          <h1 className=" text-white">Coming Soon !</h1>
          <div className=" mt-5">
            <Link
              className=" btn-show text-center px-5 py-3 rounded-5"
              href={"/"}
            >
              <i className="bi bi-arrow-down-circle-fill"></i> Kembali
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

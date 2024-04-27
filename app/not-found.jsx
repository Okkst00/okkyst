import Link from "next/link";
import "./not-found.css";

export const metadata = {
  title: "•Not Found !",
  description: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="container notFound">
      <div
        className="row d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="col text-center align-items-center">
          <h1 className=" text-white">Eitss Page Not Found!</h1>
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

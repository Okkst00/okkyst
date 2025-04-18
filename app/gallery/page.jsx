import Link from "next/link";
import Footer from "../component/footer";
import Navbar from "../component/navbar";
import "./gallery.css";
import GalleryList from "../component/galleryList";

export const metadata = {
  title: "• Gallery",
  description: "Gallery Okky Septyanto",
};

export default function GalleryPage() {
  return (
    <div className="mt-5 pt-5 galleryPage">
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
      <GalleryList />
      <Footer />
    </div>
  );
}

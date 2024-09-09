import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import ButtonTop from "./utils/btnToTop";
import Head from "next/head";
import Script from "next/script";
import NextTopLoader from "nextjs-toploader";

export const metadata = {
  title: "• Okky Septyanto",
  description: "Front End Developer & UI UX Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/images/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      </Head>
      <body suppressHydrationWarning={true}>
        <NextTopLoader color="#b1d5ff" showSpinner={false} />
        {children}
        <ButtonTop />

        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></Script>
      </body>
    </html>
  );
}

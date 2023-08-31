import Head from "next/head";
import Image from "next/image";
import Navbar from "components/Navbar";
import PictSection from "../../components/pictSection";
import Hero from "components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ranatadarma's webpage</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,700;1,600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <Hero
          heading="My Name is Ranatadana"
          message="lm a hukum mahasiswa nyenyenye"
        />
        <PictSection />
      </main>
    </>
  );
}

import Head from "next/head";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Reseller from "./components/Reseller";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Head>
        <title>EVOSTE - Your Scent. Their Memory. Forever.</title>
        <meta
          name="description"
          content="EVOSTE is more than a fragrance brand - it is a journey through the senses."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Gunakan komponen Header jika perlu navigasi */}
      {/* <Header /> */}

      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Products />
        <Testimonials />
        <Reseller />
      </main>

      <Footer />
    </div>
  );
}

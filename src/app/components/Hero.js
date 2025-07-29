import Image from "next/image";

export default function Hero() {
  const scrollToSection = (id) => {};

  return (
    <section className="text-center py-20 px-4 bg-gray-50">
      <h1 className="text-5xl font-bold tracking-wider text-gray-900">
        EVOSTE
      </h1>
      <p className="mt-4 text-xl text-gray-600">
        Your Scent. Their memory. Forever.
      </p>
      <div className="mt-8">
        {/* Ganti `src` dengan path gambar produk utama Anda di folder /public */}
        <Image
          src="/hero-products.png" // Contoh path gambar
          alt="EVOSTE Perfume Collection"
          width={800}
          height={600}
          className="mx-auto"
        />
      </div>
      <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
        <a
          href="https://wa.me/6287777745791" // Ganti dengan nomor WhatsApp Anda
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white font-bold py-3 px-8 rounded-full hover:bg-green-600 transition duration-300 text-lg shadow-lg"
        >
          Order via WhatsApp
        </a>
        <a
          href="https://www.instagram.com/evosteofficial"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition duration-300 text-lg shadow-lg"
        >
          Lihat di Instagram
        </a>
      </div>
    </section>
  );
}

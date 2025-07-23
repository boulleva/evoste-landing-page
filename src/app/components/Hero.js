import Image from "next/image";

export default function Hero() {
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
    </section>
  );
}

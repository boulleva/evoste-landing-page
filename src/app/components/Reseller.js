export default function Reseller() {
  return (
    <section id="reseller" className="py-20 px-4 bg-white text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">
          Ready to grow with EVOSTE?
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Join our fast-growing Reseller network. DM us or contact us on
          WhatsApp to get started.
        </p>
        <div className="mt-8">
          <a
            href="https://wa.me/6287777745791" // Ganti dengan nomor WhatsApp Anda
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white font-bold py-3 px-8 rounded-full hover:bg-green-600 transition duration-300 text-lg"
          >
            Contact us on WhatsApp
          </a>
        </div>
        <div className="mt-6">
          <p className="text-gray-700 font-semibold">MOQ: 12 | 24 | 48 pcs</p>
        </div>
      </div>
    </section>
  );
}

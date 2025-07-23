export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-6xl mx-auto text-center">
        <p>
          All our perfumes are formulated with international-grade ingredients
          and are BPOM-ready.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://wa.me/6287777745791" className="hover:text-gray-400">
            (+62) 877-7774-5791
          </a>
          <a
            href="https://www.instagram.com/evosteofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            @evosteofficial
          </a>
        </div>
        <p className="mt-4">Worldwide shipment</p>
        <p className="mt-8 text-sm text-gray-500">www.evoste.co</p>
      </div>
    </footer>
  );
}

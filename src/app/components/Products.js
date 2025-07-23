import Image from "next/image";

const products = [
  {
    name: "Ivory Bloom",
    description:
      "Unveiling a fresh, sweet, and exotic character, the scent blends lychee, rhubarb, saffron, and bergamot with Turkish rose, jasmine, and soft musk. It captures the memory of a peaceful spring morning in a blooming garden.",
    image: "/ivory-bloom.png",
  },
  {
    name: "Citrine Flame",
    description:
      "Radiating a fresh, fruity, and woody character, the scent blends bergamot, apple, plum, and cedarwood with hints of geranium. It captures the memory of a tranquil afternoon in an apple orchard.",
    image: "/citrine-flame.png",
  },
  {
    name: "Midnight Cherry",
    description:
      "A captivating blend of cherry liqueur, bitter almond, and fresh bergamot - a sweet yet bold aroma that instantly draws attention.",
    image: "/midnight-cherry.png",
  },
  {
    name: "Oud Légendaire",
    description:
      "Bright, tropical, and mysterious, the scent combines passion fruit, pineapple, mango, and bergamot with warm woods, leather, oud, and soft amber.",
    image: "/oud-legendaire.png",
  },
  {
    name: "Or Du Soir",
    description:
      "A touch of coffee and amaretto brings warmth, like the first sip of a slow evening. Creamy ice cream notes melt into bourbon vanilla, brown sugar, and a spark of black pepper.",
    image: "/or-du-soir.png",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Fragrances
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div key={product.name} className="text-center">
              <div className="relative w-full h-64 mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold">Suggested Retail Price (SRP):</h3>
          <p className="text-xl mt-2">30ml = Rp. 199.000</p>
          <p className="text-xl">50 ml = Rp. 299.000</p>
        </div>
      </div>
    </section>
  );
}

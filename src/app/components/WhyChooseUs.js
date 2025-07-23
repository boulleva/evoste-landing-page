const features = [
  { name: "Fast-moving, emotional luxury product" },
  { name: "High profit margins" },
  { name: "Eye-catching, premium packaging" },
  { name: "Strong brand storytelling (easy to market)" },
  { name: "Full support: marketing kit, training, fast delivery" },
  { name: "BPOM-ready & trusted ingredients" },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Why they choose EVOSTE?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="flex items-start">
              <svg
                className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <p className="text-lg text-gray-700">{feature.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

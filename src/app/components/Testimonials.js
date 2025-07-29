export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Customer Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Review 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              {/* Tambahkan foto profil jika ada */}
              <div className="ml-4">
                <p className="font-bold text-lg">Billen</p>
                <div className="flex text-yellow-400">★★★★★</div>
              </div>
            </div>
            <p className="text-gray-600">
              This fragrance awakened a part of me I never knew existed. It
              stays with me through every moment, and every subtle note feels
              like a secret only I can carry
            </p>
          </div>
          {/* Review 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              {/* Tambahkan foto profil jika ada */}
              <div className="ml-4">
                <p className="font-bold text-lg">Jessica</p>
                <div className="flex text-yellow-400">★★★★★</div>
              </div>
            </div>
            <p className="text-gray-600">
              "I got Citrine Flame — its fresh, citrusy, and just right for my
              daily wear. I do wish it lingered on my skin a bit longer, but its
              perfect for close moments that last all day. 100 ⭐"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const companies = [
  "/images/clients/google.png",
  "/images/clients/microsoft.png",
  "/images/clients/amazon.png",
  "/images/clients/airbnb.png",
  "/images/clients/dropbox.png",
  "/images/clients/prime.jpg",
];

export default function TrustedCompanies() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <p className="text-center text-gray-500 uppercase tracking-widest font-semibold">
          Trusted By Innovative Companies
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center mt-10">
          {companies.map((logo, index) => (
            <div
              key={index}
              className="flex justify-center opacity-70 hover:opacity-100 transition"
            >
              <img src={logo} alt="" className="h-12 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

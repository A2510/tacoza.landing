export default function About() {
  return (
    <>
    <section className="relative">
      {/* Bg */}
      <div
        className="absolute inset-0 rounded-bl-[100px] mb-28 md:mb-0 bg-gradient-to-tr from-rose-600 to-rose-500 pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-36 md:pt-40 md:pb-20">
          {/* Hero content */}
          <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left">
            {/* Content */}
            <div className="md:w-[600px]">
              {/* Copy */}
              <h1
                className="h1 text-white mb-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                About Us
              </h1>
              <p
                className="text-lg text-rose-200 mb-8"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Empower your business with Tacoza’s all-in-one solution,{" "}
                <br className="hidden md:block" /> built to optimize your
                ordering process and management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="max-w-6xl mx-auto my-12 p-4 sm:px-6">
    Your text here
    </div>
    </>
  );
}

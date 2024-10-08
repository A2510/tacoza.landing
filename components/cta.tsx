import Link from "next/link";

export default function Cta() {
  return (
    <section className="relative">
      {/* Bg */}
      <div className="absolute inset-0 bg-stone-800 -z-10" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6" data-aos="fade-up">
        <div className="py-12 md:py-20">
          <div className="sm:flex sm:flex-col lg:flex-row justify-between items-center">
            {/* CTA content */}
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">
              <p className="text-xl text-rose-500 font-[550] mb-3">What are you waiting for?</p>
              <h2 className="h2 text-slate-100">Boost your super outlet</h2>
            </div>

            {/* Buttons */}
            <div className="shrink-0">
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12 md:mb-0">
                <div>
                  <Link className="btn-sm w-full inline-flex items-center text-rose-50 bg-rose-500 hover:bg-rose-600 group shadow-sm" href="/apply">
                    Outlet Onboarding
                    <span className="tracking-normal text-rose-50 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                      <svg className="fill-current" width="12" height="10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
                      </svg>
                    </span>
                  </Link>
                </div>
                <div>
                  <Link
                    className="btn-sm w-full inline-flex items-center text-white bg-stone-700 hover:bg-stone-800 shadow-sm relative before:absolute before:inset-0 before:bg-rose-400 before:bg-opacity-60 before:-z-10 before:rounded-full"
                    href="mailto:support@tacoza.co"
                  >
                    Get in touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
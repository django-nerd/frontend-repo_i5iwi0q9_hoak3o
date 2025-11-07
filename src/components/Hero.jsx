import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/t6fYoL-pmPsm38nx/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900">
              Minimalist, modern display illustration
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              Soft colors, clean lines, and a calm rhythm. A hero that feels light yet dynamic, perfect for modern brands and product showcases.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#features" className="rounded-full bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-gray-800 transition-colors">
                Explore Features
              </a>
              <a href="#showcase" className="rounded-full bg-white/70 backdrop-blur-md border border-white px-5 py-3 text-sm font-medium text-gray-900 hover:bg-white transition-colors">
                View Showcase
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/90" />
    </section>
  )
}

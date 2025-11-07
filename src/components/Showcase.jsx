export default function Showcase() {
  return (
    <section id="showcase" className="relative py-20 sm:py-24 bg-gradient-to-b from-white to-purple-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">A calm visual rhythm</h2>
          <p className="mt-4 text-gray-700">Cards float on soft surfaces, keeping focus on imagery and crisp type.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm">
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 to-white"/>
              <div className="p-4">
                <p className="text-sm text-gray-600">Minimal illustration #{i}</p>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-b from-transparent via-white/10 to-white/60"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

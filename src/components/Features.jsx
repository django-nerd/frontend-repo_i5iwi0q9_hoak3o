const features = [
  {
    title: 'Elegant composition',
    desc: 'A balanced layout that keeps attention on your core message with plenty of white space.',
  },
  {
    title: 'Soft, modern palette',
    desc: 'Purples and neutrals blend into a subtle gradient that feels calm and contemporary.',
  },
  {
    title: 'Lightweight motion',
    desc: 'Gentle animations add life without distracting from content or performance.',
  },
  {
    title: 'Responsive by default',
    desc: 'Looks great on any device with fluid spacing and typographic scale.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Designed for clarity</h2>
          <p className="mt-4 text-gray-700">A minimalist system built around rhythm, spacing, and effortless comprehension.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="font-medium text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

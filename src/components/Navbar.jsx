import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-30"> 
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl bg-white/60 backdrop-blur-md border border-white/50 shadow-sm px-4 py-3">
          <a href="#" className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-purple-500" />
            <span className="font-semibold tracking-tight text-gray-900">SoftLines</span>
          </a>
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 sm:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
          <div className="hidden sm:flex items-center gap-6 text-sm text-gray-700">
            <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
            <a href="#showcase" className="hover:text-gray-900 transition-colors">Showcase</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
            <a
              href="#get-started"
              className="rounded-full bg-gray-900 text-white px-4 py-2 text-xs font-medium hover:bg-gray-800 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
        {open && (
          <div className="sm:hidden mt-2 rounded-2xl bg-white/70 backdrop-blur-md border border-white/50 shadow-sm p-3 text-sm text-gray-700">
            <a href="#features" className="block px-2 py-2 rounded-md hover:bg-gray-100">Features</a>
            <a href="#showcase" className="block px-2 py-2 rounded-md hover:bg-gray-100">Showcase</a>
            <a href="#contact" className="block px-2 py-2 rounded-md hover:bg-gray-100">Contact</a>
          </div>
        )}
      </nav>
    </header>
  )
}

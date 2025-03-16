function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="/" className="text-3xl font-bold text-blue-500">
          FickleFlight
        </a>

        <nav className="flex items-center gap-6">
          <div className="flex items-center gap-6 text-gray-600">
            <a href="/explore" className="hover:text-blue-500">
              Explore
            </a>
            <a href="/search" className="hover:text-blue-500">
              Search
            </a>
            <a href="/hotels" className="hover:text-blue-500">
              Hotels
            </a>
            <a href="/offers" className="hover:text-blue-500">
              Offers
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-blue-500">
              {/* Simple bell SVG icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </button>
            <div className="h-8 w-8 overflow-hidden rounded-full border border-gray-200">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MD429iZZoMXeQoeKGtpZ2CLTvXSebV.png"
                alt="User profile"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header


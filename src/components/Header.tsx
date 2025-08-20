import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-6 bg-white">
      {/* Logo and Site Title */}
      <div className="flex items-center space-x-4">
        {/* Logo Grid - 2x2 grid of brand icons */}
        <div className="w-16 h-16 grid grid-cols-2 gap-1">
          {/* Paper Plane - Green */}
          <div className="bg-brand-green rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21.5 2.5L2.5 21.5M21.5 2.5L15.5 8.5M21.5 2.5L12.5 11.5M21.5 2.5L8.5 15.5"/>
            </svg>
          </div>
          {/* Lego Brick - Yellow */}
          <div className="bg-brand-yellow rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <rect x="4" y="8" width="16" height="8" rx="2"/>
              <circle cx="8" cy="12" r="1.5"/>
              <circle cx="16" cy="12" r="1.5"/>
            </svg>
          </div>
          {/* Camera - Black */}
          <div className="bg-brand-dark-grey rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
              <circle cx="12" cy="13" r="4"/>
            </svg>
          </div>
          {/* Heart - Red */}
          <div className="bg-brand-maroon rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </div>
        </div>
        <h1 className="text-h2 font-league-spartan font-bold text-brand-maroon">
          Paper Planes, Legos, & Everything in Between
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex space-x-8">
        <Link href="/about" className="text-brand-maroon font-league-spartan font-bold hover:text-brand-brown transition-colors">
          ABOUT
        </Link>
        <Link href="/contact" className="text-brand-maroon font-league-spartan font-bold hover:text-brand-brown transition-colors">
          CONTACT
        </Link>
        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-brand-maroon font-league-spartan font-bold hover:text-brand-brown transition-colors">
          LINKEDIN
        </Link>
      </nav>
    </header>
  )
}

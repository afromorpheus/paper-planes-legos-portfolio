export default function CategoryNavigation() {
  return (
    <div className="flex justify-center items-center py-12 px-8">
      <div className="flex items-center space-x-8">
        {/* Left Navigation Arrow */}
        <button className="w-12 h-12 bg-[#F0BC06] rounded-full flex items-center justify-center shadow-lg hover:bg-[#E6A800] transition-colors">
          <svg className="w-6 h-6 text-[#991552]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
        </button>

        {/* Category Icons */}
        <div className="flex space-x-6">
          {/* DESIGN'N LIGHT */}
          <div className="flex flex-col items-center space-y-2">
            <div className="w-20 h-20 bg-[#59B569] rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                <circle cx="12" cy="13" r="4"/>
              </svg>
            </div>
            <span className="text-sm font-semibold text-[#991552] text-center">
              DESIGN'N LIGHT
            </span>
          </div>

          {/* DESIGN'N BITS */}
          <div className="flex flex-col items-center space-y-2">
            <div className="w-20 h-20 bg-[#F0BC06] rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-10 h-10 text-[#991552]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 11H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-2V9a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2z"/>
                <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/>
              </svg>
            </div>
            <span className="text-sm font-semibold text-[#991552] text-center">
              DESIGN'N BITS
            </span>
          </div>

          {/* DESIGN'N GAME */}
          <div className="flex flex-col items-center space-y-2">
            <div className="w-20 h-20 bg-[#59B569] rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <path d="M3.3 7l8.7 5 8.7-5"/>
                <path d="M12 22V12"/>
              </svg>
            </div>
            <span className="text-sm font-semibold text-[#991552] text-center">
              DESIGN'N GAME
            </span>
          </div>
        </div>

        {/* Right Navigation Arrow */}
        <button className="w-12 h-12 bg-[#F0BC06] rounded-full flex items-center justify-center shadow-lg hover:bg-[#E6A800] transition-colors">
          <svg className="w-6 h-6 text-[#991552]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

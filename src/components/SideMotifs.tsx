export default function SideMotifs() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Left Side - Blue Speech Bubble */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
        <div className="relative">
          {/* Blue Speech Bubble */}
          <div className="w-32 h-32 bg-[#A8D4FF] rounded-[30px] relative">
            {/* Speech Bubble Pointer pointing right */}
            <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-0 h-0 border-t-[16px] border-b-[16px] border-l-[24px] border-t-transparent border-b-transparent border-l-[#A8D4FF]"></div>
            
            {/* Icons inside blue bubble */}
            <div className="flex flex-col items-center justify-center h-full space-y-3">
              {/* Paper Plane Icon */}
              <div className="w-8 h-8 bg-[#2A2A2A] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.5 2.5L2.5 21.5M21.5 2.5L15.5 8.5M21.5 2.5L12.5 11.5M21.5 2.5L8.5 15.5"/>
                </svg>
              </div>
              {/* Heart Icon */}
              <div className="w-8 h-8 bg-[#2A2A2A] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Red Speech Bubble */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
        <div className="relative">
          {/* Red Speech Bubble */}
          <div className="w-32 h-32 bg-[#991552] rounded-[30px] relative">
            {/* Speech Bubble Pointer pointing left */}
            <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-0 h-0 border-t-[16px] border-b-[16px] border-r-[24px] border-t-transparent border-b-transparent border-r-[#991552]"></div>
            
            {/* Icons inside red bubble */}
            <div className="flex flex-col items-center justify-center h-full space-y-3">
              {/* Lego Brick Icon */}
              <div className="w-8 h-8 bg-[#934C4C] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="4" y="8" width="16" height="8" rx="2"/>
                  <circle cx="8" cy="12" r="1.5"/>
                  <circle cx="16" cy="12" r="1.5"/>
                </svg>
              </div>
              {/* Circle Icon */}
              <div className="w-8 h-8 bg-[#F0BC06] rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

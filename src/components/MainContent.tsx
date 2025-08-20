export default function MainContent() {
  return (
    <div className="flex justify-center items-center py-16 px-8">
      {/* Main Yellow Speech Bubble */}
      <div className="relative">
        {/* Speech Bubble Shape */}
        <div className="w-96 h-64 bg-[#F0BC06] rounded-[50px] relative">
          {/* Speech Bubble Pointer */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[32px] border-l-transparent border-r-transparent border-b-[#F0BC06]"></div>
          
          {/* Content */}
          <div className="flex flex-col items-center justify-center h-full text-center px-8">
            <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
              Paper Planes, Legos, & Everything in Between
            </h2>
            <p className="text-xl text-[#991552] font-semibold">
              DESIGN'N WITH KABIRU SEIDU
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

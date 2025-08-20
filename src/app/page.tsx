import Header from '@/components/Header'
import MainContent from '@/components/MainContent'
import CategoryNavigation from '@/components/CategoryNavigation'
import SideMotifs from '@/components/SideMotifs'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white relative">
      <Header />
      
      {/* Main Content Area with Side Motifs */}
      <div className="relative">
        <SideMotifs />
        <MainContent />
        <CategoryNavigation />
      </div>
      
      <Footer />
    </main>
  )
}

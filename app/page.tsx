'use client'

import { useState } from 'react'
import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { ProblemSection } from '@/components/ProblemSection'
import { SmartServerSection } from '@/components/SmartServerSection'
import { SendingProvidersSection } from '@/components/SendingProvidersSection'
import { UniboxAISection } from '@/components/UniboxAISection'
import { CampaignEngineSection } from '@/components/CampaignEngineSection'
import { IntegrationsSection } from '@/components/IntegrationsSection'
import { EarlyAccessSection } from '@/components/EarlyAccessSection'
import { PositioningSection } from '@/components/PositioningSection'
import { Footer } from '@/components/Footer'
import { WaitlistModal } from '@/components/WaitlistModal'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <main className="min-h-screen bg-[#FBFBFB]">
      <Navbar onJoin={openModal} />
      <HeroSection onJoin={openModal} />
      <div className="relative z-10">
        <ProblemSection />
        <SmartServerSection />
        <SendingProvidersSection />
        <UniboxAISection />
        <CampaignEngineSection />
        <IntegrationsSection />
        <EarlyAccessSection onJoin={openModal} />
        <PositioningSection />
      </div>
      <Footer />
      <WaitlistModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  )
}

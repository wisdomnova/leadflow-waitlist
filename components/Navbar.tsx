'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export function Navbar({ onJoin }: { onJoin: () => void }) {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Offset for the fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none"
      >
        <div className="flex items-center justify-between w-full max-w-5xl px-6 py-3 bg-white/70 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-full pointer-events-auto">
          <div className="flex items-center gap-2">
            <Image
              src="/leadflow-black.png"
              alt="LeadFlow"
              width={110}
              height={32}
              className="h-8 w-auto object-contain"
            />
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#101828]/70">
            <a 
              href="#infrastructure" 
              onClick={(e) => scrollToSection(e, 'infrastructure')}
              className="hover:text-[#745DF3] transition-colors"
            >
              Infrastructure
            </a>
            <a 
              href="#unibox" 
              onClick={(e) => scrollToSection(e, 'unibox')}
              className="hover:text-[#745DF3] transition-colors"
            >
              Unibox AI
            </a>
            <a 
              href="#integrations" 
              onClick={(e) => scrollToSection(e, 'integrations')}
              className="hover:text-[#745DF3] transition-colors"
            >
              Integration
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={onJoin}
              className="px-5 py-2.5 bg-[#101828] text-white text-sm font-semibold rounded-full hover:bg-[#101828]/90 transition-all active:scale-95 shadow-lg shadow-[#101828]/10"
            >
              Join Waitlist
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[#101828]"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-6 top-24 z-40 md:hidden bg-white/95 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-8 shadow-2xl"
          >
            <div className="flex flex-col gap-6 items-center">
              <a 
                href="#infrastructure" 
                onClick={(e) => scrollToSection(e, 'infrastructure')}
                className="text-lg font-bold text-[#101828]"
              >
                Infrastructure
              </a>
              <a 
                href="#unibox" 
                onClick={(e) => scrollToSection(e, 'unibox')}
                className="text-lg font-bold text-[#101828]"
              >
                Unibox AI
              </a>
              <a 
                href="#integrations" 
                onClick={(e) => scrollToSection(e, 'integrations')}
                className="text-lg font-bold text-[#101828]"
              >
                Integration
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

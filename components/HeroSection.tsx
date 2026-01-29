'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'

export function HeroSection({ onJoin }: { onJoin: () => void }) {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center px-6 pt-32 md:pt-48 pb-20 md:pb-32 overflow-hidden bg-[#FBFBFB]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(116,93,243,0.08)_0%,transparent_50%)]" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10 pt-10 md:pt-0">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[2.75rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] font-black text-[#101828] leading-[1.05] tracking-tighter mb-8 px-2"
        >
          Cold email outreach <br className="hidden md:block" />
          <span className="text-[#745DF3]">built on infrastructure.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-2xl text-[#101828]/60 max-w-3xl mx-auto mb-12 leading-relaxed px-4"
        >
          Leadflow is the orchestration layer for high-performance outbound teams. 
          Manage professional providers, scale without limits, and escape deliverability chaos.
        </motion.p>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-6 px-4"
        >
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button 
              onClick={onJoin}
              className="group relative px-8 py-4 bg-[#101828] text-white font-bold rounded-2xl overflow-hidden transition-all active:scale-95 text-lg shadow-2xl shadow-[#101828]/20 w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2 justify-center">
                Join the Waitlist <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-[#745DF3] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200" />
              ))}
            </div>
            <p className="text-sm font-medium text-[#101828]/40">
              <span className="text-[#101828] font-bold">Limited early access</span> · Priority onboarding
            </p>
          </div>
        </motion.div>
      </div>

      {/* Visual Representation of Dashboard */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="mt-20 w-full max-w-6xl mx-auto px-4"
      >
        <div className="relative aspect-[16/9] w-full bg-white rounded-[2rem] border border-[#101828]/5 shadow-[0_32px_128px_rgba(116,93,243,0.1)] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#745DF3]/5 to-transparent" />
          <div className="p-8 border-b border-[#101828]/5 flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="p-10 flex gap-10">
            <div className="w-64 space-y-4">
              <div className="h-4 w-full bg-[#101828]/5 rounded-full" />
              <div className="h-4 w-3/4 bg-[#101828]/5 rounded-full" />
              <div className="h-4 w-5/6 bg-[#101828]/5 rounded-full" />
            </div>
            <div className="flex-1 grid grid-cols-2 gap-6">
              <div className="h-40 bg-[#745DF3]/5 rounded-3xl" />
              <div className="h-40 bg-[#101828]/5 rounded-3xl" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}


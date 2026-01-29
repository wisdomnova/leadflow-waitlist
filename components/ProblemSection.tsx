'use client'

import { motion } from 'framer-motion'
import { AlertCircle, Target, TrendingDown } from 'lucide-react'

export function ProblemSection() {
  return (
    <section id="problem" className="py-20 md:py-32 px-6 bg-[#101828] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-[#745DF3] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[2.25rem] md:text-[3.5rem] font-black leading-[1.1] mb-8 text-white">
              Why cold email breaks when you scale
            </h2>
            <div className="space-y-6 md:space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-red-400">
                  <AlertCircle />
                </div>
                <p className="text-lg md:text-xl text-white/60 leading-relaxed">
                  Most tools rely on shared Gmail or Outlook inboxes. Once you scale, you hit <span className="text-white font-bold">hard limits</span> and unstable sender reputations.
                </p>
              </div>
              
              <div className="p-8 bg-gradient-to-br from-[#745DF3]/20 to-transparent border border-[#745DF3]/30 rounded-[2rem]">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-white">
                  <Target className="text-[#745DF3]" />
                  Leadflow build philosophy
                </h3>
                <p className="text-lg text-white/80 leading-relaxed">
                  We don't replace your sending provider. We give you full control over it. We infrastructure-first, not inbox-last.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="col-span-2 p-6 md:p-10 bg-white/5 border border-white/10 rounded-[2.5rem]">
              <div className="flex justify-between items-start mb-6 md:mb-10">
                <TrendingDown className="w-10 h-10 md:w-12 md:h-12 text-red-500" />
                <span className="px-4 py-1.5 bg-red-500/10 text-red-400 text-xs font-black uppercase rounded-full">Shared Inboxes</span>
              </div>
              <div className="space-y-4">
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: "100%" }}
                    whileInView={{ width: "20%" }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="h-full bg-red-500" 
                  />
                </div>
                <p className="text-sm font-bold text-white/40">Deliverability degradation after 30 days</p>
              </div>
            </div>
            
            <div className="p-6 md:p-10 bg-[#745DF3] rounded-[2.5rem] flex flex-col justify-between">
              <span className="text-4xl md:text-5xl font-black text-white">01</span>
              <p className="font-bold leading-tight mt-6 md:mt-10 text-white">Professional infrastructure</p>
            </div>
            <div className="p-6 md:p-10 border border-white/10 rounded-[2.5rem] flex flex-col justify-between">
              <span className="text-4xl md:text-5xl font-black text-white/20">02</span>
              <p className="font-bold leading-tight mt-6 md:mt-10 text-white/60">AI Orchestration</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


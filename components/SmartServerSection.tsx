'use client'

import { motion } from 'framer-motion'
import { Zap, Globe, Terminal, Server } from 'lucide-react'

export function SmartServerSection() {
  return (
    <section id="infrastructure" className="py-20 md:py-32 px-6 bg-[#FBFBFB]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[2.5rem] md:text-[4rem] font-black text-[#101828] leading-[1.1] mb-6 tracking-tighter"
          >
            Smart Server <br className="hidden md:block" />
            <span className="text-[#745DF3]">Infrastructure managed.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#101828]/60 max-w-2xl mx-auto"
          >
            Outbound complexity disappears in our managed infrastructure layer.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min md:auto-rows-[300px]">
          {/* Main Feature - Mailboxes */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-8 bg-white border border-[#101828]/5 rounded-[3rem] p-8 md:p-10 overflow-hidden relative shadow-[0_8px_30px_rgb(0,0,0,0.02)]"
          >
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className="w-14 h-14 bg-[#745DF3] rounded-[1.25rem] flex items-center justify-center text-white mb-6 md:mb-8 border border-[#745DF3]/20 shadow-lg shadow-[#745DF3]/20">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#101828] mb-4 md:mb-6 tracking-tighter">Generate mailboxes instantly.</h3>
                <p className="text-lg md:text-xl text-[#101828]/70 leading-relaxed max-w-md">Scale your outbound without the 48-hour provider wait times or manual setup.</p>
              </div>
            </div>
            {/* Ambient Background Gradient */}
            <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#745DF3]/10 rounded-full blur-[80px]" />
          </motion.div>

          {/* Feature - Domains */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 bg-[#745DF3] text-white rounded-[3rem] p-8 md:p-10 shadow-xl shadow-[#745DF3]/20 flex flex-col justify-between"
          >
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-6 md:mb-0">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-3 tracking-tight">Custom Domains</h3>
              <p className="text-white/80 text-lg leading-snug">Full control over sending domains and reputation rotation.</p>
            </div>
          </motion.div>

          {/* Feature - DNS */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-5 bg-[#101828] text-white rounded-[3rem] p-8 md:p-10 flex flex-col justify-between"
          >
            <div className="w-12 h-12 bg-[#745DF3] rounded-2xl flex items-center justify-center text-white mb-6 md:mb-0">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-3 tracking-tight">Auto-DNS Config</h3>
              <p className="text-white/60 text-lg leading-snug">SPF, DKIM, and DMARC records handled automatically across all domains.</p>
            </div>
          </motion.div>

          {/* Feature - Scale */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-7 bg-white border border-[#101828]/5 rounded-[3rem] p-8 md:p-10 flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.02)] relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 bg-[#F5F3FF] rounded-2xl flex items-center justify-center mb-6 md:mb-8 border border-[#745DF3]/10">
                <Server className="w-6 h-6 text-[#745DF3]" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-[#101828] mb-3 tracking-tight">Enterprise Infrastructure</h3>
              <p className="text-[#101828]/60 text-base md:text-lg leading-snug max-w-sm">Built for clean rotation and optimized for deliverability at massive scale.</p>
            </div>
            
            {/* Abstract Background Design */}
            <div className="absolute bottom-0 right-0 w-full h-[60%] p-4 flex items-end gap-2">
              {[...Array(12)].map((_, i) => (
                <motion.div 
                  key={i} 
                  initial={{ height: "10%" }}
                  whileInView={{ height: `${20 + Math.random() * 60}%` }}
                  transition={{ duration: 1.5, delay: i * 0.05 }}
                  className="flex-1 bg-[#745DF3]/5 rounded-t-2xl" 
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

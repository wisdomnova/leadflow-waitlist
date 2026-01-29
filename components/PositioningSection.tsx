'use client'

import { motion } from 'framer-motion'
import { Shield, Eye, Lock } from 'lucide-react'

export function PositioningSection() {
  return (
    <section className="py-24 px-6 bg-[#FBFBFB]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700 mb-20"
          >
            {['GDPR COMPLIANT', 'SOC2 READY', 'ENTERPRISE SCALE', 'PRIVACY FIRST'].map((text, i) => (
              <span key={i} className="text-sm font-black tracking-[0.2em] text-[#101828]">{text}</span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="text-2xl text-[#101828]/70 leading-relaxed italic font-medium">
              "The next evolution of outbound infrastructure. Inspired by the best, <span className="text-[#101828] font-bold not-italic">re-engineered for total control.</span>"
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 w-full">
            {[
              { icon: Shield, title: "GDPR Compliant", desc: "Built with European privacy standards at the core." },
              { icon: Eye, title: "Total Visibility", desc: "No black boxes. See every log and delivery attempt." },
              { icon: Lock, title: "Data Sovereignty", desc: "You own the domains, the accounts, and the data." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 border-l border-[#101828]/5 text-left"
              >
                <item.icon className="w-6 h-6 text-[#745DF3] mb-6" />
                <h4 className="text-lg font-black text-[#101828] mb-2">{item.title}</h4>
                <p className="text-[#101828]/60 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

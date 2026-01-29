'use client'

import { motion } from 'framer-motion'
import { Zap, HardDrive, Code, Share2, Database, Terminal } from 'lucide-react'

export function IntegrationsSection() {
  return (
    <section id="integrations" className="py-20 md:py-32 px-6 bg-[#FBFBFB]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[2.25rem] md:text-[4rem] font-black text-[#101828] leading-[1.1] mb-6 tracking-tighter"
          >
            The Ecosystem <br className="hidden md:block" />
            <span className="text-[#745DF3]">is open.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-[#101828]/60 max-w-2xl mx-auto px-4"
          >
            Sync data, automate complex workflows, and keep your stack in perfect harmony.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              icon: Share2, 
              title: "Native CRM Sync", 
              desc: "Planned integrations for HubSpot, Pipedrive, and Salesforce.",
              bg: "bg-white",
              text: "text-[#101828]"
            },
            { 
              icon: Terminal, 
              title: "Webhooks & API", 
              desc: "Build custom triggers and connect to 5,000+ apps via Zapier.",
              bg: "bg-[#101828]",
              text: "text-white"
            },
            { 
              icon: Database, 
              title: "Data Sovereignty", 
              desc: "Export every interaction, lead status, and delivery log at any time.",
              bg: "bg-white",
              text: "text-[#101828]"
            }
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className={`${card.bg} border border-[#101828]/5 rounded-[2.5rem] p-8 md:p-10 shadow-sm flex flex-col items-center text-center`}
            >
              <div className={`w-14 h-14 md:w-16 md:h-16 ${card.text === 'text-white' ? 'bg-[#745DF3]' : 'bg-[#F5F3FF]'} rounded-2xl flex items-center justify-center mb-6 md:mb-8`}>
                <card.icon className={`w-6 h-6 md:w-8 md:h-8 ${card.text === 'text-white' ? 'text-white' : 'text-[#745DF3]'}`} />
              </div>
              <h3 className={`text-xl md:text-2xl font-black mb-3 md:mb-4 ${card.text}`}>{card.title}</h3>
              <p className={`${card.text === 'text-white' ? 'text-white/60' : 'text-[#101828]/60'} text-base md:text-lg leading-snug`}>
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

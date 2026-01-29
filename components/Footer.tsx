'use client'

import { motion } from 'framer-motion'
import { Mail, Instagram, Twitter, Linkedin } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-[#101828] py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-8">
              <Image 
                src="/leadflow-black.png" 
                alt="LeadFlow" 
                width={160} 
                height={48} 
                className="brightness-0 invert h-10 w-auto object-contain"
              />
            </div>
            <p className="text-white/40 text-lg leading-relaxed max-w-sm">
              The control layer for modern outbound. Built for teams who demand precision and scale.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-black text-white mb-6 uppercase tracking-widest text-xs">Product</h4>
            <ul className="space-y-4 text-sm font-bold text-white/60">
              <li className="hover:text-[#745DF3] cursor-pointer transition-colors">Smart Server</li>
              <li className="hover:text-[#745DF3] cursor-pointer transition-colors">Unibox AI</li>
              <li className="hover:text-[#745DF3] cursor-pointer transition-colors">Campaigns</li>
              <li className="hover:text-[#745DF3] cursor-pointer transition-colors">Integrations</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-black text-white mb-6 uppercase tracking-widest text-xs">Legal</h4>
            <ul className="space-y-4 text-sm font-bold text-white/60">
              <li className="hover:text-[#745DF3] cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-[#745DF3] cursor-pointer transition-colors">Terms of Service</li>
              <li className="hover:text-[#745DF3] cursor-pointer transition-colors">Compliance</li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-black text-white mb-6 uppercase tracking-widest text-xs">Connect</h4>
            <div className="flex gap-4 mb-8">
              {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                <div key={i} className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white/40 hover:text-[#745DF3] hover:border-[#745DF3]/20 transition-all cursor-pointer">
                  <Icon className="w-5 h-5" />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 group cursor-pointer">
              <Mail className="w-5 h-5 text-[#745DF3]" />
              <span className="text-white font-bold group-hover:text-[#745DF3] transition-colors">contact@tryleadflow.ai</span>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 font-bold text-sm">
            &copy; 2026 LeadFlow Operations Inc. 
          </p>
          <div className="flex gap-8 text-xs font-black text-white/20 tracking-widest uppercase">
            <span>Built with Intention</span>
            <span>Scale with Clarity</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

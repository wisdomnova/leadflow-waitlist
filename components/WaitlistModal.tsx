'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle2, Loader2, ArrowRight } from 'lucide-react'

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    try {
      const response = await fetch(
        'https://x8ki-letl-twmt.n7.xano.io/api:7pwSPeIt/waitlist',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            full_name: name,
            work_email: email,
          }),
        }
      )
      
      if (!response.ok) {
        throw new Error('Failed to submit')
      }
      
      setStatus('success')
    } catch (error) {
      console.error('Waitlist submission error:', error)
      setStatus('idle')
      alert('Failed to submit. Please try again.')
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#101828]/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#745DF3]/10 rounded-full blur-3xl -mr-16 -mt-16" />
            
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#101828]/5 transition-colors text-[#101828]/40 hover:text-[#101828]"
            >
              <X className="w-5 h-5" />
            </button>

            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                </div>
                <h3 className="text-3xl font-black text-[#101828] mb-4 tracking-tight">You're on the list.</h3>
                <p className="text-[#101828]/60 text-lg leading-relaxed">
                  We'll reach out as soon as a spot opens up in the founding program.
                </p>
                <button 
                  onClick={onClose}
                  className="mt-10 font-bold text-[#745DF3] hover:text-[#745DF3]/80 transition-colors inline-flex items-center gap-2"
                >
                  Dismiss <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ) : (
              <div>
                <div className="mb-10 text-center lg:text-left">
                  <h3 className="text-3xl font-black text-[#101828] mb-4 tracking-tight">Join the Waitlist</h3>
                  <p className="text-lg text-[#101828]/60 leading-relaxed">
                    Secure your spot in the foundering member program and get priority access.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <input
                      required
                      type="text"
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-6 py-5 bg-[#FBFBFB] border border-[#101828]/5 rounded-2xl focus:outline-none focus:border-[#745DF3]/30 transition-colors text-lg"
                    />
                  </div>
                  <div className="relative">
                    <input
                      required
                      type="email"
                      placeholder="Work Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-6 py-5 bg-[#FBFBFB] border border-[#101828]/5 rounded-2xl focus:outline-none focus:border-[#745DF3]/30 transition-colors text-lg"
                    />
                  </div>
                  
                  <button
                    disabled={status === 'loading'}
                    type="submit"
                    className="w-full bg-[#101828] text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-[#101828]/10 hover:bg-[#101828]/90 transition-all active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-70 disabled:active:scale-100"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Get Early Access
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                  
                  <p className="text-center text-xs font-bold text-[#101828]/20 tracking-widest uppercase mt-6">
                    No Spam · Secure Infrastructure · Founders Only
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

"use client";
import React, { useEffect } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { glossaryTerms } from '@/data/glossary';

export function GlossaryDrawer() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  
  const termId = searchParams.get('glossary');
  const isOpen = !!termId;
  
  const selectedTerm = glossaryTerms.find(t => t.id === termId) || glossaryTerms[0];

  const close = () => {
    // Remove the ?glossary=... param without scrolling
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.delete('glossary');
    const newUrl = newParams.toString() ? `${pathname}?${newParams.toString()}` : pathname;
    router.replace(newUrl, { scroll: false });
  };
  
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) close();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex justify-end font-body">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="absolute inset-0 bg-flop-ink/30 backdrop-blur-sm cursor-pointer"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full max-w-md bg-flop-cream h-full shadow-2xl border-l-[3px] border-flop-ink flex flex-col p-8 overflow-y-auto"
          >
            <button 
              onClick={close}
              className="absolute top-6 right-6 text-flop-ink hover:text-flop-crimson transition-colors z-10"
              aria-label="Close glossary"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
            
            <div className="flex items-center gap-4 mt-8 mb-4 border-b-2 border-flop-ink/10 pb-6">
              <img src="/floptato.png" alt="Floptato mascot" className="w-16 h-16 object-cover rounded-full border-[3px] border-flop-ink" />
              <div>
                <h2 className="font-hand text-2xl text-flop-ink/50 uppercase tracking-widest leading-none">Glossary</h2>
                <p className="font-body text-xs font-bold text-flop-ink/40 mt-1 uppercase">Floptato's Dictionary</p>
              </div>
            </div>
            
            {termId === 'all' ? (
              <div className="flex flex-col gap-8 mt-4">
                {glossaryTerms.map(t => (
                  <div key={t.id}>
                    <h3 className="font-hand text-3xl text-flop-crimson mb-2">{t.term}</h3>
                    <p className="font-body text-flop-ink/90 font-semibold leading-relaxed">
                      {t.definition}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-2">
                <h3 className="font-hand text-4xl text-flop-crimson mb-4">{selectedTerm.term}</h3>
                <p className="font-body text-flop-ink/90 font-semibold leading-relaxed text-lg">
                  {selectedTerm.definition}
                </p>
                <button 
                  onClick={() => router.replace(`${pathname}?glossary=all`, { scroll: false })}
                  className="mt-8 text-sm font-bold text-flop-sea hover:text-flop-crimson transition-colors underline decoration-2 underline-offset-4"
                >
                  View full glossary ↗
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

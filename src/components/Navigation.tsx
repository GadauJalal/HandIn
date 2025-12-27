'use client';

import { Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from './ui/sheet';
import { Button } from './ui/button';
import { cn } from './ui/utils';
import logoImage from 'figma:asset/a78969167a6cde6b8e8fb2b89908f75796047715.png';
import { ImageWithFallback } from './figma/ImageWithFallback';

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'How it works', href: '#how-it-works' },
  { name: 'For universities', href: '#for-universities' },
  { name: 'Pricing', href: '#pricing' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        scrolled 
          ? 'bg-white/90 backdrop-blur-xl border-zinc-200/50 py-3 shadow-sm' 
          : 'bg-white/0 border-transparent py-5'
      )}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group relative z-50">
            <div className="relative h-7">
                <ImageWithFallback 
                    src={logoImage}
                    alt="HandIn Logo"
                    className="h-full w-auto object-contain"
                />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 p-1 bg-zinc-100/50 backdrop-blur-sm rounded-full border border-zinc-200/50 mx-auto absolute left-1/2 -translate-x-1/2">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-white rounded-full transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              variant="ghost" 
              className="text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-full px-5 font-medium"
            >
              Log in
            </Button>
            <Button 
              className="bg-[#E85002] hover:bg-[#cc4602] text-white rounded-full px-6 font-medium shadow-lg shadow-[#E85002]/20 transition-all hover:shadow-[#E85002]/40 hover:-translate-y-0.5"
            >
              Watch demo
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-zinc-900">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="w-full h-[100dvh] p-0 border-none bg-white/95 backdrop-blur-xl">
                <div className="flex flex-col h-full p-6 pt-24 items-center justify-center gap-8">
                    <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  <div className="flex flex-col items-center gap-6 w-full max-w-sm">
                    {navLinks.map((item) => (
                      <SheetClose asChild key={item.name}>
                        <a
                          href={item.href}
                          className="text-2xl font-medium text-zinc-900 hover:text-[#E85002] transition-colors"
                        >
                          {item.name}
                        </a>
                      </SheetClose>
                    ))}
                  </div>
                  
                  <div className="h-px w-24 bg-zinc-200" />

                  <div className="flex flex-col items-center gap-4 w-full max-w-sm">
                    <SheetClose asChild>
                      <Button variant="ghost" className="w-full text-lg font-medium h-12 rounded-full">
                        Log in
                      </Button>
                    </SheetClose>
                    <SheetClose asChild>
                      <Button className="w-full bg-[#E85002] hover:bg-[#cc4602] text-white h-12 rounded-full text-lg font-medium shadow-lg shadow-[#E85002]/20">
                        Watch demo
                      </Button>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

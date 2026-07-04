'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

const NAV_ITEMS = [
  { number: '01', name: 'About', href: '#about' },
  { number: '02', name: 'Journey', href: '#journey' },
  { number: '03', name: 'Skills', href: '#skills' },
  { number: '04', name: 'Projects', href: '#projects' },
  { number: '05', name: 'Field Notes', href: '#field-notes' },
  { number: '06', name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    toggleRef.current?.focus();
  }, []);

  // Focus trap + Escape handling for the mobile menu
  useEffect(() => {
    if (!menuOpen) return;

    const menu = menuRef.current;
    if (!menu) return;

    const focusables = menu.querySelectorAll<HTMLElement>('a, button');
    focusables[0]?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMenu();
        return;
      }
      if (e.key !== 'Tab') return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen, closeMenu]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? 'border-b border-hairline bg-navy/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        <a
          href="#hero"
          className="font-mono text-lg font-bold text-teal transition-colors hover:text-teal-hover"
          aria-label="Back to top"
        >
          AR.
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs text-muted transition-colors hover:text-teal"
            >
              <span className="text-teal">{item.number}.</span> {item.name}
            </a>
          ))}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[6px] border border-teal px-4 py-2 font-mono text-xs text-teal transition-colors hover:bg-teal/10"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          ref={toggleRef}
          type="button"
          className="rounded-[6px] p-2 text-ink md:hidden"
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
            {menuOpen ? (
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          id="mobile-menu"
          className="border-b border-hairline bg-navy/95 backdrop-blur-md md:hidden"
        >
          <div className="space-y-1 px-6 pb-6 pt-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="block rounded-[6px] px-3 py-3 font-mono text-sm text-muted transition-colors hover:bg-surface hover:text-teal"
              >
                <span className="text-teal">{item.number}.</span> {item.name}
              </a>
            ))}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-2 block rounded-[6px] border border-teal px-3 py-3 text-center font-mono text-sm text-teal transition-colors hover:bg-teal/10"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

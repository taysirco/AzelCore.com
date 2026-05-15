'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { getNavLinks, getWhatsAppLink, SITE_NAME, SITE_NAME_EN } from '@/lib/constants';
import { getDictionary } from '@/lib/dictionaries';
import { getAlternateLocale, localePath, type Locale } from '@/lib/i18n';
import styles from './Header.module.css';

interface HeaderProps {
  locale?: Locale;
}

export default function Header({ locale = 'ar' }: HeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dict = getDictionary(locale);
  const navLinks = getNavLinks(locale);
  const whatsappLink = getWhatsAppLink(locale);
  const altLocale = getAlternateLocale(locale);
  const siteName = locale === 'ar' ? SITE_NAME : SITE_NAME_EN;

  const currentPath = pathname ? pathname.replace(/^\/(ar|en)(\/|$)/, '/') : '/';
  const switchLangUrl = altLocale === 'ar' 
    ? currentPath
    : `/en${currentPath === '/' ? '' : currentPath}`;

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen(prev => !prev), []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <Link href={localePath(locale, '/')} className={styles.logo} aria-label={siteName}>
            <Image
              src="/images/azelcore-logo.webp"
              alt={locale === 'ar' ? 'عزل كور — تظليل وعزل حراري احترافي' : 'AzelCore — Professional Tinting & Insulation'}
              width={170}
              height={106}
              priority
              quality={60}
              sizes="170px"
            />
          </Link>

          <nav className={styles.nav} aria-label={dict.header.ariaNavigation}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            {/* Language Switcher */}
            <a
              href={switchLangUrl}
              className={styles.langSwitch}
              aria-label={dict.langSwitcher.label}
              onClick={() => {
                document.cookie = `x-locale=${altLocale}; path=/; max-age=${60 * 60 * 24 * 365}; Secure; SameSite=Lax`;
              }}
            >
              {dict.langSwitcher.switchTo}
            </a>

            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.553 4.16 1.6 5.972L.052 23.65a.5.5 0 00.606.606l5.678-1.548A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.216-1.473l-.364-.218-3.776 1.03 1.03-3.776-.218-.364A9.94 9.94 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
              {dict.common.whatsapp}
            </a>

            <button
              className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
              onClick={toggleMenu}
              aria-label={menuOpen ? dict.header.closeMenu : dict.header.openMenu}
              aria-expanded={menuOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`${styles.overlay} ${menuOpen ? styles.overlayVisible : ''}`} onClick={closeMenu} />
      <nav className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`} aria-label={locale === 'ar' ? 'القائمة الجوال' : 'Mobile Menu'}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={styles.mobileLink}
            onClick={closeMenu}
          >
            {link.label}
          </Link>
        ))}
        {/* Mobile Language Switch */}
        <a
          href={switchLangUrl}
          className={styles.mobileLink}
          onClick={() => {
            document.cookie = `x-locale=${altLocale}; path=/; max-age=${60 * 60 * 24 * 365}; Secure; SameSite=Lax`;
            closeMenu();
          }}
        >
          🌐 {dict.langSwitcher.switchTo}
        </a>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.mobileCta}>
          {locale === 'ar' ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
        </a>
      </nav>
    </>
  );
}

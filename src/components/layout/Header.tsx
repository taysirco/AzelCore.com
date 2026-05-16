'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { getWhatsAppLink, SITE_NAME, SITE_NAME_EN, PHONE } from '@/lib/constants';
import { getDictionary } from '@/lib/dictionaries';
import { getAlternateLocale, localePath, type Locale } from '@/lib/i18n';
import styles from './Header.module.css';

interface HeaderProps {
  locale?: Locale;
}

/** Grouped navigation structure for mega-menu */
function getGroupedNav(locale: Locale) {
  const isAr = locale === 'ar';
  const lp = (path: string) => localePath(locale, path);

  return {
    mainLinks: [
      { href: lp('/'), label: isAr ? 'الرئيسية' : 'Home', icon: '🏠' },
    ],
    services: {
      title: isAr ? 'خدماتنا' : 'Services',
      items: [
        { href: lp('/car-insulation-jeddah'), label: isAr ? 'تظليل سيارات جدة' : 'Car Tinting Jeddah', icon: '🚗', desc: isAr ? 'نانو سيراميك — حجب 97% حرارة' : 'Nano-ceramic — 97% heat rejection' },
        { href: lp('/building-glass-insulation'), label: isAr ? 'عزل زجاج مباني' : 'Building Glass Insulation', icon: '🏢', desc: isAr ? 'توفير 40% من فاتورة الكهرباء' : 'Save 40% on electricity bills' },
        { href: lp('/paint-protection-film-jeddah'), label: isAr ? 'حماية طلاء (PPF)' : 'Paint Protection Film', icon: '🛡️', desc: isAr ? 'حماية طلاء السيارة من الخدوش' : 'Protect your car paint from scratches' },
      ],
    },
    brands: {
      title: isAr ? 'وكالاتنا' : 'Our Brands',
      items: [
        { href: lp('/johnson-authorized-dealer'), label: isAr ? 'عازل جونسون' : 'Johnson Films', icon: '🇺🇸', desc: isAr ? 'وكيل معتمد — Supreme IR' : 'Authorized Dealer — Supreme IR' },
        { href: lp('/3m-authorized-dealer'), label: isAr ? 'عازل 3M' : '3M Films', icon: '🔴', desc: isAr ? 'وكيل معتمد — Crystalline' : 'Authorized Dealer — Crystalline' },
      ],
    },
    tools: [
      { href: lp('/calculator'), label: isAr ? 'حاسبة التكلفة' : 'Cost Calculator', icon: '🧮' },
      { href: lp('/gallery'), label: isAr ? 'أعمالنا' : 'Our Work', icon: '📸' },
      { href: lp('/blog'), label: isAr ? 'المدونة' : 'Blog', icon: '📝' },
    ],
    secondary: [
      { href: lp('/about'), label: isAr ? 'من نحن' : 'About', icon: 'ℹ️' },
      { href: lp('/faq'), label: isAr ? 'الأسئلة الشائعة' : 'FAQ', icon: '❓' },
      { href: lp('/contact'), label: isAr ? 'تواصل معنا' : 'Contact', icon: '📞' },
    ],
  };
}

/** Flat nav links for desktop (simplified) */
function getDesktopNav(locale: Locale) {
  const isAr = locale === 'ar';
  const lp = (path: string) => localePath(locale, path);
  return [
    { href: lp('/'), label: isAr ? 'الرئيسية' : 'Home' },
    { href: lp('/car-insulation-jeddah'), label: isAr ? 'تظليل سيارات' : 'Car Tinting' },
    { href: lp('/building-glass-insulation'), label: isAr ? 'عزل مباني' : 'Building Insulation' },
    { href: lp('/johnson-authorized-dealer'), label: isAr ? 'جونسون' : 'Johnson' },
    { href: lp('/3m-authorized-dealer'), label: '3M' },
    { href: lp('/calculator'), label: isAr ? 'الحاسبة' : 'Calculator' },
    { href: lp('/gallery'), label: isAr ? 'أعمالنا' : 'Gallery' },
    { href: lp('/blog'), label: isAr ? 'المدونة' : 'Blog' },
    { href: lp('/contact'), label: isAr ? 'تواصل' : 'Contact' },
  ];
}

export default function Header({ locale = 'ar' }: HeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const menuRef = useRef<HTMLElement>(null);
  const dict = getDictionary(locale);
  const desktopNav = getDesktopNav(locale);
  const groupedNav = getGroupedNav(locale);
  const whatsappLink = getWhatsAppLink(locale);
  const altLocale = getAlternateLocale(locale);
  const siteName = locale === 'ar' ? SITE_NAME : SITE_NAME_EN;
  const isAr = locale === 'ar';

  const currentPath = pathname ? pathname.replace(/^\/(ar|en)(\/|$)/, '/') : '/';
  const switchLangUrl = altLocale === 'ar'
    ? currentPath
    : `/en${currentPath === '/' ? '' : currentPath}`;

  /** Check if a nav link is active */
  const isActive = (href: string) => {
    const normalizedPathname = pathname || '/';
    if (href === '/' || href === '/en') {
      return normalizedPathname === href || normalizedPathname === `/${locale}`;
    }
    return normalizedPathname.startsWith(href);
  };

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

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setActiveGroup(null);
  }, []);

  const toggleMenu = useCallback(() => setMenuOpen(prev => !prev), []);

  const toggleGroup = useCallback((group: string) => {
    setActiveGroup(prev => prev === group ? null : group);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) closeMenu();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen, closeMenu]);

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          {/* Logo */}
          <Link href={localePath(locale, '/')} className={styles.logo} aria-label={siteName}>
            <Image
              src="/images/azelcore-logo.webp"
              alt={isAr ? 'عزل كور — تظليل وعزل حراري احترافي' : 'AzelCore — Professional Tinting & Insulation'}
              width={170}
              height={106}
              priority
              quality={60}
              sizes="170px"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.nav} aria-label={dict.header.ariaNavigation}>
            {/* Home */}
            <Link href={localePath(locale, '/')} className={`${styles.navLink} ${isActive(localePath(locale, '/')) ? styles.navLinkActive : ''}`}>
              {isAr ? 'الرئيسية' : 'Home'}
            </Link>

            {/* Services Dropdown */}
            <div className={styles.navDropdownGroup}>
              <button className={`${styles.navLink} ${styles.navDropdownTrigger} ${['/car-insulation-jeddah', '/building-glass-insulation', '/paint-protection-film-jeddah'].some(p => isActive(localePath(locale, p))) ? styles.navLinkActive : ''}`}>
                {groupedNav.services.title}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
              <div className={styles.navDropdownMenu}>
                {groupedNav.services.items.map((item) => (
                  <Link key={item.href} href={item.href} className={styles.navDropdownItem}>
                    <span className={styles.navDropdownIcon}>{item.icon}</span>
                    <div className={styles.navDropdownText}>
                      <span className={styles.navDropdownTitle}>{item.label}</span>
                      <span className={styles.navDropdownDesc}>{item.desc}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Brands Dropdown */}
            <div className={styles.navDropdownGroup}>
              <button className={`${styles.navLink} ${styles.navDropdownTrigger} ${['/johnson-authorized-dealer', '/3m-authorized-dealer'].some(p => isActive(localePath(locale, p))) ? styles.navLinkActive : ''}`}>
                {groupedNav.brands.title}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
              <div className={styles.navDropdownMenu}>
                {groupedNav.brands.items.map((item) => (
                  <Link key={item.href} href={item.href} className={styles.navDropdownItem}>
                    <span className={styles.navDropdownIcon}>{item.icon}</span>
                    <div className={styles.navDropdownText}>
                      <span className={styles.navDropdownTitle}>{item.label}</span>
                      <span className={styles.navDropdownDesc}>{item.desc}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Tools Dropdown */}
            <div className={styles.navDropdownGroup}>
              <button className={`${styles.navLink} ${styles.navDropdownTrigger} ${['/calculator', '/gallery', '/blog'].some(p => isActive(localePath(locale, p))) ? styles.navLinkActive : ''}`}>
                {isAr ? 'مصادر' : 'Resources'}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
              <div className={styles.navDropdownMenu}>
                {groupedNav.tools.map((item) => (
                  <Link key={item.href} href={item.href} className={`${styles.navDropdownItem} ${styles.navDropdownItemSimple}`}>
                    <span className={styles.navDropdownIcon}>{item.icon}</span>
                    <span className={styles.navDropdownTitle}>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <Link href={localePath(locale, '/contact')} className={`${styles.navLink} ${isActive(localePath(locale, '/contact')) ? styles.navLinkActive : ''}`}>
              {isAr ? 'تواصل معنا' : 'Contact'}
            </Link>
          </nav>

          {/* Actions */}
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
              <svg className={styles.langIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              {dict.langSwitcher.switchTo}
            </a>

            {/* WhatsApp CTA */}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.553 4.16 1.6 5.972L.052 23.65a.5.5 0 00.606.606l5.678-1.548A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.216-1.473l-.364-.218-3.776 1.03 1.03-3.776-.218-.364A9.94 9.94 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
              <span className={styles.ctaText}>{dict.common.whatsapp}</span>
            </a>

            {/* Phone CTA — Desktop Only */}
            <a href={`tel:${PHONE}`} className={styles.phoneBtn} aria-label={dict.common.callNow}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            </a>

            {/* Burger Menu */}
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

      {/* ═══ Mobile Drawer Menu ═══ */}
      <div className={`${styles.overlay} ${menuOpen ? styles.overlayVisible : ''}`} onClick={closeMenu} />
      <nav
        ref={menuRef}
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
        aria-label={isAr ? 'القائمة الجوال' : 'Mobile Menu'}
      >
        {/* Mobile Menu Header */}
        <div className={styles.mobileMenuHeader}>
          <Link href={localePath(locale, '/')} className={styles.mobileLogo} onClick={closeMenu}>
            <Image
              src="/images/azelcore-logo.webp"
              alt={siteName}
              width={130}
              height={82}
              quality={50}
              sizes="130px"
            />
          </Link>
          <button className={styles.closeBtn} onClick={closeMenu} aria-label={dict.header.closeMenu}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className={styles.mobileMenuContent}>
          {/* Home */}
          <Link href={localePath(locale, '/')} className={`${styles.mobileLink} ${isActive(localePath(locale, '/')) ? styles.mobileLinkActive : ''}`} onClick={closeMenu}>
            <span className={styles.mobileLinkIcon}>🏠</span>
            {isAr ? 'الرئيسية' : 'Home'}
          </Link>

          {/* Services Group */}
          <div className={styles.mobileGroup}>
            <button className={`${styles.mobileGroupTitle} ${activeGroup === 'services' ? styles.mobileGroupOpen : ''}`} onClick={() => toggleGroup('services')}>
              <span>{groupedNav.services.title}</span>
              <svg className={styles.chevron} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
            <div className={`${styles.mobileGroupItems} ${activeGroup === 'services' ? styles.mobileGroupItemsOpen : ''}`}>
              {groupedNav.services.items.map((item) => (
                <Link key={item.href} href={item.href} className={`${styles.mobileSubLink} ${isActive(item.href) ? styles.mobileLinkActive : ''}`} onClick={closeMenu}>
                  <span className={styles.mobileLinkIcon}>{item.icon}</span>
                  <div>
                    <span className={styles.mobileSubTitle}>{item.label}</span>
                    <span className={styles.mobileSubDesc}>{item.desc}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Brands Group */}
          <div className={styles.mobileGroup}>
            <button className={`${styles.mobileGroupTitle} ${activeGroup === 'brands' ? styles.mobileGroupOpen : ''}`} onClick={() => toggleGroup('brands')}>
              <span>{groupedNav.brands.title}</span>
              <svg className={styles.chevron} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
            <div className={`${styles.mobileGroupItems} ${activeGroup === 'brands' ? styles.mobileGroupItemsOpen : ''}`}>
              {groupedNav.brands.items.map((item) => (
                <Link key={item.href} href={item.href} className={`${styles.mobileSubLink} ${isActive(item.href) ? styles.mobileLinkActive : ''}`} onClick={closeMenu}>
                  <span className={styles.mobileLinkIcon}>{item.icon}</span>
                  <div>
                    <span className={styles.mobileSubTitle}>{item.label}</span>
                    <span className={styles.mobileSubDesc}>{item.desc}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className={styles.mobileDivider} />
          {groupedNav.tools.map((item) => (
            <Link key={item.href} href={item.href} className={`${styles.mobileLink} ${isActive(item.href) ? styles.mobileLinkActive : ''}`} onClick={closeMenu}>
              <span className={styles.mobileLinkIcon}>{item.icon}</span>
              {item.label}
            </Link>
          ))}

          {/* Secondary Links */}
          <div className={styles.mobileDivider} />
          {groupedNav.secondary.map((item) => (
            <Link key={item.href} href={item.href} className={`${styles.mobileLink} ${styles.mobileLinkSmall} ${isActive(item.href) ? styles.mobileLinkActive : ''}`} onClick={closeMenu}>
              <span className={styles.mobileLinkIcon}>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Footer */}
        <div className={styles.mobileMenuFooter}>
          {/* Language Switch */}
          <a
            href={switchLangUrl}
            className={styles.mobileLangSwitch}
            onClick={() => {
              document.cookie = `x-locale=${altLocale}; path=/; max-age=${60 * 60 * 24 * 365}; Secure; SameSite=Lax`;
              closeMenu();
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            {dict.langSwitcher.switchTo}
          </a>

          {/* CTA Buttons */}
          <div className={styles.mobileCtas}>
            <a href={`tel:${PHONE}`} className={styles.mobileCallBtn} onClick={closeMenu}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              {dict.common.callNow}
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.mobileCta} onClick={closeMenu}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.553 4.16 1.6 5.972L.052 23.65a.5.5 0 00.606.606l5.678-1.548A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
              {isAr ? 'واتساب' : 'WhatsApp'}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

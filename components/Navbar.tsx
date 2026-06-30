"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useState } from "react";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  const isHomeStyleNav = pathname === "/" || pathname.startsWith("/projects");

  const shell = isHomeStyleNav
    ? "border-b border-white/10 bg-black/30 backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-black/20"
    : "border-b border-neutral-200/70 bg-white/75 backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-white/65";

  const navLinkBold = isHomeStyleNav
    ? "font-headline text-sm font-bold tracking-tight text-white md:text-base"
    : "font-headline text-sm font-bold tracking-tight text-neutral-900 md:text-base";

  const navLinkMuted = isHomeStyleNav
    ? "font-headline text-sm font-normal tracking-tight text-white/80 transition-colors hover:text-white md:text-base"
    : "font-headline text-sm font-normal tracking-tight text-neutral-500 transition-colors hover:text-neutral-900 md:text-base";

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen, closeMenu]);

  const panelSurface = isHomeStyleNav
    ? "border border-white/15 bg-black/90 shadow-2xl shadow-black/50 backdrop-blur-xl"
    : "border border-neutral-200/80 bg-white/95 shadow-xl backdrop-blur-xl";

  const mobileLinkBase =
    "block w-full px-4 py-3.5 text-center font-headline text-base transition-colors";

  const mobileLinkHome = isHomeStyleNav
    ? `${mobileLinkBase} font-bold text-white hover:bg-white/10`
    : `${mobileLinkBase} font-bold text-neutral-900 hover:bg-neutral-100`;

  const mobileLinkMuted = isHomeStyleNav
    ? `${mobileLinkBase} text-white/90 hover:bg-white/10 hover:text-white`
    : `${mobileLinkBase} text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900`;

  const handleHomeClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (pathname === "/") {
        e.preventDefault();
        scrollToTop();
      }
    },
    [pathname],
  );

  return (
    <nav className={`fixed top-0 z-50 w-full ${shell}`}>
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6 md:h-[4.5rem] md:px-8">
        <Link
          className={`shrink-0 font-headline text-lg font-bold tracking-tight md:text-xl ${isHomeStyleNav ? "text-white" : "text-neutral-900"}`}
          href="/"
          onClick={handleHomeClick}
        >
          Matheus Cobel
        </Link>

        <div className="hidden items-center gap-5 md:flex md:gap-8">
          <Link className={navLinkBold} href="/" onClick={handleHomeClick}>
            Home
          </Link>
          <Link className={navLinkMuted} href="/projects">
            Projetos
          </Link>
          <Link
            className="shrink-0 rounded-full bg-[#093A7E] px-4 py-2 text-center font-headline text-sm font-medium text-white transition-colors hover:bg-[#5C91B0] active:scale-[0.98] md:px-6 md:py-2.5"
            href="/#contact"
          >
            Fale Comigo
          </Link>
        </div>

        <div className="relative md:hidden">
          <button
            type="button"
            className={`flex size-10 items-center justify-center rounded-lg outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
              isHomeStyleNav
                ? "focus-visible:ring-white/50 focus-visible:ring-offset-black/0"
                : "focus-visible:ring-neutral-800/40 focus-visible:ring-offset-white/0"
            }`}
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <img
              src="/icons/list-bold.svg"
              alt=""
              width={28}
              height={28}
              className={`size-7 ${isHomeStyleNav ? "brightness-0 invert" : ""}`}
            />
          </button>

          {menuOpen ? (
            <>
              <div
                className={`fixed inset-x-0 top-16 z-40 h-[calc(100dvh-4rem)] md:hidden ${
                  isHomeStyleNav ? "bg-black/45" : "bg-neutral-900/30"
                }`}
                aria-hidden
                onClick={closeMenu}
              />
              <div
                id={menuId}
                role="menu"
                aria-orientation="vertical"
                className={`absolute right-0 z-50 mt-2 w-[min(100vw-2rem,16rem)] overflow-hidden rounded-xl py-2 ${panelSurface}`}
              >
                <Link
                  role="menuitem"
                  className={mobileLinkHome}
                  href="/"
                  onClick={(e) => {
                    handleHomeClick(e);
                    closeMenu();
                  }}
                >
                  Home
                </Link>
                <Link
                  role="menuitem"
                  className={mobileLinkMuted}
                  href="/projects"
                  onClick={closeMenu}
                >
                  Projetos
                </Link>
                <div className="px-3 pb-1 pt-2">
                  <Link
                    role="menuitem"
                    className="block w-full rounded-full bg-[#093A7E] py-3 text-center font-headline text-sm font-medium text-white transition-colors hover:bg-[#5C91B0]"
                    href="/#contact"
                    onClick={closeMenu}
                  >
                    Fale Comigo
                  </Link>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </nav>
  );
}

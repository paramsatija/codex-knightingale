"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navItems } from "@/lib/content";
import { cn } from "@/lib/utils";

function KnightingaleWordmark() {
  return (
    <Link href="/" className="inline-flex items-center gap-2" aria-label="Knightingale home">
      <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-sapphire via-lilac to-mint text-sm font-bold text-white shadow-float">
        K
      </span>
      <span className="font-heading text-lg font-semibold tracking-tight text-navy">Knightingale</span>
    </Link>
  );
}

export function PremiumNav() {
  const pathname = usePathname();
  const [compressed, setCompressed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompressed(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-4 z-50">
      <div
        className={cn(
          "container-shell transition-all duration-500 ease-premium",
          compressed ? "max-w-[1120px]" : "max-w-[1200px]"
        )}
      >
        <nav
          className={cn(
            "glass-card relative rounded-full px-4 transition-all duration-500 ease-premium",
            compressed ? "py-2 shadow-float" : "py-3"
          )}
        >
          <div className="flex items-center justify-between gap-4">
            <KnightingaleWordmark />
            <ul className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "rounded-full px-4 py-2 text-sm transition-colors",
                        active ? "bg-sapphire/12 font-semibold text-sapphire" : "text-navy/75 hover:text-navy"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="hidden lg:block">
              <Link
                href="/early-access"
                className="inline-flex rounded-full bg-gradient-to-r from-sapphire/90 via-lilac/85 to-mint/85 px-5 py-2.5 text-sm font-semibold text-white shadow-float transition duration-500 hover:brightness-110"
              >
                Book Demo
              </Link>
            </div>
            <button
              className="grid h-10 w-10 place-items-center rounded-full border border-white/70 bg-white/60 text-navy lg:hidden"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <div
            className={cn(
              "grid overflow-hidden transition-all duration-500 ease-premium lg:hidden",
              mobileOpen ? "mt-3 max-h-[420px] opacity-100" : "max-h-0 opacity-0"
            )}
          >
            <ul className="grid gap-2 rounded-3xl border border-white/70 bg-white/65 p-3 backdrop-blur-xl">
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block rounded-2xl px-4 py-3 text-sm",
                        active ? "bg-sapphire/12 font-semibold text-sapphire" : "text-navy/80"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link
                  href="/early-access"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-2xl bg-gradient-to-r from-sapphire via-lilac to-mint px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Request Early Access
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

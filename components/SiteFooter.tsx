import Link from "next/link";

const footerColumns = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" }
  ],
  Conversion: [
    { label: "Join Waitlist", href: "/early-access" },
    { label: "Book Demo", href: "/early-access" },
    { label: "Contact Sales", href: "/contact" }
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Features", href: "/features" },
    { label: "Contact", href: "/contact" }
  ],
  Contact: [
    { label: "hello@knightingale.ai", href: "mailto:hello@knightingale.ai" },
    { label: "Chicago, Illinois", href: "/contact" }
  ]
};

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-white/70 bg-white/70 backdrop-blur-xl">
      <div className="container-shell py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(footerColumns).map(([group, items]) => (
            <section key={group}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-navy/60">{group}</h3>
              <ul className="mt-4 grid gap-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-navy/80 transition hover:text-navy">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-navy/10 pt-6 text-sm text-navy/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Knightingale. All rights reserved.</p>
          <p>Chicago, Illinois · Privacy · Terms · Join Waitlist</p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";

export function StickyWaitlistCTA() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 px-4">
      <div className="mx-auto flex w-full max-w-[980px] justify-end">
        <Link
          href="/early-access"
          className="cta-heavy pointer-events-auto inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sapphire via-lilac to-mint px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_44px_rgba(63,109,255,0.34)] transition duration-500 hover:-translate-y-0.5 hover:brightness-110"
        >
          Join Waitlist
        </Link>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] max-w-4xl">
          The Right People
          <br />
          <span className="text-[#C9A84C]">Change Everything</span>
        </h1>
        <p className="mt-6 text-base sm:text-lg text-[#F5F5F5]/60 max-w-2xl leading-relaxed">
          I connect Lagos tech and fintech companies with exceptional talent
          &mdash; and help ambitious professionals find their next opportunity.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-[#C9A84C] text-[#0A0A0A] font-medium rounded-sm transition-all duration-200 hover:bg-[#C9A84C]/90"
          >
            I&apos;m Hiring
          </Link>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 border border-[#C9A84C] text-[#C9A84C] font-medium rounded-sm transition-all duration-200 hover:bg-[#C9A84C]/10"
          >
            I&apos;m Looking
          </Link>
        </div>
        <div className="mt-16 h-0.5 w-0 animate-gold-divider bg-[#C9A84C]" />
        <div className="mt-24 w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-[#141414] border border-white/5 rounded-sm p-6 text-left">
            <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-[#F5F5F5]">Fast Turnaround</h3>
            <p className="mt-2 text-sm text-[#F5F5F5]/50 leading-relaxed">
              Quality candidates delivered in days, not months.
            </p>
          </div>
          <div className="bg-[#141414] border border-white/5 rounded-sm p-6 text-left">
            <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-[#F5F5F5]">Vetted Candidates</h3>
            <p className="mt-2 text-sm text-[#F5F5F5]/50 leading-relaxed">
              Pre-screened professionals who are ready to contribute.
            </p>
          </div>
          <div className="bg-[#141414] border border-white/5 rounded-sm p-6 text-left">
            <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 7l-9-5 9-5 9 5-9 5zm0-7l-9-5 9-5 9 5-9 5z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-[#F5F5F5]">Zero Upfront Cost</h3>
            <p className="mt-2 text-sm text-[#F5F5F5]/50 leading-relaxed">
              You only pay when the right person starts working.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

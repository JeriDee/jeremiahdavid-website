export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="bg-[#141414] border border-white/5 rounded-sm overflow-hidden">
          <img
            src="/photo.jpg"
            alt="Jeremiah David"
            className="w-full h-auto object-cover block"
          />
        </div>
        <div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Who I Am
          </h1>
          <p className="mt-6 text-base text-[#F5F5F5]/60 leading-relaxed">
            My name is Jeremiah David. I&apos;m a Lagos-based business
            professional who has spent the last few years building companies,
            working in real estate, and developing a deep understanding of how
            businesses grow &mdash; and what they need to grow faster.
          </p>
          <p className="mt-4 text-base text-[#F5F5F5]/60 leading-relaxed">
            One thing I kept noticing: great companies lose months searching for
            the right people. And great people lose months waiting for the right
            opportunity. I decided to be the bridge.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-[#141414] border border-white/5 rounded-sm p-5 text-center">
              <p className="text-[#C9A84C] text-sm font-medium uppercase tracking-widest">
                Lagos-Based
              </p>
            </div>
            <div className="bg-[#141414] border border-white/5 rounded-sm p-5 text-center">
              <p className="text-[#C9A84C] text-sm font-medium uppercase tracking-widest">
                Tech &amp; Fintech Focus
              </p>
            </div>
            <div className="bg-[#141414] border border-white/5 rounded-sm p-5 text-center">
              <p className="text-[#C9A84C] text-sm font-medium uppercase tracking-widest">
                Success-Only Basis
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

const companyList = [
  "Role briefing call",
  "Candidate search and screening",
  "2-3 shortlisted candidates presented",
  "Interview facilitation",
  "15% placement fee on hire",
];

const candidateList = [
  "CV and profile review",
  "Matched to relevant openings",
  "Interview preparation",
  "Salary negotiation support",
  "Completely free for candidates",
];

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#141414] border border-white/5 rounded-sm p-8 sm:p-10">
          <h2 className="text-2xl font-semibold text-[#C9A84C]">For Companies</h2>
          <p className="mt-3 text-[#F5F5F5]/60 text-sm leading-relaxed">
            I find you the right hire. You pay nothing until they start.
          </p>
          <ul className="mt-6 space-y-3">
            {companyList.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-[#F5F5F5]/70">
                <svg className="w-4 h-4 text-[#C9A84C] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#141414] border border-white/5 rounded-sm p-8 sm:p-10">
          <h2 className="text-2xl font-semibold text-[#C9A84C]">For Candidates</h2>
          <p className="mt-3 text-[#F5F5F5]/60 text-sm leading-relaxed">
            I represent you to the right companies.
          </p>
          <ul className="mt-6 space-y-3">
            {candidateList.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-[#F5F5F5]/70">
                <svg className="w-4 h-4 text-[#C9A84C] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-12 text-center">
        <Link
          href="/contact"
          className="inline-block px-10 py-3 bg-[#C9A84C] text-[#0A0A0A] font-medium rounded-sm transition-all duration-200 hover:bg-[#C9A84C]/90"
        >
          Let&apos;s Talk
        </Link>
      </div>
    </div>
  );
}

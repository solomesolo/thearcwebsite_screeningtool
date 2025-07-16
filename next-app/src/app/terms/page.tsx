import Link from "next/link";

export default function Terms() {
  return (
    <aside className="fixed top-0 right-0 h-screen w-full sm:w-[600px] bg-black text-white z-50 shadow-2xl flex flex-col items-center px-4 py-8 sm:px-8 sm:py-16 animate-slide-in max-h-screen overflow-y-auto font-montserrat custom-scrollbar">
      <Link href="/" className="absolute top-6 right-8 text-3xl text-gray-400 hover:text-fuchsia-400 transition-colors" aria-label="Close Terms">&times;</Link>
      <div className="w-full max-w-2xl flex flex-col items-start font-montserrat">
        <h1 className="text-3xl font-bold mb-6 font-montserrat">Terms and Conditions</h1>
        <p className="mb-4 text-sm text-gray-400">Effective Date: 1st July, 2025</p>
        <div className="text-base md:text-sm text-gray-200">
          <p className="mb-4">This site is operated as an informational and early-access platform for a private health and longevity initiative.</p>
          <p className="mb-4">By using this website or submitting your information, you agree to the following:</p>
          <h2 className="text-xl font-semibold mt-6 mb-2 font-montserrat">Content is Informational Only</h2>
          <p className="mb-4">The material on this page does not constitute medical advice or diagnosis. Any program described is subject to change before launch.</p>
          <h2 className="text-xl font-semibold mt-6 mb-2 font-montserrat">Waitlist Is Non-Binding</h2>
          <p className="mb-4">Submitting your email or applying for the program does not guarantee entry. Access is limited and subject to a selection process.</p>
          <h2 className="text-xl font-semibold mt-6 mb-2 font-montserrat">Intellectual Property</h2>
          <p className="mb-4">All content, wording, and design elements on this site are the intellectual property of the program founders and may not be reproduced or used without written permission.</p>
          <h2 className="text-xl font-semibold mt-6 mb-2 font-montserrat">Data Use</h2>
          <p className="mb-4">Your personal data will be handled in accordance with the Privacy Policy listed above.</p>
          <h2 className="text-xl font-semibold mt-6 mb-2 font-montserrat">Program Terms May Vary</h2>
          <p className="mb-4">Final details of the program, including pricing, access, and availability, will be provided upon invitation. This site serves only as a preview and interest-gathering tool.</p>
          <p className="mb-4">If you do not agree with these terms, please do not use this site or submit personal information.</p>
          <p className="mb-8">For questions or concerns, you may reach us at: <a href="mailto:thearc@thearcme.com" className="text-fuchsia-400 underline">thearc@thearcme.com</a></p>
        </div>
      </div>
    </aside>
  );
} 
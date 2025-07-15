import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <aside className="fixed top-0 right-0 h-screen w-full sm:w-[600px] bg-black text-white z-50 shadow-2xl flex flex-col items-center justify-center px-4 py-8 sm:px-8 sm:py-16 animate-slide-in max-h-screen overflow-y-auto font-montserrat">
      <Link href="/" className="absolute top-6 right-8 text-3xl text-gray-400 hover:text-fuchsia-400 transition-colors" aria-label="Close Privacy Policy">&times;</Link>
      <div className="w-full max-w-2xl flex flex-col items-start">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4 text-sm text-gray-400">Effective Date: 1st July, 2025</p>
        <p className="mb-4">This site respects your privacy — quietly and completely.</p>
        <p className="mb-4">When you join the waitlist, only your name, email, and any optional answers you provide are collected. This information is used solely to contact you about the upcoming program, provide early access, or share occasional updates related to the initiative.</p>
        <p className="mb-4">Your data will never be sold, shared, or used outside the context of this project. All information is securely stored, and access is limited to necessary administrative functions.</p>
        <p className="mb-4">You may request access to, update, or delete your data at any time by contacting us at <a href="mailto:thearc@thearcme.com" className="text-fuchsia-400 underline">thearc@thearcme.com</a>.</p>
        <p className="mb-8">By entering your information, you consent to receive limited and relevant communication from us about this program.</p>
      </div>
    </aside>
  );
} 
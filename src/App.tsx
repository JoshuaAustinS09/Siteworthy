export default function App() {
  return (
    <div className="min-h-screen bg-brand-white text-brand-navy flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-xl mx-auto space-y-4">
        <span className="text-sm font-semibold tracking-wider text-brand-blue uppercase bg-brand-gray px-3 py-1 rounded-full">
          Siteworthy Studio
        </span>
        <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-brand-navy leading-tight">
          Your Business Deserves a Better Website.
        </h1>
        <p className="font-body text-gray-600 text-lg">
          We create modern, professional, and accessible websites that help businesses grow.
        </p>
        <div className="pt-4 flex items-center justify-center gap-4">
          <button className="bg-brand-blue hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            Get a Free Consultation
          </button>
          <button className="border border-brand-navy/20 hover:border-brand-navy text-brand-navy font-semibold px-6 py-3 rounded-lg transition-colors">
            Explore Our Work
          </button>
        </div>
      </div>
    </div>
  );
}

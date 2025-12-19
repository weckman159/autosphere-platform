import Link from 'next/link';

export default function LegalPage() {
  return (
    <div className="bg-[#101010] text-[#F5F5F5] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-center">Rechtliches</h1>
        </header>
        <section className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg">
          <ul className="space-y-4">
            <li>
              <Link href="/legal/terms" className="text-xl font-semibold text-[#F5F5F5] hover:text-blue-500">
                Nutzungsbedingungen
              </Link>
            </li>
            <li>
              <Link href="/legal/privacy" className="text-xl font-semibold text-[#F5F5F5] hover:text-blue-500">
                Datenschutzerklärung
              </Link>
            </li>
            <li>
              <Link href="/legal/impressum" className="text-xl font-semibold text-[#F5F5F5] hover:text-blue-500">
                Impressum
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

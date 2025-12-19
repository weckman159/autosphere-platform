export default function TermsPage() {
  return (
    <div className="bg-[#101010] text-[#F5F5F5] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-center">Nutzungsbedingungen</h1>
        </header>
        <section className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">1. Geltungsbereich</h2>
          <p className="mb-4">
            Diese Nutzungsbedingungen regeln die Nutzung der Plattform carmeet.com.
          </p>
          <h2 className="text-2xl font-semibold mb-4">2. Leistungen</h2>
          <p className="mb-4">
            carmeet.com ist eine Plattform, auf der Nutzer Events erstellen, an Events teilnehmen, sich in Communities austauschen und Fahrzeuge auf einem Marktplatz an- und verkaufen können.
          </p>
          <h2 className="text-2xl font-semibold mb-4">3. Pflichten der Nutzer</h2>
          <p className="mb-4">
            Nutzer sind verpflichtet, bei der Nutzung der Plattform geltendes Recht zu achten.
          </p>
        </section>
      </div>
    </div>
  );
}

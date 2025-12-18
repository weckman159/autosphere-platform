export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-[#F5F5F5] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-[#00C2A8]">Nutzungsbedingungen / Terms of Service</h1>
        
        <section className="space-y-8 text-[#B0B0B0] leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold text-[#F5F5F5] mb-4">1. Geltungsbereich</h2>
            <p>Diese Nutzungsbedingungen gelten für die Nutzung der AutoSphere Plattform.</p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-[#F5F5F5] mb-4">2. Registrierung und Nutzerkonten</h2>
            <p>Um AutoSphere vollständig nutzen zu können, ist eine Registrierung erforderlich.</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>User: 5 Fotos pro Fahrzeug</li>
              <li>Premium: 10 Fotos, erweiterte Funktionen</li>
              <li>Firm: 20 Fotos, Unternehmens-Features</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-[#F5F5F5] mb-4">3. Inhalte und geistiges Eigentum</h2>
            <p>Sie behalten alle Rechte an Ihren hochgeladenen Inhalten. AutoSphere erhält eine nicht-exklusive Lizenz zur Anzeige.</p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-[#F5F5F5] mb-4">4. Verbotene Aktivitäten</h2>
            <p>Missbrauch, Spam, illegale Inhalte und Verletzung von Rechten Dritter sind untersagt.</p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-[#F5F5F5] mb-4">5. Haftungsbeschränkung</h2>
            <p>AutoSphere haftet nur für Vorsatz und grobe Fahrlässigkeit.</p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-[#F5F5F5] mb-4">6. Kontakt</h2>
            <p>Bei Fragen zu den Nutzungsbedingungen: legal@autosphere.com</p>
          </div>
        </section>
      </div>
    </div>
  );
}

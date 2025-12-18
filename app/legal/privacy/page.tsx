export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-[#F5F5F5] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-[#00C2A8]">Datenschutzerklärung / Privacy Policy</h1>
        
        <section className="space-y-8 text-[#B0B0B0] leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold text-[#F5F5F5] mb-4">1. Datenschutz auf einen Blick</h2>
            <p className="mb-3">Diese Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen.</p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-[#F5F5F5] mb-4">2. Erhebung und Speicherung personenbezogener Daten</h2>
            <p>Wir erheben folgende Daten:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Name, E-Mail-Adresse bei Registrierung</li>
              <li>Fahrzeugdaten (Marke, Modell, HSN/TSN)</li>
              <li>Hochgeladene Bilder (Vercel Blob Storage)</li>
              <li>Nutzungsdaten (Supabase Analytics)</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-[#F5F5F5] mb-4">3. Cookies und Tracking</h2>
            <p>Wir verwenden essenzielle Cookies für Authentifizierung (Supabase Auth).</p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-[#F5F5F5] mb-4">4. Ihre Rechte</h2>
            <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Datenübertragbarkeit gemäß DSGVO.</p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-[#F5F5F5] mb-4">5. Kontakt</h2>
            <p>Bei Fragen zum Datenschutz: privacy@autosphere.com</p>
          </div>
        </section>
      </div>
    </div>
  );
}

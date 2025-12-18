export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-[#F5F5F5] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-[#00C2A8]">Impressum</h1>
        
        <section className="space-y-6 text-[#B0B0B0] leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold text-[#F5F5F5] mb-3">Angaben gemäß § 5 TMG</h2>
            <p>AutoSphere GmbH</p>
            <p>Musterstraße 123</p>
            <p>12345 Berlin</p>
            <p>Deutschland</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-[#F5F5F5] mb-2">Vertreten durch</h3>
            <p>Geschäftsführer: Max Mustermann</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-[#F5F5F5] mb-2">Kontakt</h3>
            <p>E-Mail: legal@autosphere.com</p>
            <p>Telefon: +49 (0) 30 12345678</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-[#F5F5F5] mb-2">Registereintrag</h3>
            <p>Handelsregister: HRB 123456</p>
            <p>Registergericht: Amtsgericht Berlin</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-[#F5F5F5] mb-2">Umsatzsteuer-ID</h3>
            <p>USt-IdNr.: DE123456789</p>
          </div>
        </section>
      </div>
    </div>
  );
}

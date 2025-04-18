// src/app/pricing/page.tsx
export default function PricingPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Nos Offres</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Plan gratuit */}
        <div className="border rounded-2xl p-6 shadow-sm bg-white">
          <h2 className="text-xl font-semibold">Gratuit</h2>
          <p className="text-gray-600 mb-4">Idéal pour découvrir.</p>
          <p className="text-2xl font-bold">0€</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>✔️ 1 CV en ligne</li>
            <li>✔️ Export PDF</li>
            <li>❌ Modèles premium</li>
          </ul>
        </div>

        {/* Plan Pro */}
        <div className="border rounded-2xl p-6 shadow-md bg-white">
          <h2 className="text-xl font-semibold">Pro</h2>
          <p className="text-gray-600 mb-4">Pour les chercheurs d'emploi sérieux.</p>
          <p className="text-2xl font-bold">9€/mois</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>✔️ 5 CVs actifs</li>
            <li>✔️ Modèles premium</li>
            <li>✔️ Analyse de CV avec IA</li>
          </ul>
        </div>

        {/* Plan Entreprise */}
        <div className="border rounded-2xl p-6 shadow-md bg-white">
          <h2 className="text-xl font-semibold">Entreprise</h2>
          <p className="text-gray-600 mb-4">Pour les recruteurs ou cabinets RH.</p>
          <p className="text-2xl font-bold">29€/mois</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>✔️ Nombre illimité de CVs</li>
            <li>✔️ Collaboration en équipe</li>
            <li>✔️ Export JSON/API</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">Nos Tarifs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            title: "Gratuit",
            price: "0€",
            features: ["Créer un CV", "Utiliser des modèles", "Sauvegarder en ligne"],
            button: "Commencer",
          },
          {
            title: "Pro",
            price: "9€ / mois",
            features: ["Toutes les fonctions gratuites", "Téléchargement PDF", "CV illimités", "Support prioritaire"],
            button: "Passer Pro",
          },
          {
            title: "Entreprise",
            price: "Sur devis",
            features: ["Pro +", "Accès multi-utilisateur", "Support dédié", "Intégration API"],
            button: "Nous contacter",
          },
        ].map((plan) => (
          <div key={plan.title} className="border p-6 rounded-xl shadow-sm text-center">
            <h2 className="text-2xl font-semibold mb-4">{plan.title}</h2>
            <p className="text-3xl font-bold mb-4">{plan.price}</p>
            <ul className="text-gray-600 mb-6 space-y-2">
              {plan.features.map((f) => (
                <li key={f}>✓ {f}</li>
              ))}
            </ul>
            <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

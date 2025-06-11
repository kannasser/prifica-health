// src/app/page.tsx
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-white text-black">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Bienvenue sur Prifica Health 🚑
      </h1>
      <p className="text-lg text-center max-w-2xl mb-10">
        Plateforme marocaine innovante pour accéder à des soins médicaux de qualité sans avance de frais.
        Connectez-vous aux meilleurs professionnels de santé et bénéficiez du soutien de votre assurance.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="/services"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Explorer les services
        </a>
        <a
          href="/about"
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
        >
          En savoir plus
        </a>
      </div>
    </main>
  );
}

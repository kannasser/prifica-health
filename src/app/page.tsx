import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-6 py-12">
      <header className="max-w-4xl text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Bienvenue sur Prifica Health
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Votre plateforme de santé digitale — connectez patients, prestataires et assurances en toute simplicité.
        </p>
      </header>

      <div className="flex flex-col sm:flex-row gap-6 items-center max-w-4xl w-full">
        <div className="flex flex-col gap-4 sm:w-1/2">
          <Link href="/signup">
            <a className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-md text-center hover:bg-blue-700 transition">
              S'inscrire
            </a>
          </Link>
          <Link href="/login">
            <a className="border border-blue-600 text-blue-600 font-semibold py-3 px-6 rounded-md text-center hover:bg-blue-100 transition">
              Se connecter
            </a>
          </Link>
        </div>

        <div className="sm:w-1/2">
          <Image
            src="/healthcare-illustration.png"
            alt="Illustration santé"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    </main>
  );
}

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-bold text-dark mb-6">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/ru"
          className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors font-semibold"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}


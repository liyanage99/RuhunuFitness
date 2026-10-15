import Link from "next/link";
export default function NotFound() {
  return (
    <section className="container-x flex min-h-[80vh] flex-col items-start justify-center">
      <h1 className="heading text-8xl">404</h1>
      <p className="mt-4 text-lg text-white/70">This page could not be found.</p>
      <Link href="/" className="btn-primary mt-8">Back to home</Link>
    </section>
  );
}

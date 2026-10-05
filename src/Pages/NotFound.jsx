import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <p className="text-7xl font-extrabold text-amber-400">404</p>
      <h1 className="mt-4 text-2xl font-bold text-white">Page not found</h1>
      <p className="mt-2 text-zinc-400">
        The page you’re looking for doesn’t exist or was moved.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-xl bg-amber-400 px-5 py-2.5 font-semibold text-zinc-950 transition hover:bg-amber-300"
      >
        Back to home
      </Link>
    </section>
  );
}

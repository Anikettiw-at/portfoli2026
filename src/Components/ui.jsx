export function Page({ eyebrow, title, subtitle, children }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      {title && (
        <header className="mb-10 sm:mb-12">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h1>
          {subtitle && <p className="mt-3 max-w-2xl text-zinc-400">{subtitle}</p>}
        </header>
      )}
      {children}
    </section>
  );
}

export function Card({ as: Component = "div", className = "", children, ...props }) {
  return (
    <Component
      className={`rounded-2xl border border-white/10 bg-zinc-900/60 p-6 shadow-lg shadow-black/20 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export function SubHeading({ children, className = "" }) {
  return (
    <h2 className={`mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400 ${className}`}>
      {children}
    </h2>
  );
}

export function Tag({ children, subtle = false }) {
  return (
    <span
      className={
        subtle
          ? "rounded-md bg-white/5 px-2.5 py-0.5 text-xs text-zinc-400"
          : "rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
      }
    >
      {children}
    </span>
  );
}

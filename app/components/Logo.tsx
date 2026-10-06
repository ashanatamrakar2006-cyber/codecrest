export default function Logo({ size = "md" }: { size?: "md" | "lg" }) {
  const box = size === "lg" ? "h-12 w-12 rounded-2xl" : "h-10 w-10 rounded-xl";
  const text = size === "lg" ? "text-3xl" : "text-2xl";

  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        className={`flex items-center justify-center bg-li... from-brand to-brand-dark shadow-md shadow-brand/30 ${box}`}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="3,19 9.5,6 14,13 16.5,9.5 21,19" />
        </svg>
      </span>
      <span
        className={`bg-li.... from-brand-ink to-brand bg-clip-text font-extrabold tracking-tight text-transparent ${text}`}
      >
        Codecrest
      </span>
    </span>
  );
}
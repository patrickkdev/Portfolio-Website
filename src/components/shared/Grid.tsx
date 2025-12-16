// Bento-style feature section
export default function Grid({
  children,
}: {
  children: React.ReactNode[]
}) {
  return (
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
}
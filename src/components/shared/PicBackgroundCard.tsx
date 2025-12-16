export default function PicBackgroundCard({
  name,
  description,
  image,
}: {
  name: string;
  description?: string;
  image: string;
}) {
  return (
    <div className="relative min-h-[300px] overflow-hidden rounded-xl shadow-md">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />

      {/* Gloss and Dark Gradient Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/100" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-20 mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end px-4 py-4 text-white">
        <h4 className="text-xl font-semibold">{name}</h4>
        {description && <p className="mt-1 text-sm text-gray-200">{description}</p>}
      </div>
    </div>
  );
}

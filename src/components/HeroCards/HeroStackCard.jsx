// components/HeroStackCard.jsx

const HeroStackCard = ({
  index,
  title,
  subtitle,
  description,
  image,
}) => {
  return (
    <div
      className="
        relative w-full h-full rounded-2xl overflow-hidden
        bg-white/10 border border-white/20
        backdrop-blur-sm shadow-2xl
        will-change-transform
      "
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        loading="lazy"
        decoding="async"
        width={640}
        height={900}
        className="
          absolute inset-0 w-full h-full
          object-cover opacity-60
          pointer-events-none
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6 gap-3 text-text-primary">
        <h2 className="text-2xl font-bold leading-tight">
          {title}
        </h2>

        <h3 className="text-sm text-indigo-300 font-mono">
          {subtitle}
        </h3>

        <p className="text-sm text-text-secondary font-mono leading-relaxed">
          {description}
        </p>

        <div className="h-1 w-16 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full mt-2" />
      </div>
    </div>
  );
};

export default HeroStackCard;

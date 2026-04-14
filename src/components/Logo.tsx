import { Settings } from "lucide-react";

interface LogoProps {
  size?: "small" | "medium" | "large";
  variant?: "dark" | "light";
  className?: string;
}

export default function Logo({
  size = "medium",
  variant = "dark",
  className = "",
}: LogoProps) {
  const sizes = {
    small: { icon: 24, text: "1.5rem" },
    medium: { icon: 40, text: "2.5rem" },
    large: { icon: 64, text: "4rem" },
  };

  const colors = {
    dark: { primary: "#2c4a6e", secondary: "#1a2f4d" },
    light: { primary: "#ffffff", secondary: "#e2e8f0" },
  };

  const currentSize = sizes[size];
  const currentColor = colors[variant];

  return (
    <div className={`flex flex-col items-center gap-3 sm:gap-4 ${className}`}>
      <div className="flex items-center gap-2 sm:gap-3">
        <Settings
          className="animate-[spin_20s_linear_infinite]"
          style={{
            width: size === "small" ? 20 : size === "medium" ? 32 : 48,
            height: size === "small" ? 20 : size === "medium" ? 32 : 48,
            color: currentColor.primary,
          }}
        />
        <div
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize:
              size === "small"
                ? "1.25rem"
                : size === "medium"
                  ? "clamp(1.75rem, 5vw, 2.5rem)"
                  : "clamp(2.5rem, 8vw, 4rem)",
            fontWeight: 800,
            color: currentColor.primary,
            letterSpacing: "-0.02em",
          }}
        >
          Romatec
        </div>
      </div>
      <div
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize:
            size === "large"
              ? "clamp(0.875rem, 3vw, 1.125rem)"
              : size === "medium"
                ? "clamp(0.75rem, 2.5vw, 0.875rem)"
                : "0.75rem",
          fontWeight: 500,
          color: currentColor.secondary,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        Assistência Técnica
      </div>
    </div>
  );
}

export const designTokens = {
  colors: { primary: "#1E4D3A", accent: "#D9A83A", maroon: "#8A1C3C", background: "#FFF8EC", surface: "#FFFFFF", text: "#1B2A22" },
  spacing: [8, 16, 24, 32, 48, 64, 96],
  radius: { button: 12, card: 14, pill: 999 },
  shadow: "0 6px 24px rgba(30, 77, 58, 0.10)",
  hoverShadow: "0 12px 32px rgba(30, 77, 58, 0.16)",
  motion: { fast: "150ms", standard: "200ms", slow: "300ms" }
} as const;

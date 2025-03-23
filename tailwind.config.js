const { fontFamily } = require("tailwindcss/defaultTheme")
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        b2b: {
          primary: "#FFD93B", // Yellow as primary color
          secondary: "#E5C235", // Slightly darker yellow for secondary elements
          accent: "#FFDF5D", // Lighter yellow for accents
          yellow: {
            50: "#FFFAEB",
            100: "#FFF5D6",
            200: "#FFEDB8",
            300: "#FFE699", 
            400: "#FFDD6D",
            500: "#FFD93B", // Base yellow
            600: "#E5C235", // Darker for better contrast
            700: "#BF9F2D",
            800: "#997F24",
            900: "#735E1B",
          },
          dark: {
            primary: "#111111", // Near black for contrast with yellow
            secondary: "#222222", // Dark gray for secondary elements
            tertiary: "#333333", // Medium gray for tertiary elements
          },
          success: "#10B981", // Green for success states
          warning: "#F59E0B", // Amber for warnings
          danger: "#EF4444", // Red for danger/error
          gray: {
            50: "#F9FAFB",
            100: "#F3F4F6",
            200: "#E5E7EB",
            300: "#D1D5DB",
            400: "#9CA3AF",
            500: "#6B7280",
            600: "#4B5563",
            700: "#374151",
            800: "#1F2937",
            900: "#111827",
          },
        },
        // Direct color access
        "b2b-primary": "#FFD93B", // Yellow primary color
        "b2b-secondary": "#E5C235", // Darker yellow for hover states
        "b2b-accent": "#FFDF5D", // Lighter yellow accent
        "b2b-yellow-50": "#FFFAEB",
        "b2b-yellow-100": "#FFF5D6",
        "b2b-yellow-200": "#FFEDB8",
        "b2b-yellow-300": "#FFE699",
        "b2b-yellow-400": "#FFDD6D",
        "b2b-yellow-500": "#FFD93B",
        "b2b-yellow-600": "#E5C235",
        "b2b-yellow-700": "#BF9F2D",
        "b2b-yellow-800": "#997F24",
        "b2b-yellow-900": "#735E1B",
        "b2b-dark-primary": "#111111",
        "b2b-dark-secondary": "#222222",
        "b2b-dark-tertiary": "#333333",
        "b2b-gray-50": "#F9FAFB",
        "b2b-gray-100": "#F3F4F6",
        "b2b-gray-200": "#E5E7EB",
        "b2b-gray-300": "#D1D5DB",
        "b2b-gray-400": "#9CA3AF",
        "b2b-gray-500": "#6B7280",
        "b2b-gray-600": "#4B5563",
        "b2b-gray-700": "#374151",
        "b2b-gray-800": "#1F2937",
        "b2b-gray-900": "#111827",
        "b2b-success": "#10B981",
        "b2b-warning": "#F59E0B",
        "b2b-danger": "#EF4444",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

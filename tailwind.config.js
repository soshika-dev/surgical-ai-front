/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,ts,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                pastel: {
                    "base-100": "oklch(100% 0 0)",
                    "base-200": "oklch(98.462% 0.001 247.838)",
                    "base-300": "oklch(92.462% 0.001 247.838)",
                    "base-content": "oklch(20% 0 0)",

                    "primary": "oklch(51.9% 0.169 277.117)",
                    "primary-content": "oklch(98% 0.001 106.423)",
                    "secondary": "oklch(35.5% 0.009 10.001)",
                    "secondary-content": "oklch(0% 0.142 16.935)",
                    "accent": "oklch(90% 0.093 164.15)",
                    "accent-content": "oklch(50% 0.118 165.612)",

                    "neutral": "oklch(55% 0.046 257.417)",
                    "neutral-content": "oklch(92% 0.013 255.508)",

                    "info": "oklch(86.4% 0.068 207.078)",
                    "info-content": "oklch(52% 0.105 223.128)",
                    "success": "oklch(89.7% 0.150 154.449)",
                    "success-content": "oklch(52% 0.154 150.069)",
                    "warning": "oklch(93.1% 0.128 66.290)",
                    "warning-content": "oklch(55% 0.195 38.402)",
                    "error": "oklch(86.1% 0.239 19.571)",
                    "error-content": "oklch(50% 0.213 27.518)",

                    // radius / border نزدیک به چیزی که فرستادی
                    "--rounded-box": "0.5rem",
                    "--rounded-btn": "0.5rem",
                    "--rounded-badge": "0.5rem",
                    "--border-btn": "1.5px",
                    "--tab-border": "1.5px",
                    "--tab-radius": "0.5rem",
                },
            },
            {
                dark: {
                    "base-100": "oklch(25.33% 0.016 252.42)",
                    "base-200": "oklch(23.26% 0.014 253.1)",
                    "base-300": "oklch(21.15% 0.012 254.09)",
                    "base-content": "oklch(97.807% 0.029 256.847)",

                    "primary": "oklch(58% 0.233 277.117)",
                    "primary-content": "oklch(96% 0.018 272.314)",
                    "secondary": "oklch(65% 0.241 354.308)",
                    "secondary-content": "oklch(94% 0.028 342.258)",
                    "accent": "oklch(77% 0.152 181.912)",
                    "accent-content": "oklch(38% 0.063 188.416)",

                    "neutral": "oklch(14% 0.005 285.823)",
                    "neutral-content": "oklch(92% 0.004 286.32)",

                    "info": "oklch(74% 0.16 232.661)",
                    "info-content": "oklch(29% 0.066 243.157)",
                    "success": "oklch(76% 0.177 163.223)",
                    "success-content": "oklch(37% 0.077 168.94)",
                    "warning": "oklch(82% 0.189 84.429)",
                    "warning-content": "oklch(41% 0.112 45.904)",
                    "error": "oklch(71% 0.194 13.428)",
                    "error-content": "oklch(27% 0.105 12.094)",

                    "--rounded-box": "0.5rem",
                    "--rounded-btn": "0.5rem",
                    "--rounded-badge": "0.5rem",
                    "--border-btn": "1.5px",
                    "--tab-border": "1.5px",
                    "--tab-radius": "0.5rem",
                },
            },
        ],
    },
}

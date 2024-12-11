import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      // Custome font size
      fontSize: {
        '1px': '1px',
        '2px': '2px',
        '3px': '3px',
        '4px': '4px',
        '5px': '5px',
        '6px': '6px',
        '7px': '7px',
        '8px': '8px',
        '9px': '9px',
        '10px': '10px',
        '11px': '11px',
        '12px': '12px',
        '13px': '13px',
        '14px': '14px',
        '15px': '15px',
        '16px': '16px',
        '17px': '17px',
        '18px': '18px',
        '19px': '19px',
        '20px': '20px',
      },
    },

    // Customize screen size
    screens: {
      xxs: "320px",
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px", // Thêm màn hình 3XL cho độ phân giải 1920px
      "4xl": "2560px", // Thêm màn hình 4XL cho độ phân giải 2560px
      "5xl": "3840px", // Thêm màn hình 5XL cho độ phân giải 3840px (4K)
      "6xl": "5120px", // Thêm màn hình 6XL cho độ phân giải 5120px (5K)
    },

  },
  plugins: [],
} satisfies Config;

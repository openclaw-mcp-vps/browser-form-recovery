import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FormGuard – Never Lose Form Data Again",
  description: "Browser extension that auto-saves form data locally and restores it after crashes or accidental navigation. $7/mo."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a60a83b4-1b2f-4d07-818b-0ae61eee25d6"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}

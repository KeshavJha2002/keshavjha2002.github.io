import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Keshav Jha",
  description:
    "Software engineer at Oracle (MySQL InnoDB). I build storage engines and distributed systems.",
  keywords: ["software engineer", "Oracle", "MySQL", "InnoDB", "storage engines", "distributed systems", "backend engineer"],
  authors: [{ name: "Keshav Jha" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Keshav Jha",
    description:
      "Software engineer at Oracle (MySQL InnoDB). I build storage engines and distributed systems.",
    type: "website",
    locale: "en_US",
    siteName: "Keshav Jha",
  },
  twitter: {
    card: "summary",
    title: "Keshav Jha",
    description:
      "Software engineer at Oracle (MySQL InnoDB). I build storage engines and distributed systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={jetbrainsMono.variable}>
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

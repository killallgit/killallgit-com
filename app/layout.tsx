import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KillAllGit Software Solutions — The Information Superhighway Starts Here!",
  description:
    "KillAllGit Software Solutions — cutting edge multimedia CD-ROM software for the World Wide Web!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

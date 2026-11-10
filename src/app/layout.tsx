import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kenya Tertiary Education Center | Student Guidance",
  description: "Independent tertiary education guidance for Kenyan students: course research, KUCCPS guidance, funding information and career planning.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

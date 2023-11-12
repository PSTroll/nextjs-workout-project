import { MainNavigation, Footer } from "@/components";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workout Plans",
  description:
    "We offer paid workouts plans, BMI and calories calculators and our blog!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MainNavigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'OPWP',
  description: 'Osmond-Pardijs Week Planner',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-100 text-slate-900 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] text-center">
        <h1 className="text-xl md:text-3xl font-bold mb-2 font-mono">
          Week planner
        </h1>
        {children}
      </body>
    </html>
  );
}

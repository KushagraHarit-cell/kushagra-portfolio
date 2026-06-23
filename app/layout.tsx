import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kushagra Harit — Freelance Web Developer & Digital Creator',
  description: 'Premium web development, landing pages, and digital experiences. Full-stack developer specializing in Next.js, TypeScript, and modern web technologies.',
  keywords: ['web developer', 'freelance', 'Next.js', 'TypeScript', 'React', 'Tailwind CSS'],
  authors: [{ name: 'Kushagra Harit' }],
  openGraph: {
    title: 'Kushagra Harit — Freelance Web Developer',
    description: 'Building premium digital experiences that stand out.',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="noise">{children}</body>
    </html>
  );
}

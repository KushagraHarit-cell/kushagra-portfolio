import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Kushagra Harit — Freelance Web Developer & Digital Creator',
    template: '%s | Kushagra Harit'
  },
  description: 'Premium web development, landing pages, and digital experiences. Full-stack developer specializing in Next.js, TypeScript, and modern web technologies. Building agency-quality websites.',
  keywords: ['web developer', 'freelance web developer', 'Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'full-stack developer', 'portfolio', 'landing pages', 'website development'],
  authors: [{ name: 'Kushagra Harit', url: 'https://github.com/KushagraHarit-cell' }],
  creator: 'Kushagra Harit',
  publisher: 'Kushagra Harit',
  openGraph: {
    title: 'Kushagra Harit — Freelance Web Developer',
    description: 'Building premium digital experiences that stand out. Agency-quality web development.',
    type: 'website',
    url: 'https://kushagra-portfolio-zeta.vercel.app',
    siteName: 'Kushagra Harit Portfolio',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kushagra Harit - Freelance Web Developer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kushagra Harit — Freelance Web Developer',
    description: 'Building premium digital experiences that stand out.',
    creator: '@kushagraharit',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#000000',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="noise">{children}</body>
    </html>
  );
}

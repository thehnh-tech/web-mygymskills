import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: 'MyGymSkills | Offline gym tracking',
  description: 'A local-first workout planner and gym log for iOS and Android.',
  openGraph: {
    title: 'MyGymSkills',
    description: 'Plan sessions, log sets, and review progress without giving up your data.',
    images: ['/hero-scene.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

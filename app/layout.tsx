import type {Metadata} from 'next';
import { Inter, Outfit } from 'next/font/google';
import MotionWrapper from '@/components/MotionWrapper';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Convite Emily 14 - SPFC',
  description: 'Convite de aniversário da Emily - Tema São Paulo FC',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <MotionWrapper>
          {children}
        </MotionWrapper>
      </body>
    </html>
  );
}

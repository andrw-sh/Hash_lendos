import type { Metadata, Viewport } from 'next';
import './globals.css';
import site from '../site.config.json';

export const metadata: Metadata = {
  title: `${site.brandName} — личный ассистент`,
  description:
    'Личный ассистент для Telegram, WhatsApp и веб-чата. Минимум настроек — максимум пользы.',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }]
  }
};

export const viewport: Viewport = {
  themeColor: '#efe6da'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="page">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.scss';
import { ReduxProvider } from '@/providers';

export const metadata: Metadata = {
  title: 'Онлайн-школа, ИИ-психодиагностика для детей',
  description:
    'Пройдите онлайн-психодиагностику для детей с помощью ИИ. Тесты, анализ рисунков и персональные рекомендации от специалистов. Быстро, точно и удобно из дома.',
  keywords: [
    'психодиагностика детей',
    'тестирование ребенка онлайн',
    'ИИ в образовании',
    'анализ рисунков',
    'детская психология',
    'онлайн школа',
    'оценка развития ребенка',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}

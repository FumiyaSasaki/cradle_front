import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { Footer } from '@/components/common/Footer';
import { Box } from '@mui/material';
import { InquiryBlock } from '@/components/common/InquiryBlock';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'cradle',
  description: 'クレイドルの物件一覧',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <head>
        <link rel="icon" href={'./favicon.png'} />
      </head>
      <body className={inter.className}>
        <Box mt={'3%'}>
          {children}
          <InquiryBlock />
        </Box>
        <Box mt={10}>
          <Footer />
        </Box>
      </body>
    </html>
  );
}

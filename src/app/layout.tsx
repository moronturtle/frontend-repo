import { ReduxProvider } from '@/store/providers';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme/theme';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <ReduxProvider>{children}</ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

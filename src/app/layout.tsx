import type { Metadata } from "next";
import { AuthKitProvider } from '@workos-inc/authkit-nextjs/components';

export const metadata: Metadata = {
  title: "DevAuth — Developer Authentication Platform",
  description: "Drop-in authentication for developer tools. OAuth, API keys, and SSO in minutes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif', background: '#0a0a0a', color: '#fafafa' }}>
        <AuthKitProvider>{children}</AuthKitProvider>
      </body>
    </html>
  );
}

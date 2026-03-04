import { WorkOS } from '@workos-inc/node';
import { redirect } from 'next/navigation';

export async function GET() {
  const workos = new WorkOS(process.env.WORKOS_API_KEY!);

  const authorizationUrl = workos.userManagement.getAuthorizationUrl({
    provider: 'GoogleOAuth',
    clientId: process.env.WORKOS_CLIENT_ID!,
    redirectUri: process.env.NEXT_PUBLIC_WORKOS_REDIRECT_URI!,
  });

  redirect(authorizationUrl);
}

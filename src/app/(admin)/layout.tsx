import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import AdminSidebarClient from './AdminSidebarClient';

const ADMIN_ORG_SLUG = process.env.CLERK_ADMIN_ORG_SLUG || 'admin';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId, orgSlug } = await auth();

  // Redirect to sign in if not authenticated
  if (!userId) {
    redirect('/sign-in');
  }

  // Check if user belongs to the admin organization
  if (orgSlug !== ADMIN_ORG_SLUG) {
    // User is authenticated but not an admin - redirect to home
    redirect('/');
  }

  const user = await currentUser();
  const userName = user?.firstName || user?.emailAddresses[0]?.emailAddress || 'Admin';
  const userImage = user?.imageUrl || null;

  return (
    <div className="min-h-screen bg-[#FDF8F5]">
      <div className="flex">
        <AdminSidebarClient userName={userName} userImage={userImage}>
          {children}
        </AdminSidebarClient>
      </div>
    </div>
  );
}

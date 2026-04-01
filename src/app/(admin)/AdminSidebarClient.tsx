'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  FileText,
  FolderOpen,
  Image,
  Settings,
  Menu,
  LogOut,
} from 'lucide-react';

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, path: '/admin' },
  { label: 'Posts', icon: FileText, path: '/admin/posts' },
  { label: 'Categories', icon: FolderOpen, path: '/admin/categories' },
  { label: 'Media', icon: Image, path: '/admin/media' },
  { label: 'Settings', icon: Settings, path: '/admin/settings' },
] as const;

function AdminSidebar({
  isOpen,
  onClose,
  activePath,
  userName,
  userImage,
  onSignOut,
}: {
  isOpen: boolean;
  onClose: () => void;
  activePath: string;
  userName: string;
  userImage: string | null;
  onSignOut: () => void;
}) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-[#4A3728] z-50
          transform transition-transform duration-300 ease-in-out
          lg:translate-x-0 lg:static lg:z-auto
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-white/10">
            <Link href="/admin" onClick={onClose}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E8A598] flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z"
                      fill="currentColor"
                    />
                    <path
                      d="M20 9H18C18 5.5 15.5 3 12 3C8.5 3 6 5.5 6 9H4C4 5.1 7.1 2 12 2C16.9 2 20 5.1 20 9Z"
                      fill="currentColor"
                    />
                    <circle cx="8" cy="14" r="2" fill="currentColor" />
                    <circle cx="16" cy="14" r="2" fill="currentColor" />
                    <path
                      d="M12 17C8 17 4 19.5 4 22H20C20 19.5 16 17 12 17Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <span className="text-white font-semibold text-lg font-['Varela_Round']">
                  Admin
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            {navItems.map((item) => {
              const isActive = activePath === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={onClose}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-xl
                    transition-all duration-200
                    cursor-pointer
                    ${
                      isActive
                        ? 'bg-[#E8A598] text-white shadow-md'
                        : 'text-white/80 hover:bg-white/10 hover:text-white'
                    }
                  `}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-white/10">
            <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/10 transition-colors duration-200 cursor-pointer">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-[#E8A598] flex items-center justify-center flex-shrink-0">
                {userImage ? (
                  <img
                    src={userImage}
                    alt={userName}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-white font-semibold text-sm">
                    {userName[0]?.toUpperCase() || 'A'}
                  </span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-medium text-sm truncate">
                  {userName}
                </p>
                <p className="text-white/60 text-xs truncate">Administrator</p>
              </div>
              <button
                onClick={onSignOut}
                className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200 cursor-pointer"
                title="Sign out"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

function AdminTopBar({
  onMenuClick,
  title,
}: {
  onMenuClick: () => void;
  title: string;
}) {
  return (
    <header className="sticky top-0 z-30 bg-[#FDF8F5] border-b border-[#E8DDD5]">
      <div className="flex items-center gap-4 px-4 py-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-[#FEF3EE] rounded-lg transition-colors duration-200 cursor-pointer"
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6 text-[#4A3728]" />
        </button>
        <h1 className="text-xl font-semibold text-[#4A3728] font-['Varela_Round']">
          {title}
        </h1>
      </div>
    </header>
  );
}

export default function AdminSidebarClient({
  children,
  userName,
  userImage,
}: {
  children: React.ReactNode;
  userName: string;
  userImage: string | null;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  const activePath = pathname;

  const handleSignOut = () => {
    // Redirect to sign in page
    window.location.href = '/sign-in?redirect_url=' + encodeURIComponent(window.location.pathname);
  };

  return (
    <>
      <AdminSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        activePath={activePath}
        userName={userName}
        userImage={userImage}
        onSignOut={handleSignOut}
      />
      <div className="flex-1 flex flex-col min-h-screen">
        <AdminTopBar
          onMenuClick={() => setIsSidebarOpen(true)}
          title={getPageTitle(activePath)}
        />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </>
  );
}

function getPageTitle(path: string): string {
  const item = navItems.find((item) => item.path === path);
  return item?.label || 'Dashboard';
}

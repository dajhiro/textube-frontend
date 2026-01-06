"use client";

import { useState } from "react";
import { Menu, Upload, User, Languages } from "lucide-react";
import LoginModal from "@components/auth/LoginModal";
import Logo from "@components/layout/Logo";
import ProfileMenu from "@components/auth/ProfileMenu";
import ReadingMenu from "@components/theme/ReadingMenu";
import { useAuth } from "@lib/contexts/AuthContext";

export default function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { user, isLoading } = useAuth();

  return (
    <>
      <header className="w-full h-16 md:h-20 px-3 md:px-6 lg:px-8 flex items-center justify-between border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="flex items-center gap-1.5 md:gap-3">
          <button
            className="p-2 rounded-lg hover:rounded-full hover:bg-[var(--surface-hover)] transition-all duration-200 cursor-pointer"
            aria-label="Menu"
          >
            <Menu size={20} className="text-[var(--text-primary)]" />
          </button>
          <a href="/" className="inline-flex items-center">
            <Logo className="h-10 md:h-12 w-auto text-[var(--text-primary)]" />
          </a>
        </div>

        <nav className="flex items-center gap-1 md:gap-2 text-sm relative">
          {/* Upload Button - Primary button with dynamic colors */}
          <button
            onClick={() => setIsLoginOpen(true)}
            className="flex items-center h-9 gap-1.5 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-[var(--surface-hover)] text-[var(--text-primary)] hover:bg-[var(--border)] transition-colors font-medium cursor-pointer text-xs md:text-sm"
          >
            <Upload size={18} className="md:w-5 md:h-5" />
            <span className="whitespace-nowrap">Upload</span>
          </button>

          {/* Login/Profile Button */}
          {isLoading ? (
            // Loading - Show placeholder to prevent layout shift
            <div className="p-2 md:p-2.5">
              <div className="w-[22px] h-[22px]"></div>
            </div>
          ) : user ? (
            // Logged in - Show profile picture
            <ProfileMenu>
              <button
                className="rounded-full transition-all duration-200 cursor-pointer hover:opacity-70"
                aria-label="Profile"
              >
                {user.image ? (
                  <img
                    src={user.image}
                    alt={user.name || "Profile"}
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[var(--btn-primary)] text-[var(--btn-primary-text)] flex items-center justify-center font-semibold text-sm">
                    {user.name?.[0]?.toUpperCase() || user.email[0].toUpperCase()}
                  </div>
                )}
              </button>
            </ProfileMenu>
          ) : (
            // Logged out - Show user icon
            <button
              onClick={() => setIsLoginOpen(true)}
              className="p-2 md:p-2.5 rounded-lg hover:rounded-full hover:bg-[var(--surface-hover)] transition-all duration-200 cursor-pointer"
              aria-label="Login"
            >
              <User size={22} className="text-[var(--text-primary)]" />
            </button>
          )}

          {/* Reading Settings Button */}
          <ReadingMenu>
            <button
              className="p-2 md:p-2.5 rounded-lg hover:rounded-full hover:bg-[var(--surface-hover)] transition-all duration-200 cursor-pointer"
              aria-label="Reading settings"
            >
              <Languages size={22} className="text-[var(--text-primary)]" />
            </button>
          </ReadingMenu>
        </nav>
      </header>

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
    </>
  );
}

"use client";

import { useState } from "react";
import { Menu, Upload, User, Languages } from "lucide-react";
import LoginModal from "@/app/component/LoginModal";
import Logo from "@/app/ui/Logo";

export default function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <header className="w-full h-16 md:h-20 px-3 md:px-6 lg:px-8 flex items-center justify-between border-b border-gray-200 bg-white">
        <div className="flex items-center gap-1.5 md:gap-3">
          <button
            className="p-2 rounded-lg hover:rounded-full hover:bg-gray-100 transition-all duration-200 cursor-pointer"
            aria-label="Menu"
          >
            <Menu size={20} className="text-gray-900" />
          </button>
          <a href="/" className="flex items-center">
            <Logo className="h-10 md:h-12 w-auto text-gray-900" />
          </a>
        </div>

        <nav className="flex items-center gap-1 md:gap-2 text-sm">
          {/* Upload Button - Black with white text, pill shaped */}
          <button
            onClick={() => setIsLoginOpen(true)}
            className="flex items-center gap-1.5 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors font-medium cursor-pointer text-xs md:text-sm"
          >
            <Upload size={18} className="md:w-5 md:h-5" />
            <span className="whitespace-nowrap">Upload</span>
          </button>

          {/* Login Button - Icon only, black, no background */}
          <button
            onClick={() => setIsLoginOpen(true)}
            className="p-2 md:p-2.5 rounded-lg hover:rounded-full hover:bg-gray-100 transition-all duration-200 cursor-pointer"
            aria-label="Login"
          >
            <User size={22} className="text-gray-900" />
          </button>

          {/* Language Toggle Button - Icon only, black, no background */}
          <button
            className="p-2 md:p-2.5 rounded-lg hover:rounded-full hover:bg-gray-100 transition-all duration-200 cursor-pointer"
            aria-label="Change language"
          >
            <Languages size={22} className="text-gray-900" />
          </button>
        </nav>
      </header>

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
    </>
  );
}

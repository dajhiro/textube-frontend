"use client";

import { useState } from "react";
import { Menu, Upload, User } from "lucide-react";
import LoginModal from "@/app/component/LoginModal";
import Logo from "@/app/ui/Logo";

export default function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <header className="w-full h-14 pl-2 pr-4 md:px-6 lg:px-8 flex items-center justify-between border-b border-gray-200 bg-white">
        <div className="flex items-center gap-2 md:gap-3">
          <button
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            <Menu size={20} className="text-gray-700" />
          </button>
          <a href="/" className="flex items-center">
            <Logo className="h-8 w-auto text-gray-900" />
          </a>
        </div>

        <nav className="flex items-center gap-1.5 md:gap-2 text-sm">
          <button
            onClick={() => setIsLoginOpen(true)}
            className="flex items-center gap-2 px-3 py-2 md:px-4 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors font-medium"
          >
            <Upload size={18} />
            <span className="hidden sm:inline">Upload</span>
          </button>
          <button
            onClick={() => setIsLoginOpen(true)}
            className="flex items-center gap-2 px-3 py-2 md:px-4 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-colors font-medium"
          >
            <User size={18} />
            <span className="hidden sm:inline">Login</span>
          </button>
        </nav>
      </header>

      {/* 모달을 Header 아래에 배치 (렌더링은 조건부로 내부에서 처리됨) */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
    </>
  );
}

"use client"; // Next.js App Router를 사용 중이라면 필수입니다.

import { useState } from "react";
import LoginModal from "@/app/component/LoginModal";

export default function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <header className="w-full h-14 px-6 flex items-center justify-between border-b border-gray-200 bg-white">
        <div className="text-lg font-semibold">
          <a href="/">TexTube</a>
        </div>

        <nav className="flex items-center gap-2 text-sm text-gray-600">
          {/* a 태그 대신 button을 사용하는 것이 모달 제어에 더 적합합니다 */}
          <button
            onClick={() => setIsLoginOpen(true)}
            className="p-2 rounded-lg bg-green-700 font-bold text-gray-100 hover:text-black transition-colors"
          >
            Upload
          </button>
          <button
            onClick={() => setIsLoginOpen(true)}
            className="p-2 rounded-lg bg-green-700 font-bold text-gray-100 hover:text-black transition-colors"
          >
            Login
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

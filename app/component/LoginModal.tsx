import { BaseModal } from "@/app/ui/BaseModal";
import Logo from "@/app/ui/Logo";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <div className="p-10 text-center">
        <div className="flex justify-center mb-2">
          <Logo className="h-10 w-auto text-gray-900" />
        </div>
        <p className="mt-2 text-sm font-medium text-gray-500">
          전 세계의 자료들을 한 곳에서
        </p>
        <button
          className="mt-8 flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 active:scale-[0.98]"
        >
          <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="h-5 w-5"
            />
            Google 로그인
        </button>
      </div>
    </BaseModal>
  );
}

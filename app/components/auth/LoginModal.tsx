"use client";

import {
  Dialog,
  DialogContent,
} from "@ui/dialog";
import { Button } from "@ui/button";
import Logo from "@components/layout/Logo";
import { useAuth } from "@lib/contexts/AuthContext";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const { login } = useAuth();

  const handleGoogleLogin = () => {
    login();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <div className="p-6 text-center">
          <div className="flex justify-center mb-2">
            <Logo className="h-10 w-auto text-[var(--text-primary)]" />
          </div>
          <p className="mt-2 text-sm font-medium text-[var(--text-tertiary)]">
            전 세계의 자료들을 한 곳에서
          </p>
          <Button
            onClick={handleGoogleLogin}
            variant="outline"
            className="mt-8 w-full gap-3"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="h-5 w-5"
            />
            Google 로그인
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

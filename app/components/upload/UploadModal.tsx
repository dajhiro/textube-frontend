"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "@ui/dialog";
import { Button } from "@ui/button";
import { useAuth } from "@lib/contexts/AuthContext";
import Logo from "@components/layout/Logo";
import { Loader2, CheckCircle2 } from "lucide-react";

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UploadModal({ isOpen, onClose }: UploadModalProps) {
  const { user } = useAuth();
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) return;
    if (!youtubeUrl.trim()) {
      setError("URL을 입력해주세요");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/upload/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          youtubeUrl: youtubeUrl.trim(),
          userId: user.id,
          isPublic: true,
        }),
      });

      if (!response.ok) {
        throw new Error("업로드 요청에 실패했습니다");
      }

      setSuccess(true);
      setYoutubeUrl("");

      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2500);
    } catch (err) {
      setError(err instanceof Error ? err.message : "오류가 발생했습니다");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setYoutubeUrl("");
    setError(null);
    setSuccess(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md border-black/10 dark:border-white/10 shadow-2xl shadow-black/10 dark:shadow-black/30 rounded-xl">
        <div className="p-6 text-center">
          <div className="flex justify-center mb-2">
            <Logo className="h-10 w-auto text-[var(--text-primary)]" />
          </div>

          {success ? (
            <div className="mt-6">
              <CheckCircle2 className="w-12 h-12 mx-auto text-green-500 mb-3" />
              <p className="text-[var(--text-primary)] font-medium">
                요청이 접수되었습니다
              </p>
              <p className="mt-1 text-sm text-[var(--text-tertiary)]">
                변환이 완료되면 마이페이지에서 확인할 수 있어요
              </p>
            </div>
          ) : (
            <>
              <p className="mt-2 text-sm font-medium text-[var(--text-tertiary)]">
                YouTube 영상을 텍스트로 변환하세요
              </p>

              <form onSubmit={handleSubmit} className="mt-6">
                <input
                  type="url"
                  value={youtubeUrl}
                  onChange={(e) => {
                    setYoutubeUrl(e.target.value);
                    setError(null);
                  }}
                  placeholder="YouTube URL 붙여넣기"
                  className="w-full px-4 py-3 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] text-center placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-[var(--text-tertiary)] transition-colors"
                  disabled={isLoading}
                  autoFocus
                />

                {error && (
                  <p className="mt-3 text-sm text-red-500">{error}</p>
                )}

                <Button
                  type="submit"
                  variant="outline"
                  disabled={isLoading || !youtubeUrl.trim()}
                  className="mt-4 w-full gap-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      변환 요청 중...
                    </>
                  ) : (
                    "변환하기"
                  )}
                </Button>
              </form>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

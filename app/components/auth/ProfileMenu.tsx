"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { useAuth } from "@lib/contexts/AuthContext";

interface ProfileMenuProps {
  children: React.ReactNode;
}

export default function ProfileMenu({ children }: ProfileMenuProps) {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 border-black/10 dark:border-white/10 shadow-xl shadow-black/10 dark:shadow-black/30 rounded-xl">
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut size={18} className="mr-2" />
          로그아웃
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

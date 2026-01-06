"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@ui/dropdown-menu";
import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme } from "next-themes";

interface ReadingMenuProps {
  children: React.ReactNode;
}

export default function ReadingMenu({ children }: ReadingMenuProps) {
  const { theme, setTheme } = useTheme();

  const themeOptions = [
    { value: "light", label: "라이트 모드", icon: Sun },
    { value: "dark", label: "다크 모드", icon: Moon },
    { value: "system", label: "시스템 설정", icon: Monitor },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>테마</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {themeOptions.map((option) => {
          const Icon = option.icon;
          const isActive = theme === option.value;

          return (
            <DropdownMenuItem
              key={option.value}
              onClick={() => setTheme(option.value)}
              className="gap-3"
            >
              <Icon size={18} />
              <span className="flex-1">{option.label}</span>
              {isActive && (
                <div className="w-2 h-2 rounded-full bg-primary" />
              )}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

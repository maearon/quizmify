"use client";

import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const themes = ["light", "dark", "system"];
  const currentTheme = theme ?? "system";
  const currentIndex = themes.indexOf(currentTheme);

  const toggleTheme = () => {
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setTheme(nextTheme);
  };

  return (
    <div className={className} {...props}>
      <Button variant="outline" size="icon" onClick={toggleTheme}>
        {currentTheme === "light" && <Sun className="h-[1.2rem] w-[1.2rem]" />}
        {currentTheme === "dark" && <Moon className="h-[1.2rem] w-[1.2rem]" />}
        {currentTheme === "system" && <Monitor className="h-[1.2rem] w-[1.2rem]" />}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}

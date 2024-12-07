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

  // Define theme options with icons for different themes
  const themeOptions = {
    light: <Sun className="h-[1.2rem] w-[1.2rem]" />,
    dark: <Moon className="h-[1.2rem] w-[1.2rem]" />,
    system: <Monitor className="h-[1.2rem] w-[1.2rem]" />,
  };

  const currentTheme = theme ?? "system"; // Default to system if no theme is set

  // Type guard for valid theme values
  const isValidTheme = (theme: string): theme is keyof typeof themeOptions => 
    theme === "light" || theme === "dark" || theme === "system";

  // Calculate the next theme based on the current theme
  const getNextTheme = () => {
    switch (currentTheme) {
      case "light":
        return "dark";
      case "dark":
        return "system";
      case "system":
        return "light";
      default:
        return "system"; // Fallback to 'system' if invalid
    }
  };

  const toggleTheme = () => {
    setTheme(getNextTheme()); // Switch to the next theme in the cycle
  };

  return (
    <div className={className} {...props}>
      <Button variant="outline" size="icon" onClick={toggleTheme}>
        {isValidTheme(currentTheme) && themeOptions[currentTheme]}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}

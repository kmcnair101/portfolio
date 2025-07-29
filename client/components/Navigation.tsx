import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  Home,
  FileText,
  Menu,
  X,
  Settings
} from "lucide-react";
import { useState } from "react";

const navigationItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Client Portal", href: "/portal", icon: FileText },
];

export default function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-border/50 bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl font-light tracking-tight">
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "text-sm transition-colors border-b border-transparent",
                    isActive
                      ? "text-foreground border-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link
              to="/admin"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Admin
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              <Link
                to="/admin"
                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Settings className="h-4 w-4" />
                <span>Admin</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

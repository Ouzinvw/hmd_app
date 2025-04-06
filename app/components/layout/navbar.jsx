import Link from "next/link";
import { Leaf } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-primary" />
          <div className="flex flex-col">
            <span className="hidden sm:inline-block company-logo">
              Harvest Market Direct
            </span>
            <span className="sm:hidden company-logo">HMD</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 font-bold">
          <Link href="#how-it-works" className="nav-link">
            How It Works
          </Link>
          <Link href="#features" className="nav-link">
            Features
          </Link>
          <Link href="#businesses" className="nav-link">
            For Businesses
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden sm:inline-flex nav-link">
            Log in
          </Link>
          <Link href="/signup" className="button-primary">
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}

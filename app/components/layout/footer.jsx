import Link from "next/link";
import { Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-6 md:py-0">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand space-y-4 md:py-8">
            <div className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-primary" />
              <span
                className="text-xl font-bold"
                style={{ color: "hsl(var(--primary))" }}
              >
                Harvest Market Direct
              </span>
            </div>
            <p className="text-sm paragraph">
              Connecting surplus food with hungry customers to reduce waste and
              save money.
            </p>
          </div>
          <nav className="space-y-4 md:py-8">
            <h4 className="text-sm font-medium">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="footer-link">
                  Careers
                </Link>
              </li>
            </ul>
          </nav>
          <nav className="space-y-4 md:py-8">
            <h4 className="text-sm font-medium">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="footer-link">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="footer-link">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/support" className="footer-link">
                  Support
                </Link>
              </li>
            </ul>
          </nav>
          <nav className="space-y-4 md:py-8">
            <h4 className="text-sm font-medium">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="footer-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="footer-link">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row justify-between items-center py-6 md:h-16 md:py-0">
          <p className="text-xs paragraph">
            © 2025 Harvest Market Direct. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

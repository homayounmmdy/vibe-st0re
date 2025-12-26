import { Github, Instagram, Mail, Twitter } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200/50">
      <div className="max-w-6xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Brand */}
          <Logo />

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="GitHub"
              className="text-gray-500 hover:text-indigo-600 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-500 hover:text-indigo-600 transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-500 hover:text-indigo-600 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              aria-label="Email"
              className="text-gray-500 hover:text-indigo-600 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} vibeStore. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

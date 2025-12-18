import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">ServiGroww</h3>
            <p className="text-sm text-white/70 mb-6 leading-relaxed">India's One App for All Blue-Collar Jobs</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white/80 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white/80 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white/80 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white/80 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-base mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/how-it-works" className="text-white/70 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/70 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-base mb-6">Categories</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/categories/electrician" className="text-white/70 hover:text-white transition-colors">
                  Electrician
                </Link>
              </li>
              <li>
                <Link href="/categories/plumber" className="text-white/70 hover:text-white transition-colors">
                  Plumber
                </Link>
              </li>
              <li>
                <Link href="/categories/carpenter" className="text-white/70 hover:text-white transition-colors">
                  Carpenter
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-white/70 hover:text-white transition-colors">
                  View All
                </Link>
              </li>
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h4 className="font-semibold text-base mb-6">Cities</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/cities/delhi" className="text-white/70 hover:text-white transition-colors">
                  Delhi
                </Link>
              </li>
              <li>
                <Link href="/cities/mumbai" className="text-white/70 hover:text-white transition-colors">
                  Mumbai
                </Link>
              </li>
              <li>
                <Link href="/cities/bengaluru" className="text-white/70 hover:text-white transition-colors">
                  Bengaluru
                </Link>
              </li>
              <li>
                <Link href="/cities" className="text-white/70 hover:text-white transition-colors">
                  View All
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>&copy; 2025 ServiGroww. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

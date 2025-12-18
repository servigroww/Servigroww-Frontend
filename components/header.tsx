import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-6 md:px-8">
        <Link href="/" className="flex items-center">
          <div className="text-2xl font-bold text-[#1e40af]">ServiGrow</div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/how-it-works"
            className="text-sm font-medium text-foreground hover:text-[#1e40af] transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="/categories"
            className="text-sm font-medium text-foreground hover:text-[#1e40af] transition-colors"
          >
            Categories
          </Link>
          <Link href="/cities" className="text-sm font-medium text-foreground hover:text-[#1e40af] transition-colors">
            Cities
          </Link>
          <Link href="/blog" className="text-sm font-medium text-foreground hover:text-[#1e40af] transition-colors">
            Blog
          </Link>
          <Link href="/about" className="text-sm font-medium text-foreground hover:text-[#1e40af] transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium text-foreground hover:text-[#1e40af] transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden items-center md:flex">
          <Link href="/register">
            <Button className="bg-[#1e40af] hover:bg-[#1e40af]/90 text-white">Register as Worker</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-6 mt-12">
              <Link href="/how-it-works" className="text-base font-medium">
                How It Works
              </Link>
              <Link href="/categories" className="text-base font-medium">
                Categories
              </Link>
              <Link href="/cities" className="text-base font-medium">
                Cities
              </Link>
              <Link href="/blog" className="text-base font-medium">
                Blog
              </Link>
              <Link href="/about" className="text-base font-medium">
                About
              </Link>
              <Link href="/contact" className="text-base font-medium">
                Contact
              </Link>
              <Link href="/register">
                <Button className="w-full bg-[#16A34A] hover:bg-[#16A34A]/90 text-white mt-4">
                  Register as Worker
                </Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

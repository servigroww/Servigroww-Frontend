import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Zap, Wrench, Hammer, PaintBucket, Car, Package, Bean as Clean, Heart, Users, HardHat } from "lucide-react"

const categories = [
  {
    id: "electrician",
    name: "Electrician",
    icon: Zap,
    description: "Wiring, repairs, installations, and electrical maintenance",
    color: "bg-yellow-500",
  },
  {
    id: "plumber",
    name: "Plumber",
    icon: Wrench,
    description: "Pipe repairs, installations, drainage, and water solutions",
    color: "bg-blue-500",
  },
  {
    id: "carpenter",
    name: "Carpenter",
    icon: Hammer,
    description: "Furniture making, repairs, wooden work, and installations",
    color: "bg-amber-600",
  },
  {
    id: "painter",
    name: "Painter",
    icon: PaintBucket,
    description: "Interior and exterior painting, wall treatments, and finishing",
    color: "bg-purple-500",
  },
  {
    id: "driver",
    name: "Driver",
    icon: Car,
    description: "Personal drivers, delivery drivers, and transportation services",
    color: "bg-green-600",
  },
  {
    id: "delivery",
    name: "Delivery Personnel",
    icon: Package,
    description: "Package delivery, courier services, and logistics support",
    color: "bg-orange-500",
  },
  {
    id: "cleaner",
    name: "Cleaner",
    icon: Clean,
    description: "Home cleaning, office cleaning, and deep cleaning services",
    color: "bg-cyan-500",
  },
  {
    id: "home-nurse",
    name: "Home Nurse",
    icon: Heart,
    description: "Patient care, elderly care, and home healthcare services",
    color: "bg-pink-500",
  },
  {
    id: "daily-wage",
    name: "Daily Wage Worker",
    icon: Users,
    description: "General labor, helping hands, and flexible workforce",
    color: "bg-gray-600",
  },
  {
    id: "construction",
    name: "Construction Worker",
    icon: HardHat,
    description: "Building, renovation, masonry, and construction projects",
    color: "bg-stone-600",
  },
]

export default function CategoriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1E3A8A] to-[#1E3A8A]/90 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Job Categories</h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Find skilled workers across multiple blue-collar job categories
              </p>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {categories.map((category) => {
                const IconComponent = category.icon
                return (
                  <Card key={category.id} className="shadow-md hover:shadow-lg transition-shadow border-2">
                    <CardContent className="pt-6">
                      <div className={`w-16 h-16 ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{category.description}</p>
                      <div className="flex flex-col gap-2">
                        <Link href={`/categories/${category.id}`} className="w-full">
                          <Button variant="outline" className="w-full bg-transparent">
                            Find Workers
                          </Button>
                        </Link>
                        <Link href="/register" className="w-full">
                          <Button className="w-full bg-[#16A34A] hover:bg-[#16A34A]/90 text-white">
                            Join as Worker
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-[#F8FAFC]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't See Your Skill?</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We're constantly adding new categories. Register now and we'll notify you when your skill is added.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register">
                  <Button size="lg" className="bg-[#16A34A] hover:bg-[#16A34A]/90 text-white">
                    Register as Worker
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

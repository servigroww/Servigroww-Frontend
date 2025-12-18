import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, Shield, Star, TrendingUp, Users, MessageCircle } from "lucide-react"
import { notFound } from "next/navigation"

const categoryData: Record<string, any> = {
  electrician: {
    name: "Electrician",
    services: [
      "Electrical wiring and rewiring",
      "Circuit breaker installation and repair",
      "Lighting installation and repair",
      "Ceiling fan installation",
      "Switch and socket installation",
      "Power backup solutions",
      "Electrical safety inspections",
      "Emergency electrical repairs",
    ],
  },
  plumber: {
    name: "Plumber",
    services: [
      "Pipe installation and repair",
      "Tap and faucet repair",
      "Toilet installation and repair",
      "Water tank installation",
      "Drainage cleaning and repair",
      "Water heater installation",
      "Bathroom fitting",
      "Emergency plumbing services",
    ],
  },
  carpenter: {
    name: "Carpenter",
    services: [
      "Custom furniture making",
      "Furniture repair and restoration",
      "Door and window installation",
      "Cabinet making and installation",
      "Wooden flooring",
      "Partition work",
      "Shelf installation",
      "Wooden structure repairs",
    ],
  },
  painter: {
    name: "Painter",
    services: [
      "Interior wall painting",
      "Exterior wall painting",
      "Texture painting",
      "Wall putty and preparation",
      "Waterproofing",
      "Wood polishing",
      "Color consultation",
      "Touch-up and maintenance",
    ],
  },
  driver: {
    name: "Driver",
    services: [
      "Personal driver services",
      "Airport pickup and drop",
      "Outstation driving",
      "Corporate driver services",
      "Part-time driver",
      "Full-time driver",
      "Emergency driver services",
      "Night shift driving",
    ],
  },
  delivery: {
    name: "Delivery Personnel",
    services: [
      "Package delivery",
      "Food delivery",
      "Document courier",
      "Grocery delivery",
      "Bulk item delivery",
      "Same-day delivery",
      "Express delivery",
      "Cash on delivery support",
    ],
  },
  cleaner: {
    name: "Cleaner",
    services: [
      "Home deep cleaning",
      "Office cleaning",
      "Bathroom cleaning",
      "Kitchen cleaning",
      "Floor mopping and scrubbing",
      "Window cleaning",
      "Sofa and carpet cleaning",
      "Move-in/move-out cleaning",
    ],
  },
  "home-nurse": {
    name: "Home Nurse",
    services: [
      "Elderly care",
      "Post-surgery care",
      "Medication administration",
      "Wound dressing",
      "Vital signs monitoring",
      "Physiotherapy support",
      "Patient hygiene assistance",
      "24/7 nursing care",
    ],
  },
  "daily-wage": {
    name: "Daily Wage Worker",
    services: [
      "Loading and unloading",
      "Packing and moving assistance",
      "Garden maintenance",
      "General helping hand",
      "Event setup support",
      "Warehouse work",
      "Manual labor",
      "Temporary staff support",
    ],
  },
  construction: {
    name: "Construction Worker",
    services: [
      "Building construction",
      "House renovation",
      "Masonry work",
      "Plastering",
      "Tile installation",
      "Concrete work",
      "Demolition work",
      "Structure repairs",
    ],
  },
}

export default function CategoryDetailPage({ params }: { params: { category: string } }) {
  const category = categoryData[params.category]

  if (!category) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1E3A8A] to-[#1E3A8A]/90 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{category.name} Services</h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
                Find verified {category.name.toLowerCase()}s near you or register to offer your services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-[#1E3A8A] hover:bg-white/90">
                  Find {category.name}s Near You
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1E3A8A] bg-transparent"
                >
                  Register as {category.name}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Included Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Services Included</h2>
              <p className="text-center text-muted-foreground mb-12">
                Our verified {category.name.toLowerCase()}s provide a wide range of professional services
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {category.services.map((service: string, index: number) => (
                  <Card key={index} className="border-2">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-[#16A34A] flex-shrink-0 mt-0.5" />
                        <span className="font-medium">{service}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose ServiGroww Section */}
        <section className="py-16 md:py-24 bg-[#F8FAFC]">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Why Choose ServiGroww for {category.name} Services
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="shadow-md">
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 bg-[#1E3A8A] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Verified Professionals</h3>
                    <p className="text-sm text-muted-foreground">
                      All {category.name.toLowerCase()}s are verified for identity and skills
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-md">
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 bg-[#1E3A8A] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Nearby Workers</h3>
                    <p className="text-sm text-muted-foreground">
                      Find {category.name.toLowerCase()}s available in your local area
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-md">
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 bg-[#1E3A8A] rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Direct Communication</h3>
                    <p className="text-sm text-muted-foreground">Talk directly with workers without middlemen</p>
                  </CardContent>
                </Card>

                <Card className="shadow-md">
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 bg-[#16A34A] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Ratings & Reviews</h3>
                    <p className="text-sm text-muted-foreground">Check verified reviews from real customers</p>
                  </CardContent>
                </Card>

                <Card className="shadow-md">
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 bg-[#16A34A] rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Fair Pricing</h3>
                    <p className="text-sm text-muted-foreground">No heavy commissions, transparent pricing</p>
                  </CardContent>
                </Card>

                <Card className="shadow-md">
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 bg-[#F97316] rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Quality Service</h3>
                    <p className="text-sm text-muted-foreground">High-quality work guaranteed by verified workers</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* For Customers */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#1E3A8A]">Benefits for Customers</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[#1E3A8A] flex-shrink-0 mt-0.5" />
                      <span>Access to verified and skilled {category.name.toLowerCase()}s in your area</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[#1E3A8A] flex-shrink-0 mt-0.5" />
                      <span>View complete profiles, ratings, and past work before hiring</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[#1E3A8A] flex-shrink-0 mt-0.5" />
                      <span>Direct communication with no platform fees or commissions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[#1E3A8A] flex-shrink-0 mt-0.5" />
                      <span>Transparent pricing and work estimates upfront</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[#1E3A8A] flex-shrink-0 mt-0.5" />
                      <span>Fast response times and nearby availability</span>
                    </li>
                  </ul>
                </div>

                {/* For Workers */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#16A34A]">Benefits for {category.name}s</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[#16A34A] flex-shrink-0 mt-0.5" />
                      <span>Get more job opportunities directly from customers near you</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[#16A34A] flex-shrink-0 mt-0.5" />
                      <span>Build your digital professional identity and portfolio</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[#16A34A] flex-shrink-0 mt-0.5" />
                      <span>No heavy commissions - keep more of what you earn</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[#16A34A] flex-shrink-0 mt-0.5" />
                      <span>Set your own rates and work schedule</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[#16A34A] flex-shrink-0 mt-0.5" />
                      <span>Grow your reputation through customer reviews and ratings</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-[#1E3A8A] to-[#1E3A8A]/90 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-lg mb-8 text-white/90">Join thousands of customers and workers using ServiGroww</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-[#1E3A8A] hover:bg-white/90">
                  Find {category.name}s Now
                </Button>
                <Link href="/register">
                  <Button size="lg" className="bg-[#16A34A] hover:bg-[#16A34A]/90 text-white">
                    Register as {category.name}
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

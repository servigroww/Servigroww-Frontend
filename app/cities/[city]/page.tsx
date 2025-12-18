import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  MapPin,
  CheckCircle,
  Users,
  TrendingUp,
  Shield,
} from "lucide-react"
import { notFound } from "next/navigation"

/* ---------------------------------- */
/* City Data                           */
/* ---------------------------------- */

const cityData: Record<
  string,
  {
    name: string
    state: string
    description: string
  }
> = {
  delhi: {
    name: "Delhi",
    state: "Delhi NCR",
    description: "India's capital and a major hub for blue-collar workers",
  },
  mumbai: {
    name: "Mumbai",
    state: "Maharashtra",
    description: "The financial capital with diverse service opportunities",
  },
  bengaluru: {
    name: "Bengaluru",
    state: "Karnataka",
    description: "The IT city with growing demand for skilled workers",
  },
  lucknow: {
    name: "Lucknow",
    state: "Uttar Pradesh",
    description: "Cultural capital with expanding service sector",
  },
  jaipur: {
    name: "Jaipur",
    state: "Rajasthan",
    description: "The Pink City with thriving local economy",
  },
  hyderabad: {
    name: "Hyderabad",
    state: "Telangana",
    description: "Tech hub with increasing service demand",
  },
  pune: {
    name: "Pune",
    state: "Maharashtra",
    description: "Educational and industrial center",
  },
  kolkata: {
    name: "Kolkata",
    state: "West Bengal",
    description: "Cultural capital with diverse workforce needs",
  },
  chennai: {
    name: "Chennai",
    state: "Tamil Nadu",
    description: "Industrial powerhouse of South India",
  },
  ahmedabad: {
    name: "Ahmedabad",
    state: "Gujarat",
    description: "Commercial hub with growing opportunities",
  },
}

const services = [
  "Electrician",
  "Plumber",
  "Carpenter",
  "Painter",
  "Driver",
  "Delivery Personnel",
  "Cleaner",
  "Home Nurse",
  "Daily Wage Worker",
  "Construction Worker",
]

/* ---------------------------------- */
/* Page Component                     */
/* ---------------------------------- */

export default async function CityDetailPage({
  params,
}: {
  params: Promise<{ city: string }>
}) {
  const { city } = await params
  const cityInfo = cityData[city]

  if (!cityInfo) {
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
              <div className="flex items-center justify-center gap-3 mb-4">
                <MapPin className="h-12 w-12" />
                <h1 className="text-4xl md:text-5xl font-bold">
                  {cityInfo.name}
                </h1>
              </div>
              <p className="text-lg text-white/80 mb-2">
                {cityInfo.state}
              </p>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
                {cityInfo.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-[#1E3A8A] hover:bg-white/90"
                >
                  Find Workers in {cityInfo.name}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1E3A8A] bg-transparent"
                >
                  Register as Worker
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                How ServiGroww Works in {cityInfo.name}
              </h2>
              <p className="text-center text-muted-foreground mb-12">
                Connecting skilled workers with customers across{" "}
                {cityInfo.name}
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  "Location-Based Matching",
                  "Direct Connection",
                  "Get Work Done",
                ].map((title, i) => (
                  <Card key={i} className="shadow-md border-2">
                    <CardContent className="pt-6 text-center">
                      <div className="w-16 h-16 bg-[#1E3A8A] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                        {i + 1}
                      </div>
                      <h3 className="font-semibold text-lg mb-2">
                        {title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {title === "Location-Based Matching"
                          ? `Find workers in your neighborhood across ${cityInfo.name}`
                          : title === "Direct Connection"
                          ? "Talk directly with workers without any middlemen"
                          : "Hire verified workers and complete your projects"}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 md:py-24 bg-[#F8FAFC]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Available Services in {cityInfo.name}
              </h2>
              <p className="text-center text-muted-foreground mb-12">
                All major blue-collar services available across the city
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {services.map((service) => (
                  <Card key={service} className="border-2">
                    <CardContent className="pt-6 text-center">
                      <CheckCircle className="h-8 w-8 text-[#16A34A] mx-auto mb-2" />
                      <p className="font-medium text-sm">{service}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-[#1E3A8A] to-[#1E3A8A]/90 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Join ServiGroww in {cityInfo.name}
              </h2>
              <p className="text-lg mb-8 text-white/90">
                Whether you're looking for workers or offering services,
                ServiGroww connects you instantly
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-[#1E3A8A] hover:bg-white/90"
                >
                  Find Workers Now
                </Button>
                <Link href="/register">
                  <Button
                    size="lg"
                    className="bg-[#16A34A] hover:bg-[#16A34A]/90 text-white"
                  >
                    Register as Worker
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

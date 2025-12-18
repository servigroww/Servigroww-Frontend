import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin } from "lucide-react"

const cities = [
  { id: "delhi", name: "Delhi", state: "Delhi NCR" },
  { id: "mumbai", name: "Mumbai", state: "Maharashtra" },
  { id: "bengaluru", name: "Bengaluru", state: "Karnataka" },
  { id: "lucknow", name: "Lucknow", state: "Uttar Pradesh" },
  { id: "jaipur", name: "Jaipur", state: "Rajasthan" },
  { id: "hyderabad", name: "Hyderabad", state: "Telangana" },
  { id: "pune", name: "Pune", state: "Maharashtra" },
  { id: "kolkata", name: "Kolkata", state: "West Bengal" },
  { id: "chennai", name: "Chennai", state: "Tamil Nadu" },
  { id: "ahmedabad", name: "Ahmedabad", state: "Gujarat" },
]

export default function CitiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1E3A8A] to-[#1E3A8A]/90 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Cities We Serve</h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                ServiGroww is available in major cities across India, with more cities coming soon
              </p>
            </div>
          </div>
        </section>

        {/* Cities Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {cities.map((city) => (
                <Card key={city.id} className="shadow-md hover:shadow-lg transition-shadow border-2">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-[#1E3A8A] rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{city.name}</h3>
                        <p className="text-sm text-muted-foreground">{city.state}</p>
                      </div>
                    </div>
                    <Link href={`/cities/${city.id}`}>
                      <Button className="w-full bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white">
                        Explore {city.name}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-16 md:py-24 bg-[#F8FAFC]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">More Cities Coming Soon</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We're rapidly expanding across India. If your city isn't listed yet, register now and we'll notify you
                when we launch in your area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register">
                  <Button size="lg" className="bg-[#16A34A] hover:bg-[#16A34A]/90 text-white">
                    Register as Worker
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Request New City
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

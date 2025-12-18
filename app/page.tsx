import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin, Shield, MessageCircle, CheckCircle, Zap, Globe, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-white py-24 md:py-32 lg:py-40">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 text-balance leading-tight tracking-tight">
                India's One App for All Blue-Collar Jobs
              </h1>
              <p className="text-lg md:text-xl mb-12 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Find skilled workers near you or get work opportunities in your city — directly, safely, and fairly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[#1e40af] hover:bg-[#1e40af]/90 text-white px-8 h-14 text-base">
                  Find Workers
                </Button>
                <Button size="lg" variant="outline" className="px-8 h-14 text-base bg-transparent">
                  Register as Worker
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 md:py-32 bg-[#fafafa]">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">How It Works</h2>
              <p className="text-lg text-muted-foreground">Simple steps to connect workers and customers</p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
              {/* For Customers */}
              <div className="bg-white p-8 md:p-10 rounded-lg">
                <h3 className="text-2xl font-bold mb-10 text-[#1e40af]">For Customers</h3>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-[#1e40af]/10 text-[#1e40af] flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Choose a service</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Select from electrician, plumber, carpenter, and more
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-[#1e40af]/10 text-[#1e40af] flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Find nearby workers</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        See verified workers available in your area
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-[#1e40af]/10 text-[#1e40af] flex items-center justify-center font-bold text-lg">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Get work done</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Connect directly, discuss details, and hire
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* For Workers */}
              <div className="bg-white p-8 md:p-10 rounded-lg">
                <h3 className="text-2xl font-bold mb-10 text-[#16a34a]">For Workers</h3>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-[#16a34a]/10 text-[#16a34a] flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Create your profile</h4>
                      <p className="text-muted-foreground leading-relaxed">Build your digital professional profile</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-[#16a34a]/10 text-[#16a34a] flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Get verified</h4>
                      <p className="text-muted-foreground leading-relaxed">Complete verification for customer trust</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-[#16a34a]/10 text-[#16a34a] flex items-center justify-center font-bold text-lg">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Grow your income</h4>
                      <p className="text-muted-foreground leading-relaxed">Receive job requests and build reputation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Discovery Section */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-balance">
                Find Workers Around You
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                See available skilled workers in real-time based on your location
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#1e40af] rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Location-Based</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Find workers within your area using smart distance matching
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#16a34a] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Live Availability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Check real-time availability and get instant responses
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#f97316] rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-xl mb-3">No Middlemen</h3>
                <p className="text-muted-foreground leading-relaxed">Connect and communicate directly with workers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why ServiGroww Section */}
        <section className="py-20 md:py-32 bg-[#fafafa]">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Why ServiGroww</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 max-w-6xl mx-auto">
              <div className="flex gap-5">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-[#16a34a] rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">No Heavy Commissions</h3>
                  <p className="text-muted-foreground leading-relaxed">Fair pricing for both parties</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-[#1e40af] rounded-lg flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Direct Communication</h3>
                  <p className="text-muted-foreground leading-relaxed">Talk directly without intermediaries</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-[#1e40af] rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Verified Workers</h3>
                  <p className="text-muted-foreground leading-relaxed">All workers verified for safety</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-[#1e40af] rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Works in Any City</h3>
                  <p className="text-muted-foreground leading-relaxed">Available in major cities across India</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-[#16a34a] rounded-lg flex items-center justify-center">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Built for India</h3>
                  <p className="text-muted-foreground leading-relaxed">Designed for Indian workers and customers</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-[#f97316] rounded-lg flex items-center justify-center">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Ratings & Reviews</h3>
                  <p className="text-muted-foreground leading-relaxed">Transparent feedback system</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Safety Section */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <div className="w-20 h-20 bg-[#1e40af] rounded-full flex items-center justify-center mx-auto mb-8">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Trust & Safety First</h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  We prioritize the safety and security of both workers and customers
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Worker Verification</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Identity and skill verification for all workers
                  </p>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Ratings & Reviews</h3>
                  <p className="text-muted-foreground leading-relaxed">Transparent feedback from real customers</p>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Transparent Profiles</h3>
                  <p className="text-muted-foreground leading-relaxed">Complete work history and credentials</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-[#0a0a0a] text-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">App Coming Soon</h2>
              <p className="text-lg mb-12 text-white/70 leading-relaxed">
                Launching soon on Android & iOS. Be the first to know!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Link href="/register" className="flex-1">
                  <Button size="lg" className="w-full bg-[#16a34a] hover:bg-[#16a34a]/90 text-white h-14">
                    Register as Worker
                  </Button>
                </Link>
                <Link href="/contact" className="flex-1">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full h-14 border-white/20 text-white hover:bg-white hover:text-[#0a0a0a] bg-transparent"
                  >
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

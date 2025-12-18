import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Target, Eye, Heart, Users, TrendingUp, Shield, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1E3A8A] to-[#1E3A8A]/90 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About ServiGroww</h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Empowering India's blue-collar workforce with dignity, opportunity, and digital identity
              </p>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">The Problem We're Solving</h2>
              <p className="text-lg text-center text-muted-foreground mb-12 leading-relaxed">
                India has millions of skilled blue-collar workers, yet they face daily challenges
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="shadow-md border-2">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-3 text-[#1E3A8A]">For Workers</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-[#1E3A8A] font-bold">•</span>
                        <span>Limited visibility to potential customers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#1E3A8A] font-bold">•</span>
                        <span>Dependence on middlemen who take heavy commissions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#1E3A8A] font-bold">•</span>
                        <span>No digital professional identity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#1E3A8A] font-bold">•</span>
                        <span>Irregular work and income uncertainty</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#1E3A8A] font-bold">•</span>
                        <span>Difficulty building reputation and trust</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-md border-2">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-3 text-[#1E3A8A]">For Customers</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-[#1E3A8A] font-bold">•</span>
                        <span>Hard to find reliable skilled workers nearby</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#1E3A8A] font-bold">•</span>
                        <span>No way to verify skills and credentials</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#1E3A8A] font-bold">•</span>
                        <span>Lack of transparency in pricing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#1E3A8A] font-bold">•</span>
                        <span>No recourse for poor service quality</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#1E3A8A] font-bold">•</span>
                        <span>Time wasted searching and negotiating</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24 bg-[#F8FAFC]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-[#16A34A] rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl leading-relaxed text-muted-foreground mb-8">
                To empower India's blue-collar workforce by giving them a digital identity, fair access to work, and
                direct connection with customers - all while maintaining transparency, trust, and dignity in every
                interaction.
              </p>
              <Card className="bg-white shadow-lg border-2 border-[#16A34A]">
                <CardContent className="pt-6">
                  <p className="text-lg font-semibold text-[#16A34A]">
                    We believe every skilled worker deserves respect, fair compensation, and the opportunity to grow
                    their livelihood using technology.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-[#1E3A8A] rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-xl leading-relaxed text-muted-foreground mb-8">
                To become the default platform where every skilled worker in India can find work nearby, build their
                professional reputation, and grow their livelihood - creating a thriving ecosystem that benefits workers
                and customers equally.
              </p>
            </div>
          </div>
        </section>

        {/* Why ServiGroww Exists Section */}
        <section className="py-16 md:py-24 bg-[#F8FAFC]">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why ServiGroww Exists</h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="shadow-md">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-[#16A34A] rounded-full flex items-center justify-center mb-4">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Worker-First Approach</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We put workers at the center of everything we do. No heavy commissions, no unfair practices - just
                      fair opportunity.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-md">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-[#1E3A8A] rounded-full flex items-center justify-center mb-4">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Digital Identity</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Every worker deserves a professional digital presence. SkillID gives them exactly that.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-md">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-[#F97316] rounded-full flex items-center justify-center mb-4">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Trust & Safety</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Verified workers, transparent reviews, and secure processes protect everyone in the ecosystem.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-md">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-[#1E3A8A] rounded-full flex items-center justify-center mb-4">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Income Growth</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      More visibility and direct connections mean workers can grow their income sustainably.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-md">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-[#16A34A] rounded-full flex items-center justify-center mb-4">
                      <Globe className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Built for India</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Designed specifically for Indian workers and customers, understanding local needs and challenges.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-md">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-[#F97316] rounded-full flex items-center justify-center mb-4">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Community Impact</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Creating positive social impact by empowering millions of skilled workers across India.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Future Roadmap Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Our Roadmap</h2>
              <p className="text-center text-muted-foreground mb-12 leading-relaxed">
                Building the future of blue-collar work in India
              </p>

              <div className="space-y-6">
                <Card className="shadow-md border-l-4 border-l-[#16A34A]">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#16A34A] rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                        Q2
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">2025: Launch Android & iOS Apps</h3>
                        <p className="text-muted-foreground">
                          Release mobile apps for workers and customers in major cities
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-md border-l-4 border-l-[#1E3A8A]">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#1E3A8A] rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                        Q3
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">2025: Expand to 25+ Cities</h3>
                        <p className="text-muted-foreground">
                          Scale operations across Tier 1 and Tier 2 cities nationwide
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-md border-l-4 border-l-[#F97316]">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#F97316] rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                        Q4
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">2025: Launch Skill Certification Program</h3>
                        <p className="text-muted-foreground">
                          Partner with training institutes to offer verified skill certifications
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-md border-l-4 border-l-[#16A34A]">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#16A34A] rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                        2026
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Beyond: Financial Services & Insurance</h3>
                        <p className="text-muted-foreground">
                          Provide access to microloans, insurance, and financial planning for workers
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-[#1E3A8A] to-[#1E3A8A]/90 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Mission</h2>
              <p className="text-lg mb-8 text-white/90">Be part of the movement to empower India's workforce</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register">
                  <Button size="lg" className="bg-[#16A34A] hover:bg-[#16A34A]/90 text-white">
                    Register as Worker
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#1E3A8A] bg-transparent"
                  >
                    Get in Touch
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

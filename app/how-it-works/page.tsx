import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { UserCircle, Shield, Bell, TrendingUp, Search, Users, MessageCircle, CheckCircle, Star } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1E3A8A] to-[#1E3A8A]/90 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Simple steps to connect skilled workers with customers across India
              </p>
            </div>
          </div>
        </section>

        {/* For Workers Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#16A34A]">For Workers</h2>
                <p className="text-lg text-muted-foreground">Build your digital identity and grow your income</p>
              </div>

              <div className="space-y-12">
                {/* Step 1 */}
                <Card className="shadow-lg border-2 border-[#16A34A]/20">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-[#16A34A] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                          1
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <UserCircle className="h-6 w-6 text-[#16A34A]" />
                          <h3 className="text-2xl font-bold">Register Easily</h3>
                        </div>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          Sign up with your basic details - name, phone number, city, and your skill category. No
                          complicated paperwork or lengthy processes.
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                            <span>Quick 5-minute registration process</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                            <span>Works on any smartphone</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                            <span>Multilingual support available</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Step 2 */}
                <Card className="shadow-lg border-2 border-[#16A34A]/20">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-[#16A34A] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                          2
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Shield className="h-6 w-6 text-[#16A34A]" />
                          <h3 className="text-2xl font-bold">Create Your SkillID</h3>
                        </div>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          Build your professional digital profile with your skills, experience, work photos, and
                          availability. This becomes your unique SkillID.
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                            <span>Upload work samples and certifications</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                            <span>List your skills and experience level</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                            <span>Set your availability and preferred work areas</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Step 3 */}
                <Card className="shadow-lg border-2 border-[#16A34A]/20">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-[#16A34A] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                          3
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Shield className="h-6 w-6 text-[#16A34A]" />
                          <h3 className="text-2xl font-bold">Get Verified</h3>
                        </div>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          Complete our quick verification process to build trust with customers. Verified workers get
                          more job opportunities.
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                            <span>Identity verification with Aadhaar</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                            <span>Skill assessment by our team</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                            <span>Get your verified badge</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Step 4 */}
                <Card className="shadow-lg border-2 border-[#16A34A]/20">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-[#16A34A] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                          4
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Bell className="h-6 w-6 text-[#16A34A]" />
                          <h3 className="text-2xl font-bold">Get Nearby Job Requests</h3>
                        </div>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          Receive notifications when customers near you are looking for your skills. Respond quickly to
                          secure more work.
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                            <span>Real-time job notifications</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                            <span>See job details and customer location</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                            <span>Accept or decline based on your availability</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Step 5 */}
                <Card className="shadow-lg border-2 border-[#16A34A]/20">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-[#16A34A] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                          5
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Star className="h-6 w-6 text-[#16A34A]" />
                          <h3 className="text-2xl font-bold">Build Reputation</h3>
                        </div>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          Complete jobs, get positive reviews, and build your professional reputation. Higher ratings
                          mean more work opportunities.
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                            <span>Customer ratings and reviews</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                            <span>Showcase your completed projects</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                            <span>Earn badges and achievements</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Step 6 */}
                <Card className="shadow-lg border-2 border-[#16A34A]/20">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-[#16A34A] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                          6
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <TrendingUp className="h-6 w-6 text-[#16A34A]" />
                          <h3 className="text-2xl font-bold">Grow Your Income</h3>
                        </div>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          With more visibility, fair pricing, and direct customer connections, grow your earnings
                          steadily month after month.
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                            <span>No heavy commissions - keep more of what you earn</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                            <span>Set your own rates</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                            <span>Track your earnings and growth</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-12">
                <Link href="/register">
                  <Button size="lg" className="bg-[#16A34A] hover:bg-[#16A34A]/90 text-white">
                    Register as Worker Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* For Customers Section */}
        <section className="py-16 md:py-24 bg-[#F8FAFC]">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1E3A8A]">For Customers</h2>
                <p className="text-lg text-muted-foreground">Find skilled workers near you in minutes</p>
              </div>

              <div className="space-y-12">
                {/* Step 1 */}
                <Card className="shadow-lg border-2 border-[#1E3A8A]/20">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-[#1E3A8A] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                          1
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Search className="h-6 w-6 text-[#1E3A8A]" />
                          <h3 className="text-2xl font-bold">Search by Service</h3>
                        </div>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          Browse our comprehensive list of services or search for the specific skill you need - from
                          electricians to carpenters to home nurses.
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-[#1E3A8A] flex-shrink-0 mt-0.5" />
                            <span>10+ job categories available</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-[#1E3A8A] flex-shrink-0 mt-0.5" />
                            <span>Easy search and filtering</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Step 2 */}
                <Card className="shadow-lg border-2 border-[#1E3A8A]/20">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-[#1E3A8A] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                          2
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Users className="h-6 w-6 text-[#1E3A8A]" />
                          <h3 className="text-2xl font-bold">See Nearby Workers</h3>
                        </div>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          View verified workers available in your area with their profiles, ratings, reviews, and
                          availability status.
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-[#1E3A8A] flex-shrink-0 mt-0.5" />
                            <span>Location-based worker discovery</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-[#1E3A8A] flex-shrink-0 mt-0.5" />
                            <span>View complete profiles and past work</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-[#1E3A8A] flex-shrink-0 mt-0.5" />
                            <span>Check real-time availability</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Step 3 */}
                <Card className="shadow-lg border-2 border-[#1E3A8A]/20">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-[#1E3A8A] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                          3
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <MessageCircle className="h-6 w-6 text-[#1E3A8A]" />
                          <h3 className="text-2xl font-bold">Talk Directly</h3>
                        </div>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          Connect directly with workers via chat or call. Discuss your requirements, negotiate pricing,
                          and schedule the work.
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-[#1E3A8A] flex-shrink-0 mt-0.5" />
                            <span>Direct messaging with workers</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-[#1E3A8A] flex-shrink-0 mt-0.5" />
                            <span>No middlemen or hidden fees</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-[#1E3A8A] flex-shrink-0 mt-0.5" />
                            <span>Discuss details before booking</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Step 4 */}
                <Card className="shadow-lg border-2 border-[#1E3A8A]/20">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-[#1E3A8A] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                          4
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <CheckCircle className="h-6 w-6 text-[#1E3A8A]" />
                          <h3 className="text-2xl font-bold">Get Work Done</h3>
                        </div>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          The worker arrives at your location, completes the job professionally, and you pay directly.
                          Simple and transparent.
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-[#1E3A8A] flex-shrink-0 mt-0.5" />
                            <span>Professional service delivery</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-[#1E3A8A] flex-shrink-0 mt-0.5" />
                            <span>Track job progress</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-[#1E3A8A] flex-shrink-0 mt-0.5" />
                            <span>Direct payment to worker</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Step 5 */}
                <Card className="shadow-lg border-2 border-[#1E3A8A]/20">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-[#1E3A8A] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                          5
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Star className="h-6 w-6 text-[#1E3A8A]" />
                          <h3 className="text-2xl font-bold">Rate & Review</h3>
                        </div>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          Share your experience by rating the worker and leaving a review. Help others make informed
                          decisions.
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-[#1E3A8A] flex-shrink-0 mt-0.5" />
                            <span>Rate service quality</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-[#1E3A8A] flex-shrink-0 mt-0.5" />
                            <span>Write detailed reviews</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-[#1E3A8A] flex-shrink-0 mt-0.5" />
                            <span>Help build a trusted community</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-12">
                <Button size="lg" className="bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white">
                  Find Workers Near You
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

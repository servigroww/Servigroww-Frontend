import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, User, ArrowLeft } from "lucide-react"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1E3A8A] to-[#1E3A8A]/90 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link href="/blog">
                <Button variant="ghost" className="text-white hover:bg-white/10 mb-6">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Button>
              </Link>
              <span className="inline-block bg-white/20 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
                Success Stories
              </span>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
                From Daily Wages to Digital Success: Rajesh's Journey
              </h1>
              <div className="flex items-center gap-6 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>ServiGroww Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>March 15, 2025</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <img
                src="/indian-electrician-working-professionally.jpg"
                alt="Blog post cover"
                className="w-full h-auto rounded-lg shadow-lg mb-8"
              />

              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Rajesh Kumar, a 35-year-old electrician from Delhi, never imagined that a smartphone app would
                  transform his career and triple his monthly income. This is his inspiring story of digital
                  transformation.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">The Struggle Before ServiGroww</h2>
                <p className="leading-relaxed text-muted-foreground mb-6">
                  For over 12 years, Rajesh worked as an electrician, relying on word-of-mouth referrals and local
                  contractors for work. His income was inconsistent, and he often struggled to find enough projects to
                  support his family. The biggest challenge was visibility - potential customers in his area didn't know
                  about his skills and reliability.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Discovering ServiGroww</h2>
                <p className="leading-relaxed text-muted-foreground mb-6">
                  In early 2025, Rajesh heard about ServiGroww from a fellow worker. Initially skeptical about using
                  technology for work, he decided to give it a try after learning that registration was free and the
                  platform charged no heavy commissions. Within minutes, he had created his SkillID - his digital
                  professional profile.
                </p>

                <Card className="my-8 bg-[#F8FAFC] border-2 border-[#16A34A]">
                  <CardContent className="pt-6">
                    <p className="text-lg font-semibold mb-2 text-[#16A34A]">Rajesh's Success Metrics</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Monthly income increased from 15,000 to 45,000 in 6 months</li>
                      <li>Completed over 150 successful jobs</li>
                      <li>Maintains a 4.8-star rating with 120+ reviews</li>
                      <li>Now gets 3-5 job requests daily</li>
                    </ul>
                  </CardContent>
                </Card>

                <h2 className="text-2xl font-bold mt-8 mb-4">The Transformation</h2>
                <p className="leading-relaxed text-muted-foreground mb-6">
                  The change didn't happen overnight, but it was steady. In his first month, Rajesh received 8 job
                  requests through the app. He made sure to complete each job professionally and encouraged customers to
                  leave reviews. As his ratings improved, so did the number of requests.
                </p>

                <p className="leading-relaxed text-muted-foreground mb-6">
                  Today, Rajesh is one of the top-rated electricians in his area. He no longer worries about finding
                  work - instead, he carefully selects which projects to take based on his schedule and rates. He's even
                  started mentoring other electricians in his community about using digital platforms effectively.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Key Takeaways</h2>
                <p className="leading-relaxed text-muted-foreground mb-4">
                  Rajesh's success offers valuable lessons for other workers:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>Quality work and professionalism build a strong digital reputation</li>
                  <li>Responding quickly to customer requests increases success rates</li>
                  <li>Maintaining fair pricing attracts repeat customers</li>
                  <li>Good reviews are the foundation of long-term success</li>
                  <li>Technology can be a powerful tool for traditional workers</li>
                </ul>

                <Card className="my-8 bg-[#1E3A8A] text-white border-0">
                  <CardContent className="pt-6">
                    <p className="text-lg font-semibold mb-2">Rajesh's Advice to New Workers</p>
                    <p className="text-white/90 italic">
                      "Don't be afraid of technology. ServiGroww is simple to use, and it gives you control over your
                      work. Build your profile, do quality work, and the customers will come. This platform has given me
                      respect, regular income, and a better future for my children."
                    </p>
                  </CardContent>
                </Card>

                <h2 className="text-2xl font-bold mt-8 mb-4">Your Turn</h2>
                <p className="leading-relaxed text-muted-foreground mb-6">
                  Rajesh's story is just one of thousands on ServiGroww. Whether you're an electrician, plumber,
                  carpenter, or any other skilled worker, you too can build a successful career using the platform. The
                  digital revolution in blue-collar work is here, and it's creating opportunities for everyone.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/register" className="flex-1">
                    <Button size="lg" className="w-full bg-[#16A34A] hover:bg-[#16A34A]/90 text-white">
                      Register as Worker
                    </Button>
                  </Link>
                  <Link href="/blog" className="flex-1">
                    <Button size="lg" variant="outline" className="w-full bg-transparent">
                      Read More Stories
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: "success-story-electrician-delhi",
    title: "From Daily Wages to Digital Success: Rajesh's Journey",
    excerpt: "How an electrician from Delhi tripled his income using ServiGroww's platform and digital SkillID.",
    category: "Success Stories",
    author: "ServiGroww Team",
    date: "March 15, 2025",
    image: "/indian-electrician-working.jpg",
  },
  {
    id: "improve-carpenter-skills",
    title: "5 Skills Every Modern Carpenter Should Master",
    excerpt: "Essential carpentry skills that will help you stand out and win more customers in today's market.",
    category: "Skill Development",
    author: "Priya Sharma",
    date: "March 12, 2025",
    image: "/carpenter-working-on-furniture.jpg",
  },
  {
    id: "blue-collar-digital-revolution",
    title: "The Digital Revolution in Blue-Collar Jobs",
    excerpt:
      "Understanding how technology is transforming traditional blue-collar work and creating new opportunities.",
    category: "Industry Insights",
    author: "Amit Kumar",
    date: "March 10, 2025",
    image: "/indian-workers-using-smartphone.jpg",
  },
  {
    id: "build-customer-trust",
    title: "How to Build Customer Trust as a Service Worker",
    excerpt: "Practical tips for creating lasting relationships with customers and getting repeat business.",
    category: "Tips & Guides",
    author: "Neha Patel",
    date: "March 8, 2025",
    image: "/handshake-trust-business.jpg",
  },
  {
    id: "plumber-success-mumbai",
    title: "Success Story: How Suresh Built a Team of 10 Plumbers",
    excerpt: "From solo plumber to team leader, learn how Suresh grew his business using ServiGroww.",
    category: "Success Stories",
    author: "ServiGroww Team",
    date: "March 5, 2025",
    image: "/team-of-plumbers.jpg",
  },
  {
    id: "safety-tips-construction",
    title: "Essential Safety Tips for Construction Workers",
    excerpt: "Stay safe on the job with these important safety guidelines and best practices.",
    category: "Safety & Health",
    author: "Dr. Vikram Singh",
    date: "March 3, 2025",
    image: "/construction-worker-safety-helmet.jpg",
  },
]

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1E3A8A] to-[#1E3A8A]/90 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">ServiGroww Blog</h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Success stories, skill tips, industry insights, and resources for India's workforce
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {blogPosts.map((post) => (
                <Card key={post.id} className="shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                  <CardContent className="pt-6">
                    <div className="mb-3">
                      <span className="inline-block bg-[#1E3A8A] text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <Button variant="outline" className="w-full group bg-transparent">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 md:py-24 bg-[#F8FAFC]">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Subscribe to get the latest success stories, tips, and industry insights delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                />
                <Button className="bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white px-8">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

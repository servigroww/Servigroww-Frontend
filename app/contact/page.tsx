"use client"

import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { Mail, Phone, MapPin, MessageCircle, CheckCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center py-16 bg-[#F8FAFC]">
          <Card className="max-w-2xl w-full mx-4 shadow-lg">
            <CardContent className="pt-12 pb-12 text-center">
              <div className="w-20 h-20 bg-[#16A34A] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Message Received!</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Thank you for contacting ServiGroww. Our team will get back to you within 24-48 hours.
              </p>
              <Button
                onClick={() => (window.location.href = "/")}
                size="lg"
                className="bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white"
              >
                Return to Home
              </Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1E3A8A] to-[#1E3A8A]/90 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Have questions? We're here to help. Reach out to our support team.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="shadow-md border-2">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-[#1E3A8A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                  <p className="text-sm text-muted-foreground mb-2">We'll respond within 24 hours</p>
                  <a href="mailto:support@servigroww.com" className="text-[#1E3A8A] font-medium">
                    support@servigroww.com
                  </a>
                </CardContent>
              </Card>

              <Card className="shadow-md border-2">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-[#16A34A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                  <p className="text-sm text-muted-foreground mb-2">Mon-Sat, 9 AM - 6 PM IST</p>
                  <a href="tel:+911234567890" className="text-[#16A34A] font-medium">
                    +91 123 456 7890
                  </a>
                </CardContent>
              </Card>

              <Card className="shadow-md border-2">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-[#F97316] rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground mb-2">Quick support via chat</p>
                  <a href="https://wa.me/911234567890" className="text-[#F97316] font-medium">
                    Chat on WhatsApp
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-[#F8FAFC]">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Send Us a Message</h2>
                <p className="text-muted-foreground">Fill out the form below and we'll get back to you soon</p>
              </div>

              <Card className="shadow-lg">
                <CardContent className="pt-8 pb-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Full Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <Label htmlFor="subject">
                        Subject <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        required
                        value={formData.subject}
                        onValueChange={(value) => setFormData({ ...formData, subject: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="worker-support">Worker Support</SelectItem>
                          <SelectItem value="customer-support">Customer Support</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                          <SelectItem value="feedback">Feedback or Suggestion</SelectItem>
                          <SelectItem value="technical">Technical Issue</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">
                        Message <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us how we can help you..."
                        rows={6}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" size="lg" className="w-full bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-muted-foreground">Quick answers to common questions</p>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    How do I register as a worker on ServiGroww?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Click on "Register as Worker" in the navigation menu, fill out the registration form with your
                    details, and submit. You'll receive a confirmation message, and we'll notify you when our app
                    launches.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    Is ServiGroww free to use for workers?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, registration is completely free. We charge minimal platform fees only when you complete jobs,
                    ensuring you keep most of what you earn. No heavy commissions like other platforms.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    Which cities does ServiGroww currently operate in?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We're currently available in Delhi, Mumbai, Bengaluru, Lucknow, Jaipur, Hyderabad, Pune, Kolkata,
                    Chennai, and Ahmedabad. We're rapidly expanding to more cities across India.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    How does the verification process work?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    After registration, you'll need to provide identity documents (Aadhaar) and complete a skill
                    assessment. This helps build trust with customers and gives you a verified badge on your profile.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    Can customers contact workers directly?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes! ServiGroww enables direct communication between customers and workers. You can chat or call
                    directly through the app without any middlemen, discuss requirements, and negotiate pricing.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    What happens if I face an issue with a worker or customer?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Our support team is here to help resolve any disputes. You can report issues through the app or
                    contact us directly. We take all complaints seriously and work to maintain a safe, fair platform for
                    everyone.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mt-12 text-center">
                <p className="text-muted-foreground mb-4">Still have questions?</p>
                <Button className="bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white">Contact Support Team</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Office Location */}
        <section className="py-16 bg-[#F8FAFC]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-lg">
                <CardContent className="pt-8 pb-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-[#1E3A8A] rounded-lg flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold">Our Office</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        ServiGroww Technologies Pvt. Ltd.
                        <br />
                        Sector 62, Noida
                        <br />
                        Uttar Pradesh 201301
                        <br />
                        India
                      </p>
                      <div className="space-y-2 text-sm">
                        <p>
                          <span className="font-semibold">Business Hours:</span>
                          <br />
                          Monday - Saturday: 9:00 AM - 6:00 PM IST
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-[#F8FAFC] rounded-lg p-6 h-full flex items-center justify-center">
                        <p className="text-center text-muted-foreground">
                          Map placeholder
                          <br />
                          <span className="text-xs">(Integrated map view)</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

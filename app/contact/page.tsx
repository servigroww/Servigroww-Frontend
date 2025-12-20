"use client"

import type React from "react"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MessageCircle, CheckCircle, MapPin } from "lucide-react"
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
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Header />
        <main className="flex-1 flex items-center justify-center px-4">
          <Card className="max-w-lg w-full border shadow-xl">
            <CardContent className="pt-12 pb-10 text-center">
              <div className="w-20 h-20 bg-sky-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-3">Message Sent</h2>
              <p className="text-gray-600 mb-6">
                Thanks for reaching out. Our team will respond within 24–48 hours.
              </p>
              <Button className="bg-sky-600 hover:bg-sky-700" onClick={() => location.reload()}>
                Back to Contact
              </Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-linear-to-br from-sky-600 to-cyan-500 text-white py-20">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact ServiGroww</h1>
            <p className="text-lg text-white/90">
              We’re here to help workers and customers succeed.
            </p>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-3 gap-6">
            {[
              { icon: Mail, title: "Email", value: "support@servigroww.com", color: "sky" },
              { icon: Phone, title: "Call", value: "+91 123 456 7890", color: "emerald" },
              { icon: MessageCircle, title: "WhatsApp", value: "Chat with us", color: "orange" },
            ].map(({ icon: Icon, title, value, color }) => (
              <Card key={title} className="border shadow-sm hover:shadow-md transition">
                <CardContent className="pt-8 text-center">
                  <div className={`w-14 h-14 bg-${color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`h-6 w-6 text-${color}-600`} />
                  </div>
                  <h3 className="font-semibold mb-1">{title}</h3>
                  <p className="text-sm text-gray-600">{value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Form */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-xl">
            <Card className="shadow-xl border">
              <CardContent className="pt-10 pb-8">
                <h2 className="text-3xl font-bold text-center mb-6">
                  Send us a message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label>Full Name</Label>
                    <Input required placeholder="Your name" />
                  </div>

                  <div>
                    <Label>Email</Label>
                    <Input type="email" required placeholder="you@email.com" />
                  </div>

                  <div>
                    <Label>Phone</Label>
                    <Input placeholder="Optional" />
                  </div>

                  <div>
                    <Label>Subject</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose one" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General</SelectItem>
                        <SelectItem value="worker">Worker Support</SelectItem>
                        <SelectItem value="customer">Customer Support</SelectItem>
                        <SelectItem value="partner">Partnership</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Message</Label>
                    <Textarea rows={5} placeholder="How can we help?" />
                  </div>

                  <Button className="w-full bg-sky-600 hover:bg-sky-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-10">
              FAQs
            </h2>

            <Accordion type="single" collapsible>
              {[
                ["Is ServiGroww free for workers?", "Yes, registration is free with minimal platform fees only on completed jobs."],
                ["Can customers contact workers directly?", "Yes, direct chat and calling is supported."],
                ["How does verification work?", "We verify identity and skills to build trust."],
              ].map(([q, a], i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border rounded-lg px-5 mb-4">
                  <AccordionTrigger className="font-medium">{q}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Office */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="shadow-lg">
              <CardContent className="pt-8 grid md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="text-sky-600" />
                    <h3 className="text-2xl font-bold">Our Office</h3>
                  </div>
                  <p className="text-gray-600">
                    ServiGroww Technologies Pvt. Ltd.<br />
                    Sector 62, Noida<br />
                    Uttar Pradesh, India
                  </p>
                </div>
                <div className="bg-slate-100 rounded-lg flex items-center justify-center text-sm text-gray-500">
                  Map integration
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

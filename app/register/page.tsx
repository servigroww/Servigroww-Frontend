"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { CheckCircle } from "lucide-react"

const categories = [
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

const cities = [
  "Delhi",
  "Mumbai",
  "Bengaluru",
  "Lucknow",
  "Jaipur",
  "Hyderabad",
  "Pune",
  "Kolkata",
  "Chennai",
  "Ahmedabad",
]

export default function RegisterPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    category: "",
    experience: "",
    description: "",
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
              <h2 className="text-3xl font-bold mb-4">Thank You for Registering!</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We've received your registration. Our app is launching soon, and we'll notify you as soon as it's
                available.
              </p>
              <div className="bg-[#F8FAFC] p-6 rounded-lg mb-6">
                <p className="font-semibold mb-2">What happens next?</p>
                <ul className="text-sm text-muted-foreground space-y-2 text-left max-w-md mx-auto">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                    <span>You'll receive a confirmation message on your phone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                    <span>We'll notify you when the app launches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                    <span>You can start creating your SkillID immediately</span>
                  </li>
                </ul>
              </div>
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
        <section className="bg-gradient-to-br from-[#16A34A] to-[#16A34A]/90 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Register as Worker</h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Join ServiGroww and start building your digital professional identity
              </p>
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="shadow-lg">
                <CardContent className="pt-8 pb-8">
                  <h2 className="text-2xl font-bold mb-6">Worker Registration Form</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Full Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone">
                        Phone Number <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="10-digit mobile number"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    {/* City */}
                    <div className="space-y-2">
                      <Label htmlFor="city">
                        City <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        required
                        value={formData.city}
                        onValueChange={(value) => setFormData({ ...formData, city: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your city" />
                        </SelectTrigger>
                        <SelectContent>
                          {cities.map((city) => (
                            <SelectItem key={city} value={city}>
                              {city}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Skill Category */}
                    <div className="space-y-2">
                      <Label htmlFor="category">
                        Skill Category <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        required
                        value={formData.category}
                        onValueChange={(value) => setFormData({ ...formData, category: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your primary skill" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Experience */}
                    <div className="space-y-2">
                      <Label htmlFor="experience">
                        Years of Experience <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="experience"
                        type="number"
                        placeholder="Number of years"
                        min="0"
                        required
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      />
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                      <Label htmlFor="description">Brief Description (Optional)</Label>
                      <Textarea
                        id="description"
                        placeholder="Tell us about your skills and experience..."
                        rows={4}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      />
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" size="lg" className="w-full bg-[#16A34A] hover:bg-[#16A34A]/90 text-white">
                      Submit Registration
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Info Section */}
              <div className="mt-8 bg-[#F8FAFC] p-6 rounded-lg">
                <h3 className="font-semibold mb-3">What happens after registration?</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                    <span>You'll receive a confirmation message</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                    <span>We'll notify you when our app launches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                    <span>You can complete your SkillID profile in the app</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                    <span>Start receiving nearby job opportunities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

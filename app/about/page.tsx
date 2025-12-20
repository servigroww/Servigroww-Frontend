import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Linkedin, Sparkles, Users, Target } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sky-600 to-cyan-500 text-white py-20">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About ServiGroww
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Building dignity, trust, and opportunity for India’s blue-collar
              workforce
            </p>
          </div>
        </section>

        {/* The Idea Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-sky-600" />
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              The Idea Behind ServiGroww
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              To empower India's blue-collar workforce by giving them a digital
              identity, fair access to work, and direct connection with
              customers all while maintaining transparency, trust, and dignity
              in every interaction.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Our vision is to become the default platform where every skilled
              worker in India can find work nearby, build their professional
              reputation, and grow their livelihood creating a thriving
              ecosystem that benefits workers and customers equally.
            </p>
          </div>
        </section>

        {/* What We Stand For */}
        <section className="py-20 bg-sky-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-md">
                <CardContent className="pt-6 text-center">
                  <Target className="h-10 w-10 mx-auto text-sky-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Purpose Driven</h3>
                  <p className="text-gray-600">
                    We exist to solve real problems faced by skilled workers
                    every day.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="pt-6 text-center">
                  <Users className="h-10 w-10 mx-auto text-sky-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Worker First</h3>
                  <p className="text-gray-600">
                    Fair access, no middlemen, and full control over their work
                    and income.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="pt-6 text-center">
                  <Sparkles className="h-10 w-10 mx-auto text-sky-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Built on Trust</h3>
                  <p className="text-gray-600">
                    Transparency, verified profiles, and reputation-based
                    growth.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Founder & Behind the Idea */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-4">
              The People Behind ServiGroww
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              ServiGroww was born from a simple belief skilled workers deserve
              dignity, visibility, and fair opportunities through technology.
            </p>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Shivam Kumar */}
              <Card className="border shadow-md">
                <CardContent className="pt-8 text-center">
                  <div className="w-24 h-24 mx-auto rounded-full bg-sky-100 mb-4 flex items-center justify-center text-sky-600 font-bold text-xl">
                    SK
                  </div>
                  <h3 className="text-xl font-semibold">Shivam Kumar</h3>
                  <p className="text-sky-600 font-medium mb-2">Founder & CEO</p>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Shivam envisioned ServiGroww to bridge the gap between
                    skilled blue-collar workers and customers by giving workers
                    a digital identity, respect, and direct access to work
                    without middlemen.
                  </p>

                  <div className="flex justify-center gap-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="h-5 w-5 text-sky-600 hover:text-sky-800" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5 text-sky-600 hover:text-sky-800" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Satyam Choubey */}
              <Card className="border shadow-md">
                <CardContent className="pt-8 text-center">
                  <div className="w-24 h-24 mx-auto rounded-full bg-sky-100 mb-4 flex items-center justify-center text-sky-600 font-bold text-xl">
                    SC
                  </div>
                  <h3 className="text-xl font-semibold">Satyam Choubey</h3>
                  <p className="text-sky-600 font-medium mb-2">
                    Co-Founder & CTO
                  </p>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Satyam leads the technology vision at ServiGroww, building
                    scalable, secure, and worker-friendly digital solutions that
                    power trust, transparency, and growth across the platform.
                  </p>

                  <div className="flex justify-center gap-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="h-5 w-5 text-sky-600 hover:text-sky-800" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5 text-sky-600 hover:text-sky-800" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

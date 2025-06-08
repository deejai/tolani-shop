"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // In a real app, this would submit to your API
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      })

      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#f5efe7] py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-playfair text-[#1a2942] mb-6">Contact Us</h1>
          <p className="text-xl text-[#1a2942]/80">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-playfair text-[#1a2942] mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this about?"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                  />
                </div>
                <Button type="submit" disabled={loading} className="bg-[#1a2942] hover:bg-[#2a3952] w-full">
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-playfair text-[#1a2942] mb-6">Get in touch</h2>
                <p className="text-gray-600 mb-8">
                  Have questions about our products, need styling advice, or want to collaborate? We're here to help!
                </p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <MapPin className="h-5 w-5 text-[#d5a293]" />
                      Visit Our Store
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      123 Fashion Street
                      <br />
                      Victoria Island, Lagos
                      <br />
                      Nigeria
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <Phone className="h-5 w-5 text-[#d5a293]" />
                      Call Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      +234 123 456 7890
                      <br />
                      +234 987 654 3210
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <Mail className="h-5 w-5 text-[#d5a293]" />
                      Email Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      info@apparkompan.com
                      <br />
                      support@apparkompan.com
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <Clock className="h-5 w-5 text-[#d5a293]" />
                      Store Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                      <p>Saturday: 10:00 AM - 6:00 PM</p>
                      <p>Sunday: 12:00 PM - 5:00 PM</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & FAQ */}
      <section className="bg-[#f5efe7] py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-playfair text-[#1a2942] mb-6">Follow Us</h3>
              <p className="text-gray-600 mb-6">
                Stay connected with us on social media for the latest updates, behind-the-scenes content, and styling
                tips.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://facebook.com"
                  className="flex items-center justify-center w-12 h-12 bg-[#1a2942] text-white rounded-full hover:bg-[#2a3952] transition-colors"
                >
                  <Facebook size={20} />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="https://instagram.com"
                  className="flex items-center justify-center w-12 h-12 bg-[#1a2942] text-white rounded-full hover:bg-[#2a3952] transition-colors"
                >
                  <Instagram size={20} />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="https://twitter.com"
                  className="flex items-center justify-center w-12 h-12 bg-[#1a2942] text-white rounded-full hover:bg-[#2a3952] transition-colors"
                >
                  <Twitter size={20} />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>

            {/* Quick FAQ */}
            <div>
              <h3 className="text-2xl font-playfair text-[#1a2942] mb-6">Quick Answers</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-[#1a2942] mb-2">Do you ship nationwide?</h4>
                  <p className="text-sm text-gray-600">
                    Yes! We deliver to all 36 states in Nigeria. Free shipping on orders over ₦20,000 within Lagos.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-[#1a2942] mb-2">What payment methods do you accept?</h4>
                  <p className="text-sm text-gray-600">
                    We accept OPay, First Bank transfers, PayPal, Bitcoin, and all major credit/debit cards.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-[#1a2942] mb-2">Can I return or exchange items?</h4>
                  <p className="text-sm text-gray-600">
                    Yes, we accept returns and exchanges within 14 days of delivery. Items must be in original
                    condition.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-[#1a2942] mb-2">Do you offer custom sizing?</h4>
                  <p className="text-sm text-gray-600">
                    We offer custom sizing for select items. Contact us for more information about our tailoring
                    services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="bg-[#1a2942] text-white py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl font-playfair mb-4">Prefer WhatsApp?</h3>
          <p className="text-gray-300 mb-6">Get instant support and updates by messaging us directly on WhatsApp</p>
          <Button
            asChild
            className="bg-green-600 hover:bg-green-700 text-white"
            onClick={() => window.open("https://wa.me/2341234567890", "_blank")}
          >
            <a href="https://wa.me/2341234567890" target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}

"use client"

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import AnimatedSection from '@/components/animated-section'
import PageTransition from '@/components/page-transition'
import { submitContactForm } from '../actions'
import { useToast } from '@/hooks/use-toast'


export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    const result = await submitContactForm(formData)
    setIsSubmitting(false)

    if (result.success) {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you soon!",
      })
      // Reset the form
      const form = document.getElementById('contact-form') as HTMLFormElement
      form.reset()
    } else {
      toast({
        title: "Error",
        description: "There was a problem submitting your message. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16">
        <AnimatedSection>
          <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
          <p className="text-xl mb-12 text-center max-w-2xl mx-auto">
            Get in touch with Q3M Wanda Solutions. We&apos;re here to answer your questions and discuss how we can help your business thrive.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>
              <form id="contact-form" action={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <Input
                    id="name"
                    name="name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                  />
                </div>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <p>
                  <strong>Address:</strong><br />
                  123 Tech Plaza, Suite 400<br />
                  San Francisco, CA 94105
                </p>
                <p>
                  <strong>Phone:</strong><br />
                  +1 (555) 123-4567
                </p>
                <p>
                  <strong>Email:</strong><br />
                  info@q3mwandasolutions.com
                </p>
                <p>
                  <strong>Business Hours:</strong><br />
                  Monday - Friday: 9:00 AM - 6:00 PM (PST)
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </PageTransition>
  )
}
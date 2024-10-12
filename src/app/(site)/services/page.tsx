import { Metadata } from 'next'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import AnimatedSection from '@/components/animated-section'
import Testimonials from '@/components/Testimonials'

export const metadata: Metadata = {
  title: 'Our Services - Q3M Wanda Solutions',
  description: 'Explore the range of innovative business solutions offered by Q3M Wanda Solutions, including digital transformation, data analytics, and cloud services.',
}

const services = [
  {
    title: "Digital Transformation",
    description: "Revolutionize your business processes with our cutting-edge digital solutions.",
    features: ["Process Automation", "Digital Strategy Consulting", "Legacy System Modernization"],
  },
  {
    title: "Data Analytics",
    description: "Harness the power of your data with our advanced analytics services.",
    features: ["Big Data Processing", "Predictive Analytics", "Data Visualization"],
  },
  {
    title: "Cloud Solutions",
    description: "Scale your infrastructure effortlessly with our cloud-based solutions.",
    features: ["Cloud Migration", "Hybrid Cloud Management", "Cloud-Native Development"],
  },
  {
    title: "Cybersecurity",
    description: "Protect your digital assets with our comprehensive cybersecurity services.",
    features: ["Threat Detection", "Security Audits", "Incident Response Planning"],
  },
  {
    title: "AI and Machine Learning",
    description: "Leverage the power of AI to gain a competitive edge in your industry.",
    features: ["Custom AI Models", "Natural Language Processing", "Computer Vision Solutions"],
  },
  {
    title: "IoT Solutions",
    description: "Connect and optimize your devices with our Internet of Things expertise.",
    features: ["IoT Strategy and Consulting", "IoT Platform Development", "Edge Computing Solutions"],
  },
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <AnimatedSection>
        <h1 className="text-4xl font-bold mb-6 text-center">Our Services</h1>
        <p className="text-xl mb-12 text-center max-w-2xl mx-auto">
          Discover how Q3M Wanda Solutions can transform your business with our comprehensive range of innovative services.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <AnimatedSection key={service.title} delay={0.1 * (index + 1)}>
            <Card
              className="hover:transform hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out"
            >
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <Badge key={feature} variant="secondary">{feature}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>
      <Testimonials />
    </div>
  )
}

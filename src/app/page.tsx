import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import AnimatedSection from '@/components/animated-section'
import PageTransition from '@/components/page-transition'

export const metadata: Metadata = {
  title: 'Q3M Wanda Solutions - Innovative Business Solutions',
  description: 'Q3M Wanda Solutions provides cutting-edge business solutions to help your company thrive in the digital age.',
}

export default function Home() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16">
      <AnimatedSection>
        <h1 className="text-4xl font-bold mb-6 text-center">Welcome to Q3M Wanda Solutions</h1>
        <p className="text-xl mb-8 text-center max-w-2xl mx-auto">
          Empowering businesses with innovative solutions for the challenges of tomorrow.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Digital Transformation</h3>
            <p className="mb-4">Revolutionize your business processes with our cutting-edge digital solutions.</p>
            <Link href="/services" passHref>
              <Button variant="link">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </Link>
          </div>
          <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Data Analytics</h3>
            <p className="mb-4">Harness the power of your data with our advanced analytics services.</p>
            <Link href="/services" passHref>
              <Button variant="link">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </Link>
          </div>
          <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Cloud Solutions</h3>
            <p className="mb-4">Scale your infrastructure effortlessly with our cloud-based solutions.</p>
            <Link href="/services" passHref>
              <Button variant="link">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.4}>
        <div className="text-center mt-16">
          <Link href="/contact" passHref>
            <Button size="lg">Get Started Today</Button>
          </Link>
        </div>
      </AnimatedSection>
    </div>
    </PageTransition>
    
  )
}
import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import AnimatedSection from '@/components/animated-section'
import PageTransition from '@/components/page-transition'
import { ServiceCard } from '@/components/ServiceCard'
import { SectionTitle } from '@/components/SectionTitle'
import Brands from '@/components/Brands'
import Welcome from '@/components/Welcome'


export const metadata: Metadata = {
  title: 'Q3M Wanda Solutions - Innovative Business Solutions',
  description: 'Q3M Wanda Solutions provides cutting-edge business solutions to help your company thrive in the digital age.',
}

export default function Home() {
  const services = [
    {
      title: "Digital Transformation",
      description: "Revolutionize your business processes with our cutting-edge digital solutions.",
      link: "/services",
    },
    {
      title: "Data Analytics",
      description: "Harness the power of your data with our advanced analytics services.",
      link: "/services",
    },
    {
      title: "Cloud Solutions",
      description: "Scale your infrastructure effortlessly with our cloud-based solutions.",
      link: "/services",
    },
  ];

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-2 md:py-0">
        <Welcome/>
        <AnimatedSection delay={0.2}>
          <SectionTitle title="Our Services" />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            ))}
          </div>
        </AnimatedSection>
        <Brands/>
        

    
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

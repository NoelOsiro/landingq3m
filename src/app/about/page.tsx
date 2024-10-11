import { Metadata } from 'next'
import logo from '@/assets/images/logo.png'
import AnimatedSection from '@/components/animated-section'
import Team from '@/components/Team'
import OptimizedImage from '@/components/optimized-image'

export const metadata: Metadata = {
  title: 'About Q3M Wanda Solutions - Our Story and Mission',
  description: 'Learn about Q3M Wanda Solutions, our mission, values, and the team behind our innovative business solutions.',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <AnimatedSection>
        <h1 className="text-4xl font-bold mb-6 text-center">About Q3M Wanda Solutions</h1>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="mb-4">
              At Q3M Wanda Solutions, we are dedicated to empowering businesses with innovative technology solutions. Our mission is to drive digital transformation and help our clients achieve sustainable growth in an ever-evolving digital landscape.
            </p>
            <p>
              We believe in the power of technology to solve complex business challenges and create new opportunities for success.
            </p>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <OptimizedImage
              src={logo.src}
              alt="Our Mission"
              width={600}
              height={400}
              className='object-cover rounded-lg'
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.4}>
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p>We constantly push the boundaries of what&apos;s possible, embracing new technologies and methodologies to deliver cutting-edge solutions.</p>
            </div>
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Integrity</h3>
              <p>We uphold the highest standards of honesty and ethical behavior in all our interactions with clients, partners, and team members.</p>
            </div>
            <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p>We are committed to delivering exceptional quality in everything we do, striving for excellence in every project and interaction.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
      <Team />
    </div>
  )
}
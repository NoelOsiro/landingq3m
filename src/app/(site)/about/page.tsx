import { Metadata } from 'next'
import logo from '@/assets/images/logo.png'
import AnimatedSection from '@/components/animated-section'
import Team from '@/components/Team'
import OptimizedImage from '@/components/optimized-image'
import { SectionTitle } from '@/components/SectionTitle'
export const metadata: Metadata = {
  title: 'About Q3M Wanda Solutions - Our Story and Mission',
  description: 'Learn about Q3M Wanda Solutions, our mission, values, and the team behind our innovative business solutions.',
}

const valuesData = [
  {
    title: "Innovation",
    description: "We constantly push the boundaries of what's possible, embracing new technologies and methodologies to deliver cutting-edge solutions.",
  },
  {
    title: "Integrity",
    description: "We uphold the highest standards of honesty and ethical behavior in all our interactions with clients, partners, and team members.",
  },
  {
    title: "Excellence",
    description: "We are committed to delivering exceptional quality in everything we do, striving for excellence in every project and interaction.",
  }
]
export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <AnimatedSection>
        <h1 className="text-4xl font-bold mb-6 text-center">About Q3M Wanda Solutions</h1>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <div>
            <h2 className="text-3xl  capitalize font-semibold mb-4">Our Mission</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              At Q3M Wanda Solutions, we are dedicated to empowering businesses with innovative technology solutions. Our mission is to drive digital transformation and help our clients achieve sustainable growth in an ever-evolving digital landscape.
            </p>
            <p className='text-gray-700 dark:text-gray-300'>
              We believe in the power of technology to solve complex business challenges and create new opportunities for success.
            </p>
          </div>
          <div className="relative  rounded-lg overflow-hidden">
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
        <div className="mt-12">
          <SectionTitle title="Our Values" />
          <div className="grid md:grid-cols-3 gap-8">
            {valuesData.map((value, index) => (
              <div
                key={index}
                className="bg-card text-card-foreground p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <Team />
    </div>
  )
}
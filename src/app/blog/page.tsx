/* eslint-disable @typescript-eslint/no-explicit-any */
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import AnimatedSection from '@/components/animated-section'
import PageTransition from '@/components/page-transition'
import { Button } from '@/components/ui/button'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { PortableText } from '@portabletext/react'

export const metadata: Metadata = {
  title: 'Blog - Q3M Wanda Solutions',
  description: 'Stay updated with the latest insights and news from Q3M Wanda Solutions.',
}

async function getBlogPosts() {
  return await client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      body,
    }
  `)
}

export default async function BlogPage() {
  const blogPosts = await getBlogPosts()

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16">
        <AnimatedSection>
          <h1 className="text-4xl font-bold mb-6 text-center">Our Blog</h1>
          <p className="text-xl mb-12 text-center max-w-2xl mx-auto">
            Stay updated with the latest insights and news from Q3M Wanda Solutions.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post: any, index: number) => (
            <AnimatedSection key={post._id} delay={0.1 * (index + 1)}>
              <Link href={`/blog/${post.slug.current}`} passHref>
                <Card
                  className="hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  <CardHeader>
                    <div className="relative w-full h-48 mb-4">
                      <Image
                        src={urlFor(post.mainImage).url()}
                        alt={post.title}
                        fill
                        className="rounded-t-lg object-cover"
                      />
                    </div>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>
                      <PortableText
                        value={post.body}
                        components={{
                          block: ({ children, index }) =>
                            index === 0 ? <p>{children}</p> : null,
                        }}
                      />
                      ...
                    </CardDescription>
                  </CardHeader>
                  <div className="px-6 pb-6">
                    <p className="text-sm text-muted-foreground mb-4">
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </p>
                    {/* Keep Button functional */}
                    <Link href={`/blog/${post.slug.current}`} passHref>
                    <Button
                      variant="outline"
                      
                    >
                      Read More
                    </Button></Link>
                    
                  </div>
                </Card>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </PageTransition>
  )
}

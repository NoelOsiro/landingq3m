import Head from 'next/head'

interface SEOProps {
  title: string
  description: string
  image?: string
  url: string
}

export default function SEO({ title, description, image, url }: SEOProps) {
  const defaultImage = '../assets/images/logo.png'
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />
    </Head>
  )
}
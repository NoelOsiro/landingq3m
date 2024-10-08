import { ThemeToggle } from './theme-toggle'
import SEO from './seo'

interface LayoutProps {
  children: React.ReactNode
  seo: {
    title: string
    description: string
    image?: string
    url: string
  }
}

export default function Layout({ children, seo }: LayoutProps) {
  return (
    <>
      <SEO {...seo} />
      <div className="min-h-screen bg-background text-foreground">
        <header className="container mx-auto py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Q3M Wanda Solutions</h1>
            <ThemeToggle />
          </nav>
        </header>
        <main className="container mx-auto py-8">{children}</main>
        <footer className="container mx-auto py-4 text-center">
          © {new Date().getFullYear()} Q3M Wanda Solutions
        </footer>
      </div>
    </>
  )
}
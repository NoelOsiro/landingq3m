import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

type ServiceCardProps = {
  title: string;
  description: string;
  link: string;
};

export function ServiceCard({ title, description, link }: ServiceCardProps) {
  return (
    <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-300 hover:via-green-500 hover:to-blue-500 dark:hover:from-indigo-700 dark:hover:via-green-700 dark:hover:to-blue-700">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="mb-4 hover:text-white dark:hover:text-gray-200">{description}</p>
      <Link href={link} passHref>
        <Button variant="link" className="hover:text-white dark:hover:text-gray-200">
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
}

import React from 'react'
import AnimatedSection from './animated-section'
import OptimizedImage from './optimized-image'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import {  MailCheckIcon } from 'lucide-react'

const Team = () => {
  return (
    <AnimatedSection delay={0.2}>
    <div className="container mx-auto px-6 pt-28">
        <h1 className="text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">Our Executive Team</h1>

        <p className="my-6 max-w-2xl text-gray-500 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.</p>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-16 xl:grid-cols-4">
        <div className="group flex transform cursor-pointer flex-col items-center rounded-xl p-8 transition-colors duration-300 hover:bg-blue-600">
            <OptimizedImage
                className="h-32 w-32 rounded-full object-cover ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
                width={128}
                height={128}
            />

            <h1 className="mt-4 text-2xl font-semibold capitalize text-gray-700 group-hover:text-white dark:text-white">arthur melo</h1>

            <p className="mt-2 capitalize text-gray-500 group-hover:text-gray-300 dark:text-gray-300">design director</p>

            <div className="-mx-2 mt-3 flex">
            <a href="#" className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300" aria-label="Reddit">
                <GitHubLogoIcon className="h-6 w-6 fill-current" />
            </a>

            <a href="#" className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300" aria-label="Facebook">
                <LinkedInLogoIcon className="h-6 w-6 fill-current" />
            </a>

            <a href="#" className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300" aria-label="Github">
                <MailCheckIcon className="h-6 w-6 fill-current" />
            </a>
            </div>
        </div>

        <div className="group flex transform cursor-pointer flex-col items-center rounded-xl p-8 transition-colors duration-300 hover:bg-blue-600">
            <OptimizedImage
                className="h-32 w-32 rounded-full object-cover ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
                width={128}
                height={128}
            />

            <h1 className="mt-4 text-2xl font-semibold capitalize text-gray-700 group-hover:text-white dark:text-white">Amelia. Anderson</h1>

            <p className="mt-2 capitalize text-gray-500 group-hover:text-gray-300 dark:text-gray-300">Lead Developer</p>

            <div className="-mx-2 mt-3 flex">
            <a href="#" className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300" aria-label="Reddit">
                <GitHubLogoIcon className="h-6 w-6 fill-current" />
            </a>

            <a href="#" className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300" aria-label="Facebook">
                <LinkedInLogoIcon className="h-6 w-6 fill-current" />
            </a>

            <a href="#" className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300" aria-label="Github">
                <MailCheckIcon className="h-6 w-6 fill-current" />
            </a>
            </div>
        </div>

        <div className="group flex transform cursor-pointer flex-col items-center rounded-xl p-8 transition-colors duration-300 hover:bg-blue-600">
            <OptimizedImage
                className="h-32 w-32 rounded-full object-cover ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
                width={128}
                height={128}
            />

            <h1 className="mt-4 text-2xl font-semibold capitalize text-gray-700 group-hover:text-white dark:text-white">Olivia Wathan</h1>

            <p className="mt-2 capitalize text-gray-500 group-hover:text-gray-300 dark:text-gray-300">Lead designer</p>

            <div className="-mx-2 mt-3 flex">
            <a href="#" className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300" aria-label="Reddit">
                <GitHubLogoIcon className="h-6 w-6 fill-current" />
            </a>

            <a href="#" className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300" aria-label="Facebook">
                <LinkedInLogoIcon className="h-6 w-6 fill-current" />
            </a>

            <a href="#" className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300" aria-label="Github">
                <MailCheckIcon className="h-6 w-6 fill-current" />
            </a>
            </div>
        </div>

        <div className="group flex transform cursor-pointer flex-col items-center rounded-xl p-8 transition-colors duration-300 hover:bg-blue-600">
            <OptimizedImage
                className="h-32 w-32 rounded-full object-cover ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
                width={128}
                height={128}
            />

            <h1 className="mt-4 text-2xl font-semibold capitalize text-gray-700 group-hover:text-white dark:text-white">John Doe</h1>

            <p className="mt-2 capitalize text-gray-500 group-hover:text-gray-300 dark:text-gray-300">Full stack developer</p>

            <div className="-mx-2 mt-3 flex">
            <a href="#" className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300" aria-label="Reddit">
                <GitHubLogoIcon className="h-6 w-6 fill-current" />
            </a>

            <a href="#" className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300" aria-label="Facebook">
                <LinkedInLogoIcon className="h-6 w-6 fill-current" />
            </a>

            <a href="#" className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300" aria-label="Github">
                <MailCheckIcon className="h-6 w-6 fill-current" />
            </a>
            </div>
        </div>

        <div className="group flex transform cursor-pointer flex-col items-center rounded-xl p-8 transition-colors duration-300 hover:bg-blue-600">
            <OptimizedImage
                className="h-32 w-32 rounded-full object-cover ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
                width={128}
                height={128}
            />

            <h1 className="mt-4 text-2xl font-semibold capitalize text-gray-700 group-hover:text-white dark:text-white">Mia</h1>

            <p className="mt-2 capitalize text-gray-500 group-hover:text-gray-300 dark:text-gray-300">Graphic Designer</p>

            <div className="-mx-2 mt-3 flex">
            <a href="#" className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300" aria-label="Reddit">
                <GitHubLogoIcon className="h-6 w-6 fill-current" />
            </a>

            <a href="#" className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300" aria-label="Facebook">
                <LinkedInLogoIcon className="h-6 w-6 fill-current" />
            </a>

            <a href="#" className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300" aria-label="Github">
                <MailCheckIcon className="h-6 w-6 fill-current" />
            </a>
            </div>
        </div>

        <div className="group flex transform cursor-pointer flex-col items-center rounded-xl p-8 transition-colors duration-300 hover:bg-blue-600">
            <OptimizedImage
                className="h-32 w-32 rounded-full object-cover ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1608174386344-80898cec6beb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
                width={128}
                height={128}
            />

            <h1 className="mt-4 text-2xl font-semibold capitalize text-gray-700 group-hover:text-white dark:text-white">Junior REIS</h1>

            <p className="mt-2 capitalize text-gray-500 group-hover:text-gray-300 dark:text-gray-300">Products Managers</p>

            <div className="-mx-2 mt-3 flex">
            <a href="#" className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300" aria-label="Reddit">
                <GitHubLogoIcon className="h-6 w-6 fill-current" />
            </a>

            <a href="#" className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300" aria-label="Facebook">
                <LinkedInLogoIcon className="h-6 w-6 fill-current" />
            </a>

            <a href="#" className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300" aria-label="Github">
                <MailCheckIcon className="h-6 w-6 fill-current" />
            </a>
            </div>
        </div>

        <div className="group flex transform cursor-pointer flex-col items-center rounded-xl p-8 transition-colors duration-300 hover:bg-blue-600">
            <OptimizedImage
                className="h-32 w-32 rounded-full object-cover ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
                width={128}
                height={128}
            />

            <h1 className="mt-4 text-2xl font-semibold capitalize text-gray-700 group-hover:text-white dark:text-white">Joseph Gonzalez</h1>

            <p className="mt-2 capitalize text-gray-500 group-hover:text-gray-300 dark:text-gray-300">Software engineer</p>

            <div className="-mx-2 mt-3 flex">
            <a href="#" className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300" aria-label="Reddit">
                <GitHubLogoIcon className="h-6 w-6 fill-current" />
            </a>

            <a href="#" className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300" aria-label="Facebook">
                <LinkedInLogoIcon className="h-6 w-6 fill-current" />
            </a>

            <a href="#" className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300" aria-label="Github">
                <MailCheckIcon className="h-6 w-6 fill-current" />
            </a>
            </div>
        </div>

        <div className="group flex transform cursor-pointer flex-col items-center rounded-xl p-8 transition-colors duration-300 hover:bg-blue-600">
            <OptimizedImage
                className="h-32 w-32 rounded-full object-cover ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1521488741203-dcc320950ce5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
                width={128}
                height={128}
            />
            <h1 className="mt-4 text-2xl font-semibold capitalize text-gray-700 group-hover:text-white dark:text-white">Emma Doe</h1>

            <p className="mt-2 capitalize text-gray-500 group-hover:text-gray-300 dark:text-gray-300">Content Writer</p>

            <div className="-mx-2 mt-3 flex">
            <a href="#" className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300" aria-label="Reddit">
                <GitHubLogoIcon className="h-6 w-6 fill-current" />
            </a>

            <a href="#" className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300" aria-label="Facebook">
                <LinkedInLogoIcon className="h-6 w-6 fill-current" />
            </a>

            <a href="#" className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300" aria-label="Github">
                <MailCheckIcon className="h-6 w-6 fill-current" />
            </a>
            </div>
        </div>
        </div>
    </div>
    </AnimatedSection>
  )
}

export default Team
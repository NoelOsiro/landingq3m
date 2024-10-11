import React from 'react'
import { MapPin, Mail, Phone } from 'lucide-react' // Importing icons from lucide-react
import AnimatedSection from './animated-section'

const Map = () => {
    return (
        <AnimatedSection>
            <div className="body-font relative mt-16">
                <div className="absolute inset-0 bg-gray-300">
                    <iframe
                        width="100%"
                        height="100%"
                        frameBorder={0}
                        marginHeight={0}
                        marginWidth={0}
                        title="map"
                        scrolling="no"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Festival%20Mall%20Malindi+(Q3M%20Wanda%20Solutions)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    ></iframe>
                </div>
                <div className="container px-5 py-24 mx-auto flex">
                    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Information</h2>
                        <div className="mb-5">
                            <MapPin className="inline-block w-6 h-6 mr-2 text-gray-900" />
                            <span className="leading-relaxed text-gray-600">Festive Mall 2nd Floor, Malindi, Kilifi Kenya</span>
                        </div>
                        <div className="relative mb-4">
                            <Mail className="inline-block w-6 h-6 mr-2 text-gray-900" />
                            <span className="leading-relaxed mb-5 text-gray-600">admin@wandasolutions.tech</span>
                        </div>
                        <div className="relative mb-4">
                            <Phone className="inline-block w-6 h-6 mr-2 text-gray-900" />
                            <span className="leading-relaxed mb-5 text-gray-600">+254 701 360 851</span>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    )
}

export default Map

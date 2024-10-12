import React from 'react'
import AnimatedSection from './animated-section'
import { SectionTitle } from './SectionTitle';
import OptimizedImage from './optimized-image';
import postapay from '@/assets/images/postapay.png'
import airtel from '@/assets/images/airtel.png'


// const features = [
//     { name: 'Interoperability', href: '', icon: 'check' },
//     { name: 'Telco-Agnostic', href: '', icon: 'check' },
//     { name: 'Sub-Wallets', href: '', icon: 'check' },
//     { name: 'Loose Change', href: '', icon: 'check' },
// ];

interface FeatureGridProps {
    features: { name: string; href?: string; icon: string }[]; // Accept features as props
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ features }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-3">
            {features.map((feature) => (
                <a key={feature.name} href={feature.href || '#'} className="flex items-center gap-3 hover:text-blue-300">
                    <span className="h-10 w-10 rounded-full bg-blue-300 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                    </span>
                    <span className="font-semibold">{feature.name}</span>
                </a>
            ))}
        </div>
    );
};


interface ProductTextSectionProps {
    title: string;
    subtitle: string;
    description: string;
    featureTitle: string;
    features: { name: string; href?: string; icon: string }[]; // Accept features as a prop
}

const ProductTextSection: React.FC<ProductTextSectionProps> = ({
    title,
    subtitle,
    description,
    featureTitle,
    features,
}) => {
    return (
        <div className="p-6 md:pl-12">
            <h2 className="text-3xl md:text-5xl font-medium mb-6">{title}</h2>
            <h3 className="text-xl md:text-2xl font-medium mb-6">{subtitle}</h3>
            <p className="mb-6 text-gray-400">{description}</p>
            <h3 className="mb-4 font-semibold text-lg md:text-xl text-gray-400">{featureTitle}</h3>
            <FeatureGrid features={features} />
        </div>
    );
};





interface ImageOverlayProps {
    overlayImageSrc: string;
    mainImageSrc: string;
    overlayAltText?: string;
    mainAltText?: string;
    linkUrl?: string;
    overlayClassName?: string;
    mainImageClassName?: string;
}

const ImageOverlay: React.FC<ImageOverlayProps> = ({
    overlayImageSrc,
    mainImageSrc,
    overlayAltText = "",
    mainAltText = "",
    linkUrl = "#",
    overlayClassName = "w-full h-full object-contain",
    mainImageClassName = "w-full h-full object-contain"
}) => {
    return (
        <div className="relative flex before:block before:absolute before:h-1/6 before:w-2 before:bg-stone-200 before:top-0 before:right-0 before:rounded-lg before:transition-all group-hover:before:bg-orange-300 overflow-hidden">
            {
                /* Overlay Image */
            }
            <div className="absolute bottom-0 right-0 bg-blue-500 w-4/6 md:w-3/6 lg:w-4/6 overflow-hidden flex flex-col justify-center rounded-xl group-hover:bg-sky-600 transition-all shadow-2xl">
                <OptimizedImage
                    src={overlayImageSrc}
                    alt={overlayAltText}
                    className={overlayClassName}
                    width={800}
                    height={800}
                />
            </div>

            {
                /* Main Image */
            }
            <div className="hidden sm:block h-64 md:h-2/3 rounded-xl overflow-hidden">
                <OptimizedImage
                    src={mainImageSrc}
                    alt={mainAltText}
                    className={mainImageClassName}
                    width={800}
                    height={800}
                />
            </div>

            {
                /* Rotated Text */
            }
            <a className="hidden sm:flex -rotate-90 font-bold mt-6 mb-8 gap-2 h-16 text-xl leading-7" href={linkUrl}>
                <span>Digital <br /> Commerce</span>
            </a>

            {
                /* Play Button */
            }
            <a
                className="absolute h-16 w-16 md:h-20 md:w-20 bg-blue-500 flex items-center justify-center rounded-full bottom-10 left-10 text-white before:block before:absolute before:h-full before:w-full before:bg-sky-100 before:rounded-full group-hover:before:animate-ping before:-z-10 hover:bg-sky-600"
                href={linkUrl}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                </svg>
            </a>
        </div>
    );
};




const Products = () => {
    return (
        <AnimatedSection delay={0.4}>
            <SectionTitle title='Features' />
            <div className="relative flex min-h-screen flex-col justify-center overflow-hidden">
                <div className="w-full items-center mx-auto max-w-screen-lg">
                    <div className="group grid w-full grid-cols-1 md:grid-cols-2">
                        {/* Left Side */}
                        <ImageOverlay
                            overlayImageSrc="https://picsum.photos/800/800.webp"
                            mainImageSrc={postapay.src}
                            overlayAltText="Overlay Image"
                            mainAltText="Main Image"
                            linkUrl="#"
                        />
                        {/* Right Side */}
                        <ProductTextSection
                            title="Postapay Digital Payment Platform"
                            subtitle="Unlocking Opportunities For People And Businesses"
                            description="PostaPay ensures seamless connectivity across different platforms including financial institutions, fitness and retail outlets among others."
                            featureTitle="Seamless & Secure Financial Solutions"
                            features={[
                                { name: 'Interoperability', icon: 'check' },
                                { name: 'Telco-Agnostic', icon: 'check' },
                                { name: 'Sub-Wallets', icon: 'check' },
                                { name: 'Loose Change', icon: 'check' },
                            ]}
                        />
                    </div>
                </div>
                <div className="w-full items-center mx-auto max-w-screen-lg lg:mt-16 mt-12">
                    <div className="group grid w-full grid-cols-1 md:grid-cols-2">
                        {/* Left Side */}
                        <ProductTextSection
                            title="Airtel Internet Connectivity Solutions"
                            subtitle="Empowering People and Businesses with Reliable Internet Access"
                            description="Airtel provides fast and reliable internet connectivity, ensuring seamless access to the digital world for businesses, educational institutions, and individuals."
                            featureTitle="Fast, Secure & Affordable Internet Solutions"
                            features={[
                                { name: 'High-Speed Connectivity', icon: 'check' },
                                { name: 'Nationwide Coverage', icon: 'check' },
                                { name: '24/7 Customer Support', icon: 'check' },
                                { name: 'Affordable Plans', icon: 'check' },
                            ]}
                        />
                        {/* Right Side */}
                        <ImageOverlay
                            overlayImageSrc="https://picsum.photos/800/800?grayscale.webp"
                            mainImageSrc={airtel.src}
                            overlayAltText="Overlay Image"
                            mainAltText="Main Image"
                            linkUrl="#"
                        />
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Products;


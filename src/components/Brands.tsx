import React from 'react'
import AnimatedSection from './animated-section'
import  postapaySvg from '@/assets/images/postapay.svg';
import airtelSvg from '@/assets/images/airtel.svg';
import starlinkSvg from '@/assets/images/starlink.svg';
import glogoSvg from '@/assets/images/5glogo.svg';
import awsSvg from '@/assets/images/aws.svg';
import Image from 'next/image';


const Brands = () => {
  return (
    <AnimatedSection delay={0.4}>
        <div className="mx-auto mt-28 max-w-screen-xl">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5 items-center">
                <div className="col-span-1 flex items-center justify-center md:col-span-2 lg:col-span-1">
                <Image src={postapaySvg} alt="SVG Icon" width={148} height={48}  />             
                </div>

                <div className="col-span-1 flex items-center justify-center md:col-span-2 lg:col-span-1">
                <Image src={airtelSvg} alt="SVG Icon" width={48} height={48}  />
                </div>

                <div className="col-span-1 flex items-center justify-center md:col-span-2 lg:col-span-1">
                <Image src={starlinkSvg} alt="SVG Icon" width={120} height={48} className="dark:filter dark:invert"/>
                </div>

                <div className="col-span-1 flex items-center justify-center md:col-span-3 lg:col-span-1">
                <Image src={glogoSvg} alt="SVG Icon" width={96} height={48} className="dark:filter dark:invert"/>
                </div>

                <div className="col-span-2 flex items-center justify-center md:col-span-3 lg:col-span-1">
                <Image src={awsSvg} alt="SVG Icon" width={80} height={48} className="dark:filter dark:invert"/>
                </div>
            </div>
            </div>
        </AnimatedSection>
  )
}

export default Brands
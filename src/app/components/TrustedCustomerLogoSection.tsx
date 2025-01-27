import Image from 'next/image'
import React from 'react'

export default function TrustedCustomerLogoSection() {
  return (
    <div className='flex justify-center lg:mt-20 flex-col items-center h-[400px]'>
        <h1 className='text-lg z-20'>Trusted by nearly 5000+ paying customers</h1>
        <div className='flex z-20 relative mt-14 flex-wrap lg:w-[800px] gap-10 justify-center'>
            <Image src="/assets/customer-logo/logo1.png" alt='company-logo' width={140} height={40}/>
            <Image src="/assets/customer-logo/logo2.png" alt='company-logo' width={140} height={40}/>
            <Image src="/assets/customer-logo/logo3.png" alt='company-logo' width={140} height={40}/>
            <Image src="/assets/customer-logo/logo4.png" alt='company-logo' width={140} height={40}/>
            <Image src="/assets/customer-logo/logo5.png" alt='company-logo' width={140} height={40}/>
            <Image src="/assets/customer-logo/logo6.png" alt='company-logo' width={140} height={40}/>
            <Image src="/assets/customer-logo/logo7.png" alt='company-logo' width={140} height={40}/>
            <Image src="/assets/customer-logo/logo8.png" alt='company-logo' width={140} height={40}/>
        </div>
        
    </div>
  )
}

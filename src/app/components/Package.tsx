import React from 'react'

export default function Package() {
    return (
        <div className='pb-20 bg-[#191925]'>
            <div className='flex justify-center pt-20'>
                <div className='w-[420px] flex flex-col items-center justify-center text-center mb-20'>
                    <h1 className='text-4xl font-semibold'>Make the wise decision for your business</h1>
                    <p className='text-[#b7b8bb] mt-5'>Choose from affordable 3 packages</p>
                </div>
            </div>
            <div className='flex gap-8 justify-center flex-wrap'>
                <div className="bg-[#282a37] p-6 rounded-lg shadow-md h-[480px] w-[300px]">
                    <h2 className="text-white text-lg font-semibold mb-4">Premium Plan</h2>
                    <p className="text-3xl font-bold text-white mb-4">$129/month</p>
                    <p className="text-gray-400 mb-4 text-[13px]">This package is suitable for teams 1-100 people.</p>

                    <h3 className="text-white text-md font-semibold mb-2 text-sm">What&apos;s included:</h3>
                    <div className="text-gray-400 list-disc list-inside flex flex-col gap-3 text-sm">
                        <p>20 GB Dedicated Hosting Free</p>
                        <p>Best for Developers, Freelancers</p>
                        <p>Unlimited Support</p>
                        <p>Free Custom Domain</p>
                        <p>Full Statistics</p>
                    </div>

                    <button className="px-5 border py-2 w-60 rounded-lg mt-8 border-[#000]">
                        Get Started
                    </button>
                </div>

                <div className="bg-[#282a37] p-6 rounded-lg shadow-md h-[480px] w-[300px]">
                    <h2 className="text-white text-lg font-semibold mb-4">Premium Plan</h2>
                    <p className="text-3xl font-bold text-white mb-4">$129/month</p>
                    <p className="text-gray-400 mb-4 text-[13px]">This package is suitable for teams 1-100 people.</p>

                    <h3 className="text-white text-md font-semibold mb-2 text-sm">What&apos;s included:</h3>
                    <div className="text-gray-400 list-disc list-inside flex flex-col gap-3 text-sm">
                        <p>20 GB Dedicated Hosting Free</p>
                        <p>Best for Developers, Freelancers</p>
                        <p>Unlimited Support</p>
                        <p>Free Custom Domain</p>
                        <p>Full Statistics</p>
                    </div>

                    <button className="gradient-button w-60 mt-8">
                        Get Started
                    </button>
                </div>

                <div className="bg-[#282a37] p-6 rounded-lg shadow-md h-[480px] w-[300px]">
                    <h2 className="text-white text-lg font-semibold mb-4">Premium Plan</h2>
                    <p className="text-3xl font-bold text-white mb-4">$129/month</p>
                    <p className="text-gray-400 mb-4 text-[13px]">This package is suitable for teams 1-100 people.</p>

                    <h3 className="text-white text-md font-semibold mb-2 text-sm">What&apos;s included:</h3>
                    <div className="text-gray-400 list-disc list-inside flex flex-col gap-3 text-sm">
                        <p>20 GB Dedicated Hosting Free</p>
                        <p>Best for Developers, Freelancers</p>
                        <p>Unlimited Support</p>
                        <p>Free Custom Domain</p>
                        <p>Full Statistics</p>
                    </div>

                    <button className="px-5 border py-2 w-60 rounded-lg mt-8 border-[#000]">
                        Get Started
                    </button>
                </div>
            </div>

            <div className='flex justify-center mt-20 p-3 lg:p-0'>
                <div className='lg:w-[1200px] lg:h-[130px] rounded-xl bg-gradient flex lg:flex-row flex-col items-center justify-between lg:px-8 p-6'>
                        <div className='lg:text-2xl lg:w-[420px] font-semibold text-center lg:text-start'>
                            <h1>It will help you improve your writing & bring ideas more clearly.</h1>
                        </div>
                        <button className="px-5 border py-3 bg-[#ffffff] text-[#000] w-60 rounded-lg">
                        Start 14 days Free trial
                    </button>
                </div>
            </div>
        </div>
    )
}

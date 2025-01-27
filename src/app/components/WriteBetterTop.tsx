import React from 'react'
import { FiPlayCircle } from 'react-icons/fi'
import TrustedCustomerLogoSection from './TrustedCustomerLogoSection'

export default function WriteBetterTop() {
    return (
        <div className=' lg:min-h-[120vh] overflow-hidden'>
            <div className="gradient-bg  lg:w-[60%] lg:h-[100%] w-full h-full absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            </div>
            <div className='w-full flex justify-center lg:pt-[12%] pt-[50%] z-20 relative text-center h-[100vh]  '>
                <div className='z-20'>
                    <h1 className='lg:text-6xl text-3xl text-[#ffffff]'>Write better <br /> content for your</h1>
                    <h1 className="lg:text-6xl text-3xl mt-2 bg-gradient-to-r from-[#fd6637] to-[#ffc947] bg-clip-text text-transparent">
                        Facebook Ads
                    </h1>
                    <div className='flex justify-center'>
                        <div className='lg:w-full w-[50%]  mt-2 h-[3px] bg-gradient-to-r from-[#fd6637] to-[#ffc947] rounded'></div>
                    </div>
                    
                    <h4 className='lg:w-[400px] mt-5 text-[#b7b8bb]'>Artificial intelligence writing tool helps you create blogs, social media websites and much more.</h4>
                    <button className="gradient-button h-12 mt-5">Start 14 days free trial</button>
                    <div className='flex justify-center mt-5'>
                        <button className="gradient-button-play">
                            <span className="gradient-icon">
                                <FiPlayCircle />
                            </span>
                            <span className="gradient-text">Watch A Demo</span>
                        </button>
                    </div>
                </div>
                <div className="gradient-bg  lg:w-[50%] w-full h-[100%] absolute left-[70%] top-[50%]">
                </div>
            </div>
            <div className='bg-[#363944af] h-[1px] w-full z-20 relative'></div>

            {/* trusted customer component */}
            <TrustedCustomerLogoSection/>
        </div>
    )
}

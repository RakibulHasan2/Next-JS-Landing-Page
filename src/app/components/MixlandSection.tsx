import React from 'react'

export default function MixlandSection() {
    return (
        <div className='mb-24'>
            <div className='flex justify-center mt-20 mb-10'>
                <div className='lg:w-[420px] flex items-center justify-center text-center font-semibold'>
                    <h1 className='text-4xl'>Mixland helps you build beautiful website</h1>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='lg:w-[950px]  lg:h-[400px] flex lg:flex-row flex-col justify-between'>
                    <div className='lg:w-[300px] h-full flex items-center lg:items-start mb-5 flex-col gap-3 z-10'>
                        <button className="gradient-button h-12 w-[250px] text-start">Blog Heading</button>
                        <button className='h-12 w-[250px] text-start border border-[#363944af] rounded-lg px-6'>Blog Intros</button>
                        <button className='h-12 w-[250px] text-start border border-[#363944af] rounded-lg px-6'>content Rewriter</button>
                        <button className='h-12 w-[250px] text-start border border-[#363944af] rounded-lg px-6'>Facebook Ads</button>
                        <button className='h-12 w-[250px] text-start border border-[#363944af] rounded-lg px-6'>Product Description</button>
                        <button className='h-12 w-[250px] text-start border border-[#363944af] rounded-lg px-6'>PAS Copywriting Formula</button>
                    </div>
                    <div className='lg:w-[640px]  h-full p-5 bg-[#282a37] rounded-xl z-10'>
                    <div className='flex gap-3'>
                            <p className='h-3 w-3 rounded-full bg-red-500'></p>
                            <p className='h-3 w-3 rounded-full bg-yellow-400'></p>
                            <p className='h-3 w-3 rounded-full bg-green-500'></p>
                        </div>
                        <div className='mt-5'>
                            <p className='text-[#909299] font-semibold border-b pb-3 border-[#363944af]'>4 Blog Headlines Generated</p>
                            <p className=' font-semibold border-b pb-3 border-[#363944af] mt-6'>Create original content that ranks for SEO</p>
                            <p className=' font-semibold border-b pb-3 border-[#363944af] mt-6'>Any mechanical keyboard enthusiasts in design?</p>
                            <p className=' font-semibold border-b pb-3 border-[#363944af] mt-6'>The More Important the Work, the More Important the Rest</p>
                            <p className=' font-semibold border-b pb-3 border-[#363944af] mt-6'>How to design a product that can grow itself 10x in year</p>
                            <p className=' font-semibold  mt-6'>Any mechanical keyboard enthusiasts in design?</p>
                        </div>
                    </div>
                    {/* gradient bg */}
                    <div className="gradient-bg  absolute w-[40%] mr-28 h-[480px]">
                    </div>
                </div>
            </div>

        </div>
    )
}

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#191925] text-white py-20 px-12 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 lg:px-10">
        <div className='lg:ml-8'>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className='flex flex-col gap-3 text-sm'>
            <li><a href="#" className="text-[#b7b8bb]">About</a></li>
            <li><a href="#" className="text-[#b7b8bb]">Features</a></li>
            <li><a href="#" className="text-[#b7b8bb]">Works</a></li>
            <li><a href="#" className="text-[#b7b8bb]">Career</a></li>
          </ul>
        </div>
        <div className='lg:ml-8'>
          <h3 className="text-lg font-semibold mb-4">Help</h3>
          <ul className='flex flex-col gap-3 text-sm'>
            <li><a href="#" className="text-[#b7b8bb]">Customer Support</a></li>
            <li><a href="#" className="text-[#b7b8bb]">Delivery Details</a></li>
            <li><a href="#" className="text-[#b7b8bb]">Terms & Conditions</a></li>
            <li><a href="#" className="text-[#b7b8bb]">Privacy Policy</a></li>
          </ul>
        </div>
        <div className='lg:ml-8'>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className='flex flex-col gap-3 text-sm'>
            <li><a href="#" className="text-[#b7b8bb]">Free eBooks</a></li>
            <li><a href="#" className="text-[#b7b8bb]">Development Tutorial</a></li>
            <li><a href="#" className="text-[#b7b8bb]">How-to - Blog</a></li>
            <li><a href="#" className="text-[#b7b8bb]">Youtube Playlist</a></li>
          </ul>
        </div>
        <div className='lg:ml-8'>
          <h3 className="text-lg font-semibold mb-4">Links</h3>
          <ul className='flex flex-col gap-3 text-sm'>
            <li><a href="#" className="text-[#b7b8bb]">Free eBooks</a></li>
            <li><a href="#" className="text-[#b7b8bb]">Development Tutorial</a></li>
            <li><a href="#" className="text-[#b7b8bb]">How-to - Blog</a></li>
            <li><a href="#" className="text-[#b7b8bb]">Youtube Playlist</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
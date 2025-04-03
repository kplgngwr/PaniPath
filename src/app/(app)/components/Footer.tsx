import { LocateFixedIcon, MailIcon } from 'lucide-react';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0b2543] text-white text-sm">
            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col md:flex-row justify-evenly items-center">
                    <div className='w-full md:w-[33.33%] mb-6 md:mb-0'>
                        <h4 className="font-bold mb-2">Quick Links</h4>
                        <div className='flex flex-wrap'>
                            <ul className="space-y-1 w-[50%]">
                                <li>› Website Policies</li>
                                <li>› Term & Conditions</li>
                                <li>› Privacy Policy</li>
                                <li>› Feedback</li>
                                <li>› Vigilance Complaint Information Management System (VCIMS)</li>
                            </ul>
                            <ul className="space-y-1 w-[50%] mt-2 md:mt-0">
                                <li>› Hyperlink Policy</li>
                                <li>› Copyright Policy</li>
                                <li>› Help</li>
                                <li>› Sitemap</li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-full md:w-[33.33%] mb-6 md:mb-0'>
                        <h4 className="font-bold mb-2">Address</h4>
                        <div className="flex flex-col">
                            <p className="flex items-start">
                                <LocateFixedIcon className='mt-1' size={15} />
                                <span className='ml-2'>
                                    Delhi Parks and Gardens Society,<br />
                                    (Department of Environment),<br />
                                    Govt. of National Capital Territory of Delhi<br />
                                    6th Level, C-Wing, Delhi Secretariat, I P Estate,<br />
                                    New Delhi -110002
                                </span>
                            </p>
                            <p className="mt-2 flex items-start">
                                <MailIcon className='mt-1' size={15} />
                                <span className='ml-2'>
                                    ceodpgsenv[dot]delhi[at]nic[dot]in
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className='w-full md:w-[33.33%]'>
                        <h4 className="font-bold mb-2">Map of Delhi Parks And Gardens Society</h4>
                        <div className="relative w-full h-48">
                            <iframe allowFullScreen={false} height="230" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14010.720698158791!2d77.25283!3d28.60937!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9f2bf50bdc807f52!2sDPGS%20NURSERY!5e0!3m2!1sen!2sin!4v1662546327116!5m2!1sen!2sin"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-navy-950 py-2 px-4 mt-4 flex flex-col md:flex-row justify-between items-center text-xs text-center md:text-left">
                <p>Copyright © 2024 - All Right Reserved - Official Website of Government of National Capital Territory of Delhi, India.</p>
                <p>Last Updated: 29/08/2024 | Total Visitors: 38874</p>
            </div>
        </footer>
    );
};

export default Footer;

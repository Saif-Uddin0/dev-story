"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import Navlink from './Navlink';

const Header = () => {
    const pathname = usePathname();
    console.log(pathname);
    if(pathname.startsWith("/dashboard")) return <></>
    
    return (
        <div className='p-4 border-b border-gray-300'>
            <div className='flex items-center justify-between flex-wrap'>
                <Link href={'/'} className='font-bold text-3xl '>🎈Dev-Story</Link>
                <nav className='space-x-9'>
                    <Navlink href={'/stories'}>Stories</Navlink>
                    <Navlink href={'/about'}>About</Navlink>
                    <Navlink href={'/tutorials'}>Tutorials</Navlink>
                    <Navlink href={'/login'}>Login</Navlink>
                    <Navlink href={'/register'}>Register</Navlink>
                </nav>
                <Navlink href={'/about/contact'} className='bg-gray-200 px-5 py-3 rounded-md'>
                    Contact Now
                </Navlink>
            </div>
        </div>
    );
};

export default Header;
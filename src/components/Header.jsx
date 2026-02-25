import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div className='p-4 border-b border-gray-300'>
            <div className='flex items-center justify-between flex-wrap'>
                <Link href={'/'} className='font-bold text-3xl '>🎈Dev-Story</Link>
                <nav className='space-x-9'>
                    <Link href={'/about'}>About</Link>
                    <Link href={'/stories'}>Stories</Link>
                    <Link href={'/tutorials'}>Tutorials</Link>
                    <Link href={'/login'}>Login</Link>
                    <Link href={'/register'}>Register</Link>
                </nav>
                <Link href={'/about/contact'} className='bg-gray-200 px-5 py-3 rounded-md'>
                    Contact Now
                </Link>
            </div>
        </div>
    );
};

export default Header;
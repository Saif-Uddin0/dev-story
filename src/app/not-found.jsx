import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='min-h-screen flex justify-center items-center flex-col gap-5'>
            <h1>
                404 | Your page is not found
            </h1>
            <Link className='bg-sky-500 p-5 text-white'  href={'/'}>Go to Home</Link>
        </div>
    );
};

export default NotFound;
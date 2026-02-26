import Link from 'next/link';
import React from 'react';

const loading = () => {
    return (
        <div>
            <div className='min-h-screen flex justify-center items-center text-8xl'>
            <h1>
                Load....... <span className='animate-spin'>🔃</span>ing
            </h1>
            
        </div>
        </div>
    );
};

export default loading;
"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const Banner = () => {
    const router = useRouter();
    const handlebtn=()=>{
        const pass = prompt('Enter your password')
        if(pass == "1234"){
            console.log(router);
            router.push('/dashboard')
            
        }
    }
    return (

        <div className='text-center space-y-5 bg-linear-60 to-sky-100 from-sky-300 p-10 text-black rounded'>
            <h1 className='text-3xl font-bold '>Welcome to Dev Story</h1>
            <button onClick={handlebtn} className='p-4 bg-sky-500 text-white rounded cursor-pointer hover:bg-blue-700 duration-200'>Share your Story</button>
        </div>
    );
};

export default Banner;
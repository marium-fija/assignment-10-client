import React from 'react';
import errorImg from '../assets/error.jpeg'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='max-w-7xl'>
            <div className='m-32 flex items-center justify-center gap-10'>
                {/* img */}
                <div>
                   <img className='w-80' src={errorImg} alt="" />
                </div>
                {/* text */}
                <div>
                    <h3 className='text-2xl font-semibold text-red-400'>Opps.... </h3>
                    <h1 className='text-6xl font-bold text-red-400'>404</h1>
                    <p className='text-xl text-red-950 font-semibold'>Sorry page not Found</p>

                    <Link className='btn btn-outline hover:bg-red-300 border-2 text-red-800 rounded-full mt-20' to="/">Go Home</Link>
                </div>
                
            </div>

            
        </div>
    );
};

export default ErrorPage;
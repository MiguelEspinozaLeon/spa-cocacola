import React from 'react';
import {BsFillArrowUpRightCircleFill} from 'react-icons/bs';

const NasaSection = () => {
    const bgImage = 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80';

   

    return (
        <div className='content-center flex flex-row items-center' style={{ backgroundImage: `url(${bgImage})`, height: '60vh', width: '100%'}}>
            {/* Add your content here */}
            <div className='w-full'>
                <h2 className='p-8 text-6xl font-bold text-sky-950'>Earth Information Center</h2>
                <p className='p-8 text-sky-950 font-bold'>Discover Earth as NASA sees it. Learn why this information matters to us all.</p>
                <a className='p-8 flex gap-1 cursor-pointer hover:underline' href="">
                    <span className='text-sky-950 text-3xl font-bold'>Learn More</span>
                    <BsFillArrowUpRightCircleFill  size={25}/>
                </a>
            </div>
            
        </div>
    );
};

export default NasaSection;

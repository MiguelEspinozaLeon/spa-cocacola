import React from 'react'
import {BsFillArrowUpRightCircleFill} from 'react-icons/bs';
import {BiSolidNews} from 'react-icons/bi';

const NasaNews = () => {
    const newsImages = ['https://www.nasa.gov/wp-content/uploads/2023/10/53255487909-db987b77e4-k.jpg', 'https://www.nasa.gov/wp-content/uploads/2023/10/herc-24.jpg']

    type news = {
        time: number,
        title: string,
        img: string
    }
    const otherNews: news[] = [
        {time: 5, title: "NASA's Bennu Asteroid Sample Contains Carbon, Water", img: 'https://www.nasa.gov/wp-content/uploads/2023/10/nelson-tagsam-shot-b.jpg?resize=2000,1500'},
        {time: 4, title: "NASA Highlights Science on Next Northrop Grumman Mission to Space Station", img: 'https://www.nasa.gov/wp-content/uploads/2023/10/annular-eclipse-photo-bill-dunford.jpg'},
        {time: 3, title: "NASA Invites Media to Next SpaceX Cargo Launch to Space Station", img: 'https://www.nasa.gov/wp-content/uploads/2023/10/psyche-asteroid-advisory-oct-5.jpg?resize=2000,1600'},
    ]
  return (
    <div className='container content-center flex flex-col mx-auto h-full mt-10'>
    
        
            <div className='flex flex-row justify-between px-0 py-10 items-center'>
                <h2 className='text-5xl font-bold'>Latest News</h2>
                <a href="" className='flex flex-row'>
                    <span className='text-2xl font-bold' >More NASA News Releases</span>
                    <BsFillArrowUpRightCircleFill size={25}/>
                </a>
            </div>
            <div className='flex flex-row gap-8 content-center justify-center'>
                
                 <div className='relative w-[50%] h-[40vh] bg-cover bg-center' style={{backgroundImage: `url(${newsImages[0]})`}}>
                    <div className='flex flex-row items-center justify-start p-4 space-x-2'>
                        <BiSolidNews className='text-stone-50 text-2xl'/>
                        <p className='text-stone-50 text-sm font-bold'>NEWS RELEASE</p> 
                    </div>
                    <div className='flex flex-col p-4 py-10 absolute inset-x-0 bottom-0 '>
                        <span className='text-xl text-stone-50 font-semibold'>6 MIN READ</span>
                        <a href='#' className='text-2xl text-stone-50 font-bold hover:underline'>NASA’s Psyche Spacecraft, Optical Comms Demo En Route to Asteroid</a>
                    </div>
                      
                </div>
                    
                
                <div className='relative w-[40%] h-[40vh] bg-cover bg-center' style={{backgroundImage: `url(${newsImages[1]})` }}>
                    <div className='flex flex-row items-center justify-start p-4 space-x-2'>
                            <BiSolidNews className='text-stone-50 text-2xl'/>
                            <p className='text-stone-50 text-sm font-bold'>NEWS RELEASE</p> 
                    </div>
                    <div className='flex flex-col p-4 py-10 absolute inset-x-0 bottom-0 '>
                        <span className='text-xl text-stone-50 font-semibold'>2 MIN READ</span>
                        <a href='#' className='text-2xl text-stone-50 font-bold hover:underline'>Dozens of Student Teams Worldwide to Compete in NASA Rover Challenge</a>
                    </div>
                </div>
                

            </div>
            <div className='flex flex-row justify-center items-center p-4'>
                {otherNews.map((news, index: number) => (
                    <div key={index} className='flex flex-row items-center space-x-4'>
                        <img className='rounded-full h-20 w-20' src={news.img} alt="" />
                        <div className='flex flex-col justify-center'>
                            <p>{news.time} MIN READ</p>
                            <a href='#' className='font-bold hover:underline'>{news.title}</a>
                            <div className='flex flex-row items-center justify-start space-x-2'>
                                <BiSolidNews/>
                                <p className='text-sm'>NEWS RELEASE</p> 
                            </div>
                        </div>
                        
                    </div>
                ))}
            </div>
        
        

    </div>
  )
}

export default NasaNews
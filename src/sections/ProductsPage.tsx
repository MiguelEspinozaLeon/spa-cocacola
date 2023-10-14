import { useEffect, useState } from "react"
import {BsChevronCompactLeft, BsChevronCompactRight, BsDot} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'



export default function ProductsPage(){
    const slides = [
        {url: 'https://images.unsplash.com/photo-1694403531651-1a1e80f46023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80'},
        {url: 'https://images.unsplash.com/photo-1689443111130-6e9c7dfd8f9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'},
        {url: 'https://images.unsplash.com/photo-1678957949479-b1e876bee3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1630&q=80'},
        {url: 'https://images.unsplash.com/photo-1688141585146-1fb4a1358c87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'},
        {url: 'https://images.unsplash.com/photo-1696384036025-c7d7b7f6584d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80'},
    ]

    const [currentSlide, setCurrentSlide] = useState(0);
    
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    }
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, [currentSlide]);
    return (
        <section id="products-page">
            <h2 className="text-2xl">These are our products.</h2>
            <div className="max-w-[1400px] h-[600px] w-full m-auto py-16 px-4 relative group">
                <div style={{backgroundImage: `url(${slides[currentSlide].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>
                <div className="hidden absolute group-hover:block top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer" onClick={prevSlide}>
                    <BsChevronCompactLeft size={30}/>
                </div>
                <div className="hidden absolute group-hover:block top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer" onClick={nextSlide}>
                    <BsChevronCompactRight size={30}/>
                </div>
                <div className="flex top-4 justify-center py-2">
                    {slides.map((slide, index) => (
                        <div key={index} className={`cursor-pointer text-2xl ${currentSlide == index ? 'text-sky-600' : '' } `} onClick={()=>setCurrentSlide(index)}>
                            <RxDotFilled />
                        </div>
                        
                    ))}
                </div>
            </div>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            {/* <div className=" container w-100 flex flex-col items-center">
                <ul className="flex flex-row items-center gap-4">
                    
                    {products.map((product)=>(  
                        <div className="w-[350px] rounded-sm shadow-lg">
                            <li key={product.id}>
                                <img src='https://placehold.co/600x400' className="h-50" alt="" />
                                <h3 className="text-xl">{product.name}</h3>
                                <p className="text-lg">{product.description}</p>
                                <div className="rounded-full bg-green-700 w-1/2 ">
                                    <p className="text-white text-xl font-bold p-2">${product.price}</p>
                                </div>
                            </li>
                        </div> 
                    ))}
                </ul>                
                    </div> */}

        </section>
    )



}
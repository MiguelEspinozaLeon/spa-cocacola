import './App.css'
import { BrowserRouter } from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link'
import AboutPage from './sections/AboutPage'
import ContactPage from './sections/ContactPage'
import ProductsPage from './sections/ProductsPage'
import NasaSection from './sections/NasaSection'
import NasaNews from './sections/NasaNews'


function App() {

  return (
    <>
      <BrowserRouter>
      
      <nav className='relative z-10 w-screen'>
        <div className='fixed  bg-sky-950 p-2 flex flex-wrap items-center justify-between mx-auto inset-x-0 top-0 '>
          <a href="https://www.google.com" className='flex items-center'>
            <img className='h-20 mr-3' src="https://placehold.co/600x400" alt="" />
            <span className='self-center text-3xl font-semibold text-stone-50'>Empresa</span>
          </a>
          <ul className='flex flex-row justify-start gap-4 text-xl text-stone-50 px-4'>
            <li>
              <a className='hover:font-bold' href="#">Home</a>
            </li>
            <li>
              <Link className='hover:font-bold' to="#about-page">About</Link>
            </li>
            <li>
              <Link className='hover:font-bold' to="#contact-page">Contact</Link>
            </li>
            
          </ul>
        </div>
      </nav>
      <main className='container content-center flex flex-col mt-10 mx-auto'>
        <ProductsPage/>
        <AboutPage/>
        <ContactPage/>
        <NasaSection />
        <NasaNews/>
      </main>

      <footer className="shadow bg-sky-950 ">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center h-[200px] md:justify-between">
          <span className="text-sm text-stone-50 sm:text-center">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-stone-50 sm:mt-0">
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
            </li>
            <li>
                <a href="#" className="hover:underline">Contact</a>
            </li>
        </ul>
        
        </div>
    </footer>
    </BrowserRouter>
    </>
  )
}

export default App

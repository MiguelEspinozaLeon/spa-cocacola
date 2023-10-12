import './App.css'
import { BrowserRouter } from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link'
import AboutPage from './sections/AboutPage'
import ContactPage from './sections/ContactPage'
import ProductsPage from './sections/ProductsPage'


function App() {

  return (
    <>
      <BrowserRouter>
      
      <nav className='relative z-10'>
        <div className='fixed w-full bg-sky-950 p-2 flex flex-wrap items-center justify-between mx-auto inset-x-0 top-0 '>
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
      <div className='container mx-auto p-5 flex flex-col mt-10'>
        <ProductsPage></ProductsPage>
        <AboutPage></AboutPage>
        <ContactPage></ContactPage>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App

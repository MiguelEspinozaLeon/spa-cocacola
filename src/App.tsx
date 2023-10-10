import './App.css'
import { BrowserRouter } from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link'
import AboutPage from './sections/AboutPage'
import ContactPage from './sections/ContactPage'
import ProductsPage from './sections/ProductsPage'
import NavBar from './layout/NavBar'

function App() {

  return (
    <>
      <BrowserRouter>
      
      <nav className='relative bg-gray-700 border-gray-200 dark:bg-gray-900'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto absolute inset-x-0 top-0'>
          <a href="https://www.coca-cola.com.mx/" className='flex items-center'>
            <img className='h-20 mr-3' src="https://placehold.co/600x400" alt="" />
            <span className='self-center text-3xl font-semibold text-slate-700 hover:text-blue-600'>Empresa</span>
          </a>
          <ul className='flex flex-row justify-start gap-4 text-xl'>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <Link to="#about-page">About</Link>
            </li>
            <li>
              <Link to="#contact-page">Contact</Link>
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

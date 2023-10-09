import './App.css'
import { BrowserRouter } from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link'
import AboutPage from './AboutPage'
import ContactPage from './ContactPage'
import ProductsPage from './ProductsPage'

function App() {

  return (
    <>
      <BrowserRouter>
      <nav className='bg-gray-700 border-gray-200 dark:bg-gray-900 '>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto absolute inset-x-0 top-0'>
          <a href="https://www.coca-cola.com.mx/" className='flex items-center'>
            <img className='h-20 mr-3' src="src/assets/logococacola.png" alt="" />
            <span className='self-center text-2xl font-semibold text-red-500 hover:text-red-700'>Coca Cola</span>
          </a>
          <ul className='flex flex-row justify-start gap-4'>
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
      <div className='container mx-auto p-10'>
        <ProductsPage></ProductsPage>
        <AboutPage></AboutPage>
        <ContactPage></ContactPage>
      </div>
      <footer>
        <div className='flex flex-row justify-center gap-4'>
          <a href="https://www.facebook.com/CocaColaMX" className='flex items-center'>
            <img className='h-20 mr-3' src="src/assets/facebook.png" alt="" />
          </a>
          <a href="https://twitter.com/CocaColaMx" className='flex items-center'>
            <img className='h-20 mr-3' src="src/assets/twitter.png" alt="" />
          </a>
          <a href="https://www.instagram.com/cocacolamx/" className='flex items-center'>
            <img className='h-20 mr-3' src="src/assets/instagram.png" alt="" />
          </a>
        </div>
      </footer>
    
    </BrowserRouter>
    </>
  )
}

export default App

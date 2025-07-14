
import { SlBubbles } from "react-icons/sl";

import reactLogo from '../../assets/react.svg'

function Header() {
  return (
    <header className='bg-red-600 text-white flex justify-between items-center p-4'>


      <nav className='hidden sm:flex sticky gap-4 '>
        {
          [
            { href: 'home', text: "Inicio" },
            { href: 'menu', text: "Menú" },
            { href: 'contact', text: "Contáctenos" }
          ].map((links) =>
            <a href={`#${links.href}`} className='hover:text-gray-200 hover:bg-amber-50/65 rounded-full p-1'>
              {links.text}
              </a>
          )
        }
      </nav>

      {/* <div className='logo text-3xl font-bold'>La Pollera</div> */}

      <a href="https://google.co.cr" className="flex items-center">
        <img src={reactLogo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">La Pollera</span>
      </a>

      <form className="hidden sm:flex">
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" id="default-search" className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
          {/* <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
        </div>
      </form>

      {/* <button className='flex items-center bg-yellow-400 text-red-600 px-4 py-2 rounded hover:bg-yellow-300 transition-colors'>
        <SlBubbles className='mr-2' />Request a Quote
      </button> */}
      <button className='sm:hidden text-xl'>☰</button>

    </header>
  );
}

export default Header;
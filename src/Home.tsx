import React from 'react';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl">My Website</h1>
          <Menu>
            <MenuButton className="text-white focus:outline-none">
              Menu
            </MenuButton>
            <MenuItems className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
              <MenuItem>
                <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200" href="/about">
                  About
                </a>
              </MenuItem>
              <MenuItem>
                <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200" href="/services">
                  Services
                </a>
              </MenuItem>
              <MenuItem>
                <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200" href="/contact">
                  Contact
                </a>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex-grow bg-blue-600 text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Welcome to My Website</h2>
          <p className="mt-4 text-lg">Your one-stop solution for all your needs.</p>
          <a href="/get-started" className="mt-6 inline-block bg-white text-blue-600 px-4 py-2 rounded">
            Get Started
          </a>
        </div>
      </header>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          <p>© 2024 My Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;

import React, { useState } from 'react'
import ThemeToggle from './ToggleTheme'
import { motion } from 'framer-motion'
import logo from "@/lib/assests/logo.png"
import Image from 'next/image'
const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div>
            <header className="container mx-auto px-4 py-6">
                <nav className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 flex gap-x-3 justify-center items-center">

                    <Image alt='logo' src={logo} height={30} width={30}  /> 
                        <span>
                            DailyPe
                        </span>
                        
                     
                    </div>
                    <div className="hidden md:flex space-x-6 items-center">
                        <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Features</a>
                        <a href="#how-it-works" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">How It Works</a>
                        <a href="#apply" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Apply Now</a>
                        <ThemeToggle />
                    </div>
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </nav>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden mt-4 space-y-2"
                    >
                        <a href="#features" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Features</a>
                        <a href="#how-it-works" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">How It Works</a>
                        <a href="#apply" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Apply Now</a>
                        <div className="pt-2">
                            <ThemeToggle />
                        </div>
                    </motion.div>
                )}
            </header>
        </div>
    )
}

export default NavBar
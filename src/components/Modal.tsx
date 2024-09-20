'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X,CheckCircle } from 'lucide-react'
import qr from "@/lib/assests/qrpay.png";
import Image from 'next/image';


export default function DownloadAppModal() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [mobileNumber, setMobileNumber] = useState('')
  const [message,setMessage] = useState(false); 

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle SMS sending logic here
    console.log('Sending SMS to:', mobileNumber)
    // Reset the input field
    setMessage(true)
    setMobileNumber('')
  }

  return (
    <>
      <button
        onClick={openModal}
        className="bg-blue-600 text-white  px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 inline-flex items-center"
      >
        Download App
      </button>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white  dark:bg-[#030712] rounded-lg p-6 max-w-md w-full relative"
            >
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-500  hover:text-gray-700"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <h2 className="text-2xl font-bold text-center mb-4">Scan / Click Code</h2>
              <p className="text-center text-gray-600 dark:text-white mb-4">You will be redirected to play store</p>

              <div className="flex justify-center mb-6">
                <Image
                  src={qr}
                  width={200}
                  height={200}
                  alt="QR Code to download app"
                //   className="w-48 h-48"
                />
              </div>

              <div className="flex items-center justify-center mb-6">
                <div className="border-t border-gray-300 flex-grow"></div>
                <span className="px-3 bg-white text-gray-500">OR</span>
                <div className="border-t border-gray-300 flex-grow"></div>
              </div>

              <h3 className="text-xl font-semibold text-center mb-4">Get app link via SMS</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="mobileNumber" className="sr-only">Enter your mobile number</label>
                  <input
                    type="number"
                    maxLength={10}
                    minLength={10}
                    id="mobileNumber"
                    placeholder="Enter your mobile number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {
                 message? <div className='w-full flex gap-x-2 justify-center items-center'>
                <span className='text-neutral-800 font-semibold dark:text-white'>OTP SENT</span>

                <CheckCircle className='text-green-500'/>
               </div>:<button
                 type="submit"
                 className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
               >
                 SEND
               </button>
                }
              
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
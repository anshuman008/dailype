'use client'

import { motion } from 'framer-motion'
import NavBar from '@/components/NavBar'
import Lottie from 'lottie-react'
import moneyAnimation from "@/lib/assests/money.json";
// import AnimatedGradientTextDemo from '@/components/GradientHeader'
import BoxReveal from '@/components/magicui/box-reveal'
import SparklesText from '@/components/magicui/sparkles-text'
import LoanApplicationSteps from '@/components/Steps'
import DownloadAppModal from '@/components/Modal'
import DailyComponent from '@/components/DailyView'
import logo from "@/lib/assests/logo.png"
import Image from 'next/image'
import ShineBorder from '@/components/magicui/shine-border'
import { useEffect, useState } from 'react'
import MarqueeDemo from '@/components/Marquee'
import CardHoverEffectDemo from '@/components/CardEffects'


export default function DailyPeLanding() {
  
  const [hydration,setHydration] = useState(false);

   useEffect(() => {
    setHydration(true);
   },[])


   if(!hydration){
    return null;
   }

  return (
    <div className="min-h-screen bg-white dark:bg-[#09090b]  text-gray-900 dark:text-gray-100 transition-colors duration-200">
      {/* Header */}

      <NavBar />

      {/* Hero Section */}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className=" w-full flex items-center justify-center"
      >
        {/* <AnimatedGradientTextDemo /> */}
        <div className='flex gap-2'>
          <SparklesText sparklesCount={10} className='text-lg rounded-lg' text="We are backed by " />
          <img src="https://dailype.in/images/yc.png" className="w-28" />

        </div>

      </motion.div>
      <section className="container mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Get Daily Business Loans from <span className="text-blue-600 dark:text-blue-400">₹2K to ₹2L</span> in Minutes
            </h1>
          </BoxReveal>



          <p className="text-xl text-gray-600 dark:text-gray-300">
            Stress-Free Business Loans with <span className="font-semibold">Daily Repayments</span>
          </p>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-600 dark:text-gray-300 mb-8"
        >


          Say goodbye to monthly loan burdens. DailyPe helps small shop owners manage cash flow with ease.


        </motion.p>


        <div className='w-full flex justify-center items-center'>
          <Lottie className='size-[400px]' animationData={moneyAnimation} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-4"
        >
          {/* <a
              href="#apply"
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 inline-block"
            >
              Apply for a Loan
            </a> */}

          <DownloadAppModal />

        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose DailyPe?</h2>
        {/* <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Wallet className="w-12 h-12 text-blue-600 dark:text-blue-400" />, title: "Daily Repayments", description: "Automatically deduct small amounts daily from your digital wallet" },
            { icon: <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />, title: "No Defaults", description: "Stay on track with manageable daily payments" },
            { icon: <TrendingUp className="w-12 h-12 text-purple-600 dark:text-purple-400" />, title: "Improve Credit Score", description: "Build a strong credit history with consistent repayments" }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div> */}
        <CardHoverEffectDemo/>
      </section>

      {/* How It Works Section */}
      {/* <section id="how-it-works" className="container mx-auto px-4 py-16 bg-gray-50 dark:bg-gray-900">
          <h2 className="text-3xl font-bold text-center mb-12">How DailyPe Works</h2>
          <div className="max-w-3xl mx-auto">
            {[
              { step: 1, title: "Apply Online", description: "Fill out our simple online application form" },
              { step: 2, title: "Get Approved", description: "Receive a quick decision on your loan application" },
              { step: 3, title: "Receive Funds", description: "Get the funds deposited directly into your account" },
              { step: 4, title: "Easy Repayments", description: "Small daily deductions from your digital wallet" }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center mb-8"
              >
                <div className="bg-blue-600 dark:bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section> */}

      <LoanApplicationSteps />

      <DailyComponent />
      {/* Call to Action Section */}
      {/* <section id="apply" className="container mx-auto px-4 py-16 text-center max-w-6xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-blue-600 dark:bg-blue-700 text-white rounded-lg p-12"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Download the App now and take control of your business finances</p>
          <DownloadAppModal />
        </motion.div>
      </section> */}

      {/* <Section id='testimonial' className='bg-red-400 w-full' > */}
        <MarqueeDemo/>
      {/* </Section> */}

      {/* YC Backing Section */}
      <section className="container mx-auto px-4 py-16 text-center w-full flex justify-center items-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-100 dark:bg-gray-800 rounded-lg  max-w-6x"
        >

          <ShineBorder
            className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          >

            <h2 className="text-3xl font-bold mb-4">Backed by Y Combinator</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              We&apos;re proud to be supported by the world&apos;s leading startup accelerator, bringing you innovative financial solutions.
            </p>
            <img src="https://dailype.in/images/yc.png" alt="Y Combinator Logo" className="mx-auto w-72" />

          </ShineBorder>

        </motion.div>

      </section>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-[#09090b] text-white py-8 border-t-2 ">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0 flex gap-x-2 justify-between items-center">
              <Image alt='logo' src={logo} height={30} width={30} />
              <span>
                DailyPe
              </span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">Terms of Service</a>
              <a href="#" className="hover:text-blue-400">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400">Contact Us</a>
            </div>
          </div>
          <div className="mt-4 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} DailyPe. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
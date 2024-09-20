'use client'
import {  FileText,CreditCard,CheckCircle } from 'lucide-react'
import Lottie from 'lottie-react'
import moneyIcon from "@/lib/assests/recievemoney.json";
import CustromerCare from "@/lib/assests/customercare.json"
import document from "@/lib/assests/documents.json"


export default function LoanApplicationSteps() {
  const steps = [
    {
      title: "Provide Information",
      description: "Fill out our simple online application form with your details.",
      icon: <FileText className="w-10 h-10 text-blue-600" />,
      Animation: CustromerCare
    },
    {
      title: "Quick Approval",
      description: "Our team reviews your application and provides fast approval.",
      icon: <CreditCard className="w-10 h-10 text-green-600" />,
      Animation: document

    },
    {
      title: "Receive Funds",
      description: "Once approved, the loan amount is transferred to your account.",
      icon: <CheckCircle className="w-10 h-10 text-purple-600" />,
      Animation: moneyIcon
    },
  ]

  return (
    <div id='how-it-works' className="container mx-auto px-4 py-16 max-w-4xl">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        Apply for loan in <span className="text-blue-600">3 easy steps</span>
      </h2>
      <div className="space-y-12">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-lg shadow-lg p-6">
            <div className="w-full md:w-1/2">
              <Lottie animationData={step.Animation} />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">Step {index + 1}</h3>
              </div>
              <h4 className="text-xl font-medium text-blue-600">{step.title}</h4>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
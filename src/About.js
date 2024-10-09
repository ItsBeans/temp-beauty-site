'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Treatments from './Treatments';


import Foot from './Foot';
import Header from './Header';

export default function About() {
 

  return (
    <div className="">
      <Header/>
        <div className=" place-content-center mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              About me
            </h1>
            <div class="grid grid-flow-row gap-5 content-center">
            <p className="mt-6 text-lg leading-8 text-gray-600">
            As an NVQ Level 3 qualified practitioner based in London, I specialise in holistic facials designed to promote relaxation and well-being. My approach incorporates soothing facial massage techniques and a selection of premium products, including Neal's Yard, Cell Fusion C, and Medik8. I am dedicated to creating a personalised experience that nurtures both your skin and spirit. 

            </p>
            
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      
      <Foot/>
    </div>
  )
}

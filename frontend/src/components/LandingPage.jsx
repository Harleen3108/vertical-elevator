import React from 'react';
import { Users, Building2, CheckCircle2, Award } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import ContactForm from './ContactForm';
import glmMotor from '../assets/glm_motor.png';
import controlPanel from '../assets/control_panel.png';
import cabinDesign from '../assets/cabin_design.png';
import landingPanel from '../assets/landing_panel.png';
import aboutUsImage from '../assets/about_us.png';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Navbar />

      {/* Hero Section with Form */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Premium Elevator Solutions for Your Building
              </h1>
              <p className="text-sm md:text-base mb-8 text-blue-100">
                Safety, Reliability, and Innovation in Every Lift
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>ISO Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>1000+ Installations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>Lifetime Support</span>
                </div>
              </div>
            </div>
            
            {/* Contact Form in Hero */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Featured Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img 
                  src={glmMotor} 
                  alt="GLM Gearless Motor" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  GLM Gearless Motor
                </h3>
                <p className="text-gray-600 text-sm">
                  High-efficiency gearless traction machine with advanced technology, ensuring smooth and quiet operation with minimal maintenance requirements.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img 
                  src={controlPanel} 
                  alt="CP Control Panel" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  CP Control Panel
                </h3>
                <p className="text-gray-600 text-sm">
                  State-of-the-art control panel with intelligent microprocessor technology, providing precise floor leveling and enhanced safety features.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img 
                  src={cabinDesign} 
                  alt="Cabin Design" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Cabin Design
                </h3>
                <p className="text-gray-600 text-sm">
                  Premium elevator cabins with customizable interiors, featuring elegant finishes, LED lighting, and modern aesthetics to match your building's style.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img 
                  src={landingPanel} 
                  alt="Landing Operating Panel" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  Landing Operating Panel
                </h3>
                <p className="text-gray-600 text-sm">
                  Durable and user-friendly landing panels with illuminated buttons, digital floor indicators, and sleek design for seamless operation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={aboutUsImage} 
                alt="About Vertical Elevators" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                About Us
              </h2>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                The company started its operations in 2001. Today, Vertical Elevators is one of the leading providers of elevators and is active in the areas of production, installation, maintenance, and modernization. With operations in many cities of India, the Vertical Elevators Group is one of the fastest-growing companies in the region around the National Capital Region.
              </p>
              <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                Innovative and environmentally friendly access and transit management systems make an important contribution to mobility in urban societies.
              </p>
              
              <div className="flex items-center gap-4 bg-blue-50 p-6 rounded-xl">
                <div className="bg-blue-600 text-white p-4 rounded-full">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Get Support</p>
                  <a href="tel:9555448833" className="text-2xl font-bold text-blue-900 hover:text-blue-700 transition-colors">
                    9555448833
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Say Goodbye to Stairs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Say Goodbye to Stairs with Vertical Elevators
            </h2>
            <p className="text-sm text-gray-600 max-w-4xl mx-auto mb-4">
               Just imagine a home where you can move across floors with utter comfort and no stress! VERTICAL ELEVATORS PVT. LTD. is here to make that possible with advanced home elevators that simplify your floor-to-floor movement. Transform your home with Vertical Elevators' easy and affordable solutions. Stairs will no longer stand in your way your path to convenient living starts here.
            </p>
            <p className="text-sm text-gray-600 max-w-4xl mx-auto">
              Discover how VERTICAL ELEVATORS PVT. LTD. can make your life easier.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                Quick & Easy Installation
              </h3>
              <p className="text-gray-600 text-sm">
                No deep pit, no machine room, just a worry-free installation completed in just 5-7 days.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                Personalized Lift Sizes
              </h3>
              <p className="text-gray-600 text-sm">
                From compact sizes to large and spacious, get your lift personalized according to your home's size.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                Easy EMI Options
              </h3>
              <p className="text-gray-600 text-sm">
                Affordability just got more affordable with our easy EMI options...
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                24/7 Professional Support
              </h3>
              <p className="text-gray-600 text-sm">
                We offer India's only round-the-clock assistance for home elevators.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="#contact" 
              className="inline-block bg-blue-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition-colors shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get in Touch with vertical elevators
            </h2>
            <p className="text-blue-100 text-sm">
              Ready to elevate your space? Fill out the form below and we'll get back to you shortly.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}

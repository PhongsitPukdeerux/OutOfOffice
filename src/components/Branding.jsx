import React from 'react'

const Branding = () => {
  return (
    <div className="flex flex-col bg-blue md:flex-row items-center justify-center p-6">
      
      <div className="w-full max-w-5xl  text-white rounded-2xl overflow-hidden md:flex">
        <div className="w-full md:w-7/12 p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-clash-display mb-4  leading-tight">
            <span className="first-char">B</span>randing
          </h1>
          
          <p className="font-helvetica mb-6 leading-relaxed">
            In depth visual translation of brands that will identify the secret sauce behind a brand’s signature lo:ook and feel
          </p>
          
          <div className="flex items-center text-sm font-helvetica text-white tracking-wide">
            <svg className="w-5 h-5  mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
            </svg>
            <span>Timeline: 3 ~ 5 Weeks</span> 
          </div>
          
        </div>

        <div className="w-full md:w-5/12 flex-shrink-0">
          <img
            src="/animated/Branding400400.gif"
            alt="Branding GIF"
            className="w-[300px] h-[300px]"
          />
        </div>
        
      </div>
    </div>
  )
}

export default Branding
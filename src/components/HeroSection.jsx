function HeroSection() {
    return (
      <section id="hero" className="relative gradient-primary dark:gradient-dark py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-black dark:text-white md:text-5xl lg:text-6xl">
              🚗 Hassle-Free Parking with Professional Drivers
            </h1>
            <p className="mb-8 text-xl text-[#CACACA] dark:text-gray-300 md:text-2xl">
              Drop off your car, and let our expert drivers handle the rest. Secure, smart, and stress-free parking.
            </p>
            <button className="h-12 rounded-full bg-white dark:bg-gray-800 px-8 text-lg font-medium text-gray-800 dark:text-white hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.6)] dark:shadow-[0_0_15px_rgba(0,0,0,0.6)] hover:shadow-[0_0_20px_rgba(255,255,255,0.9)] dark:hover:shadow-[0_0_20px_rgba(0,0,0,0.9)]">
  🔘 Book Your Spot Now
</button>

          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
      </section>
    )
  }
  
  export default HeroSection
  
  
function CtaSection() {
    return (
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold gradient-text md:text-4xl">Ready for Stress-Free Parking?</h2>
            <p className="mb-8 text-xl text-[#CACACA] dark:text-gray-400">
              Join thousands of satisfied customers who have transformed their parking experience.
            </p>
            <button className="h-12 rounded-full gradient-primary gradient-primary-hover px-8 text-lg font-bold text-white transition-all duration-300 shadow-[0_0_15px_rgba(26,221,134,0.6)] hover:shadow-[0_0_20px_rgba(26,221,134,0.9)] hover:scale-105">
              🚗 Book Your Parking Spot Now!
            </button>
          </div>
        </div>
      </section>
    )
  }
  
  export default CtaSection
  
  
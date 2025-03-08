import { IconQrcode, IconCar,  } from "@tabler/icons-react"
import { IconShield } from "@tabler/icons-react"

function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="py-16 md:py-24 dark:bg-gray-800 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold gradient-text md:text-4xl">How It Works</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <StepCard
            icon={<IconQrcode size={48} className="text-white" />}
            number="1"
            title="Scan & Book"
            description="Scan the QR code, select a time, and pay securely. Our system makes booking a parking spot as easy as taking a photo."
          />
          <StepCard
            icon={<IconCar size={48} className="text-white" />}
            number="2"
            title="Drop Off"
            description="Arrive at the designated location and let our professional driver park your vehicle. No more circling around looking for spots."
          />
          <StepCard
            icon={<IconShield size={48} className="text-white" />}
            number="3"
            title="Retrieve & Go"
            description="Get your keys from a secure locker or opt for a return service. Your car will be ready when you are, no waiting required."
          />
        </div>
        <div className="mt-12 text-center">
          <button className="h-12 rounded-full gradient-primary gradient-primary-hover px-8 text-lg font-medium text-white transition-all duration-300 shadow-[0_0_15px_rgba(26,221,134,0.6)] hover:shadow-[0_0_20px_rgba(26,221,134,0.9)] hover:scale-105">
            Experience Seamless Parking 🚀
          </button>
        </div>
      </div>
    </section>
  )
}

function StepCard({ icon, number, title, description }) {
  return (
    <div className="flex flex-col p-8 rounded-2xl bg-white dark:bg-gray-700 shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl gradient-shadow gradient-shadow-hover border border-transparent hover:gradient-border">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full gradient-primary transition-all duration-300 hover:shadow-[0_0_15px_rgba(17,198,117,0.8)]">
        {icon}
      </div>
      <div className="flex items-center mb-4">
        <div className="flex justify-center items-center w-8 h-8 rounded-full gradient-primary text-white font-bold mr-2">
          {number}
        </div>
        <h3 className="text-2xl font-bold dark:text-white">{title}</h3>
      </div>
      <p className="text-[#CACACA] dark:text-gray-300 text-lg">{description}</p>
      <div className="mt-6">
        <a href="#" className="gradient-text font-medium hover:underline">
          Learn more →
        </a>
      </div>
    </div>
  )
}

export default HowItWorksSection


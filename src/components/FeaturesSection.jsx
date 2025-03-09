import { MacbookScroll } from "./ui/macbook-scroll"
import { IconClock, IconMapPin, IconShield, IconDeviceMobile, IconCreditCard,  } from "@tabler/icons-react"
import { IconHeadset } from "@tabler/icons-react"

function FeaturesSection() {
  const features = [
    {
      title: "Real-time Slot Availability",
      description: "Check parking availability in real-time before you arrive.",
      icon: <IconClock size={24} className="text-white" />,
    },
    {
      title: "GPS-enabled Vehicle Tracking",
      description: "Know exactly where your vehicle is at all times.",
      icon: <IconMapPin size={24} className="text-white" />,
    },
    {
      title: "Secure Smart Lockers",
      description: "Your keys are safely stored in our secure smart lockers.",
      icon: <IconShield size={24} className="text-white" />,
    },
    {
      title: "Instant Notifications",
      description: "Receive real-time updates and digital receipts.",
      icon: <IconDeviceMobile size={24} className="text-white" />,
    },
    {
      title: "Apple Pay & Google Pay Support",
      description: "Quick and secure payment options for your convenience.",
      icon: <IconCreditCard size={24} className="text-white" />,
    },
    {
      title: "24/7 Customer Assistance",
      description: "Our support team is always available to help you.",
      icon: <IconHeadset size={24} className="text-white" />,
    },
  ]

  return (
    <section
      id="features"
      className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 md:py-24"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-5 text-center text-3xl font-bold gradient-text md:text-4xl">Key Features</h2>

        <div className="w-full max-w-6xl mx-auto">
          <MacbookScroll
            title={<span className="text-2xl font-semibold text-center gradient-text">Parking App Features</span>}
            src="/placeholder.svg?height=1080&width=1920"
            showGradient={true}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col p-6 rounded-xl bg-white dark:bg-gray-800 
                    shadow-[0_0_10px_rgba(17,198,117,0.2)] 
                    hover:shadow-[0_0_20px_rgba(17,198,117,0.6)] 
                    dark:shadow-[0_0_10px_rgba(26,221,134,0.15)] 
                    dark:hover:shadow-[0_0_20px_rgba(26,221,134,0.4)] 
                    transition-all duration-500 
                    hover:scale-105 
                    border border-transparent 
                    hover:gradient-border
                    dark:text-white"
                >
                  <div className="p-3 rounded-full gradient-primary w-fit mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-[#CACACA] dark:text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </MacbookScroll>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection


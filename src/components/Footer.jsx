import { IconCar, IconBrandFacebook, IconBrandTwitter,  } from "@tabler/icons-react"
import { IconBrandInstagram } from "@tabler/icons-react"

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <IconCar className="h-6 w-6 text-[#11C675]" />
              <span className="text-lg font-bold gradient-text">ParkEase</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              The smart way to park your vehicle with professional drivers.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<IconBrandFacebook className="h-5 w-5" />} />
              <SocialLink href="#" icon={<IconBrandTwitter className="h-5 w-5" />} />
              <SocialLink href="#" icon={<IconBrandInstagram className="h-5 w-5" />} />
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider gradient-text">Services</h3>
            <ul className="space-y-2">
              <FooterLink href="#">Parking Services</FooterLink>
              <FooterLink href="#">Valet Parking</FooterLink>
              <FooterLink href="#">Long-term Parking</FooterLink>
              <FooterLink href="#">Airport Parking</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider gradient-text">Company</h3>
            <ul className="space-y-2">
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Press</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider gradient-text">Legal</h3>
            <ul className="space-y-2">
              <FooterLink href="#">Terms</FooterLink>
              <FooterLink href="#">Privacy</FooterLink>
              <FooterLink href="#">Cookies</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} ParkEase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      className="flex h-8 w-8 items-center justify-center rounded-full gradient-primary text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_10px_rgba(17,198,117,0.6)]"
    >
      {icon}
    </a>
  )
}

function FooterLink({ href, children }) {
  return (
    <li>
      <a
        href={href}
        className="text-gray-600 dark:text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#11C675] hover:to-[#1ADD86] transition-colors duration-300"
      >
        {children}
      </a>
    </li>
  )
}

export default Footer


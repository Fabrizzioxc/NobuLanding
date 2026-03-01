import React from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const menuItems = [
  { name: "Nosotros", href: "#AboutUs" },
  { name: "Proceso", href: "#Process" },
  { name: "Proyectos", href: "#projects" },
]

export default function Navbar() {
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center px-4">
      <motion.nav
        initial={false}
        animate={{
          maxWidth: isScrolled ? "820px" : "1152px",
          marginTop: isScrolled ? "8px" : "16px",
          paddingLeft: isScrolled ? "20px" : "32px",
          paddingRight: isScrolled ? "20px" : "32px",
          borderColor: isScrolled ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0)",
        }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ width: "100%" }}
        className="flex items-center justify-between rounded-full bg-black/60 backdrop-blur-xl shadow-lg"
      >
        {/* LOGO */}
        <div className="flex items-center py-5">
        <a href="/" className="flex items-center gap-2">
            <img
            src="/Nobu-Logo.svg"
            alt="Nobu Logo"
            className={`w-auto object-contain transition-all duration-300 ${
                isScrolled ? "h-6" : "h-8"
            }`}
            />
            <span
            className={`font-semibold tracking-tight transition-all duration-300 ${
                isScrolled ? "text-2xl" : "text-3xl"
            } text-white`}
            >
            Nobu
            </span>
        </a>
        </div>

        {/* MENU DESKTOP */}
        <ul className="hidden lg:flex gap-8 text-base text-white/60">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="hover:text-white transition duration-200">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* BOTÓN CTA */}
        <div className="hidden lg:flex items-center">
          <Button
            size="lg"
            className="rounded-full px-5 text-base bg-white text-black hover:bg-white/90 font-medium"
          >
            Contáctanos
          </Button>
        </div>

        {/* MOBILE */}
        <button
          onClick={() => setMenuState(!menuState)}
          className="lg:hidden text-white"
        >
          {menuState ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

 {/* Mobile menu */}
<AnimatePresence>
  {menuState && (
    <motion.div
      initial={{
        opacity: 0,
        y: -10,
        backdropFilter: "blur(0px)",
      }}
      animate={{
        opacity: 1,
        y: 20,
        backdropFilter: "blur(16px)",
      }}
      exit={{
        opacity: 0,
        y: -10,
        backdropFilter: "blur(0px)",
      }}
      transition={{
        duration: 0.35,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="lg:hidden absolute top-16 left-4 right-4 bg-black/60 rounded-2xl p-4 flex flex-col gap-3"
      style={{
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      {menuItems.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="text-white/70 hover:text-white text-sm py-2 px-3 rounded-lg hover:bg-white/5 transition"
          onClick={() => setMenuState(false)}
        >
          {item.name}
        </a>
      ))}

      <Button
        size="sm"
        className="rounded-full mt-1 bg-white text-black hover:bg-white/90"
      >
        Contáctanos
      </Button>
    </motion.div>
  )}
</AnimatePresence>
    </header>
  )
}
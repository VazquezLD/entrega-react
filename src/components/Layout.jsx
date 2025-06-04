import { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Aside } from "./Aside";
import '../styles/Layout.css';

export const Layout = ({ children }) => {
  const [showNav, setShowNav] = useState(false)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768)
    }
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      <Navbar showNav={showNav} setShowNav={setShowNav} />
      {(isDesktop || showNav) && <Aside />}
      <main>{children}</main>
    </>
  )
}

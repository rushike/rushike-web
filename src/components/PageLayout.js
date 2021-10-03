import React, { useEffect } from "react"
import { Container } from "react-bootstrap"
import Header from "./Header"
import Footer from "./Footer"
import { Firebase } from "../firebase/Firebase"

export default ({ children }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      Firebase.init()
    }
  }, [])
  return (
    <Container fluid className="px-0 theme-light app-container">
      <Header />
      <Container fluid className="pt-5 mt-5 text-center pb-3">
        {children}
      </Container>
      <Footer />
    </Container>
  )
}
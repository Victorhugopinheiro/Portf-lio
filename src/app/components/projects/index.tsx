"use client"

import "./style.css"

import { FrontEnd } from "./components/frontend"
import { FullStack } from "./components/fullstack"
import { Footer } from "./components/footer"





export function Projects() {
  return (
    <section className="">

      <FullStack item="FullStack" />
      <FrontEnd item="FrontEnd" />
      <Footer />



    </section>
  )
}

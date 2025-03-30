"use client"
import { useLayoutEffect } from "react"
import Image from "next/image"
import "./styles.css"
import me from "../../../../public/me1.0.jpg"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import bgPortfolio from "../../../../public/bg-portfolio.jpg"


export function Hight() {




  return (
    <main className="container">


      <div className="controlMyBg">
        <div className="bg-image">

        </div>
      </div>




      <section className="content">




        <div className="about">


          <div data-aos="fade-right" className="controlImage">
            <Image className="myImg" fill quality={100} priority src={me} alt="Minha foto" />
          </div>

          <div className="control">
            <div className="controlAbout">
              <h1 data-aos="fade-down">Quem eu sou?</h1>

              <div className="descriptionAbout">
                <p data-aos="fade-left">Estudante de Análise e Desenvolvimento de Sistemas, Meu objetivo é alavancar boas práticas e
                  desenvolver soluções eficientes , Além do conhecimento que estou adquirindo durante a minha
                  gradução, estudo nos meus tempos vagos para ampliar minhas habilidades e estou à procura de
                  uma empresa, onde possa aplicar meu conhecimento adquirido através de cursos e projetos
                  pessoais.</p>
              </div>
            </div>
          </div>



        </div>
      </section>
    </main>
  )
}
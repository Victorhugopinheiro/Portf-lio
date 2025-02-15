"use client"

interface PropsContainer {
    item: string,

}

import Link from "next/link"

import Image from "next/image"
import "./style.css"
import logo from "../../../../../../public/hamb-1.png"
import { gsap } from "gsap"
import { use, useLayoutEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Container } from "../container"
import { Grid } from "../grid"
import devControle from "../../../../../../public/imagemDevControle.jpg"


export function FullStack({ item }: PropsContainer) {
    const el = useRef<HTMLDivElement>(null)
    const tl = useRef<gsap.core.Timeline | null>(null);



    const tittle = useRef<gsap.core.Timeline | null>(null);


    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const ctx = gsap.context(() => {
            tl.current = gsap.timeline({
                scrollTrigger: {
                    trigger: ".myGrid2",
                    scrub: true,
                    //markers: true,
                    start: "top 400px",
                    end: "bottom 900px",

                }
            })

                .fromTo("#item5", {
                    opacity: 0,
                    y: 160
                }, {
                    opacity: 1,
                    y: 0
                })
                
               
        })



        return () => {
            gsap.killTweensOf(".myGrid2")
        }
    }, [el])


    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const context = gsap.context(() => {
            tittle.current = gsap.timeline({
                scrollTrigger: {
                    trigger: ".myH12",
                    scrub: true,
                    start: "top 320px",
                    end: "bottom 300px",

                }
            })

                .fromTo(".myH12", {
                    opacity: 0,
                    x: -160
                }, {
                    opacity: 1,
                    x: 0

                })
        })

        return (() => {
            gsap.killTweensOf(".myH12")
        })
    }, [])


    return (
       
            <section className="projectSection">

                <h1 className="myH12">{item}</h1>




                <div className="myGrid2" ref={el}>


                    <Grid item="item5" rota="games/devcontrole" src={devControle} titlle="Dev Controler" description="Dev Controler é um projeto que ajuda na organização da sua empresa feito com TypeScript, React, um back-end em NextJs que faz KRUD com o banco de dados: MongoDb, e PrismaClient."/>


                   

                   


                </div>



            </section>
    
    )
}
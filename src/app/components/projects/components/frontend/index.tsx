"use client"
import Link from "next/link"

interface PropsContainer {
    item: string,

}



import Image from "next/image"
import "./style.css"
import logo from "../../../../../../public/hamb-1.png"
import devMotors from "../../../../../../public/dev-motors1.jpg"
import petShop from "../../../../../../public/petshopImg (2).png"
import dalyGame from "../../../../../../public/DalyGame.jpg"
import { gsap } from "gsap"
import { use, useLayoutEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import webCars from "../../../../../../public/webCars.jpg"
import tarefasPlus from "../../../../../../public/Tarefas Plus.jpg"
import { Grid } from "../grid"
import { Container } from "../container"


export function FrontEnd({ item }: PropsContainer) {
    const el = useRef<HTMLDivElement>(null)
    const tl = useRef<gsap.core.Timeline | null>(null);



    const tittle = useRef<gsap.core.Timeline | null>(null);


    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const ctx = gsap.context(() => {
            tl.current = gsap.timeline({
                scrollTrigger: {
                    trigger: ".myGrid1",
                    scrub: true,
                    //markers: true,
                    start: "top 700px",
                    end: "bottom 1000px",

                }
            })

                .fromTo("#item1", {
                    opacity: 0,
                    y: 160
                }, {
                    opacity: 1,
                    y: 0
                })
                .fromTo("#item2", {
                    opacity: 0,
                    y: 160
                }, {
                    opacity: 1,
                    y: 0
                })
                .fromTo("#item3", {
                    opacity: 0,
                    y: 160
                }, {
                    opacity: 1,
                    y: 0
                })
                .fromTo("#item4", {
                    opacity: 0,
                    y: 160
                }, {
                    opacity: 1,
                    y: 0
                })
                .fromTo("#item5", {
                    opacity: 0,
                    y: 160
                }, {
                    opacity: 1,
                    y: 0
                })
                .fromTo("#item6", {
                    opacity: 0,
                    y: 160
                }, {
                    opacity: 1,
                    y: 0
                })
        })



        return () => {
            gsap.killTweensOf(".myGrid1")
        }
    }, [el])


    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const context = gsap.context(() => {
            tittle.current = gsap.timeline({
                scrollTrigger: {
                    trigger: ".myH1",
                    scrub: true,
                    //markers: true,
                    start: "top 800px",
                    end: "bottom 500px",

                }
            })

                .fromTo(".myH1", {
                    opacity: 0,
                    x: -160
                }, {
                    opacity: 1,
                    x: 0

                })
        })

        return (() => {
            gsap.killTweensOf(".myH1")
        })
    }, [])


    return (

        <section className="projectSection">

            <h1 className="myH1">{item}</h1>




            <div className="myGrid1" ref={el}>

                <div className="Grid1">
                    <Grid item="item1" rota="games/petShop" src={petShop} titlle="PetShop" description="Projeto feito com TypeScript, NextJs e React, buscando uma interface agradável e dinâmica ao usuário." />

                    <Grid item="item2" rota="games/cms" src={devMotors} titlle="DevMotors" description="Projeto feito com TypeScript, NextJs e React, usando cosmic para uma fácil manutenção e criação de novas páginas" />

                    <Grid item="item3" rota="games/dalygame" src={dalyGame} titlle="DalyGame" description="O Projeto DalyGames foi feito com TypeScript, NextJs, ReactJs, onde todas as páginas contem metadata para facilitar a procura no google e ajudar o usuário com uma dinâmica mais envolvente ao navegar no site." />


                    <Grid item="item4" rota="games/webcars" src={webCars} titlle="WebCars" description="Uma site de vendas de carros Feito com TypeScript, React e o banco de dados FireBase, um sistema de login com NextAuth" />

                    <Grid item="item5" rota="games/tarefaplus" src={tarefasPlus} titlle="Tarefas Plus" description="O tarefa-plus foi criado usando NextJS, React, TypeScript e FireBase nele tem um sistema de login com o google feito com o nextAuth e renderização do lado do servidor para um melhor desempenho." />
                </div>


            </div>


        </section >

    )
}
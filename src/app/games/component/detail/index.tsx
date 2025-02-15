"use client"
import { Container } from "@/app/components/projects/components/container"
import "./games.css"
import Image from "next/image"
import dalyGame from "../../../../public/DalyGame.jpg"
import { useEffect, useLayoutEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import daly from "../../../../public/image (1).png"
import { useRouter } from "next/navigation"

import { register } from 'swiper/element/bundle'
register()
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { FaReact } from "react-icons/fa"
import Link from "next/link"





interface ImageAndDescProps {
    imagem: string,
    descricao: string
}

interface DetailGamesProps {
    urlImagem1: string;
    description1: string;
    urlImagem2: string;
    description2: string;
    urlImagem3: string;
    description3: string;
    urlImagem4?: string | undefined
    description4?: string | undefined
    deploy:string


}



export function Detail({ description1, urlImagem1, description2, urlImagem2, description3, urlImagem3, description4,
    urlImagem4, deploy
}: DetailGamesProps) {



    const images: ImageAndDescProps[] = [
        {
            imagem: `${urlImagem1}`,
            descricao: `${description1}`
        },
        {
            imagem: `${urlImagem2}`,
            descricao: `${description2}`
        },
        {
            imagem: `${urlImagem3}`,
            descricao: `${description3}`
        }, {
            imagem: `${urlImagem4}`,
            descricao: `${description4}`
        }
    ]


   useEffect(() => {
    console.log(images[3])

   }, [])
        








    const [indexSwiper, setIndexSwiper] = useState<Number>(0)
    const [message, setMessage] = useState<ImageAndDescProps | undefined>(images[0])
    const [pagination, setPagination] = useState<number>(2)









    useLayoutEffect(() => {


        gsap.registerPlugin(ScrollTrigger)
        if (indexSwiper === 0) {
            gsap.to(`.description0`, {
                x: 0,
                opacity: 1,
                rotate: "0deg",

            })
        }
        if (indexSwiper === 1) {
            gsap.to(`.description1`, {
                x: 0,
                opacity: 1,
                rotate: "0deg",

            })
        }
        if (indexSwiper === 2) {
            gsap.to(`.description2`, {
                x: 0,
                opacity: 1,
                rotate: "0deg",

            })
        }
        if (indexSwiper === 3) {
            gsap.to(`.description3`, {
                x: 0,
                opacity: 1,
                rotate: "0deg",

            })
        }
        if (indexSwiper === 4) {
            gsap.to(`.description4`, {
                x: 0,
                opacity: 1,
                rotate: "0deg",

            })
        }

        gsap.to(".detailItem", {
            x: 0,
            opacity: 1
        })

        return () => {
            gsap.killTweensOf(".description0 .description1 .description2 .description3 .description4 ")
        }


    }, [indexSwiper])


    

    interface CustomEventDetail {
        activeIndex: number;
    }


    const handleSlideChange = (e: CustomEvent<CustomEventDetail>) => {
        const activeIndex = e.detail.activeIndex;
        setIndexSwiper(activeIndex)

        setMessage(images[activeIndex])

        console.log(activeIndex);

    };


    const router = useRouter()

    function returnPage() {
        router.replace("/")

    }




    return (



        <Container>


            {images && (
                <div className="controlSwiper">
                    <Swiper className="swiper"
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        navigation
                        onSlideChange={(swiper) => {
                            const event = new CustomEvent<CustomEventDetail>('slideChange', { detail: { activeIndex: swiper.activeIndex } });
                            handleSlideChange(event);
                        }}






                    >
                        {images?.map((imagem, index) => (


                            <SwiperSlide key={index}>

                                <div className="containerImagem">
                                    <Image className="myImage" src={imagem.imagem} alt="Fotos do projeto" priority={true} quality={100} fill={true} />
                                </div>

                            </SwiperSlide>
                        ))}


                    </Swiper>
                </div>
            )}







            <main className="main">




                <section className="controlInfo">
                    <article className="article">
                        <p className="tip" >Passe a imagem para o lado para conhecer o projeto?</p>
                        <h1 className="detailItem">Como utilizar?</h1>
                        {indexSwiper === 0 && (
                            <p className={`description0`}>{message?.descricao}</p>
                        )}
                        {indexSwiper === 1 && (
                            <p className={`description1`}>{message?.descricao}</p>
                        )}
                        {indexSwiper === 2 && (
                            <p className={`description2`}>{message?.descricao}</p>
                        )}
                        {indexSwiper === 3 && (
                            <p className={`description3`}>{message?.descricao}</p>
                        )}




                    </article>



                    <div className="divButtons">

                        <button onClick={returnPage}>
                            Voltar
                        </button>



                        <Link href={`${deploy}`}>
                            <button >
                                Acessar
                            </button>
                        </Link>

                    </div>
                </section>
            </main>
        </Container>
    )
}
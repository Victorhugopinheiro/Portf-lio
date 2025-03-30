import { useLayoutEffect } from "react"

import "./footer.css"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { Github, Linkedin } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"


export function Footer() {

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(".contentFooter", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".contentFooter",
                //markers: true,
                start: "top 880px",
                end: "bottom 950px",
                scrub: true

            }

        })

    }, [])

    return (
        <footer className="footer">
            <div className="contentFooter">
                <h3 className="contatos">Contatos</h3>
                <div className="control ">
                    <div className="links">
                        <a className="linkedin" href={`https://www.linkedin.com/in/victor-hugo-pinheiro-lima/`}> <Linkedin size={18} /> Linkedin</a>
                        <a className="github" href={`https://github.com/Victorhugopinheiro`}> <Github size={18} /> GitHub</a>
                        <a className="whatsapp" href={`https://wa.me/11986767170?text=Olá gostei do seu projeto`}> <FaWhatsapp size={18} /> Contato via WhatsApp</a>
                    </div>


                </div>



            </div>
        </footer>
    )
}
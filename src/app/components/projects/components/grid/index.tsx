import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import "./grid.css"

interface PropsItem {
    item: string
    rota: string
    src: string | StaticImageData
    titlle: string
    description: string
}


export function Grid({ item, src, rota, titlle, description }: PropsItem) {
    return (
        <div >
            <div className="containerItemProject" id={item}>
                <Link href={`/${rota}`}>

                    <div className="controlImg">

                        <Image priority={true} quality={100} sizes="50vw" fill={true} alt="Imagem do projeto" src={src} />

                    </div>
                    <div className="borderText">
                        <h2>{titlle}</h2>
                        <p className="myText">{description} </p>


                        <div className="buttonAcessDiv">
                            <button className="buttonAcess">Acessar</button>
                        </div>


                    </div>


                </Link>


            </div>
        </div>
    )
}
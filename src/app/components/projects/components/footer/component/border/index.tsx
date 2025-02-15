import { ReactNode } from "react"
import "./border.css"


export function Border({children}:{children:ReactNode}){
    return(
        <div className="border">
            {children}
        </div>
    )
}
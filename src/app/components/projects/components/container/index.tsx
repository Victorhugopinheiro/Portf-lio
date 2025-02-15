import { ReactNode } from "react";
import "./container.css"



export function Container ({children}:{children:ReactNode}){
    return(
        <div className="containerControlAll">
            {children}
        </div>
    )
}
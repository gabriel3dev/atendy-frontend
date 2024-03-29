import {useState} from "react"
import { OvalCard } from "../OvalCard/OvalCard"
type props = {
    icone?:React.ReactNode,
    label:string,
    labelLeft?:string
}
export const LineOvalCard = ({...rest }:props) => {

    return (
        <div className="
                w-full 
                flex 
                justify-between 
                items-center 
                bg-gray-100 
                rounded-[28px] 
                p-2 
                mt-4 
                py-3 
                px-4
            "
        > 
            <div className="flex items-center gap-8">
                { rest.icone && <OvalCard selected={false} icone={rest.icone} size="12"/> }
                <span className="font-semibold text-sm">{ rest.label }</span>
            </div>
            <span className="text-gray-700 text-sm">{ rest.labelLeft }</span>
        </div>
    )
}